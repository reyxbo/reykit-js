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
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 */
export async function setElementQrcode(
    text: string,
    element: HTMLElement  | string,
    {
        width,
        margin = 4
    }: {
        width?: number,
        margin?: number
    }
) {

    // Parameter.
    if (typeof element === 'string') {
        const searchElement = document.getElementById(element)
        if (!searchElement) throw new Error('element id not exists')
        element = searchElement
    }

    // Download.
    const url = await QRCode.toDataURL(text, { width, margin })
    element.setAttribute('src', url)
}
