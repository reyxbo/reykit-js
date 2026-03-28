/**
 * @Time    : 2026-03-25
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Loading components.
 */

import { ReactNode, useState, createContext } from 'react'
import { Loader2Icon } from "lucide-react"

type LoadingContextParams = { isLoading: boolean, setIsLoading: (value: boolean) => void }

export const LoadingContext = createContext<LoadingContextParams | null >(null)

/**
 * Loading component of display rotate icon.
 * 
 * @param props.children - The node tree of the mounting context.
 */
export function Loading({ children }: { children: ReactNode }) {

    // Parameter.
    const [isLoading, setIsLoading ] = useState(false)
    const loadingParams = {
        isLoading: isLoading,
        setIsLoading: setIsLoading
    }

    return (
        <LoadingContext value={loadingParams}>
            {children}
            {
                isLoading && (
                    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/5">
                        <div className="flex justify-center items-center size-10 rounded-full bg-white shadow-md">
                            <Loader2Icon role="status" aria-label="Loading" className="size-full animate-spin" />
                        </div>
                    </div>
                )
            }
        </LoadingContext>
    )
}
