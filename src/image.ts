/**
 * @Time    : 2026-06-01
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Image methods.
 */

import QRCode from 'qrcode'

import { openFile, downloadFile } from './window'

/**
 * Generate and browser open qrcode file.
 * 
 * @param text - QRCode Text.
 */
export async function openQrcode(text: string) {

    // Download.
    const url = await QRCode.toDataURL(text)
    const response = await fetch(url)
    const blob = await response.blob()
    openFile(blob)
}

/**
 * Generate and browser download qrcode file.
 * 
 * @param text - QRCode Text.
 * @param fileName - File name.
 */
export async function downloadQrcode(text: string, fileName: string = 'qrcode.png') {

    // Download.
    const url = await QRCode.toDataURL(text)
    const response = await fetch(url)
    const blob = await response.blob()
    downloadFile(blob, fileName)
}

/**
 * Set qrcode URL to element `src` attribute.
 * 
 * @param text - QRCode Text.
 * @param element - Element instance or id.
 */
export async function setElementQrcode(text: string, element: HTMLElement  | string) {

    // Parameter.
    if (typeof element === 'string') {
        const searchElement = document.getElementById(element)
        if (!searchElement) throw new Error('element id not exists')
        element = searchElement
    }
    if (!element.hasAttribute('src')) throw new Error('element not has "src" attribute')

    // Download.
    const url = await QRCode.toDataURL(text)
    element.setAttribute('src', url)
}
