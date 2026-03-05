/**
 * Send request.
 *
 * @param url - Request URL.
 * @param option - Request option.
 * @param option.params - Request URL add parameters.
 * @param option.body - Request body data.
 *     - `URLSearchParams` : Form data. Automatic set `Content-Type` to `application/x-www-form-urlencoded`.
 *     - `FormData` : Multi form data. Automatic set `Content-Type` to `multipart/form-data`.
 *     - `File` : `file` item of multi form data. When no attribute `type`, then automatic set `Content-Type` to `multipart/form-data`.
 *     - `Blob` : Bytes data. When no attribute `type`, then automatic set `Content-Type` to `application/octet-stream`.
 *     - `Record<string, any> | string` : JSON data. Automatic set `Content-Type` to `application/json`.
 * @param option.headers - Request header data.
 * @param option.method - Request method.
 *     - `undefined` : Automatic judge. When parameter `data` not has value, then is `get`, otherwise is `post`.
 */
export default function request(url: string, { params, body, headers, method }: {
    params?: Record<string, string | number | boolean>;
    body?: URLSearchParams | File | FormData | Blob | Record<string, any> | string;
    headers?: Record<string, string | number | boolean>;
    method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head';
}): Promise<Response>;
