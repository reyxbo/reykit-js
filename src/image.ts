/**
 * @Time    : 2026-06-01
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Image methods.
 */

import QRCode from 'qrcode'

import { downloadFile } from './base'

/**
 * Browser download qrcode file from text.
 * 
 * @param text - QRCode Text.
 * @param fileName - File name.
 */
export async function downloadQrcode(text: string, fileName?: string) {

    // Download.
    const url = await QRCode.toDataURL(text)
    downloadFile(url, fileName)
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
