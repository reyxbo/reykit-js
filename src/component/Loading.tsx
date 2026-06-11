/**
 * @Time    : 2026-06-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Loading components.
 */

import { Loader2Icon } from 'lucide-react'

import { createCover } from './Base'

export const [Loading, useLoading] = createCover(
    <div className='flex justify-center items-center size-10 rounded-full bg-white shadow-md'>
        <Loader2Icon role='status' aria-label='Loading' className='size-full animate-spin' />
    </div>
)
