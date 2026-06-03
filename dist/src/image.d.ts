/**
 * @Time    : 2026-06-01
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Image methods.
 */
/**
 * Generate and browser open QR code file.
 *
 * @param text - QRCode Text.
 */
export declare function openQrcode(text: string): Promise<void>;
/**
 * Generate and browser download qrcode file.
 *
 * @param text - QR code Text.
 * @param fileName - File name.
 */
export declare function downloadQrcode(text: string, fileName?: string): Promise<void>;
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
export declare function generateElementQrcode(text: string, element?: HTMLElement | string, options?: {
    width?: number;
    margin?: number;
}): Promise<string>;
