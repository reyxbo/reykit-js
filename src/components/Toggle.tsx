import { ReactNode, ComponentProps, MouseEvent } from 'react';

import { useOpen } from '../hook'
import { cn } from '../tailwindcss'

/**
 * Toggle component of with icon.
 * 
 * @param openIcon - Open icon.
 * @param closeIcon - Close icon.
 * @param handleOpen - Handle open.
 * @param defaultOpen - Default open state.
 * @param rotate - Whether rotate icon.
 */
export function IconToggle(
    {
        openIcon,
        closeIcon,
        handleOpen,
        defaultOpen = true,
        rotate = true,
        className,
        onClick,
        ...props
    }: {
        openIcon: ReactNode,
        closeIcon: ReactNode,
        handleOpen: (open: boolean) => void,
        defaultOpen?: boolean
        rotate?: boolean
    } & ComponentProps<'button'>
) {

    // Parameter.
    const [open, setOpen] = useOpen(defaultOpen)

    // On click.
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {

        // Handle.
        if (onClick) {
            onClick(event)
        }
        handleOpen(open)
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
