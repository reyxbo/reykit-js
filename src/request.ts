/**
 * Send request.
 * 
 * @param url - Request URL.
 * @param option - Request option.
 * @param option.params - Request URL add parameters.
 * @param option.body - Request body data.
 *     - `URLSearchParams` : Form data. Automatic set `Content-Type` to `application/x-www-form-urlencoded`.
 *     - `FormData` : Multi form data. Automatic set `Content-Type` to `multipart/form-data`.
 *     - `File` : Multi form data. When no attribute `type`, then automatic set `Content-Type` to `multipart/form-data`.
 *     - `Blob` : Bytes data. When no attribute `type`, then automatic set `Content-Type` to `application/octet-stream`.
 *     - `Record<string, any> | string` : JSON data. Automatic set `Content-Type` to `application/json`.
 * @param option.headers - Request header data.
 * @param option.method - Request method.
 *     - `undefined` : Automatic judge. When parameter `data` not has value, then is `get`, otherwise is `post`.
 */
export default async function request(
    url: string,
    {
        params,
        body,
        headers,
        method
    }: {
        params?: Record<string, string | number | boolean>,
        body?: URLSearchParams | File | FormData | Blob | Record<string, any> | string,
        headers?: Record<string, string | number | boolean>,
        method?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options' | 'head'
    }
) {

    // Parameter.
    if (params) {
        params = Object.fromEntries(
            Object.entries(params).map(
                ([key, value]) => [key, String(value)]
            )
        )
        url = url + '?' + (new URLSearchParams((params as Record<string, string>))).toString()
    }
    headers = headers ?? {}
    headers = Object.fromEntries(
        Object.entries(headers).map(
            ([key, value]) => [key, String(value)]
        )
    )
    if (body instanceof File) {
        const formData = new FormData()
        formData.append('file', body)
        body = formData
    }
    else if (body instanceof Blob) {
        headers['Content-Type'] = headers['Content-Type'] ?? body['type'] ?? 'application/octet-stream'
    }
    else if (
        body instanceof Object
        && !(body instanceof URLSearchParams)
        && !(body instanceof FormData)
    ) {
        body = JSON.stringify(body)
        headers['Content-Type'] = headers['Content-Type'] ?? 'application/json'
    }
    else if (typeof body == 'string') {
        headers['Content-Type'] = headers['Content-Type'] ?? 'application/json'
    }
    const option = {
        'method': method ? method.toUpperCase() : body ? 'POST' : 'GET',
        'headers': headers as Record<string, string>
    }
    if (body) {
        option['body'] = body
    }

    // Request.
    const response = await fetch(
        url,
        option
    )

    return response
}
