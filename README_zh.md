[English](README.md)

# reykit

**reykit** 是一个 JavaScript 通用工具方法集成包。

提供集成组件、底层 UI 组件、CSS 样式以及各类工具函数，包含 UI、React、网络、图片、随机值、正则表达式、文本、时间、浏览器等常用功能。

同时提供基于 **shadcn** 的 UI 组件和集成组件，可用于快速构建具有统一样式和交互逻辑的 Web 应用。

## 特性

* JavaScript 通用工具方法集
* 提供基于 shadcn 的底层 UI 组件
* 提供自适应电脑端和移动端的集成组件
* 提供统一的 CSS 基础样式
* 提供 Debug 调试样式
* 提供图形验证码功能
* 提供 JavaScript 数据处理工具
* 提供图片及二维码处理工具
* 提供 HTTP 网络请求工具
* 提供随机值生成工具
* 提供常用正则表达式
* 提供 React 相关工具及 Hook
* 提供文本处理工具
* 提供时间处理工具
* 提供 Tailwind CSS 工具
* 提供浏览器及本地存储工具
* 支持通过默认导出统一使用整个工具包

---

## 安装

要求使用支持 ES Module 的 JavaScript 环境。

```bash
npm install reykit
```

---

## 快速开始

最基本的使用方式：

```javascript
import kit from 'reykit'
```

通过默认导出可以统一访问 reykit 提供的各类模块。

例如：

```javascript
kit.ui
kit.component
kit.data
kit.net
kit.react
```

---

# 样式

reykit 提供基于 **shadcn** 的默认组件样式。

可以通过以下方式导入：

```css
@import "reykit/base";
```

默认样式配置：

| 配置          | 类型        |
| ----------- | --------- |
| Style       | `Vega`    |
| Font        | `Inter`   |
| Base color  | `Zinc`    |
| Menu color  | `Default` |
| Menu accent | `Bold`    |

---

## `base` — Base styles

**基础样式。**

提供 reykit 组件默认使用的 CSS 样式，基于 **shadcn** 设计。

主要用于统一组件的基础视觉样式和交互表现。

---

## `debug` — Debug styles

**调试样式。**

可以通过以下方式导入：

```css
@import "reykit/debug";
```

用于 Debug 模式下的页面调试。

Debug 模式会显示各元素的轮廓线，方便查看页面元素的尺寸、布局及层级关系。

通过给 `html` 元素添加 `debug` 属性激活：

```html
<html debug>
```

---

# 模块

reykit 按功能划分为多个模块，各模块负责不同的 UI、组件及工具功能。

## `kit.ui` — UI components

**底层 UI 组件模块。**

基于 **shadcn** 提供各类底层 UI 组件。

主要用于构建页面基础 UI，并为上层集成组件提供统一的 UI 基础。

---

## `kit.component` — Integrated components

**集成组件模块。**

提供经过封装的综合型 UI 组件，并针对电脑端和移动端进行自适应设计。

主要包括：

* `Table`：表格组件

  * 自动分页
  * 翻页
  * 每页显示行数
  * 数据值规范
  * 字段排序
  * 数据分组
  * 多选
  * 选项按钮

* `Notice`：横幅提示组件

  * 提供全局横幅提示
  * 提供消息触发函数

* `CarouselMedia`：滚动媒体组件

  * 支持图片播放
  * 支持视频播放
  * 支持按钮滚动
  * 支持拖拽滚动

* `Form`：表单组件

  * 拦截默认页面跳转
  * 提供表单处理函数

* `MarkdownText`：Markdown 文本组件

  * 支持 GitHub 风格 Markdown 语法
  * 提供统一的 Markdown 文本样式

---

## `kit.captcha` — Captcha methods

**图形验证码模块。**

基于 **阿里云**提供的服务，实现图形验证码功能。

主要用于需要进行人机验证的场景。

---

## `kit.base` — Base methods

**基础方法模块。**

提供其它模块所依赖的基础方法和公共功能。

主要用于为其它模块提供公共依赖及基础处理能力。

---

## `kit.data` — Data methods

**数据处理模块。**

提供 JavaScript 原始数据类型相关的处理方法。

主要包括：

* 值比较
* 数组排序
* 数组去重
* 数组计数
* 其它数据处理方法

---

## `kit.image` — Image methods

**图片处理模块。**

提供图片及二维码相关处理方法。

主要包括：

* 二维码图片生成
* 二维码图片渲染
* 其它图片处理方法

---

## `kit.net` — Network methods

**网络模块。**

提供网络请求相关方法。

主要包括 HTTP 请求功能，并对请求和响应进行统一处理。

主要功能包括：

* HTTP 请求
* 自动处理 `Content-Type`
* 自动转换响应数据类型
* 响应结果判断
* 其它网络请求处理方法

---

## `kit.rand` — Random methods

**随机值模块。**

提供随机值生成相关方法。

主要用于生成随机字符串及其它随机数据。

---

## `kit.re` — Regular expression methods

**正则表达式模块。**

提供常用正则表达式及相关处理方法。

主要包括：

* IP 地址正则
* 手机号正则
* 其它常用数据格式正则

---

## `kit.react` — React methods

**React 工具模块。**

提供 React 框架相关的方法及 Hook 函数。

主要包括：

* React 框架挂载
* 主动触发重新渲染的 Hook
* 计数 Hook
* 移动端判断 Hook
* 渲染后延迟执行 Hook
* 其它 React 相关方法

---

## `kit.text` — Text methods

**文本处理模块。**

提供文本及字符相关处理方法。

主要包括：

* 空白字符列表
* 数字字符列表
* 大小写字母字符列表
* 其它常用字符列表

---

## `kit.time` — Time methods

**时间处理模块。**

提供时间相关处理方法。

主要包括：

* 获取时间字符串
* 获取符合 **ISO 8601 标准时间表示法**的时间字符串
* 其它时间处理方法

---

## `kit.twc` — Tailwind CSS methods

**Tailwind CSS 工具模块。**

提供 **Tailwind CSS** 相关处理方法。

主要用于 Tailwind CSS `className` 样式的组合和处理。

例如提供带注释的 `className` 样式连接函数。

---

## `kit.window` — Browser methods

**浏览器工具模块。**

提供浏览器环境相关的方法。

主要包括：

* 浏览器本地存储
* 本地存储数据的增、删、改、查
* 调用浏览器打开文件
* 启动文件下载
* 字节数据文件处理
* 其它浏览器相关方法

---

# 模块概览

| 模块              | 功能                  |
| --------------- | ------------------- |
| `kit.ui`        | 基于 shadcn 的底层 UI 组件 |
| `kit.component` | 集成 UI 组件及自适应组件      |
| `kit.captcha`   | 图形验证码               |
| `kit.base`      | 基础方法及公共依赖           |
| `kit.data`      | JavaScript 数据处理     |
| `kit.image`     | 图片及二维码处理            |
| `kit.net`       | HTTP 网络请求           |
| `kit.rand`      | 随机值生成               |
| `kit.re`        | 正则表达式               |
| `kit.react`     | React 方法及 Hook      |
| `kit.text`      | 文本及字符处理             |
| `kit.time`      | 时间处理                |
| `kit.twc`       | Tailwind CSS 工具     |
| `kit.window`    | 浏览器及本地存储            |

---

# 依赖

主要运行时依赖：

* `@base-ui/react`
* `@fontsource-variable/inter`
* `@tanstack/react-query`
* `class-variance-authority`
* `clsx`
* `cmdk`
* `date-fns`
* `embla-carousel-react`
* `github-markdown-css`
* `input-otp`
* `lucide-react`
* `next-themes`
* `qrcode`
* `react`
* `react-day-picker`
* `react-dom`
* `react-markdown`
* `react-resizable-panels`
* `react-router-dom`
* `recharts`
* `remark-gfm`
* `sonner`
* `tailwind-merge`
* `vaul`

---

# 项目信息

| 项目         | 信息           |
| ---------- | ------------ |
| 名称         | `reykit`     |
| 版本         | `1.0.247`    |
| 类型         | `JavaScript` |
| 模块类型       | `ES Module`  |
| 作者         | `reyxbo`     |
| 许可证        | `MIT`        |
| Homepage   | [REYXBO](https://www.reyxbo.com/release/javascript/reykit) |
| Repository | [reykit-js](https://github.com/reyxbo/reykit-js.git)       |

## 关键词

`rey` · `reyxbo` · `kit` · `component` · `ui` · `style` · `react` · `tailwindcss` · `shadcn` · `captcha` · `image` · `net` · `random` · `regex` · `text` · `time` · `window`
