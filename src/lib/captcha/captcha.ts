/**
 * @Time    : 2026-06-10
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Captcha methods.
 */

import './aliGraphCaptcha.js'

type AliGraphCaptchaOnErrorArg = { code: string, msg: string, desc:{ detail: string } }
type AliGraphCaptchaOnError = (error: AliGraphCaptchaOnErrorArg) => void
type AliGraphCaptchaConfig = {
    appId: string | null,
    onError: AliGraphCaptchaOnError | null,
}

const aliGraphCaptchaConfig: AliGraphCaptchaConfig = {
    appId: null,
    onError: null
}

/**
 * Initialize Ali graph captcha.
 * 
 * @param appId: Account APP ID.
 * @param onError: Callback function of error.
 */
export function initAliGraphCaptcha(
    appId: string,
    onError: AliGraphCaptchaOnError | null = null
) {

    // Config.
    aliGraphCaptchaConfig.appId = appId
    aliGraphCaptchaConfig.onError = onError
}

/**
 * Use Ali graph captcha.
 * 
 * @param fn - Execution function after verification.
 * @param args - Execution function arguments.
 */
export function verifyAliGraphCaptcha<T, Args extends any[]>(
    fn: (...args: Args) => T | Promise<T>,
    ...args: Args
) {

    // Check.
    if (aliGraphCaptchaConfig.appId === null) throw new Error('not configured with function "initAliGraphCaptcha"')

    // Parameter.
    const config = {
        captchaId: aliGraphCaptchaConfig.appId,
        product: 'bind'
    }

    // Verify.
    window.initAlicom4(
        config,
        (captchaObj) => {
            captchaObj.onSuccess(() => {
                fn(...args)
            })
            captchaObj.onError((error: AliGraphCaptchaOnErrorArg) => {
                if (aliGraphCaptchaConfig.onError) {
                    aliGraphCaptchaConfig.onError(error)
                }
                throw Error(error.msg, { cause: { code: error.code, detail: error.desc.detail } })
            })
            captchaObj.showCaptcha()
        }
    )
}
