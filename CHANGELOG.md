# Change Log

All notable changes to the "raylib-lua-bindings-autocomplete" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.11.0] - 2026-09-06

### Added

- **Hover provider** — hovering a `raylib.*` call in existing code now shows its
  description, usage signature, and parameter list. Previously hovering showed
  nothing.
- **Signature help** — a parameter-hint popup appears while typing inside a
  `raylib.*(` call, highlighting the argument being entered (tracked across
  nested calls and commas). Triggered by `(` and `,`.
- **Structured parameter documentation** — completion, hover, and signature-help
  docs now list each parameter by name.
- Tests for the structured API surface (`getRaylibFunctions`) and end-to-end
  coverage of the hover and signature-help providers.

### Changed

- `completionItems.ts` now exposes a single namespace-aware API builder
  (`getRaylibFunctions`) that the completion, hover, and signature-help providers
  all consume — one source of truth across every surface. All three providers
  re-register automatically when the `raylib-lua.namespace` setting changes.

## [0.10.0] - 2026-09-06

### Added

- **Parameter snippets expanded from 223 to 522 functions** — every function that takes
  arguments now inserts named tab stops. Parameter names are sourced from the
  raylib 6.x API definition and reconciled against the Lua binding's actual
  signatures (pointer+count arguments folded into Lua tables, output parameters
  dropped). The 84 remaining functions are argument-less and insert a plain call.
- **Test suite** — unit tests for `getCompletionItems`, integration tests for
  extension activation, and end-to-end tests that drive the real completion
  provider through VS Code.

### Fixed

- **Extension now activates** — added the `onLanguage:lua` activation event. The
  completion provider is registered programmatically in `activate()`; without an
  activation event it never ran, so the configurable namespace never took effect.
- **Autocomplete works in unsaved buffers** — the provider dropped the
  `scheme: "file"` restriction, so a brand-new untitled `.lua` document now gets
  completions.
- **Lint runs again** — `eslint.config.mjs` was in `src/` where ESLint v9 could
  not find it; moved to the repository root. This unblocks the `pretest` gate.
- **Empty/whitespace namespace** now falls back to `raylib` instead of matching
  every `.` keystroke.

### Removed

- **`snippets/lua.json`** — the static snippet file duplicated the completion
  provider's data and ignored the configurable namespace. The provider is now the
  single source of truth.
- Stale `compile.txt` build log (now git-ignored).

## [0.9.0] - 2026-05-31

### Added

- **Full raylib 6.0 API coverage** — the completion list now exposes **all 606** functions of raylib-lua-bindings (up from 464), matching the binding's complete coverage of `raylib.h`. **142 new functions** were added, including:
  - Render-state mode pairs: `BeginMode2D`/`BeginMode3D`/`BeginTextureMode`/`BeginShaderMode`/`BeginBlendMode`/`BeginScissorMode`/`BeginVrStereoMode` and their `End*` partners
  - Shaders: `LoadShader`, `LoadShaderFromMemory`, `GetShaderLocation`, `GetShaderLocationAttrib`, `SetShaderValue`, `SetShaderValueV`, `SetShaderValueMatrix`, `SetShaderValueTexture`, `IsShaderValid`, `UnloadShader`
  - Camera & coordinate transforms: `CreateCamera3D`, `UpdateCamera`, `UpdateCameraPro`, `GetCameraMatrix`, `GetCameraMatrix2D`, `GetWorldToScreen*`, `GetScreenToWorld*`
  - Input: gamepad, gesture and touch families plus `GetMouseDelta`, `GetMouseWheelMoveV`, `SetMouseCursor`, `SetExitKey`, `PollInputEvents`
  - Filesystem & paths: `LoadFileData`/`SaveFileData`, `LoadFileText`/`SaveFileText`, `FileExists`, `DirectoryExists`, `GetDirectoryPath`, `LoadDirectoryFiles`/`LoadDirectoryFilesEx`, drag-and-drop, and more
  - Data utilities: `CompressData`/`DecompressData`, `EncodeDataBase64`/`DecodeDataBase64`, `ExportDataAsCode`
  - Audio playback control: `PauseSound`, `ResumeSound`, `SetSoundPitch`, `SetSoundPan`
  - 3D/2D draw extras, window/system helpers, random sequences, and logging
  - VR (`LoadVrStereoConfig`, …) and automation events (`LoadAutomationEventList`, …)
  - Advanced: file/log `Set*Callback` hooks, `MemAlloc`/`MemRealloc`/`MemFree`, font-atlas internals (`LoadFontData`/`GenImageFontAtlas`/`UnloadFontData`)
- **Parameter snippets** expanded from 112 to **223** functions with named tab stops.

### Changed

- Documentation updated for **raylib 6.0** and **Lua 5.5** (previously referenced Raylib 5.x / Lua 5.4).

## [0.8.1] - 2026-05-28

### Added

- **Configurable namespace** (`raylib-lua.namespace` setting): change the trigger prefix from `raylib.` to any other value, such as `rl.` for users of the [tsnake41/raylib-lua](https://github.com/tsnake41/raylib-lua) binding. The setting can be changed at any time without reloading VS Code.

## [0.5.0] - 2026-05-26

### Added

- **33 new functions** from the updated raylib-lua-bindings library:
  - Input: `IsKeyPressed`, `IsKeyPressedRepeat`, `GetKeyPressed`, `GetCharPressed`, `GetKeyName`, `IsMouseButtonPressed`, `IsMouseButtonReleased`
  - Drawing: `DrawEllipseV`, `DrawEllipseLinesV`, `DrawLineDashed`
  - File system: `MakeDirectory`, `IsFileNameValid`, `FileCopy`, `FileMove`, `FileRemove`, `FileRename`, `FileTextFindIndex`, `FileTextReplace`, `GetDirectoryFileCount`, `GetDirectoryFileCountEx`
  - Hashing: `ComputeCRC32`, `ComputeMD5`, `ComputeSHA1`, `ComputeSHA256`
  - Text: `LoadTextLines`, `GetTextBetween`, `TextRemoveSpaces`, `TextReplaceAlloc`, `TextReplaceBetween`, `TextReplaceBetweenAlloc`, `TextInsertAlloc`, `MeasureTextCodepoints`
  - Models: `UpdateModelAnimationEx`
- Extension now only triggers completions when typing `raylib.` (avoids polluting unrelated Lua code)

### Changed

- **Code refactored** to a data-driven approach: `completionItems.ts` shrunk from ~273 KB (5700+ lines) to ~37 KB (480 lines) — same 464 functions, 87% smaller source
- Completion items are built from a compact tuple array instead of repetitive imperative blocks

## [0.0.11] - 2024

- Corrected some typos, naming, and added icon.

## [0.0.1] - 2024

- Initial release with autocomplete for Raylib Lua bindings.
