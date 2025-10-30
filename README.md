# 🌙 Arabic Transliterator

Automatically transliterate Latin characters to Arabic letters in a predictable way.

A simple, interactive web application that converts romanized Arabic text (both formal transliteration and Franco-Arabic/Arabizi) into proper Arabic script in real-time.

## ✨ Features

- **Real-time transliteration** as you type
- **Dual input support**:
  - Formal transliteration (e.g., `kh`, `sh`, `gh`)
  - Franco-Arabic/Arabizi numbers (e.g., `3` for ع, `7` for ح, `9` for ق)
- **Clean, responsive interface** that works on desktop and mobile
- **Copy to clipboard** functionality
- **No dependencies** - pure HTML/CSS/JavaScript

## 🚀 Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/AloiSama/arabic-transliterator.git
   cd arabic-transliterator
   ```

2. Open `index.html` in your web browser:
   ```bash
   open index.html
   # or
   firefox index.html
   # or just double-click the file
   ```

3. Start typing romanized Arabic text in the left box and see the Arabic output on the right!

## 📖 How to Use

### Franco-Arabic / Arabizi Numbers

Franco-Arabic (also called Arabizi or Arabish) uses numbers to represent Arabic letters that don't have Latin equivalents:

| Input | Output | Letter Name |
|-------|--------|-------------|
| `2` | ء | hamza |
| `3` | ع | 'ayn |
| `5` | خ | kha |
| `6` | ط | ta (emphatic) |
| `7` | ح | ha (breathy) |
| `8` | غ | ghayn |
| `9` | ق | qaf |

### Common Digraphs

| Input | Output | Description |
|-------|--------|-------------|
| `sh` | ش | sheen |
| `kh` | خ | kha |
| `gh` | غ | ghayn |
| `th` | ث | thaa |
| `dh` | ذ | dhaal |

### Long Vowels

| Input | Output |
|-------|--------|
| `aa` | ا |
| `ii` or `ee` | ی |
| `uu` or `oo` | و |

## 💡 Examples

Try typing these in the app:

| Input | Output | Meaning |
|-------|--------|---------|
| `marhaban` | مرحبا | Hello |
| `as-salamu 3alaykum` | اس-سلامو علیكوم | Peace be upon you |
| `shukran` | شكران | Thank you |
| `kayfa 7alak` | كیفا حالاك | How are you? |
| `ahlan wa sahlan` | احلان وا ساحلان | Welcome |
| `ma3a salama` | ماعا سالاما | Goodbye |

## 🛠️ Technical Details

### File Structure

```
arabic-transliterator/
├── index.html          # Main HTML interface
├── transliterator.js   # Transliteration logic
├── LICENSE            # GPLv3 License
└── README.md          # This file
```

### How It Works

The transliterator uses a character mapping system that:

1. **Processes longer patterns first** (e.g., `kh` before `k`) to avoid conflicts
2. **Handles special cases** like the definite article `al-` → `ال-`
3. **Supports both numbering systems** for maximum flexibility
4. **Updates in real-time** using JavaScript event listeners

### Using as a Module

The transliteration function can be imported and used in Node.js:

```javascript
const { transliterate } = require('./transliterator.js');

console.log(transliterate('marhaban'));  // Output: مرحبا
console.log(transliterate('7abibi'));    // Output: حابیبی
```

## 🎯 Use Cases

- **Learning Arabic**: Practice reading romanized text in Arabic script
- **Social Media**: Convert Franco-Arabic messages to proper Arabic
- **Data Processing**: Batch convert romanized Arabic data
- **Research**: Standardize transliterated Arabic text
- **Messaging**: Type Arabic without an Arabic keyboard

## ⚠️ Limitations

- This is a **phonetic transliteration** tool, not a translation service
- Arabic is context-sensitive; some words may need manual adjustment
- Short vowels (tashkeel) are not fully supported
- Sun letters (الشمسية) are not automatically handled
- Some dialectal variations may not be covered

## 📝 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Improve the transliteration mapping
- Add support for more dialects
- Enhance the UI/UX

## 🌟 Acknowledgments

Built to make Arabic text more accessible across different writing systems.
