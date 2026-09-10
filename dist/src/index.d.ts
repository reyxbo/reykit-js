import { captcha, base, data, image, net, rand, re, react, text, time, twc, window } from './lib';
/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : General-purpose JavaScript utility method package.
 */
import * as component from './component';
import * as ui from './component/ui';
import * as icon from './component/ui/icon';
export { modules as default, component, ui, icon, captcha, base, data, image, net, rand, re, react, text, time, twc, window };
declare const modules: {
    component: typeof component;
    ui: typeof component.ui;
    icon: typeof component.ui.icon;
    captcha: typeof captcha;
    base: typeof base;
    data: typeof data;
    image: typeof image;
    net: typeof net;
    rand: typeof rand;
    re: typeof re;
    react: typeof react;
    text: typeof text;
    time: typeof time;
    twc: typeof twc;
    window: typeof window;
};
