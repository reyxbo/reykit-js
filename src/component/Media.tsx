/**
 * @Time    : 2026-08-25
 * @Author  : Rey
 * @Contact : reyxbo@163.com
 * @Explain : Media components.
 */

import { ComponentProps, useState, useEffect, useRef } from 'react'

import * as ui from './ui'
import { useValueByMobile } from '../lib/react'
import { cn } from '../lib/twc'

/**
 * Media component of pop up show image.
 * 
 * @param path - Image path.
 * @param loading - Loading scheme.
 */
export function PopupImage(
    {
        path,
        loading,
        ...args
    }: {
        path: string,
        loading?: 'eager' | 'lazy',
    } & ComponentProps<typeof ui.DialogTrigger>
) {
    return (
        <ui.Dialog>
            <ui.DialogTrigger
                className='size-full block'
                render={
                    <img
                        src={path}
                        loading={loading}
                        className='size-full object-cover'
                    />
                }
                {...args}
                nativeButton={false}
            />
            <ui.DialogContent
                className='!max-w-none w-auto h-auto p-0 border-0 bg-transparent shadow-none rounded-none'
            >
                <img
                    src={path}
                    className='block max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain'
                />
            </ui.DialogContent>
        </ui.Dialog>
    )
}

/**
 * Media component of pop up show video.
 * 
 * @param path - Video path.
 * @param preload - Preload scheme.
 */
export function PopupVideo(
    {
        path,
        preload,
        ...args
    }: {
        path: string,
        preload?: 'metadata' | 'aotu' | 'none'
    } & ComponentProps<typeof ui.DialogTrigger>
) {
    return (
        <ui.Dialog>
            <ui.DialogTrigger
                className='size-full block'
                render={
                    <video
                        src={path}
                        preload={preload}
                        playsInline
                        className='size-full object-cover'
                    />
                }
                {...args}
                nativeButton={false}
            />
            <ui.DialogContent
                className='!max-w-none w-auto h-auto p-0 border-0 bg-transparent shadow-none rounded-none'
            >
                <video
                    src={path}
                    controls
                    muted
                    autoPlay
                    playsInline
                    className='block max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain'
                />
            </ui.DialogContent>
        </ui.Dialog>
    )
}

/**
 * Media component of carousel show image or video.
 * 
 * @param data - Media data.
 * @param orientation - Carousel orientation.
 *     - `auto` : Automatic set, when is mobile, then is `vertical`, otherwise is `horizontal`.
 * @param width - Show content width.
 * @param showButton - Whether show button.
 * @param showControl - Whether show controls.
 * @param language - Language type.
 */
export function CarouselMedia(
    {
        data,
        orientation = 'auto',
        width = 2,
        showButton = true,
        showControl = true,
        language = 'en'
    }: {
        data: { type: 'image' | 'video', path: string }[],
        orientation?: 'auto' | 'horizontal' | 'vertical',
        width?: 1 | 2 | 3 | 4 | 5 | 6,
        showButton?: boolean,
        showControl?: boolean,
        language?: 'en' | 'zh'
    }
) {

    // Parameter.
    if (orientation === 'auto') {
        orientation = useValueByMobile(
            'vertical',
            'horizontal'
        )
    }
    const [classNameShowNum, renderRange] = {
        1: ['basis-1/1', 2],
        2: ['basis-1/2', 3],
        3: ['basis-1/3', 3],
        4: ['basis-1/4', 4],
        5: ['basis-1/5', 4],
        6: ['basis-1/6', 5],
    }[width] as [string, number]
    const [current, setCurrent] = useState(1)
    const [api, setApi] = useState<ui.CarouselApi>()
    const wheelLock = useRef(false)
    const CountText = (
        <div className='flex-1 text-sm md:text-base text-muted-foreground flex absolute max-md:-top-8 md:-bottom-8'>
            {
                { 'en': `${current} / ${data.length} item(s)`, 'zh': `第 ${current} / ${data.length} 个` }[language]
            }
        </div>
    )

    //Handle.
    useEffect(() => {
        if (!api) return
        const update = () => {
            setCurrent(api.selectedScrollSnap() + 1)
        }
        update()
        api.on('select', update)
        return () => {
            api.off('select', update)
        }
    }, [api])

    return (
        <div className='relative flex flex-col place-items-center gap-4 size-full'>
            {showControl && orientation == 'vertical' && CountText}
            <ui.Carousel
                opts={{
                    align: 'center',
                    loop: true,
                    skipSnaps: true,
                    duration: 25
                }}
                setApi={setApi}
                onWheel={e => {
                    if (wheelLock.current) return
                    wheelLock.current = true
                    if (e.deltaY > 0) {
                        api?.scrollNext()
                    } else {
                        api?.scrollPrev()
                    }
                    setTimeout(() => {
                        wheelLock.current = false
                    }, 300)
                }}
                orientation={orientation}
                className={cn(
                    'size-full',
                    '[&_[data-slot="carousel-content"]]:absolute',
                    '[&_[data-slot="carousel-content"]]:inset-0',
                    '[&_[data-slot="carousel-content"]>div]:size-full'
                )}
            >
                <ui.CarouselContent className='place-items-center m-1 md:m-2 size-full'>
                    {
                        data.map(({ type, path }, index) => {
                            const diff = Math.abs(index - current + 1)
                            return <ui.CarouselItem
                            key={index}
                            className={cn(
                                classNameShowNum,
                                'overflow-hidden border md:h-[90%] md:max-h-[95%] max-md:w-[90%] max-md:max-w-[95%]',
                                'place-items-center flex p-0 rounded-2xl shadow-md my-1 md:mx-2'
                            )}
                            >
                                {
                                    (
                                        Math.min(
                                            diff,
                                            data.length - diff
                                        ) > renderRange
                                    )
                                    ? null
                                    : type === 'image'
                                    ? <PopupImage path={path} />
                                    : type === 'video'
                                    ? <PopupVideo path={path} />
                                    : null
                                }
                            </ui.CarouselItem>
                        })
                    }
                </ui.CarouselContent>
                {
                    showButton && (
                        <>
                            <ui.CarouselPrevious size='icon' className='max-md:top-auto max-md:-bottom-12 max-md:left-1/3' />
                            <ui.CarouselNext size='icon' className='max-md:-bottom-12 max-md:left-2/3' />
                        </>
                    )
                }
            </ui.Carousel>
            {showControl && orientation == 'horizontal' && CountText}
        </div>
    )
}
