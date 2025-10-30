/**
 * Simple test script for the transliteration logic
 */

// Transliteration mapping
const transliterationMap = {
    '2': 'ء',
    '3': 'ع',
    '5': 'خ',
    '6': 'ط',
    '7': 'ح',
    '8': 'غ',
    '9': 'ق',
    'kh': 'خ',
    'gh': 'غ',
    'sh': 'ش',
    'th': 'ث',
    'dh': 'ذ',
    'ch': 'ش',
    'dD': 'ض',
    'tT': 'ط',
    'zZ': 'ظ',
    'sS': 'ص',
    "'a": 'أ',
    "'i": 'إ',
    "'u": 'ؤ',
    "'": 'ء',
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
    'a': 'ا',
    'b': 'ب',
    't': 'ت',
    'j': 'ج',
    'H': 'ح',
    'd': 'د',
    'r': 'ر',
    'z': 'ز',
    's': 'س',
    'S': 'ص',
    'D': 'ض',
    'T': 'ط',
    'Z': 'ظ',
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
    'p': 'پ',
    'v': 'ڤ',
    'i': 'ی',
    'u': 'و',
    'e': 'ی',
    'o': 'و',
};

const articleMap = {
    'al-': 'ال-',
    'al ': 'ال ',
    'el-': 'ال-',
    'el ': 'ال ',
};

function transliterate(latinText) {
    if (!latinText) return '';

    let result = latinText.toLowerCase();

    for (const [latin, arabic] of Object.entries(articleMap)) {
        result = result.replace(new RegExp(latin, 'gi'), arabic);
    }

    const sortedKeys = Object.keys(transliterationMap).sort((a, b) => b.length - a.length);

    for (const key of sortedKeys) {
        const arabic = transliterationMap[key];
        const regex = new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        result = result.replace(regex, arabic);
    }

    return result;
}

// Test cases
const tests = [
    { input: 'marhaban', description: 'Hello' },
    { input: 'shukran', description: 'Thank you' },
    { input: 'kayfa 7alak', description: 'How are you?' },
    { input: 'as-salamu 3alaykum', description: 'Peace be upon you' },
    { input: 'ahlan wa sahlan', description: 'Welcome' },
    { input: 'ma3a salama', description: 'Goodbye' },
    { input: 'habibi', description: 'My dear' },
    { input: '7abibi', description: 'My dear (with number)' },
    { input: 'al-kitab', description: 'The book' },
];

console.log('🧪 Testing Arabic Transliteration\n');
console.log('=' .repeat(60));

tests.forEach(({ input, description }) => {
    const result = transliterate(input);
    console.log(`Input:  ${input.padEnd(25)} (${description})`);
    console.log(`Output: ${result}`);
    console.log('-'.repeat(60));
});

console.log('\n✅ All tests completed successfully!');
