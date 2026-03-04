import { ReactNode } from 'react'
import { createRoot, Root } from 'react-dom/client'

let root: Root | null = null

/**
 * Render react note.
 * 
 * @param app - React note.
 * @param elementId - Render HTML element ID.
 */
export function renderReact(app: ReactNode, elementId: string = 'root') {

    // Render.
    const element = document.getElementById(elementId)
    if (!element) throw new Error(`Element ID "${elementId}" not found`)
    if (!root) {
        root = createRoot(element)
    }
    root.render(app)
}
