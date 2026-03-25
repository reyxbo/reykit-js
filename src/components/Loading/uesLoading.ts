/**
 * @Time    : 2026-03-25
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Hook of loading components.
 */

import { useContext } from 'react'

import { LoadingContext } from './Loading'

/**
 * Hook of get loading component status parameters.
 * 
 * @returns Status parameters.
 *     - `isLoading` : Loading status.
 *     - `setIsLoading` : Set loading status.
 *     - `withLoading` : Execute a function in the context.
 */
export function useLoading() {

    // Parameter.
    const loadingParams = useContext(LoadingContext)

    // Check.
    if (!loadingParams) throw new Error('must be used within Loading component')

    return {
        ...loadingParams,
        withLoading: async <T, Args extends any[]>(
            fn: (...args: Args) => T | Promise<T>,
            ...args: Args
        ): Promise<T> => {
            loadingParams.setIsLoading(true)
            try {
                return await fn(...args)
            }
            finally {
                loadingParams.setIsLoading(false)
            }
        }
    }
}
