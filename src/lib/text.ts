/**
 * @Time    : 2026-08-05
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Text processing module.
 */

export {
    whitespace,
    asciiLowercase,
    asciiUppercase,
    asciiLetters,
    digits,
    hexdigits,
    octdigits,
    punctuation,
    printable
}

const whitespace = ' \t\n\r\v\f'
const asciiLowercase = 'abcdefghijklmnopqrstuvwxyz'
const asciiUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const asciiLetters = asciiLowercase + asciiUppercase
const digits = '0123456789'
const hexdigits = digits + 'abcdef' + 'ABCDEF'
const octdigits = '01234567'
const punctuation = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`
const printable = digits + asciiLetters + punctuation + whitespace
