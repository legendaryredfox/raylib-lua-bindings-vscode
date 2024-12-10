# Raylib Lua Bindings Autocomplete

✨ **Autocomplete for Raylib Lua Bindings** ✨

This extension provides autocomplete, parameter hints, and function documentation for **Raylib Lua bindings**. It simplifies development by allowing you to type `raylib.` and instantly see suggestions for available functions.

## 🚀 **Features**

- **Autocomplete**: Get suggestions for all Raylib Lua functions.
- **Parameter Hints**: View function arguments and parameter names.
- **Documentation**: Hover over functions to see a description, parameter details, and example usage.

## 🛠️ **Installation**

1. **Download the .vsix file** from the release.
2. Open **Visual Studio Code**.
3. Press **Ctrl + Shift + P** (or **Cmd + Shift + P** on macOS) and select **Install from VSIX**.
4. Select the **.vsix file**.
5. **Reload VS Code**.

## ✍️ **Usage**

1. Open any **Lua file**.
2. Type `raylib.` and autocomplete suggestions will appear.
3. Select a function to see its parameters and documentation.

## 📚 **Example**

```lua
local sound = raylib.LoadSound("resources/jump.wav")
raylib.PlaySound(sound)
```

🧩 Commands

This extension does not provide commands — it runs automatically when a Lua file is detected.
🛠️ Development

If you'd like to contribute or modify this extension:

- Clone the repository.
- Run:
  ```bash
  yarn install
  yarn build
  yarn package
  ```
- Install the .vsix file in VS Code for testing.

🔄 Changelog

`v0.0.1: Initial release with autocomplete for Raylib Lua bindings.`  
`v0.0.11: Corrected some typos, naming and added icon.`

⚖️ License

This extension is released under the MIT License. See LICENSE for details.
🛠️ Contributions

Contributions are welcome! If you'd like to add new features or report bugs, feel free to open an issue or submit a pull request.

---
