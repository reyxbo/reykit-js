/**
 * @Time    : 2026-08-05
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Text processing module.
 */

export const whitespace = ' \t\n\r\v\f'
export const asciiLowercase = 'abcdefghijklmnopqrstuvwxyz'
export const asciiUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
export const asciiLetters = asciiLowercase + asciiUppercase
export const digits = '0123456789'
export const hexdigits = digits + 'abcdef' + 'ABCDEF'
export const octdigits = '01234567'
export const punctuation = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`
export const printable = digits + asciiLetters + punctuation + whitespace
