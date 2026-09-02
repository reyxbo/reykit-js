/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Integrated component module.
 */

import * as ui from './ui'

export { ui }
export { TextBadges } from './Badge'
export { type CoverContextParams, createCover, Loading, useLoading } from './Base'
export { type BreadcrumbDict, Breadcrumb } from './Breadcrumb'
export { CycleButton, ScrollToTopButton } from './Button'
export { Form } from './Form'
export { PopupImage, PopupVideo, CarouselMedia } from './Media'
export { Notice, notice } from './Notice'
export {
    type TableFieldOption,
    type TableSearchOption,
    type TableButtonOption,
    type TableRowOption,
    type TableSelectRowsOption,
    Table
} from './Table'
export { IconText, MarkdownText } from './Text'
export { IconToggle } from './Toggle'
