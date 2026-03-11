/**
 * @Time    : 2026-03-11
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Button components.
 */

import { ReactNode, ComponentProps, MouseEvent } from 'react';

import { useIndex } from '../react'

/**
 * Button component of cycle display children.
 * 
 * @param childrens - Children array.
 * @param handleCycle - Handle cycle.
 */
export function CycleButton(
    {
        childrens,
        handleCycle,
        onClick,
        ...props
    }: {
        childrens: ReactNode[],
        handleCycle: (index: number) => any | Promise<any>
        data: { children: ReactNode, handleClick: (event: MouseEvent<HTMLButtonElement>) => void }[],
    } & ComponentProps<'button'>
) {

    // Parameter.
    const [index, setIndex] = useIndex(childrens)

    // On click.
    const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {

        // Handle.
        if (onClick) {
            onClick(event)
        }
        await handleCycle(index)
        setIndex()
    }

    return (
        <button onClick={handleClick} {...props}>
            {childrens[index]}
        </button>
    )
}
