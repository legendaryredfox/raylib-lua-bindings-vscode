# Change Log

All notable changes to the "raylib-lua-bindings-autocomplete" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

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
- **Parameter snippets** expanded from 112 to **235** functions with named tab stops.
- `snippets/lua.json` synced to the same 606 functions as the completion provider.

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
