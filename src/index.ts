import './index.css'
import { CycleButton } from './components/Button'
import Form from './components/Form'
import { IconToggle } from './components/Toggle'
import { useOpen, useCount, useIndex, useIsMobile } from './hook'
import { renderReact } from './react'
import request from './request'
import { default as Storager } from './storage'
import { cn } from './tailwindcss'
import * as types from './type'

export default {
    types,
    CycleButton,
    Form,
    IconToggle,
    useOpen,
    useCount,
    useIndex,
    useIsMobile,
    renderReact,
    request,
    Storager,
    cn
}
