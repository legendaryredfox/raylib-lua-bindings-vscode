# AGENTS.md: Raylib Lua Bindings Autocomplete (VS Code extension)

IntelliSense for [raylib-lua-bindings](https://github.com/legendaryredfox/raylib-lua-bindings) (Raylib 6.2 in Lua 5.5.1): completion, hover, signature help, inlay hints, and migration diagnostics for every function and constant the binding exposes. TypeScript; publisher `LegendaryRedfox`. Version and function count live in `package.json` / `src/completionItems.ts`.

## Layout

- `src/extension.ts`: `activate()` reads `raylib-lua.namespace` (default `"raylib"`), builds items once via `getCompletionItems(vscode, namespace)`, registers providers for `{ language: "lua", scheme: "file" }`, and re-registers them on `onDidChangeConfiguration`.
- `src/completionItems.ts`: the data. `fns: Entry[]` with `[name, detail, snippet?]`; snippet only for functions with arguments. Snippet prefixes are rewritten to the configured namespace (`.replace(/^[A-Za-z_]\w*\./, ...)`); no-snippet entries insert `${namespace}.Name()`. `getRaylibFunctions()` feeds all providers; `renderDocumentation()` renders docs for completion, hover, and signature help.
- `src/constants.ts`: GENERATED (`[name, group, value]`) by `scripts/sync.mjs`; never hand-edit. `getRaylibConstants()` / `getConstantCompletionItems()` in `completionItems.ts` consume it.
- `src/calls.ts`: `scanCalls()` finds `ns.Name(...)` calls (skips comments/strings, parses top-level args); used by inlay hints and diagnostics.
- `src/deprecations.ts`: functions renamed/changed in raylib 6.2 (`deprecated` = struck through + quick fix when `replacement` is set; `note` = hint).
- `scripts/sync.mjs`: compares the extension with the live `require("raylib")` module and `raylib.h`/`raymath.h`/`rlgl.h`.
- `src/test/extension.test.ts`, `src/test/features.test.ts`, `assets/icon.png`, `package.json` (`activationEvents: ["onLanguage:lua"]`, required because providers register in `activate()`), `tsconfig.json` (ES2022, Node16, strict), `eslint.config.mjs` (flat config, must stay at root), `.vscode/` (launch, build task), `.vscodeignore`, `yarn.lock`.

## Providers

- Completion: trigger `.`, returns items only when the line prefix ends with `${namespace}.`.
- Hover: description, signature, parameter list on `${namespace}.*` calls.
- Signature help: triggers `(` and `,`; tracks the active argument across nested calls via `findEnclosingCall()`; suppressed for argument-less functions.
- Constants: offered in completion after `${namespace}.` and shown on hover (enum group and value).
- Inlay hints (`raylib-lua.inlayHints`): parameter names before arguments, skipped when the argument already has that name.
- Diagnostics + code actions (`raylib-lua.diagnostics`): source `raylib-lua`; a diagnostic `code` of `replace:<Name>` drives the "Replace with" quick fix.

## Commands

```bash
yarn install    # Node >= 18, Yarn classic 1.x
yarn compile    # tsc -> out/
yarn watch
yarn lint
yarn test       # compile + lint + vscode-test (opens windows: run under `xvfb-run -a`)
yarn sync:check # drift vs the built bindings; `yarn sync` writes
npx @vscode/vsce package   # .vsix
```

F5 runs the Extension Development Host.

## Design rules

- Items are built once at activation, not per keystroke.
- One data array is the single source of truth; adding a function is one line. Don't reintroduce static `snippets/lua.json` (it ignored the namespace setting).
- Purely syntactic: no language server.

## Tasks

- Add a function: one `fns` entry (`["Name", "Description."]` or with `"raylib.Name(${1:a}, ${2:b})"`), then `yarn compile` and F5.
- Sync with a new binding version: build `../raylib-lua-bindings` (`make`), run `yarn sync:check`, then `yarn sync`. It appends missing functions (detail and parameter names from the headers) and regenerates `src/constants.ts`. Existing entries are never touched, so hand-check any whose Lua signature differs from the C header (add an `OVERRIDES` entry in `scripts/sync.mjs` for new ones). Then fix the counts in `src/test/extension.test.ts` and `README.md`, bump `package.json`, update `CHANGELOG.md`.
- Limitation: parameters have names only (no types/descriptions in the binding data).
