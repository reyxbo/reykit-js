/**
 * @Time    : 2026-06-01
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Image methods.
 */
/**
 * Generate QRCode URL.
 *
 * @param text - QRCode Text.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export declare function getQrcode(text: string, options?: {
    width?: number;
    margin?: number;
}): Promise<string>;
/**
 * Generate QRCode URL and browser open file.
 *
 * @param text - QRCode Text.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export declare function openQrcode(text: string, options?: {
    width?: number;
    margin?: number;
}): Promise<string>;
/**
 * Generate QRCode URL and browser download file.
 *
 * @param text - QR code Text.
 * @param options.fileName - File name.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export declare function downloadQrcode(text: string, options?: {
    fileName?: string;
    width?: number;
    margin?: number;
}): Promise<string>;
/**
 * Generate QRCode URL and set to element `src` attribute.
 *
 * @param text - QRCode Text.
 * @param element - Element instance or id.
 * @param options.width - Width of Minimum pixel.
 * @param options.margin - Number of margin blank square.
 * @returns QR code URL.
 */
export declare function setQrcode(text: string, element: HTMLElement | string, options?: {
    width?: number;
    margin?: number;
}): Promise<string>;
