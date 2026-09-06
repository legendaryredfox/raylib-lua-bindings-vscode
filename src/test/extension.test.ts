import * as assert from 'assert';
import * as vscode from 'vscode';
import { getCompletionItems } from '../completionItems';

const EXT_ID = 'LegendaryRedfox.raylib-lua-bindings-autocomplete';

// ---------------------------------------------------------------------------
// Unit tests — exercise getCompletionItems() in isolation.
// ---------------------------------------------------------------------------
suite('unit: getCompletionItems', () => {
	test('returns the full raylib API surface', () => {
		const items = getCompletionItems(vscode, 'raylib');
		assert.strictEqual(items.length, 606);
	});

	test('labels are prefixed with the namespace and typed as functions', () => {
		const items = getCompletionItems(vscode, 'raylib');
		const initWindow = items.find(i => i.label === 'raylib.InitWindow');
		assert.ok(initWindow, 'InitWindow completion is present');
		assert.strictEqual(initWindow!.kind, vscode.CompletionItemKind.Function);
	});

	test('a custom namespace rewrites labels and snippets', () => {
		const items = getCompletionItems(vscode, 'rl');
		const initWindow = items.find(i => i.label === 'rl.InitWindow');
		assert.ok(initWindow, 'namespace applied to label');

		const insert = initWindow!.insertText as vscode.SnippetString;
		assert.ok(insert.value.startsWith('rl.InitWindow('), 'namespace applied to snippet prefix');
		assert.ok(!insert.value.includes('raylib.'), 'no leftover raylib prefix');
	});

	test('functions without parameters default to an empty call', () => {
		const items = getCompletionItems(vscode, 'raylib');
		const closeWindow = items.find(i => i.label === 'raylib.CloseWindow');
		assert.ok(closeWindow);
		const insert = closeWindow!.insertText as vscode.SnippetString;
		assert.strictEqual(insert.value, 'raylib.CloseWindow()');
	});

	test('parameter snippets carry named tab stops', () => {
		const items = getCompletionItems(vscode, 'raylib');
		const withTabStops = items.filter(i => {
			const insert = i.insertText as vscode.SnippetString;
			return /\$\{\d+:/.test(insert.value);
		});
		assert.strictEqual(withTabStops.length, 522);
	});

	test('tab-stop indices are sequential starting at 1', () => {
		const items = getCompletionItems(vscode, 'raylib');
		const drawText = items.find(i => i.label === 'raylib.DrawText');
		const insert = drawText!.insertText as vscode.SnippetString;
		const indices = [...insert.value.matchAll(/\$\{(\d+):/g)].map(m => Number(m[1]));
		assert.deepStrictEqual(indices, indices.map((_, n) => n + 1));
	});

	test('there are no duplicate completion labels', () => {
		const items = getCompletionItems(vscode, 'raylib');
		const labels = items.map(i => i.label as string);
		assert.strictEqual(new Set(labels).size, labels.length);
	});

	test('every completion has detail and documentation', () => {
		const items = getCompletionItems(vscode, 'raylib');
		for (const item of items) {
			assert.ok(item.detail, `${item.label} has detail`);
			assert.ok(item.documentation, `${item.label} has documentation`);
		}
	});
});

// ---------------------------------------------------------------------------
// Integration tests — the extension is loaded into the Extension Host.
// ---------------------------------------------------------------------------
suite('integration: extension host', () => {
	test('extension is present and activates', async () => {
		const ext = vscode.extensions.getExtension(EXT_ID);
		assert.ok(ext, 'extension is installed in the host');
		await ext!.activate();
		assert.strictEqual(ext!.isActive, true);
	});

	test('activation is wired to onLanguage:lua', () => {
		const ext = vscode.extensions.getExtension(EXT_ID);
		const events: string[] = ext!.packageJSON.activationEvents ?? [];
		assert.ok(events.includes('onLanguage:lua'), 'onLanguage:lua activation event declared');
	});
});

// ---------------------------------------------------------------------------
// End-to-end tests — drive the real completion provider through VS Code.
// ---------------------------------------------------------------------------
suite('e2e: completion provider', () => {
	async function completionsAt(content: string): Promise<vscode.CompletionList> {
		const doc = await vscode.workspace.openTextDocument({ language: 'lua', content });
		await vscode.window.showTextDocument(doc);
		const pos = doc.positionAt(content.length);
		return vscode.commands.executeCommand<vscode.CompletionList>(
			'vscode.executeCompletionItemProvider',
			doc.uri,
			pos,
			'.'
		);
	}

	suiteSetup(async () => {
		await vscode.extensions.getExtension(EXT_ID)!.activate();
	});

	test('suggests raylib functions right after the "raylib." prefix', async () => {
		const list = await completionsAt('raylib.');
		const labels = list.items.map(i => i.label as string);
		assert.ok(labels.includes('raylib.InitWindow'), 'InitWindow is offered');
		assert.ok(labels.includes('raylib.DrawText'), 'DrawText is offered');
	});

	test('does not suggest raylib functions without the prefix', async () => {
		const list = await completionsAt('local x = ');
		const ours = list.items.filter(i => (i.label as string).startsWith('raylib.'));
		assert.strictEqual(ours.length, 0, 'no raylib completions outside the namespace prefix');
	});

	test('respects the configured namespace at runtime', async () => {
		const config = vscode.workspace.getConfiguration('raylib-lua');
		await config.update('namespace', 'rl', vscode.ConfigurationTarget.Global);
		try {
			// give the onDidChangeConfiguration listener a tick to re-register.
			await new Promise(r => setTimeout(r, 200));
			const list = await completionsAt('rl.');
			const labels = list.items.map(i => i.label as string);
			assert.ok(labels.includes('rl.InitWindow'), 'custom namespace completions appear');
		} finally {
			await config.update('namespace', undefined, vscode.ConfigurationTarget.Global);
		}
	});
});
