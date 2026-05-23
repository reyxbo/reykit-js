/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Network methods.
 */
/**
 * Send request.
 *
 * @param url - Request URL.
 * @param option - Request option.
 * @param option.params - Request URL add parameters.
 * @param option.body - Request body data.
 *     - `URLSearchParams` : Form data. Automatic set `Content-Type` to `application/x-www-form-urlencoded`.
 *     - `FormData` : Multi form data. Automatic set `Content-Type` to `multipart/form-data`.
 *     - `File` : `file` item of multi form data. Automatic set `Content-Type` to attribute `type` value.
 *     - `Blob` : Bytes data. Automatic set `Content-Type` to attribute `type` value.
 *     - `Record<string, any> | string` : JSON data. Automatic set `Content-Type` to `application/json`.
 * @param option.headers - Request header data.
 * @param option.method - Request method.
 *     - `undefined` : Automatic judge. When parameter `data` not has value, then is `get`, otherwise is `post`.
 * @param option.check - Whether to throw an error if the response is not in the 200–299 range.
 *     Note: `Error.message` is response body string, `Error.cause` is `Response` instance.
 *     - `undefined` : False.
 */
export declare function request(url: string, option?: {
    params?: Record<string, string | number | boolean>;
    body?: URLSearchParams | File | FormData | Blob | Record<string, any> | string;
    headers?: Record<string, string | number | boolean>;
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head';
    check?: boolean;
}): Promise<Response>;
