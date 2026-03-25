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
 */
export function useLoading() {

    // Parameter.
    const loadingParams = useContext(LoadingContext)

    // Check.
    if (!loadingParams) throw new Error('not used in the context')

    return loadingParams
}
