/**
 * @Time    : 2026-08-05
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Text processing module.
 */
export { whitespace, asciiLowercase, asciiUppercase, asciiLetters, digits, hexdigits, octdigits, punctuation, printable };
declare const whitespace = " \t\n\r\v\f";
declare const asciiLowercase = "abcdefghijklmnopqrstuvwxyz";
declare const asciiUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
declare const asciiLetters: string;
declare const digits = "0123456789";
declare const hexdigits: string;
declare const octdigits = "01234567";
declare const punctuation = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
declare const printable: string;
