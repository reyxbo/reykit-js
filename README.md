[中文](README_zh.md)

# reykit

**reykit** is a general-purpose JavaScript utility method package.

It provides integrated components, low-level UI components, CSS styles, and various utility functions, covering common functionality for UI, React, networking, images, random values, regular expressions, text, time, browsers, and more.

It also provides **shadcn**-based UI components and integrated components for rapidly building Web applications with consistent styles and interaction logic.

## Features

* General-purpose JavaScript utility method set
* Provides low-level UI components based on shadcn
* Provides integrated components with responsive desktop and mobile styles
* Provides unified CSS base styles
* Provides Debug styles
* Provides graphical CAPTCHA functionality
* Provides JavaScript data processing utilities
* Provides image and QR code processing utilities
* Provides HTTP network request utilities
* Provides random value generation utilities
* Provides commonly used regular expressions
* Provides React-related utilities and Hooks
* Provides text processing utilities
* Provides time processing utilities
* Provides Tailwind CSS utilities
* Provides browser and local storage utilities
* Supports unified access to the entire toolkit through the default export

---

## Installation

Requires a JavaScript environment that supports ES Modules.

```bash
npm install reykit
```

---

## Quick Start

The most basic usage:

```javascript
import kit from 'reykit'
```

The default export provides unified access to the various modules provided by reykit.

For example:

```javascript
kit.ui

kit.component

kit.data

kit.net

kit.react
```

---

# Styles

reykit provides default component styles based on **shadcn**.

The styles can be imported as follows:

```css
@import "reykit/base";
```

Default style configuration:

| Configuration | Type      |
| ------------- | --------- |
| Style         | `Vega`    |
| Font          | `Inter`   |
| Base color    | `Zinc`    |
| Menu color    | `Default` |
| Menu accent   | `Bold`    |

---

## `base` — Base styles

**Base styles.**

Provides the default CSS styles used by reykit components, based on **shadcn**.

It is mainly used to provide consistent basic visual styles and interaction behavior for components.

---

## `debug` — Debug styles

**Debug styles.**

The styles can be imported as follows:

```css
@import "reykit/debug";
```

Used for page debugging in Debug mode.

Debug mode displays outlines around all elements, making it easier to inspect element dimensions, layouts, and hierarchy.

Debug mode can be activated by adding the `debug` attribute to the `html` element:

```html
<html debug>
```

---

# Modules

reykit is divided into multiple modules by functionality. Each module provides different UI, component, and utility functions.

## `kit.ui` — UI components

**Low-level UI component module.**

Provides various low-level UI components based on **shadcn**.

It is mainly used to build basic page UI and provides a unified UI foundation for higher-level integrated components.

---

## `kit.component` — Integrated components

**Integrated component module.**

Provides encapsulated comprehensive UI components with responsive designs for desktop and mobile devices.

Main components include:

* `Table`: Table component

  * Automatic pagination
  * Page navigation
  * Rows per page
  * Data value formatting
  * Field sorting
  * Data grouping
  * Multiple selection
  * Option buttons

* `Notice`: Banner notification component

  * Provides global banner notifications
  * Provides message trigger functions

* `CarouselMedia`: Carousel media component

  * Supports image playback
  * Supports video playback
  * Supports button-based scrolling
  * Supports drag scrolling

* `Form`: Form component

  * Intercepts default page navigation
  * Provides form handling functions

* `MarkdownText`: Markdown text component

  * Supports GitHub-style Markdown syntax
  * Provides unified Markdown text styles

---

## `kit.captcha` — Captcha methods

**Graphical CAPTCHA module.**

Provides graphical CAPTCHA functionality based on **Alibaba Cloud** services.

It is mainly used for scenarios that require human verification.

---

## `kit.base` — Base methods

**Base methods module.**

Provides basic methods and common functionality required by other modules.

It is mainly used to provide common dependencies and basic processing capabilities for other modules.

---

## `kit.data` — Data methods

**Data processing module.**

Provides methods for processing JavaScript primitive data types.

Main functions include:

* Value comparison
* Array sorting
* Array deduplication
* Array counting
* Other data processing methods

---

## `kit.image` — Image methods

**Image processing module.**

Provides image and QR code processing methods.

Main functions include:

* QR code image generation
* QR code image rendering
* Other image processing methods

---

## `kit.net` — Network methods

**Network module.**

Provides network request-related methods.

It mainly provides HTTP request functionality and handles requests and responses in a unified manner.

Main functions include:

* HTTP requests
* Automatic `Content-Type` handling
* Automatic response data type conversion
* Response result validation
* Other network request processing methods

---

## `kit.rand` — Random methods

**Random value module.**

Provides random value generation methods.

It is mainly used to generate random strings and other random data.

---

## `kit.re` — Regular expression methods

**Regular expression module.**

Provides commonly used regular expressions and related processing methods.

Main functions include:

* IP address regular expressions
* Mobile phone number regular expressions
* Other commonly used data format regular expressions

---

## `kit.react` — React methods

**React utility module.**

Provides React framework-related methods and Hook functions.

Main functions include:

* React framework mounting
* Hooks for triggering re-rendering
* Counter Hooks
* Mobile device detection Hooks
* Hooks for delayed execution after rendering
* Other React-related methods

---

## `kit.text` — Text methods

**Text processing module.**

Provides text and character-related processing methods.

Main functions include:

* Whitespace character lists
* Numeric character lists
* Uppercase and lowercase letter character lists
* Other commonly used character lists

---

## `kit.time` — Time methods

**Time processing module.**

Provides time-related processing methods.

Main functions include:

* Generating time strings
* Generating time strings conforming to the **ISO 8601 standard time representation**
* Other time processing methods

---

## `kit.twc` — Tailwind CSS methods

**Tailwind CSS utility module.**

Provides **Tailwind CSS**-related processing methods.

It is mainly used to combine and process Tailwind CSS `className` styles.

For example, it provides a `className` style combination function with comment support.

---

## `kit.window` — Browser methods

**Browser utility module.**

Provides methods related to the browser environment.

Main functions include:

* Browser local storage
* Creating, reading, updating, and deleting local storage data
* Opening files through the browser
* Starting file downloads
* Byte data file processing
* Other browser-related methods

---

# Module Overview

| Module          | Function                                |
| --------------- | --------------------------------------- |
| `kit.ui`        | Low-level UI components based on shadcn |
| `kit.component` | Integrated UI and responsive components |
| `kit.captcha`   | Graphical CAPTCHA                       |
| `kit.base`      | Base methods and common dependencies    |
| `kit.data`      | JavaScript data processing              |
| `kit.image`     | Image and QR code processing            |
| `kit.net`       | HTTP network requests                   |
| `kit.rand`      | Random value generation                 |
| `kit.re`        | Regular expressions                     |
| `kit.react`     | React methods and Hooks                 |
| `kit.text`      | Text and character processing           |
| `kit.time`      | Time processing                         |
| `kit.twc`       | Tailwind CSS utilities                  |
| `kit.window`    | Browser and local storage               |

---

# Dependencies

Main runtime dependencies:

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

# Project Information

| Project     | Information  |
| ----------- | ------------ |
| Name        | `reykit`     |
| Version     | `1.0.247`    |
| Type        | `JavaScript` |
| Module type | `ES Module`  |
| Author      | `reyxbo`     |
| License     | `MIT`        |
| Homepage   | [REYXBO](https://www.reyxbo.com/release/javascript/reykit) |
| Repository | [reykit-js](https://github.com/reyxbo/reykit-js.git)       |

## Keywords

`rey` · `reyxbo` · `kit` · `component` · `ui` · `style` · `react` · `tailwindcss` · `shadcn` · `captcha` · `image` · `net` · `random` · `regex` · `text` · `time` · `window`
