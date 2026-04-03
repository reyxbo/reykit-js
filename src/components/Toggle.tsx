/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Toggle components.
 */

import { ReactNode, ComponentProps, MouseEvent } from 'react'
import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'

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
            <Tooltip>
                <TooltipTrigger render={buttonElement} />
                <TooltipContent side={tooltipSide}>{tooltip}</TooltipContent>
            </Tooltip>
        )
    }
    else return buttonElement
}

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
    return <TooltipPrimitive.Root data-slot='tooltip' {...props} />
}

function TooltipTrigger({ ...props }: TooltipPrimitive.Trigger.Props) {
    return <TooltipPrimitive.Trigger data-slot='tooltip-trigger' {...props} />
}

function TooltipContent({
    className,
    side = 'top',
    sideOffset = 4,
    align = 'center',
    alignOffset = 0,
    children,
    ...props
}: TooltipPrimitive.Popup.Props &
    Pick<
        TooltipPrimitive.Positioner.Props,
        'align' | 'alignOffset' | 'side' | 'sideOffset'
    >) {
    return (
        <TooltipPrimitive.Portal>
        <TooltipPrimitive.Positioner
            align={align}
            alignOffset={alignOffset}
            side={side}
            sideOffset={sideOffset}
            className='isolate z-50'
        >
            <TooltipPrimitive.Popup
            data-slot='tooltip-content'
            className={cn(
                'data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 rounded-md px-3 py-1.5 text-xs data-[side=inline-start]:slide-in-from-right-2 data-[side=inline-end]:slide-in-from-left-2 bg-foreground text-background z-50 w-fit max-w-xs origin-(--transform-origin)',
                className
            )}
            {...props}
            >
            {children}
            <TooltipPrimitive.Arrow className='size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 bg-foreground fill-foreground z-50 data-[side=bottom]:top-1 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5' />
            </TooltipPrimitive.Popup>
        </TooltipPrimitive.Positioner>
        </TooltipPrimitive.Portal>
    )
}
