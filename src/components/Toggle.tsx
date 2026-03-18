/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Toggle components.
 */

import { ReactNode, ComponentProps, MouseEvent, useEffect } from 'react';

import { useOpen } from '../react'
import { cn } from '../twc'

/**
 * Toggle component of with icon.
 * 
 * @param openIcon - Open icon.
 * @param closeIcon - Close icon.
 * @param handleOpen - Handle open.
 * @param defaultOpen - Default open state.
 * @param rotate - Whether rotate icon.
 * @param listenOpen - Switch icon for listening status value.
 */
export function IconToggle(
    {
        openIcon,
        closeIcon,
        handleOpen,
        defaultOpen = true,
        rotate = true,
        listenOpen,
        className,
        onClick,
        ...props
    }: {
        openIcon: ReactNode,
        closeIcon: ReactNode,
        handleOpen: (open: boolean) => any | Promise<any>,
        defaultOpen?: boolean,
        rotate?: boolean,
        listenOpen?: boolean
    } & ComponentProps<'button'>
) {

    // Parameter.
    const [open, setOpen] = useOpen(defaultOpen)

    // Effect.
    if (listenOpen !== undefined) {
        useEffect(
            () => {
                setOpen(listenOpen)
            },
            [listenOpen]
        )
    }

    // On click.
    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {

        // Handle.
        if (onClick) {
            onClick(event)
        }
        await handleOpen(open)
        setOpen()
    }

    return (
        <button
            onClick={handleClick}
            data-open={open}
            className={cn('group relative', className)}
            {...props}
        >
            <div className={cn(
                    'grid place-content-center size-full transition group-data-[open=false]:opacity-0 absolute',
                    rotate ? 'group-data-[open=false]:-rotate-90' : undefined
                )}
            >
                {openIcon}
            </div>
            <div className={cn(
                    'grid place-content-center size-full transition group-data-[open=true]:opacity-0 absolute',
                    rotate ? 'group-data-[open=true]:rotate-90' : undefined
                )}
            >
                {closeIcon}
            </div>
        </button>
    )
}
