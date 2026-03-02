import { ReactNode, ComponentProps, MouseEvent } from 'react';

import { useIndex } from '../hook'

/**
 * Button component of cycle display children.
 * 
 * Parameters
 * ----------
 * @param childrens Children array.
 * @param handleCycle Handle cycle.
 * 
 * Returns
 * -------
 * @returns React element.
 */
export function CycleButton(
    {
        childrens,
        handleCycle,
        onClick,
        ...props
    }: {
        childrens: ReactNode[],
        handleCycle: (index: number) => void
        data: { children: ReactNode, handleClick: (event: MouseEvent<HTMLButtonElement>) => void }[],
    } & ComponentProps<'button'>
) {

    // Parameter.
    const [index, setIndex] = useIndex(childrens)

    // On click.
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {

        // Handle.
        if (onClick) {
            onClick(event)
        }
        handleCycle(index)
        setIndex()
    }

    return (
        <button onClick={handleClick} {...props}>
            {childrens[index]}
        </button>
    )
}
