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

    Clone the repository.
    Run:

    yarn install
    yarn build
    yarn package

    Install the .vsix file in VS Code for testing.

🔄 Changelog

    v0.0.1: Initial release with autocomplete for Raylib Lua bindings.

⚖️ License

This extension is released under the MIT License. See LICENSE for details.
🛠️ Contributions

Contributions are welcome! If you'd like to add new features or report bugs, feel free to open an issue or submit a pull request.


---

### **LICENSE**

Here is an **MIT License** for your extension, which makes it **free for everyone** to use, modify, and distribute.

---

MIT License

Copyright (c) 2024 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


---

### **Steps to Add README.md and LICENSE**
1. **Create a README.md file** in the root of your project and paste the content from above.
2. **Create a LICENSE file** in the root of your project and paste the content from above.
3. **Run the packaging command again**:
   ```bash
   yarn package
   ```
