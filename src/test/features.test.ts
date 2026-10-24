import * as assert from 'assert';
import * as vscode from 'vscode';
import { scanCalls } from '../calls';
import { getConstantCompletionItems, getRaylibConstants } from '../completionItems';

const EXT_ID = 'LegendaryRedfox.raylib-lua-bindings-autocomplete';

// ---------------------------------------------------------------------------
// Unit tests — call scanner (pure)
// ---------------------------------------------------------------------------
suite('unit: scanCalls', () => {
	test('finds calls and top-level arguments', () => {
		const text = 'raylib.DrawRectangle(10, 20, f(a, b), {x = 1, y = 2}, raylib.RED)';
		const calls = scanCalls(text, 'raylib');
		assert.strictEqual(calls.length, 1);
		assert.strictEqual(calls[0].name, 'DrawRectangle');
		assert.deepStrictEqual(
			calls[0].args.map(a => text.slice(a.start, a.end)),
			['10', '20', 'f(a, b)', '{x = 1, y = 2}', 'raylib.RED']
		);
		assert.strictEqual(calls[0].closed, true);
	});

	test('reports nested raylib calls separately', () => {
		const calls = scanCalls('raylib.DrawText(raylib.TextFormat("%d", 1), 0, 0, 10, c)', 'raylib');
		assert.deepStrictEqual(calls.map(c => c.name), ['DrawText', 'TextFormat']);
	});

	test('ignores comments and strings', () => {
		const text = [
			'-- raylib.InitWindow(1, 2, "x")',
			'--[[ raylib.CloseWindow() ]]',
			'local s = "raylib.BeginDrawing()"',
			"local t = 'raylib.EndDrawing()'",
			'local u = [[raylib.ClearBackground(c)]]',
			'raylib.DrawFPS(1, 2)',
		].join('\n');
		assert.deepStrictEqual(scanCalls(text, 'raylib').map(c => c.name), ['DrawFPS']);
	});

	test('does not match other namespaces or longer identifiers', () => {
		const calls = scanCalls('myraylib.A(1) other.raylib.B(2) raylibs.C(3) raylib.D(4)', 'raylib');
		assert.deepStrictEqual(calls.map(c => c.name), ['D']);
	});

	test('handles multi-line and unfinished calls', () => {
		const calls = scanCalls('raylib.DrawLine(\n  1,\n  2', 'raylib');
		assert.strictEqual(calls.length, 1);
		assert.strictEqual(calls[0].closed, false);
		assert.strictEqual(calls[0].args.length, 2);
	});

	test('supports a custom namespace', () => {
		assert.deepStrictEqual(scanCalls('rl.InitWindow(1, 2, "t")', 'rl').map(c => c.name), ['InitWindow']);
	});
});

// ---------------------------------------------------------------------------
// Unit tests — constants
// ---------------------------------------------------------------------------
suite('unit: constants', () => {
	test('resolves enum constants with their values', () => {
		const byName = new Map(getRaylibConstants('raylib').map(c => [c.name, c]));
		assert.strictEqual(byName.get('KEY_A')?.value, 65);
		assert.strictEqual(byName.get('KEY_A')?.group, 'KeyboardKey');
		assert.strictEqual(byName.get('FLAG_VSYNC_HINT')?.value, 64);
		assert.strictEqual(byName.get('RAYLIB_VERSION')?.group, 'Version');
		assert.ok(byName.has('RED'), 'named colors are included');
		assert.ok(getRaylibConstants('raylib').length > 300);
	});

	test('completion items are Constants prefixed with the namespace', () => {
		const items = getConstantCompletionItems(vscode, 'rl');
		const key = items.find(i => i.label === 'rl.KEY_A');
		assert.ok(key);
		assert.strictEqual(key!.kind, vscode.CompletionItemKind.Constant);
		assert.strictEqual(key!.insertText, 'rl.KEY_A');
	});

	test('constant labels are unique', () => {
		const labels = getRaylibConstants('raylib').map(c => c.name);
		assert.strictEqual(new Set(labels).size, labels.length);
	});
});

// ---------------------------------------------------------------------------
// End-to-end tests — constants, diagnostics, quick fixes and inlay hints
// ---------------------------------------------------------------------------
suite('e2e: constants, diagnostics, quick fixes, inlay hints', () => {
	suiteSetup(async () => {
		await vscode.extensions.getExtension(EXT_ID)!.activate();
	});

	async function openLua(content: string): Promise<vscode.TextDocument> {
		const doc = await vscode.workspace.openTextDocument({ language: 'lua', content });
		await vscode.window.showTextDocument(doc);
		return doc;
	}

	async function waitFor<T>(fn: () => T | undefined, ms = 3000): Promise<T> {
		const end = Date.now() + ms;
		for (;;) {
			const v = fn();
			if (v !== undefined) {
				return v;
			}
			if (Date.now() > end) {
				throw new Error('timed out');
			}
			await new Promise(r => setTimeout(r, 50));
		}
	}

	test('offers constants after "raylib."', async () => {
		const doc = await openLua('raylib.');
		const list = await vscode.commands.executeCommand<vscode.CompletionList>(
			'vscode.executeCompletionItemProvider', doc.uri, doc.positionAt(7), '.');
		const labels = list.items.map(i => i.label as string);
		assert.ok(labels.includes('raylib.KEY_A'));
		assert.ok(labels.includes('raylib.MOUSE_BUTTON_LEFT'));
		assert.ok(labels.includes('raylib.Vector2Add'), 'raymath functions are offered');
	});

	test('hover shows a constant value', async () => {
		const content = 'if raylib.IsKeyDown(raylib.KEY_A) then end';
		const doc = await openLua(content);
		const hovers = await vscode.commands.executeCommand<vscode.Hover[]>(
			'vscode.executeHoverProvider', doc.uri, doc.positionAt(content.indexOf('KEY_A') + 2));
		assert.ok(hovers.length > 0);
		const text = (hovers[0].contents[0] as vscode.MarkdownString).value;
		assert.ok(text.includes('KeyboardKey') && text.includes('65'));
	});

	test('flags renamed functions as deprecated and offers a quick fix', async () => {
		const content = 'local p = raylib.GetSplinePointBezierQuad(a, b, c, 0.5)';
		const doc = await openLua(content);
		const diags = await waitFor(() => {
			const d = vscode.languages.getDiagnostics(doc.uri);
			return d.length ? d : undefined;
		});
		assert.strictEqual(diags[0].severity, vscode.DiagnosticSeverity.Warning);
		assert.ok(diags[0].tags?.includes(vscode.DiagnosticTag.Deprecated));
		assert.ok(diags[0].message.includes('GetSplinePointBezierQuadratic'));

		const actions = await vscode.commands.executeCommand<vscode.CodeAction[]>(
			'vscode.executeCodeActionProvider', doc.uri, diags[0].range, vscode.CodeActionKind.QuickFix.value);
		const fix = actions.find(a => a.title === 'Replace with GetSplinePointBezierQuadratic');
		assert.ok(fix, 'quick fix is offered');
		await vscode.workspace.applyEdit(fix!.edit!);
		assert.ok(doc.getText().includes('raylib.GetSplinePointBezierQuadratic('));
	});

	test('notes behavior changes as hints', async () => {
		const doc = await openLua('raylib.DrawCapsule(a, b, 1, 8, 16, c)');
		const diags = await waitFor(() => {
			const d = vscode.languages.getDiagnostics(doc.uri);
			return d.length ? d : undefined;
		});
		assert.strictEqual(diags[0].severity, vscode.DiagnosticSeverity.Hint);
		assert.ok(diags[0].message.includes('rings, slices'));
	});

	test('does not flag current API', async () => {
		const doc = await openLua('raylib.DrawRectangle(1, 2, 3, 4, raylib.RED)');
		await new Promise(r => setTimeout(r, 300));
		assert.strictEqual(vscode.languages.getDiagnostics(doc.uri).length, 0);
	});

	test('can disable diagnostics', async () => {
		const config = vscode.workspace.getConfiguration('raylib-lua');
		await config.update('diagnostics', false, vscode.ConfigurationTarget.Global);
		try {
			const doc = await openLua('raylib.GetSplinePointBezierQuad(a, b, c, 0.5)');
			await new Promise(r => setTimeout(r, 400));
			assert.strictEqual(vscode.languages.getDiagnostics(doc.uri).length, 0);
		} finally {
			await config.update('diagnostics', undefined, vscode.ConfigurationTarget.Global);
		}
	});

	test('inlay hints show parameter names', async () => {
		const content = 'raylib.DrawRectangle(10, 20, w, h, raylib.RED)';
		const doc = await openLua(content);
		const hints = await vscode.commands.executeCommand<vscode.InlayHint[]>(
			'vscode.executeInlayHintProvider', doc.uri, new vscode.Range(0, 0, 0, content.length));
		const labels = hints.map(h => h.label as string);
		assert.deepStrictEqual(labels, ['posX:', 'posY:', 'width:', 'height:', 'color:']);
	});

	test('inlay hints skip arguments already named like the parameter', async () => {
		const content = 'raylib.InitWindow(width, 450, title)';
		const doc = await openLua(content);
		const hints = await vscode.commands.executeCommand<vscode.InlayHint[]>(
			'vscode.executeInlayHintProvider', doc.uri, new vscode.Range(0, 0, 0, content.length));
		assert.deepStrictEqual(hints.map(h => h.label), ['height:']);
	});

	test('inlay hints can be disabled', async () => {
		const config = vscode.workspace.getConfiguration('raylib-lua');
		await config.update('inlayHints', false, vscode.ConfigurationTarget.Global);
		try {
			const content = 'raylib.DrawRectangle(1, 2, 3, 4, raylib.RED)';
			const doc = await openLua(content);
			const hints = await vscode.commands.executeCommand<vscode.InlayHint[]>(
				'vscode.executeInlayHintProvider', doc.uri, new vscode.Range(0, 0, 0, content.length));
			assert.strictEqual(hints.length, 0);
		} finally {
			await config.update('inlayHints', undefined, vscode.ConfigurationTarget.Global);
		}
	});
});
