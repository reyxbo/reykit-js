import { default as React } from 'react';
import { VariantProps } from 'class-variance-authority';
interface VideoContextType {
    videoRef: React.RefObject<HTMLVideoElement | null>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    isPlaying: boolean;
    isBuffering: boolean;
    hasError: boolean;
    videoProgress: number;
    videoDuration: number;
    areControlsShown: boolean;
    isFullscreen: boolean;
    isPip: boolean;
    isVolumeControlOpen: boolean;
    repeatVideoAutomatically: boolean;
    autoPlayVideoUponVisible: boolean;
    autoHideControls: boolean;
    showCenterControls: boolean;
    attemptTogglePlay: () => void;
    toggleFullscreen: () => void;
    setIsPlaying: (playing: boolean) => void;
    setIsBuffering: (buffering: boolean) => void;
    setHasError: (hasError: boolean) => void;
    setVideoProgress: (progress: number) => void;
    setVideoDuration: (videoDuration: number) => void;
    setShowControls: (show: boolean) => void;
    showControlsTemporarily: () => void;
    setVolume: (x: number) => void;
    setIsMouseOverControls: (x: boolean) => void;
    toggleMute: (x: boolean) => void;
    togglePip: () => void;
    setIsVolumeControlOpen: (x: boolean) => void;
    clearControlsTimeout: () => void;
}
declare function useVideo(): VideoContextType;
declare function VideoProvider({ repeat, auto, autoHideControls, showCenterControls, children }: {
    repeat: boolean;
    auto: boolean;
    autoHideControls: boolean;
    showCenterControls?: boolean;
    children: React.ReactNode;
}): React.ReactElement;
interface VideoRootProps extends React.ComponentPropsWithoutRef<'div'> {
    repeat?: boolean;
    auto?: boolean;
    autoHideControls?: boolean;
    showCenterControls?: boolean;
}
declare function VideoRoot({ children, className, repeat, auto, autoHideControls, showCenterControls, ...props }: VideoRootProps): import("react/jsx-runtime").JSX.Element;
declare const videoViewportVariants: (props?: ({
    fit?: "fill" | "none" | "contain" | "cover" | "scaleDown" | null | undefined;
} & import('class-variance-authority/dist/types').ClassProp) | undefined) => string;
interface VideoViewportProps extends Omit<React.ComponentPropsWithoutRef<'video'>, 'controls'>, VariantProps<typeof videoViewportVariants> {
}
declare function VideoViewport({ src, fit, className, ...props }: VideoViewportProps): import("react/jsx-runtime").JSX.Element;
interface VideoControlsProps extends React.ComponentPropsWithoutRef<'div'> {
}
declare function VideoControls({ children, className, ...props }: VideoControlsProps): React.ReactElement;
interface VideoSoundControlProps extends React.ComponentPropsWithoutRef<'button'> {
}
declare function VideoSoundControl({ className, language, ...props }: {
    language?: 'en' | 'zh';
} & VideoSoundControlProps): import("react/jsx-runtime").JSX.Element;
interface VideoPipTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
}
declare function VideoPipTrigger({ language, className, ...props }: {
    language?: 'en' | 'zh';
} & VideoPipTriggerProps): React.ReactElement;
interface VideoPlayTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
}
declare function VideoPlayTrigger({ language, className, ...props }: {
    language?: 'en' | 'zh';
} & VideoPlayTriggerProps): React.ReactElement;
interface VideoFullscreenTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
}
declare function VideoFullscreenTrigger({ language, className, ...props }: {
    language?: 'en' | 'zh';
} & VideoFullscreenTriggerProps): React.ReactElement;
interface VideoProgressBarProps extends React.ComponentPropsWithoutRef<'div'> {
}
declare function VideoProgressBar({ className, ...props }: VideoProgressBarProps): React.ReactElement;
export { useVideo, VideoProvider, type VideoRootProps, VideoRoot, type VideoViewportProps, VideoViewport, type VideoControlsProps, VideoControls, type VideoSoundControlProps, VideoSoundControl, type VideoPipTriggerProps, VideoPipTrigger, type VideoPlayTriggerProps, VideoPlayTrigger, type VideoFullscreenTriggerProps, VideoFullscreenTrigger, type VideoProgressBarProps, VideoProgressBar };
