/**
 * @Time    : 2026-06-01
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Image methods.
 */

import QRCode from 'qrcode'

import { openFile, downloadFile } from './window'

/**
 * Generate and browser open QR code file.
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
 * @param text - QR code Text.
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
 * Generate QRCode URL and set to element `src` attribute.
 * 
 * @param text - QRCode Text.
 * @param element - Element instance or id.
 *     - `undefined` : Not set.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export async function getQrcodeUrl(
    text: string,
    element?: HTMLElement  | string,
    options?: {
        width?: number,
        margin?: number
    }
) {

    // Parameter.
    const width = options && options.width
    const margin = (options && options.margin) ?? 0

    // Generate.
    const url = await QRCode.toDataURL(text, { width, margin: margin })

    // Set.
    if (element !== undefined) {
        if (typeof element === 'string') {
            const searchElement = document.getElementById(element)
            if (!searchElement) throw new Error('element id not exists')
            element = searchElement
        }
        element.setAttribute('src', url)
    }

    return url
}
