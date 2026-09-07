import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
    useCallback
} from 'react'
import {
    ChevronDown,
    ChevronUp,
    AlertCircle,
    Maximize2,
    Minimize2,
    Loader2,
    Pause,
    PictureInPicture2,
    Play,
    RotateCcw,
    RotateCw,
    Volume,
    Volume1,
    Volume2,
    VolumeOff
} from 'lucide-react'
import { cva, type VariantProps } from 'class-variance-authority'

import { Button } from './button'
import { cn } from '../../lib/twc'

interface VideoContextType {
    videoRef: React.RefObject<HTMLVideoElement | null>
    containerRef: React.RefObject<HTMLDivElement | null>
    isPlaying: boolean
    isBuffering: boolean
    hasError: boolean
    videoProgress: number
    videoDuration: number
    areControlsShown: boolean
    isFullscreen: boolean
    isPip: boolean
    isVolumeControlOpen: boolean
    repeatVideoAutomatically: boolean
    autoPlayVideoUponVisible: boolean
    autoHideControls: boolean
    showCenterControls: boolean
    attemptTogglePlay: () => void
    toggleFullscreen: () => void
    setIsPlaying: (playing: boolean) => void
    setIsBuffering: (buffering: boolean) => void
    setHasError: (hasError: boolean) => void
    setVideoProgress: (progress: number) => void
    setVideoDuration: (videoDuration: number) => void
    setShowControls: (show: boolean) => void
    showControlsTemporarily: () => void
    setVolume: (x: number) => void
    setIsMouseOverControls: (x: boolean) => void
    toggleMute: (x: boolean) => void
    togglePip: () => void
    setIsVolumeControlOpen: (x: boolean) => void
    clearControlsTimeout: () => void
}

const VideoContext = createContext<VideoContextType | null>(null)

function useVideo(): VideoContextType {
    const context = useContext(VideoContext)
    if (!context) {
        throw new Error('useVideo must be used within a VideoRoot')
    }
    return context
}

function VideoProvider({
    repeat,
    auto,
    autoHideControls = true,
    showCenterControls = true,
    children
}: {
    repeat: boolean
    auto: boolean
    autoHideControls: boolean
    showCenterControls?: boolean
    children: React.ReactNode
}): React.ReactElement {

    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const lastVolumeRef = useRef<number | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isBuffering, setIsBuffering] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [videoProgress, setVideoProgress] = useState(0)
    const [videoDuration, setVideoDuration] = useState(0)
    const [areControlsShown, setShowControls] = useState(false)
    const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const isMouseOverControlsRef = useRef<boolean>(false)
    const [isPip, setIsPip] = useState(false)
    const [isVolumeControlOpen, setIsVolumeControlOpen] = useState(false)

    const setIsMouseOverControls = (value: boolean) => {
        isMouseOverControlsRef.current = value
    }

    const attemptTogglePlay = async () => {
        if (isBuffering || hasError) return
        if (videoRef.current) {
            if (videoRef.current.paused) {
                try {
                    await videoRef.current.play()
                } catch (error) {
                    console.warn(
                        'Video playback failed. This is usually caused by an invalid/expired video URL or missing browser codecs:',
                        error
                    )
                }
            } else {
                videoRef.current.pause()
            }
        }
        setIsVolumeControlOpen(false)
    }

    const toggleFullscreen = () => {
        const container = containerRef.current
        if (container) {
            if (!document.fullscreenElement) {
                container.requestFullscreen().catch((err) => console.error(err))
            } else {
                document.exitFullscreen()
            }
        }
        setIsVolumeControlOpen(false)
    }

    const setVolume = (volume: number) => {
        if (!videoRef.current) return
        videoRef.current.volume = volume
        if (volume > 0) {
            lastVolumeRef.current = null
        }
    }

    const toggleMute = (muted: boolean) => {
        const videoElement = videoRef.current
        if (!videoElement) return

        if (muted) {
            lastVolumeRef.current = videoElement.volume
            videoElement.muted = true
            setVolume(0)
            return
        }

        videoElement.muted = false
        if (lastVolumeRef.current !== null) {
            setVolume(lastVolumeRef.current)
            lastVolumeRef.current = null
        }
    }

    const clearControlsTimeout = () => {
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current)
        }
    }

    const showControlsTemporarily = () => {
        setShowControls(true)
        clearControlsTimeout()

        if (!autoHideControls) {
            return
        }

        if (!isMouseOverControlsRef.current) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false)
            }, 2500)
        }
    }

    const togglePip = async () => {
        const videoElement = videoRef.current
        if (!videoElement) return

        if (!document.pictureInPictureEnabled) {
            console.warn('Picture-in-Picture is not supported by this browser.')
            return
        }

        try {
            if (document.pictureInPictureElement === videoElement) {

                await document.exitPictureInPicture()
            } else {

                await videoElement.requestPictureInPicture()
            }
            setIsPip(!isPip)
        } catch (error) {
            console.error('Failed to toggle Picture-in-Picture mode:', error)
        } finally {
            setIsVolumeControlOpen(false)
        }
    }

    const handleFullscreenChange = () => {
        const container = containerRef.current
        setIsFullscreen(!!container && document.fullscreenElement === container)
        setIsVolumeControlOpen(false)
    }

    useEffect(() => {
        handleFullscreenChange()
        document.addEventListener('fullscreenchange', handleFullscreenChange)

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange)
        }
    }, [])

    return (
        <VideoContext.Provider
            value={{
                videoRef,
                containerRef,
                isPlaying,
                isBuffering,
                hasError,
                videoProgress,
                videoDuration,
                areControlsShown,
                isFullscreen,
                isPip,
                isVolumeControlOpen,
                repeatVideoAutomatically: repeat,
                autoPlayVideoUponVisible: auto,
                autoHideControls,
                showCenterControls,
                attemptTogglePlay,
                toggleFullscreen,
                setIsPlaying,
                setIsBuffering,
                setHasError,
                setVideoProgress,
                setVideoDuration,
                setShowControls,
                showControlsTemporarily,
                setVolume,
                toggleMute,
                togglePip,
                setIsVolumeControlOpen,
                clearControlsTimeout,
                setIsMouseOverControls
            }}
        >
            {children}
        </VideoContext.Provider>
    )
}

interface VideoRootProps extends React.ComponentPropsWithoutRef<'div'> {
    repeat?: boolean
    auto?: boolean
    autoHideControls?: boolean
    showCenterControls?: boolean
}

function VideoRoot({
    children,
    className = '',
    repeat = false,
    auto = false,
    autoHideControls = true,
    showCenterControls = true,
    ...props
}: VideoRootProps) {

    return (
        <VideoProvider
            repeat={repeat}
            auto={auto}
            autoHideControls={autoHideControls}
            showCenterControls={showCenterControls}
        >
            <VideoContainer className={cn('h-full w-full', className)} {...props}>
                {children}
            </VideoContainer>
        </VideoProvider>
    )
}

function VideoContainer({
    children,
    className,
    ...props
}: React.ComponentPropsWithoutRef<'div'>) {
    const {
        containerRef,
        autoHideControls,
        setShowControls,
        showControlsTemporarily,
        clearControlsTimeout
    } = useVideo()

    const handleMouseMove = () => {
        showControlsTemporarily()
    }

    const handleMouseLeave = () => {
        if (!autoHideControls) return
        clearControlsTimeout()
        setShowControls(false)
    }

    return (
        <div
            ref={containerRef}
            className={cn(
                'relative overflow-hidden bg-black',
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            {...props}
        >
            {children}
        </div>
    )
}

const videoViewportVariants = cva('h-full w-full', {
    variants: {
        fit: {
            cover: 'object-cover',
            contain: 'object-contain',
            fill: 'object-fill',
            none: 'object-none',
            scaleDown: 'object-scale-down'
        }
    },
    defaultVariants: {
        fit: 'cover'
    }
})

const centerControlIconClassName = 'h-[min(60px,16cqw)] w-[min(60px,16cqw)]'

interface VideoViewportProps
    extends Omit<React.ComponentPropsWithoutRef<'video'>, 'controls'>,
    VariantProps<typeof videoViewportVariants> { }

function VideoViewport({
    src,
    fit,
    className = '',
    ...props
}: VideoViewportProps) {
    const {
        videoRef,
        setIsPlaying,
        setIsBuffering,
        setHasError,
        setVideoProgress,
        setVideoDuration,
        videoDuration,
        isPlaying,
        isBuffering,
        hasError,
        repeatVideoAutomatically,
        autoPlayVideoUponVisible,
        autoHideControls,
        showCenterControls,
        setIsVolumeControlOpen,
        showControlsTemporarily,
        areControlsShown,
        attemptTogglePlay
    } = useVideo()
    const rafRef = useRef<number | null>(null)
    const lastSyncedProgressRef = useRef(0)
    const shouldResumeAfterBufferRef = useRef(false)
    const areControlsVisible = !autoHideControls || areControlsShown

    const syncDuration = useCallback(
        (videoEl: HTMLVideoElement) => {
            if (videoEl && videoEl.duration) {
                setVideoDuration(videoEl.duration)
            }
        },
        [setVideoDuration]
    )

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement) return
        if (videoElement.readyState >= 1) {
            syncDuration(videoElement)
        }
    }, [src, videoRef, syncDuration])

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement || !autoPlayVideoUponVisible) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry?.isIntersecting) return
                videoElement.play().catch((error) => {
                    console.warn('Video autoplay failed:', error)
                })
                observer.disconnect()
            },
            { threshold: 0.35 }
        )

        observer.observe(videoElement)

        return () => observer.disconnect()
    }, [autoPlayVideoUponVisible, videoRef])

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement || !isPlaying) return

        const updateLoop = () => {
            const currentTime = videoElement.currentTime
            if (Math.abs(currentTime - lastSyncedProgressRef.current) >= 0.05) {
                lastSyncedProgressRef.current = currentTime
                setVideoProgress(currentTime)
            }

            rafRef.current = requestAnimationFrame(updateLoop)
        }

        rafRef.current = requestAnimationFrame(updateLoop)

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current)
            }
        }
    }, [isPlaying, setVideoProgress, videoRef])

    const handleBufferingStart = useCallback(() => {
        const videoElement = videoRef.current
        if (!videoElement) return

        shouldResumeAfterBufferRef.current = true
        setIsBuffering(true)
    }, [videoRef, setIsBuffering])

    const handleBufferingEnd = useCallback(() => {
        const videoElement = videoRef.current
        if (!videoElement) return
        if (shouldResumeAfterBufferRef.current) {
            shouldResumeAfterBufferRef.current = false
            videoElement.play().catch((error) => {
                console.warn('Video playback could not resume after buffering:', error)
            })
        }
        setIsBuffering(false)
    }, [videoRef, setIsBuffering])

    const handleRetry = () => {
        const videoElement = videoRef.current
        if (!videoElement) return

        setHasError(false)
        setIsBuffering(true)
        shouldResumeAfterBufferRef.current = false
        videoElement.load()
    }

    const skipVideoBy = useCallback(
        (seconds: number) => {
            const videoElement = videoRef.current
            if (!videoElement) return

            const nextTime = Math.min(
                Math.max(videoElement.currentTime + seconds, 0),
                videoDuration
            )
            videoElement.currentTime = nextTime
            setVideoProgress(nextTime)
        },
        [videoDuration, videoRef, setVideoProgress]
    )

    return (
        <div className='relative h-full w-full'>
            <video
                ref={videoRef}
                src={src}
                loop={repeatVideoAutomatically}
                className={cn(videoViewportVariants({ fit }), className)}

                onPlay={() => {
                    setIsPlaying(true)
                    setIsVolumeControlOpen(false)
                }}

                onPause={() => {
                    const currentTime = videoRef.current?.currentTime ?? 0
                    setIsPlaying(false)
                    lastSyncedProgressRef.current = currentTime
                    setVideoProgress(currentTime)
                    setIsVolumeControlOpen(false)
                }}

                onLoadStart={() => setIsBuffering(true)}

                onLoadedMetadata={(e) => syncDuration(e.currentTarget)}

                onLoadedData={handleBufferingEnd}

                onCanPlay={handleBufferingEnd}

                onCanPlayThrough={handleBufferingEnd}

                onWaiting={handleBufferingStart}

                onStalled={handleBufferingStart}

                onError={(e) => {
                    setIsBuffering(false)
                    setIsPlaying(false)
                    setHasError(true)
                    shouldResumeAfterBufferRef.current = false
                    console.error('Video element failed to stream source asset:', e)
                }}

                controls={false}
                {...props}
            />

            <div
                className={
                    'absolute inset-0 flex items-center justify-center p-[min(1rem,3cqw)]'
                }
                onPointerDown={showControlsTemporarily}
            >
                {showCenterControls && (
                    <div className='flex items-center gap-[min(0.75rem,2.5cqw)]'>
                        {!isBuffering && (
                            <button
                                className={cn(
                                    'flex aspect-square items-center justify-center rounded-xl bg-white/10 p-[min(0.75rem,2.5cqw)] backdrop-blur-xs transition-[opacity,transform] duration-300 hover:cursor-pointer',
                                    areControlsVisible
                                        ? 'opacity-100'
                                        : 'opacity-0 pointer-events-none'
                                )}
                                onPointerUp={(event) => event.stopPropagation()}
                                onClick={(event) => {
                                    event.stopPropagation()
                                    skipVideoBy(-10)
                                }}
                            >
                                <RotateCcw className='h-[min(34px,9cqw)] w-[min(34px,9cqw)] text-white/60' />
                            </button>
                        )}

                        <div
                            className={cn(
                                'flex aspect-square items-center justify-center rounded-2xl bg-white/10 p-[min(1rem,3cqw)] backdrop-blur-xs transition-[opacity,transform] duration-300',
                                !isBuffering && 'hover:cursor-pointer',
                                isBuffering || areControlsVisible
                                    ? 'opacity-100'
                                    : 'opacity-0 pointer-events-none'
                            )}
                            onClick={attemptTogglePlay}
                        >
                            {isBuffering ? (
                                <Loader2
                                    className={cn('animate-spin', centerControlIconClassName)}
                                    color='rgba(255, 255, 255, 0.78)'
                                />
                            ) : isPlaying ? (
                                <Pause
                                    className={cn(centerControlIconClassName, 'text-white/60')}
                                    fill='currentColor'
                                    strokeWidth={0}
                                />
                            ) : (
                                <Play
                                    className={cn(centerControlIconClassName, 'text-white/60')}
                                    fill='currentColor'
                                    strokeWidth={0}
                                />
                            )}
                        </div>

                        {!isBuffering && (
                            <button
                                className={cn(
                                    'flex aspect-square items-center justify-center rounded-xl bg-white/10 p-[min(0.75rem,2.5cqw)] backdrop-blur-xs transition-[opacity,transform] duration-300 hover:cursor-pointer',
                                    areControlsVisible
                                        ? 'opacity-100'
                                        : 'opacity-0 pointer-events-none'
                                )}
                                onPointerUp={(event) => event.stopPropagation()}
                                onClick={(event) => {
                                    event.stopPropagation()
                                    skipVideoBy(10)
                                }}
                            >
                                <RotateCw className='h-[min(34px,9cqw)] w-[min(34px,9cqw)] text-white/60' />
                            </button>
                        )}
                    </div>
                )}
            </div>

            {hasError && (
                <div className='absolute inset-0 z-20 flex flex-col gap-2 items-center justify-center bg-black/80 text-center cursor-default select-none'>
                    <AlertCircle className='mx-auto text-red-300' size={20} />
                    <p className='text-sm text-white font-medium'>Video failed to load</p>
                    <p className='text-sm text-white/70'>
                        The video source could not be found or the browser could not play
                        it.
                    </p>
                    <Button variant='secondary' size='sm' onClick={handleRetry}>
                        Retry
                    </Button>
                </div>
            )}
        </div>
    )
}

interface VideoControlsProps
    extends React.ComponentPropsWithoutRef<'div'> { }

function VideoControls({
    children,
    className = '',
    ...props
}: VideoControlsProps): React.ReactElement {
    const { areControlsShown, autoHideControls, setIsMouseOverControls } =
        useVideo()
    const areControlsVisible = !autoHideControls || areControlsShown

    return (
        <div
            onMouseEnter={() => setIsMouseOverControls(true)}
            onMouseLeave={() => setIsMouseOverControls(false)}
            id='video-controls'
            className={cn(
                'absolute bottom-0 left-0 right-0 px-3 pb-3 pt-3 transition-opacity duration-300',
                'bg-gradient-to-t from-black/95 to-transparent to-90%',
                areControlsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

interface VideoSoundControlProps
    extends React.ComponentPropsWithoutRef<'button'> { }

function VideoSoundControl(
    {
        className = '',
        language = 'en',
        ...props
    }: {
        language?: 'en' | 'zh'
    } & VideoSoundControlProps
) {
    const {
        videoRef,
        toggleMute,
        setVolume,
        isVolumeControlOpen,
        setIsVolumeControlOpen
    } = useVideo()

    const [localVolume, setLocalVolume] = useState<number>(1)
    const [localMuted, setLocalMuted] = useState<boolean>(false)

    const [isVolumeDragging, setIsVolumeDragging] = useState(false)
    const sliderRef = useRef<HTMLDivElement | null>(null)

    const setVolumeFromClientY = useCallback(
        (clientY: number) => {
            if (!sliderRef.current) return
            const rect = sliderRef.current.getBoundingClientRect()
            const y = Math.min(Math.max(clientY - rect.top, 0), rect.height)
            const frac = rect.height ? 1 - y / rect.height : 0
            setVolume(frac)
            toggleMute(frac === 0)
        },
        [setVolume, toggleMute]
    )

    const handleSliderPointerDown = (
        event: React.PointerEvent<HTMLDivElement>
    ) => {
        setIsVolumeDragging(true)
        setIsVolumeControlOpen(true)
        setVolumeFromClientY(event.clientY)
    }

    useEffect(() => {
        if (!isVolumeDragging) return

        const handlePointerMove = (event: PointerEvent) => {
            setVolumeFromClientY(event.clientY)
        }

        const handlePointerUp = () => {
            setIsVolumeDragging(false)
        }

        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerup', handlePointerUp)

        return () => {
            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('pointerup', handlePointerUp)
        }
    }, [isVolumeDragging, setVolumeFromClientY])

    useEffect(() => {
        const videoElement = videoRef.current
        if (!videoElement) return
        const sync = () => {
            setLocalMuted(videoElement.muted)
            setLocalVolume(videoElement.volume)
        }
        sync()
        videoElement.addEventListener('volumechange', sync)
        return () => videoElement.removeEventListener('volumechange', sync)
    }, [videoRef])

    const iconToDisplay = (() => {
        if (localMuted) {
            return <VolumeOff size={18} fill='white' />
        } else if (localVolume < 0.33) {
            return <Volume size={18} fill='white' />
        } else if (localVolume < 0.67) {
            return <Volume1 size={18} fill='white' />
        } else {
            return <Volume2 size={18} fill='white' />
        }
    })()

    return (
        <div className={cn('relative flex items-center gap-1', className)}>
            <button
                type='button'
                onClick={() => toggleMute(!localMuted)}
                className='relative group/button text-white hover:cursor-pointer'
                {...props}
            >
                <span className={cn(
                    'pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-white',
                    'opacity-0 transition-opacity duration-300 select-none group-hover/button:opacity-100',
                    'whitespace-nowrap'
                )}>
                    {localMuted ? { 'en': 'Unmute', 'zh': '取消静音' }[language] : { 'en': 'Mute', 'zh': '静音' }[language] }
                </span>
                {iconToDisplay}
            </button>
            <button
                type='button'
                onClick={() => setIsVolumeControlOpen(!isVolumeControlOpen)}
                className={cn(
                    'text-white hover:cursor-pointer',
                    'whitespace-nowrap'
                )}
                aria-label={isVolumeControlOpen ? { 'en': 'Hide volume', 'zh': '隐藏音量' }[language] : { 'en': 'Show volume', 'zh': '显示音量' }[language] }
            >
                {isVolumeControlOpen ? (
                    <ChevronDown size={16} />
                ) : (
                    <ChevronUp size={16} />
                )}
            </button>
            <div
                className={cn(
                    'absolute -top-22 left-[27px] h-20 w-1 transition-opacity duration-300',
                    isVolumeControlOpen
                        ? 'opacity-100 pointer-events-auto'
                        : 'opacity-0 pointer-events-none'
                )}
            >
                <div
                    ref={sliderRef}
                    className='relative h-full w-full rounded-full bg-neutral-600'
                    onPointerDown={handleSliderPointerDown}
                >
                    <div
                        className='pointer-events-none absolute bottom-0 left-0 w-full rounded-full bg-white'
                        style={{ height: `${localVolume * 100}%` }}
                    />
                </div>
            </div>
        </div>
    )
}

interface VideoPipTriggerProps
    extends React.ComponentPropsWithoutRef<'button'> { }

function VideoPipTrigger(
    {
        language = 'en',
        className = '',
        ...props
    }: {
        language?: 'en' | 'zh',
    } & VideoPipTriggerProps
): React.ReactElement {
    const { isPip, togglePip } = useVideo()

    return (
        <button
            onClick={togglePip}
            className={`relative group/button text-white hover:cursor-pointer ${className}`}
            {...props}
        >
            <span className={cn(
                'pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-white',
                'opacity-0 transition-opacity duration-300 select-none group-hover/button:opacity-100 whitespace-nowrap',
                'whitespace-nowrap'
            )}>
                {isPip ? { 'en': 'Disable PiP', 'zh': '禁用画中画' }[language] : { 'en': 'Enable PiP', 'zh': '启用画中画' }[language] }
            </span>
            <PictureInPicture2 size={18} />
        </button>
    )
}

interface VideoPlayTriggerProps
    extends React.ComponentPropsWithoutRef<'button'> { }

function VideoPlayTrigger(
    {
        language = 'en',
        className = '',
        ...props
    }: {
        language?: 'en' | 'zh',
    } & VideoPlayTriggerProps
): React.ReactElement {
    const { isPlaying, isBuffering, attemptTogglePlay } = useVideo()

    return (
        <button
            onClick={attemptTogglePlay}
            disabled={isBuffering}
            aria-busy={isBuffering}
            className={`relative group/button text-white hover:cursor-pointer disabled:cursor-wait disabled:opacity-60 ${className}`}
            {...props}
        >
            <span className={cn(
                'pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-white',
                'opacity-0 transition-opacity duration-300 select-none group-hover/button:opacity-100',
                'whitespace-nowrap'
            )}>
                {isBuffering ? '' : isPlaying ? { 'en': 'Pause', 'zh': '暂停' }[language] : { 'en': 'Play', 'zh': '播放' }[language] }
            </span>
            {isBuffering ? (
                <Loader2 className='animate-spin' size={18} />
            ) : isPlaying ? (
                <Pause fill='white' size={18} />
            ) : (
                <Play fill='white' size={18} />
            )}
        </button>
    )
}

interface VideoFullscreenTriggerProps
    extends React.ComponentPropsWithoutRef<'button'> { }

function VideoFullscreenTrigger(
    {
        language = 'en',
        className = '',
        ...props
    }: {
        language?: 'en' | 'zh',
    } & VideoFullscreenTriggerProps
): React.ReactElement {
    const { toggleFullscreen, isFullscreen } = useVideo()

    return (
        <button
            onClick={toggleFullscreen}
            className={`relative group/button text-white hover:cursor-pointer ${className}`}
            {...props}
        >
            <span className={cn(
                'pointer-events-none absolute -top-7 -translate-x-1/2 -left-3 text-xs text-white',
                'opacity-0 transition-opacity duration-300 select-none group-hover/button:opacity-100',
                'whitespace-nowrap'
            )}>
                {isFullscreen ? { 'en': 'Exit Full Screen', 'zh': '退出全屏' }[language] : { 'en': 'Full Screen', 'zh': '全屏' }[language] }
            </span>
            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </button>
    )
}

interface VideoProgressBarProps
    extends React.ComponentPropsWithoutRef<'div'> { }

function VideoProgressBar({
    className = '',
    ...props
}: VideoProgressBarProps): React.ReactElement {
    const { videoProgress, videoDuration } = useVideo()

    return (
        <div
            className={`flex-1 ${className} flex items-center justify-center gap-2`}
        >
            <span className='text-sm text-white select-none'>
                {formatTime(videoProgress)}
            </span>
            <VideoSeekSlider {...props} />
            <span className='text-sm text-white select-none'>
                {formatTime(videoDuration)}
            </span>
        </div>
    )
}

function VideoSeekSlider({
    className = '',
    ...props
}: React.ComponentPropsWithoutRef<'div'>): React.ReactElement {

    const wasPlayingRef = useRef<boolean>(false)

    const {
        videoDuration,
        videoProgress,
        videoRef,
        setVideoProgress,
        setIsVolumeControlOpen
    } = useVideo()

    const frac = videoDuration > 0 ? videoProgress / videoDuration : 0

    const progressBarContainerRef = useRef<HTMLDivElement | null>(null)

    const [hover, setHover] = useState<{ x: number; time: number } | null>(null)
    const [isHovering, setIsHovering] = useState(false)
    const [isDragging, setIsDragging] = useState(false)

    const getXOffsetandFraction = useCallback(
        (clientX: number): { x: number; frac: number } | undefined => {
            if (!progressBarContainerRef.current || videoDuration === 0) return
            const rect = progressBarContainerRef.current.getBoundingClientRect()
            const x = Math.min(Math.max(clientX - rect.left, 0), rect.width)
            const frac = rect.width ? x / rect.width : 0
            return { x, frac }
        },
        [videoDuration]
    )

    const handleSeekVideo = useCallback(
        (newFrac: number) => {
            if (!videoRef.current || videoDuration === 0) return
            const newTime = newFrac * videoDuration
            videoRef.current.currentTime = newTime
            setVideoProgress(newTime)
            setIsVolumeControlOpen(false)
        },
        [videoDuration, videoRef, setVideoProgress, setIsVolumeControlOpen]
    )

    const updateHoverFromClientX = useCallback(
        (clientX: number) => {
            const val = getXOffsetandFraction(clientX)
            if (!val) return
            setHover({ x: val.x, time: val.frac * videoDuration })
        },
        [videoDuration, getXOffsetandFraction]
    )

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        updateHoverFromClientX(event.clientX)
        setIsHovering(true)
    }

    const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
        const val = getXOffsetandFraction(event.clientX)
        if (!val) return
        setHover({ x: val.x, time: val.frac * videoDuration })
        setIsHovering(true)
        setIsDragging(true)
        if (!videoRef.current) return
        wasPlayingRef.current = !videoRef.current.paused
        videoRef.current.pause()
        handleSeekVideo(val.frac)
    }

    const handleMouseLeave = () => {
        if (!isDragging) {
            setIsHovering(false)
        }
    }

    const handlePointerMove = useCallback(
        (event: PointerEvent) => {
            updateHoverFromClientX(event.clientX)
            const val = getXOffsetandFraction(event.clientX)
            if (!val) return
            handleSeekVideo(val.frac)
        },
        [updateHoverFromClientX, getXOffsetandFraction, handleSeekVideo]
    )

    const handlePointerUp = useCallback(() => {
        setIsDragging(false)
        setIsHovering(false)
        if (videoRef.current && wasPlayingRef.current) {
            videoRef.current.play().catch((error) => {
                console.warn('Video playback could not resume after seeking:', error)
            })
        }
        wasPlayingRef.current = false
    }, [videoRef])

    useEffect(() => {
        if (!isDragging) return

        window.addEventListener('pointermove', handlePointerMove)
        window.addEventListener('pointerup', handlePointerUp)

        return () => {
            window.removeEventListener('pointermove', handlePointerMove)
            window.removeEventListener('pointerup', handlePointerUp)
        }
    }, [
        isDragging,
        videoDuration,
        updateHoverFromClientX,
        handleSeekVideo,
        getXOffsetandFraction,
        handlePointerMove,
        handlePointerUp
    ])

    return (
        <div
            id='video-progress-bar'
            ref={progressBarContainerRef}
            className={cn(
                'relative flex-1 h-4 translate-y-[0.4px] flex items-center',
                className
            )}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onPointerDown={handlePointerDown}
            {...props}
        >
            <div
                id='video-progress-bar-bg'
                className='h-1 w-full rounded-full bg-neutral-600'
            />
            <div
                id='video-progress-bar-fill'
                className='pointer-events-none absolute left-0 h-1 rounded-full bg-white'
                style={{ width: `${frac * 100}%` }}
            />

            {hover && (
                <div
                    id='video-progress-bar-hover-time'
                    className={cn(
                        'pointer-events-none absolute -top-13 z-10 rounded text-sm text-white transition-opacity duration-300 flex flex-col items-center gap-[3px] select-none',
                        isHovering ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{ left: hover.x, transform: 'translateX(-50%)' }}
                >
                    <div className='flex flex-row items-center gap-1'>
                        <span>{formatTime(hover.time)}</span>
                        <span className='opacity-50 whitespace-nowrap'>{`/ ${formatTime(videoDuration)}`}</span>
                    </div>
                    <div>|</div>
                </div>
            )}
        </div>
    )
}

function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
}

export {
    useVideo,
    VideoProvider,
    type VideoRootProps,
    VideoRoot,
    type VideoViewportProps,
    VideoViewport,
    type VideoControlsProps,
    VideoControls,
    type VideoSoundControlProps,
    VideoSoundControl,
    type VideoPipTriggerProps,
    VideoPipTrigger,
    type VideoPlayTriggerProps,
    VideoPlayTrigger,
    type VideoFullscreenTriggerProps,
    VideoFullscreenTrigger,
    type VideoProgressBarProps,
    VideoProgressBar
}
