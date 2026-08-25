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
 */
export function PopupImage(
    {
        path,
        ...args
    }: {
        path: string
    } & ComponentProps<typeof ui.DialogTrigger>
) {
    return (
        <ui.Dialog>
            <ui.DialogTrigger
                className='size-full block'
                render={
                    <img src={path}
                />}
                {...args}
                nativeButton={false}
            />
            <ui.DialogContent
                className='!max-w-none w-auto h-auto p-0 border-0 bg-transparent shadow-none rounded-none'
            >
                <img
                    src={path}
                    loading='lazy'
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
 */
export function PopupVideo(
    {
        path,
        ...args
    }: {
        path: string
    } & ComponentProps<typeof ui.DialogTrigger>
) {
    return (
        <ui.Dialog>
            <ui.DialogTrigger
                className='size-full block'
                render={
                    <video
                    src={path}
                    preload='metadata'
                    playsInline
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
 * @param language - Language type.
 */
export function CarouselMedia(
    {
        data,
        orientation = 'auto',
        showCount = true,
        language = 'en'
    }: {
        data: { type: 'image' | 'video', path: string }[],
        orientation?: 'auto' | 'horizontal' | 'vertical',
        showCount?: boolean,
        language?: 'en' | 'zh'
    }
) {

    // Parameter.
    if (orientation === 'auto') {
        orientation = useValueByMobile(
            'horizontal',
            'vertical'
        )
    }
    const [current, setCurrent] = useState(1)
    const [api, setApi] = useState<ui.CarouselApi>()
    const wheelLock = useRef(false)

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
        <div className='flex flex-col place-items-center gap-4'>
            <ui.Carousel
                opts={{
                    align: 'center',
                    loop: true
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
                className='w-3/4'
            >
                <ui.CarouselPrevious size='icon' />
                <ui.CarouselContent className='place-items-center m-1 md:m-2 max-h-[70vh]'>
                    {
                        data.map(({ type, path }, index) => (
                            <ui.CarouselItem
                                key={index}
                                className={cn(
                                    'basis-1/2 overflow-hidden border max-h-[50vh] place-items-center flex p-0 rounded-2xl shadow-md',
                                    'my-1 md:mx-2',
                                )}
                            >
                                {
                                    type === 'image'
                                    ? <PopupImage path={path} />
                                    : type === 'video'
                                    ? <PopupVideo path={path} />
                                    : undefined
                                }
                            </ui.CarouselItem>
                        ))
                    }
                </ui.CarouselContent>
                <ui.CarouselNext size='icon' />
            </ui.Carousel>
            <div className='flex-1 text-sm text-muted-foreground hidden md:flex'>
                {
                    { 'en': `${current} / ${data.length} item(s)`, 'zh': `第 ${current} / ${data.length} 个` }[language]
                }
            </div>
        </div>
    )
}
