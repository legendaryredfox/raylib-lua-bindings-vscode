# AGENTS.md — Raylib Lua Bindings Autocomplete (VS Code Extension)

## Project overview

A VS Code extension that provides IntelliSense for [raylib-lua-bindings](https://github.com/legendaryredfox/raylib-lua-bindings) — a C library that embeds Raylib 6.0 into Lua 5.5. When a user opens a `.lua` file and types `raylib.`, the extension shows autocomplete suggestions, parameter snippets, and inline documentation for all **606** exposed Raylib API functions.

**Publisher:** LegendaryRedfox  
**Version:** 0.10.0  
**Language:** TypeScript (compiled to JS, loaded by VS Code Extension Host)

---

## Repository layout

```
.
├── src/
│   ├── extension.ts          # Extension entry point — registers the CompletionItemProvider
│   ├── completionItems.ts    # All 606 CompletionItem definitions (data-driven)
│   └── test/
│       └── extension.test.ts # Test suite covering getCompletionItems + namespace behavior
├── assets/
│   └── icon.png              # Extension marketplace icon
├── package.json              # Extension manifest (name, version, activationEvents, contributes)
├── tsconfig.json             # TypeScript config (ES2022, Node16 modules, strict)
├── eslint.config.mjs         # ESLint v9 flat config (must live at repo root)
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

`package.json` sets `"activationEvents": ["onLanguage:lua"]`, so VS Code activates the extension the first time a `.lua` file is opened. This is required: the completion provider is registered programmatically in `activate()`, so without an activation event it would never register.

### Extension entry point (`src/extension.ts`)

`activate()` reads the `raylib-lua.namespace` setting (default `"raylib"`), calls `getCompletionItems(vscode, namespace)` to build the item list, then registers a `CompletionItemProvider` for `{ language: "lua", scheme: "file" }` triggered by the `.` character. The provider checks that the line prefix ends with `"${namespace}."` before returning items — this avoids polluting unrelated Lua completions. A `onDidChangeConfiguration` listener re-registers the provider automatically when the setting changes.

### Completion item data (`src/completionItems.ts`)

Contains all function definitions as a compact data array of tuples:

```typescript
type Entry = [name: string, detail: string, snippet?: string];
const fns: Entry[] = [
  ["InitWindow", "Initializes a window with specified width, height, and title.", "raylib.InitWindow(${1:width}, ${2:height}, ${3:title})"],
  ["CloseWindow", "Closes the current window..."],
  // ...606 entries total
];
```

The third element (snippet) is only present for the 522 functions that have named parameter placeholders (every function that takes arguments; the other 84 are argument-less). Snippet strings in the data array use a literal prefix as written — `getCompletionItems()` rewrites it at build time via `.replace(/^[A-Za-z_]\w*\./, \`${namespace}.\`)`. Functions without a snippet default to `${namespace}.FunctionName()`.

`getCompletionItems(vscode, namespace)` maps this array to `vscode.CompletionItem` objects with:
- `label` — `"${namespace}.FunctionName"`
- `kind` — `Function`
- `detail` — short description (shown in the completion list)
- `documentation` — `MarkdownString` with description and a usage example (tab-stop syntax stripped to a readable signature)
- `insertText` — `SnippetString` with tab-stop placeholders where available

---

## API coverage (v0.9.0 — 606 functions)

Full coverage of raylib-lua-bindings: every function the binding exposes (all
public `RLAPI` functions in raylib 6.0's `raylib.h`) has a completion entry.
Counts below are approximate groupings.

| Category | Count | Notes |
|---|---|---|
| Window, system & input | ~100 | InitWindow, keyboard/mouse, gamepad, gesture, touch, clipboard, DPI, monitors |
| Drawing & render modes | ~45 | BeginDrawing, 2D/3D/texture/shader/blend/scissor mode pairs, shapes, splines |
| Shapes & collision | ~65 | Ellipses, circles, rectangles, triangles, splines, collision |
| Textures & images | ~80 | Load/draw/transform images and textures |
| Text & fonts | ~55 | Load fonts, draw text, text utilities, codepoints, font-atlas internals |
| Audio | ~50 | Sound, music, audio streams, processors, playback control |
| 3D models & camera | ~55 | Load/draw/animate models, meshes, materials, cameras, coordinate transforms |
| Shaders | 10 | Load, uniforms, attributes, sampler textures |
| Filesystem & data | ~35 | File/dir helpers, compression, base64, drag-and-drop, ExportDataAsCode |
| Hashing | 4 | CRC32, MD5, SHA1, SHA256 |
| VR & automation events | ~15 | Stereo config, event record/replay |

---

## Build & develop

**Prerequisites:** Node.js ≥ 18, Yarn classic (1.x)

```bash
yarn install         # install dev dependencies
yarn compile         # one-shot tsc build → out/
yarn watch           # incremental tsc watch (used by the VS Code debug task)
yarn lint            # eslint src/
yarn test            # compile + lint + run vscode-test suite
npx @vscode/vsce package   # produces .vsix
```

The debug config in `.vscode/launch.json` opens a new Extension Development Host window. Press **F5** in VS Code to launch it.

---

## Key design decisions

- **Completion items are pre-built at activation time**, not on each keystroke — the list is static and building 606 items once is cheaper than rebuilding repeatedly.
- **The provider checks for `${namespace}.` prefix** before returning items; VS Code's fuzzy-match then narrows the list further. The `.` trigger character is the primary gate.
- **Data-driven:** a single compact tuple array drives all 606 items. Adding a function means one line in the array. The documentation template is shared across all items.
- **No language server** — no LSP, no semantic analysis. Purely syntactic autocomplete.
- **Single source of truth** — the completion provider is the only completion surface. A previously shipped static `snippets/lua.json` duplicated the data and ignored the configurable namespace, so it was removed.

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

Edit the MarkdownString template in `getCompletionItems()` inside `src/completionItems.ts`. All 606 items share the same template.

---

## Known limitations / TODO

- Parameter documentation is not structured — the `documentation` MarkdownString shows the function description but no detailed parameter table.
- No hover provider — hovering over `raylib.DrawCircle` in existing code shows nothing.
- No signature help provider — there is no parameter-hint popup while typing inside parentheses.
- 84 of the 606 functions insert a plain `name()` — these are argument-less by nature, so no tab stops are needed.
