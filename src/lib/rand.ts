/**
 * @Time    : 2026-08-05
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Random methods.
 */

import { digits, asciiLetters, punctuation } from './text'

/**
 * Generate random characters.
 * 
 * @param length - Character length.
 * @param style - Character style.
 * @returns Random characters.
 */
export function randChar(
    length: number = 32,
    style: 'd' | 'l' | 'p' | 'dl' | 'dp' | 'lp' | 'dlp' = 'dlp'
): string {

    // Parameter.
    let charRange: string
    switch (style) {
        case 'd':
            charRange = digits
            break
        case 'l':
            charRange = asciiLetters
            break
        case 'p':
            charRange = punctuation
            break
        case 'dl':
            charRange = digits + asciiLetters
            break
        case 'dp':
            charRange = digits + punctuation
            break
        case 'lp':
            charRange = asciiLetters + punctuation
            break
        case 'dlp':
            charRange = digits + asciiLetters + punctuation
            break
    }

    // Generate.
    const charList: string[] = []
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * charRange.length)
        charList.push(charRange[index])
    }
    const chars = charList.join('')

    return chars
}
