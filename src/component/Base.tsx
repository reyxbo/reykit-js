/**
 * @Time    : 2026-03-25
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Loading components.
 */

import { ReactNode, useState, createContext, useContext } from 'react'

import * as ui from './ui'
import { createExternalState } from '../lib/react'
import { cn } from '../lib/twc'

export type Language = 'en' | 'zh'
export type CoverContextParams = { isCovering: boolean, setIsCovering: (value: boolean) => void }

export const [useDefaultLanguage, setDefaultLanguage] = createExternalState<Language>('en')

/**
 * Create cover component and hook.
 * 
 * @param display - Cover display content.
 * @returns Cover component and hook.
 * @example
 * const [Cover, useCover] = createCover('content')
 * const { withCover } = useCover()
 * <Cover>
 *     <button onClick={() => withCover(console, 'test')}>Button</button>
 * </Cover>
 */
export function createCover(display: ReactNode) {

    // Parameter.
    const CoverContext = createContext<CoverContextParams | null >(null)

    // Create component.
    const Cover = ({ children }: { children: ReactNode }) => {
        const [isCovering, setIsCovering ] = useState(false)
        const coverParams = {
            isCovering,
            setIsCovering
        }
        return (
            <CoverContext value={coverParams}>
                {children}
                <div className={cn(
                    'fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-300',
                    isCovering ? 'opacity-100' : 'opacity-0 pointer-events-none'
                )}>
                    {isCovering && display}
                </div>
            </CoverContext>
        )
    }

    // Create hook.
    const useCover = () => {
        const coverParams = useContext(CoverContext)
        if (!coverParams) throw new Error('must be used within cover component')
        const withCover = async <T, Args extends any[]>(
            fn: (...args: Args) => T | Promise<T>,
            ...args: Args
        ): Promise<T> => {
            coverParams.setIsCovering(true)
            try {
                return await fn(...args)
            }
            finally {
                coverParams.setIsCovering(false)
            }
        }
        return {
            ...coverParams,
            withCover
        }
    }

    return [Cover, useCover] as [typeof Cover, typeof useCover]
}

export const [Loading, useLoading] = createCover(
    <div className='flex justify-center items-center size-10 rounded-full bg-white shadow-md'>
        <ui.icon.Loader2Icon role='status' aria-label='Loading' className='size-full animate-spin' />
    </div>
)
