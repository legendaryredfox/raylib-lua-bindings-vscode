# Raylib Lua Bindings Autocomplete

Autocomplete for [raylib-lua-bindings](https://github.com/legendaryredfox/raylib-lua-bindings) — a C library that embeds Raylib into Lua 5.4.

This extension provides IntelliSense for all 464 exposed functions: autocomplete suggestions, tab-stop parameter snippets, and inline documentation — triggered automatically when you type `raylib.` in any `.lua` file.

## Features

- **464 functions** covering the full raylib-lua-bindings API: window/input, drawing, shapes, text, textures, audio, 3D models, and more
- **Parameter snippets** for 112 common functions with named tab stops (e.g. `raylib.InitWindow(width, height, title)`)
- **Inline documentation** — hover or select a completion to see a description
- **Smart trigger** — completions appear only after `raylib.`, not on every keystroke

## Installation

1. Download the `.vsix` file from the latest release.
2. Open VS Code.
3. Press `Ctrl+Shift+P` → **Install from VSIX** → select the file.
4. Reload VS Code.

## Usage

Open any `.lua` file and type `raylib.` — the completion list appears automatically.

```lua
raylib.InitWindow(800, 600, "My Game")
raylib.SetTargetFPS(60)

while not raylib.WindowShouldClose() do
    raylib.BeginDrawing()
    raylib.ClearBackground(raylib.RAYWHITE)
    raylib.DrawText("Hello, world!", 190, 200, 20, raylib.DARKGRAY)
    raylib.EndDrawing()
end

raylib.CloseWindow()
```

## Development

```bash
git clone https://github.com/legendaryredfox/raylib-lua-bindings-vscode
cd raylib-lua-bindings-vscode
yarn install
yarn compile     # one-shot build
yarn watch       # incremental watch
yarn package     # produce .vsix
```

Press **F5** in VS Code to open an Extension Development Host for live testing.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a full history of changes.

## License

MIT — see [LICENSE](LICENSE) for details.

## Contributing

Issues and pull requests are welcome. To add a new function, add a single entry to the `fns` array in `src/completionItems.ts`.
