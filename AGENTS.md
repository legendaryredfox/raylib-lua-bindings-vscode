# AGENTS.md — Raylib Lua Bindings Autocomplete (VS Code Extension)

## Project overview

A VS Code extension that provides IntelliSense for [raylib-lua-bindings](https://github.com/legendaryredfox/raylib-lua-bindings) — a C library that embeds Raylib 5.x into Lua 5.4. When a user opens a `.lua` file and types `raylib.`, the extension shows autocomplete suggestions, parameter snippets, and inline documentation for all **464** exposed Raylib API functions.

**Publisher:** LegendaryRedfox  
**Version:** 0.8.0  
**Language:** TypeScript (compiled to JS, loaded by VS Code Extension Host)

---

## Repository layout

```
.
├── src/
│   ├── extension.ts          # Extension entry point — registers the CompletionItemProvider
│   ├── completionItems.ts    # All 464 CompletionItem definitions (data-driven, ~37 KB)
│   └── test/
│       └── extension.test.ts # Minimal test suite (boilerplate only)
├── snippets/
│   └── lua.json              # VS Code snippet definitions (overlaps with completionItems)
├── assets/
│   └── icon.png              # Extension marketplace icon
├── package.json              # Extension manifest (name, version, activationEvents, contributes)
├── tsconfig.json             # TypeScript config (ES2022, Node16 modules, strict)
├── .vscode/
│   ├── launch.json           # "Run Extension" debug config
│   ├── tasks.json            # Default build task (tsc --watch)
│   └── settings.json         # Workspace settings
├── .vscodeignore             # Files excluded from the packaged .vsix
└── yarn.lock                 # Yarn lockfile
```

---

## How it works

### Activation

`package.json` sets `"activationEvents": []`, which means VS Code activates the extension lazily on first use. The `contributes.languages` block registers the extension as applicable to `.lua` files.

### Extension entry point (`src/extension.ts`)

`activate()` calls `getCompletionItems(vscode)` once at startup to build the item list, then registers a `CompletionItemProvider` for `{ language: "lua", scheme: "file" }` triggered by the `.` character. The provider checks that the line prefix ends with `"raylib."` before returning items — this avoids polluting unrelated Lua completions.

### Completion item data (`src/completionItems.ts`)

Contains all function definitions as a compact data array of tuples:

```typescript
type Entry = [name: string, detail: string, snippet?: string];
const fns: Entry[] = [
  ["InitWindow", "Initializes a window with specified width, height, and title.", "raylib.InitWindow(${1:width}, ${2:height}, ${3:title})"],
  ["CloseWindow", "Closes the current window..."],
  // ...464 entries total
];
```

The third element (snippet) is only present for the ~81 functions that have named parameter placeholders. Functions without it default to `raylib.FunctionName()`.

`getCompletionItems()` maps this array to `vscode.CompletionItem` objects with:
- `label` — `"raylib.FunctionName"`
- `kind` — `Function`
- `detail` — short description (shown in the completion list)
- `documentation` — `MarkdownString` with description and usage example
- `insertText` — `SnippetString` with tab-stop placeholders where available

### Snippets (`snippets/lua.json`)

Defines VS Code code snippets for the same functions. These are **independent of the completion provider** — they surface in the snippet picker (`Ctrl+Space` then filter by prefix) and support the same prefix/body/description pattern.

---

## API coverage (v0.5.0 — 464 functions)

| Category | Count | Notes |
|---|---|---|
| Window & input | ~70 | InitWindow, keyboard, mouse, clipboard, DPI, monitors |
| Drawing | ~30 | BeginDrawing, shapes, lines, splines, 3D primitives |
| Shapes | ~65 | Ellipses, circles, rectangles, triangles, splines, collision |
| Textures & images | ~80 | Load/draw/transform images and textures |
| Text & fonts | ~50 | Load fonts, draw text, text utilities, codepoints |
| Audio | ~45 | Sound, music, audio streams, processors |
| 3D models | ~40 | Load/draw/animate models, meshes, materials |
| Hashing | 4 | CRC32, MD5, SHA1, SHA256 |
| File system | 10 | Copy, move, rename, remove, count files |

---

## Build & develop

**Prerequisites:** Node.js ≥ 18, Yarn classic (1.x)

```bash
yarn install         # install dev dependencies
yarn compile         # one-shot tsc build → out/
yarn watch           # incremental tsc watch (used by the VS Code debug task)
yarn lint            # eslint src/
yarn test            # compile + run vscode-test suite
yarn package         # vsce package → produces .vsix
```

The debug config in `.vscode/launch.json` opens a new Extension Development Host window. Press **F5** in VS Code to launch it.

---

## Key design decisions

- **Completion items are pre-built at activation time**, not on each keystroke — the list is static and building 464 items once is cheaper than rebuilding repeatedly.
- **The provider checks for `raylib.` prefix** before returning items; VS Code's fuzzy-match then narrows the list further. The `.` trigger character is the primary gate.
- **Data-driven:** a single compact tuple array drives all 464 items. Adding a function means one line in the array. The documentation template is shared across all items.
- **No language server** — no LSP, no semantic analysis. Purely syntactic autocomplete.
- **`snippets/lua.json` and `completionItems.ts` overlap** — snippets are for the snippet picker; completionItems are for the inline completion popup.

---

## How to modify

### Adding a new function

Add one entry to the `fns` array in `src/completionItems.ts`:

```typescript
// No parameters:
["NewFunction", "Description of what it does."],

// With parameters:
["NewFunction", "Description of what it does.", "raylib.NewFunction(${1:param1}, ${2:param2})"],
```

Run `yarn compile` then press F5 to test.

### Syncing with a new raylib-lua-bindings version

1. Run `grep "^int lua_" ../raylib-lua-bindings/include/*.h` to get the current function list.
2. Compare against the names in `src/completionItems.ts`.
3. For new functions, look at their C implementation in `../raylib-lua-bindings/src/` to determine parameter names.
4. Add entries to `fns` in `src/completionItems.ts`.
5. Bump the version in `package.json` and update `CHANGELOG.md`.

### Changing the documentation format

Edit the MarkdownString template in `getCompletionItems()` inside `src/completionItems.ts`. All 464 items share the same template.

---

## Known limitations / TODO

- Parameter documentation is not structured — the `documentation` MarkdownString shows the function description but no detailed parameter table.
- No hover provider — hovering over `raylib.DrawCircle` in existing code shows nothing.
- No signature help provider — there is no parameter-hint popup while typing inside parentheses.
- Tests are boilerplate only (from the VS Code extension generator); no real coverage.
- `snippets/lua.json` may diverge from `completionItems.ts` as functions are added to one but not the other.
- `language-configuration.json` is referenced in `package.json` but does not exist in the repo.
