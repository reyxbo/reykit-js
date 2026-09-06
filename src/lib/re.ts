/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Regular expression module.
 */

export {
    PATTERN_IP,
    PATTERN_URL,
    PATTERN_EMAIL,
    PATTERN_PHONE,
    PATTERN_CN
}

const PATTERN_IP = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
const PATTERN_URL = /^https?:\/\/[^\s/$.?#].[^\s]*$/
const PATTERN_EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const PATTERN_PHONE = /^1[3-9]\d{9}$/
const PATTERN_CN = /^[\u4e00-\u9fa5]+$/
