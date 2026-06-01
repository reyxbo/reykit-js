/**
 * @Time    : 2026-06-01
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Image methods.
 */
/**
 * Browser download qrcode file from text.
 *
 * @param text - QRCode Text.
 * @param fileName - File name.
 */
export declare function downloadQrcode(text: string, fileName?: string): Promise<void>;
/**
 * Set qrcode URL to element `src` attribute.
 *
 * @param text - QRCode Text.
 * @param element - Element instance or id.
 */
export declare function setElementQrcode(text: string, element: HTMLElement | string): Promise<void>;
