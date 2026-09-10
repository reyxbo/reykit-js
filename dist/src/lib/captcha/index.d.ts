export { type AliGraphCaptchaOnErrorArg, type AliGraphCaptchaOnError, type AliGraphCaptchaConfig, initAliGraphCaptcha, verifyAliGraphCaptcha };
type AliGraphCaptchaOnErrorArg = {
    code: string;
    msg: string;
    desc: {
        detail: string;
    };
};
type AliGraphCaptchaOnError = (error: AliGraphCaptchaOnErrorArg) => void;
type AliGraphCaptchaConfig = {
    appId: string | null;
    onError: AliGraphCaptchaOnError | null;
};
/**
 * Initialize Ali graph captcha.
 *
 * @param appId: Account APP ID.
 * @param onError: Callback function of error.
 */
declare function initAliGraphCaptcha(appId: string, onError?: AliGraphCaptchaOnError | null): void;
/**
 * Use Ali graph captcha.
 *
 * @param fn - Execution function after verification.
 * @param args - Execution function arguments.
 */
declare function verifyAliGraphCaptcha<T, Args extends any[]>(fn: (...args: Args) => T | Promise<T>, ...args: Args): void;
