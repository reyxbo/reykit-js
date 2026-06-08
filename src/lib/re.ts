/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Regular expression methods.
 */

export const PATTERN_IP = /^((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/
export const PATTERN_URL = /^https?:\/\/[^\s/$.?#].[^\s]*$/
export const PATTERN_EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
export const PATTERN_PHONE = /^1[3-9]\d{9}$/
export const PATTERN_CN = /^[\u4e00-\u9fa5]+$/
