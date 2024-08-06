const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


    function decode(expr) {
        let result = '';
        let tempResult;
        for (let i = 0; i < expr.length; i += 10) {
            tempResult = '';
            for (let j = 0; j < 10; j = j + 2) {
                if (expr[i + j] === '*') { result += ' '; break; }
                if (expr[i + j] === '0') { continue; } else { tempResult += (expr[i + j] + expr[i + j + 1]) === '10' ? '.' : '-';}
            }
            for (key in MORSE_TABLE) {if (key === tempResult) { result += MORSE_TABLE[key] } }
        }
        return result;
    }

module.exports = {
    decode
}
