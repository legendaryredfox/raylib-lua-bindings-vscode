# Raylib Lua Bindings Autocomplete

Autocomplete for [raylib-lua-bindings](https://github.com/legendaryredfox/raylib-lua-bindings) — a C library that embeds Raylib 6.0 into Lua 5.5.

This extension provides IntelliSense for all 606 exposed functions: autocomplete suggestions, tab-stop parameter snippets, and inline documentation — triggered automatically when you type `raylib.` (or your configured namespace) in any `.lua` file.

## Features

- **606 functions** — the complete raylib-lua-bindings API: window/system, keyboard/mouse/gamepad/gesture/touch input, drawing, render modes, shapes, text & fonts, textures, audio, 3D models & cameras, shaders, filesystem & data utilities, VR, and automation events
- **Parameter snippets** for 235 functions with named tab stops (e.g. `raylib.InitWindow(width, height, title)`)
- **Inline documentation** — hover or select a completion to see a description
- **Smart trigger** — completions appear only after the namespace prefix, not on every keystroke
- **Configurable namespace** — use `rl.` or any other prefix via the `raylib-lua.namespace` setting

## Installation

1. Download the `.vsix` file from the latest release.
2. Open VS Code.
3. Press `Ctrl+Shift+P` → **Install from VSIX** → select the file.
4. Reload VS Code.

## Configuration

| Setting | Default | Description |
|---|---|---|
| `raylib-lua.namespace` | `"raylib"` | Trigger prefix for autocomplete. Set to `"rl"` for [tsnake41/raylib-lua](https://github.com/tsnake41/raylib-lua) users. |

Change it in VS Code Settings (`Ctrl+,`) or in `settings.json`:

```json
{
  "raylib-lua.namespace": "rl"
}
```

The change takes effect immediately — no reload needed.

## Usage

Open any `.lua` file and type `raylib.` (or your configured namespace) — the completion list appears automatically.

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
