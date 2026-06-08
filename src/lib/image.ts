/**
 * @Time    : 2026-06-01
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Image methods.
 */

import QRCode from 'qrcode'

import { openFile, downloadFile } from '../lib/window'

/**
 * Generate QRCode URL.
 * 
 * @param text - QRCode Text.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export async function getQrcode(
    text: string,
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

    return url
}

/**
 * Generate QRCode URL and browser open file.
 * 
 * @param text - QRCode Text.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export async function openQrcode(
    text: string,
    options?: {
        width?: number,
        margin?: number
    }
) {

    // Generate.
    const url = await getQrcode(text, options)

    // Open.
    const response = await fetch(url)
    const blob = await response.blob()
    openFile(blob)

    return url
}

/**
 * Generate QRCode URL and browser download file.
 * 
 * @param text - QR code Text.
 * @param options.fileName - File name.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export async function downloadQrcode(
    text: string,
    options?: {
        fileName?: string,
        width?: number,
        margin?: number
    }
) {

    // Generate.
    const url = await getQrcode(text, options)

    // Download.
    const fileName = (options && options.fileName) ?? 'qrcode.png'
    const response = await fetch(url)
    const blob = await response.blob()
    downloadFile(blob, fileName)

    return url
}

/**
 * Generate QRCode URL and set to element `src` attribute.
 * 
 * @param text - QRCode Text.
 * @param element - Element instance or id.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export async function setQrcode(
    text: string,
    element: HTMLElement  | string,
    options?: {
        width?: number,
        margin?: number
    }
) {

    // Generate.
    const url = await getQrcode(text, options)

    // Set.
    if (typeof element === 'string') {
        const searchElement = document.getElementById(element)
        if (!searchElement) throw new Error('element id not exists')
        element = searchElement
    }
    element.setAttribute('src', url)

    return url
}
