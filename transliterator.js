/**
 * Arabic Transliterator
 * Converts Latin/romanized text to Arabic script
 * Supports both formal transliteration and Franco-Arabic (Arabizi)
 */

// Transliteration mapping - order matters!
// Process longer patterns first to avoid conflicts
const transliterationMap = {
    // Franco-Arabic / Arabizi numbers (must come first)
    '2': 'ء',  // hamza
    '3': 'ع',  // 'ayn
    '5': 'خ',  // kha
    '6': 'ط',  // ta (emphatic)
    '7': 'ح',  // ha (breathy)
    '8': 'غ',  // ghayn
    '9': 'ق',  // qaf

    // Special digraphs and trigraphs (must come before single letters)
    'kh': 'خ',
    'gh': 'غ',
    'sh': 'ش',
    'th': 'ث',
    'dh': 'ذ',
    'ch': 'ش',

    // Emphatic consonants
    'dD': 'ض',
    'tT': 'ط',
    'zZ': 'ظ',
    'sS': 'ص',

    // Hamza variations
    "'a": 'أ',
    "'i": 'إ',
    "'u": 'ؤ',
    "'": 'ء',

    // Long vowels
    'aa': 'ا',
    'uu': 'و',
    'ii': 'ی',
    'ee': 'ی',
    'oo': 'و',
    'ou': 'و',
    'ow': 'و',
    'ay': 'ای',
    'ai': 'ای',
    'ey': 'ی',

    // Consonants
    'a': 'ا',
    'b': 'ب',
    't': 'ت',
    'j': 'ج',
    'H': 'ح',  // uppercase H for emphatic
    'd': 'د',
    'r': 'ر',
    'z': 'ز',
    's': 'س',
    'S': 'ص',  // emphatic S
    'D': 'ض',  // emphatic D
    'T': 'ط',  // emphatic T
    'Z': 'ظ',  // emphatic Z
    'f': 'ف',
    'q': 'ق',
    'k': 'ك',
    'l': 'ل',
    'm': 'م',
    'n': 'ن',
    'h': 'ح',
    'w': 'و',
    'y': 'ی',
    'g': 'غ',
    'p': 'پ',  // Persian/Urdu
    'v': 'ڤ',  // Used in some dialects

    // Short vowels (tashkeel)
    'i': 'ی',
    'u': 'و',
    'e': 'ی',
    'o': 'و',
};

// Alternative mapping for al- (the definite article)
const articleMap = {
    'al-': 'ال-',
    'al ': 'ال ',
    'el-': 'ال-',
    'el ': 'ال ',
};

/**
 * Main transliteration function
 * @param {string} latinText - Input text in Latin characters
 * @returns {string} - Output text in Arabic script
 */
function transliterate(latinText) {
    if (!latinText) return '';

    let result = latinText.toLowerCase();

    // First, handle the definite article "al-"
    for (const [latin, arabic] of Object.entries(articleMap)) {
        result = result.replace(new RegExp(latin, 'gi'), arabic);
    }

    // Sort keys by length (longest first) to handle multi-character sequences
    const sortedKeys = Object.keys(transliterationMap).sort((a, b) => b.length - a.length);

    // Apply transliteration for each mapping
    for (const key of sortedKeys) {
        const arabic = transliterationMap[key];
        // Use global case-insensitive replacement
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        result = result.replace(regex, arabic);
    }

    return result;
}

/**
 * Real-time transliteration as user types
 */
function updateTransliteration() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    if (input && output) {
        output.value = transliterate(input.value);
    }
}

/**
 * Clear both input and output
 */
function clearText() {
    const input = document.getElementById('input');
    const output = document.getElementById('output');

    if (input) input.value = '';
    if (output) output.value = '';

    if (input) input.focus();
}

/**
 * Copy output text to clipboard
 */
function copyOutput() {
    const output = document.getElementById('output');

    if (output && output.value) {
        output.select();
        document.execCommand('copy');

        // Visual feedback
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = '✓ Copied!';
        btn.style.background = '#059669';

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
        }, 2000);
    }
}

/**
 * Initialize the application
 */
function init() {
    const input = document.getElementById('input');

    if (input) {
        // Add event listener for real-time transliteration
        input.addEventListener('input', updateTransliteration);

        // Focus on input field
        input.focus();
    }
}

// Run initialization when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential use as a module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { transliterate };
}
