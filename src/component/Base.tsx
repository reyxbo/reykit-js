/**
 * @Time    : 2026-03-25
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Loading components.
 */

import { ReactNode, useState, createContext, useContext } from 'react'

export type CoverContextParams = { isCovering: boolean, setIsCovering: (value: boolean) => void }

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
                {
                    isCovering && (
                        <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/5'>
                            {display}
                        </div>
                    )
                }
            </CoverContext>
        )
    }

    // Create hook.
    const useCover = () => {
        const coverParams = useContext(CoverContext)
        if (!coverParams) throw new Error('must be used within cover component')
        return {
            ...coverParams,
            withCover: async <T, Args extends any[]>(
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
        }
    }

    return [Cover, useCover] as [typeof Cover, typeof useCover]
}
