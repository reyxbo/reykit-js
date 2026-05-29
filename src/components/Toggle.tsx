/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Toggle components.
 */

import { ReactNode, ComponentProps, MouseEvent } from 'react'

import ui from './ui'
import { useOpen } from '../react'
import { cn } from '../twc'

/**
 * Toggle component of with icon.
 * 
 * @param props.openIcon - Open icon.
 * @param props.closeIcon - Close icon.
 * @param props.tooltip - Tooltip text.
 * @param props.tooltipSide - Tooltip text popup side.
 * @param props.rotate - Whether to use rotating icon animation.
 * @param props.open - Open state value.
 * @param props.onChangeOpen - Open callback function.
 * @param props.defaultOpen - Default open state.
 */
export function IconToggle(
    {
        openIcon,
        closeIcon,
        tooltip,
        tooltipSide = 'bottom',
        rotate = false,
        open,
        onChangeOpen,
        defaultOpen = true,
        onClick,
        className,
        ...props
    }: {
        openIcon: ReactNode,
        closeIcon: ReactNode,
        tooltip?: string,
        tooltipSide?: 'top' | 'bottom' | 'left' | 'right',
        rotate?: boolean,
        open?: boolean,
        onChangeOpen?: (nextOpen: boolean) => any | Promise<any>,
        defaultOpen?: boolean,
    } & ComponentProps<'button'>
) {

    // Parameter.
    const [initOpen, setInitOpen] = useOpen(defaultOpen)
    const isControlled = open !== undefined
    const currentOpen = isControlled ? open : initOpen

    // On click.
    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {

        // Handle.
        const nextOpen = !currentOpen
        onClick?.(event)
        await onChangeOpen?.(nextOpen)
        if (!isControlled) {
            setInitOpen()
        }
    }

    // Element.
    const buttonElement = (
        <button
            type='button'
            onClick={handleClick}
            data-open={currentOpen}
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
    if (tooltip) {
        return (
            <ui.Tooltip>
                <ui.TooltipTrigger render={buttonElement} />
                <ui.TooltipContent side={tooltipSide}>{tooltip}</ui.TooltipContent>
            </ui.Tooltip>
        )
    }
    else return buttonElement
}
