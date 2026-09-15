"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
} from "lucide-react";
import { formatTime } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  aspectRatio?: "9:16" | "16:9" | "4:5";
  autoPlay?: boolean;
  loop?: boolean;
  showControls?: boolean;
  className?: string;
  title?: string;
}

export default function VideoPlayer({
  src,
  poster,
  aspectRatio = "16:9",
  autoPlay = true,
  loop = true,
  showControls = true,
  className = "",
  title,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      if (!loop) setIsPlaying(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, [loop]);

  const togglePlay = () => {
    setHasInteracted(true);
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    setHasInteracted(true);
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return;
    const seekTo = (parseFloat(e.target.value) / 100) * duration;
    videoRef.current.currentTime = seekTo;
    setCurrentTime(seekTo);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Aspect ratio classes
  const aspectClass =
    aspectRatio === "9:16"
      ? "aspect-[9/16] max-h-[85vh] mx-auto"
      : aspectRatio === "4:5"
      ? "aspect-[4/5] mx-auto"
      : "aspect-video w-full";

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative overflow-hidden bg-black border border-border select-none ${aspectClass} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={isMuted}
        playsInline
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
      />

      {/* Subtle Dark Vignette */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 group-hover:opacity-80 transition-opacity" />

      {/* Center Big Play Button (when paused) */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          data-cursor="PLAY"
          className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/90 text-black flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200"
          aria-label="Play Video"
        >
          <Play className="w-8 h-8 fill-black translate-x-0.5" />
        </button>
      )}

      {/* Unmute prompt banner if video is playing muted and user hasn't interacted yet */}
      {autoPlay && isPlaying && isMuted && !hasInteracted && (
        <button
          onClick={toggleMute}
          className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-black/80 border border-border backdrop-blur-md text-[11px] font-mono text-white/90 hover:text-white hover:border-white/50 flex items-center gap-1.5 transition-all"
        >
          <VolumeX className="w-3.5 h-3.5 text-accent" />
          <span>CLICK TO UNMUTE</span>
        </button>
      )}

      {/* Title tag on top left */}
      {title && (
        <div className="absolute top-4 left-4 z-20 text-[11px] font-mono tracking-widest text-neutral-300 bg-black/60 px-3 py-1 border border-border/40 backdrop-blur-sm">
          {title}
        </div>
      )}

      {/* Player Controls Bar */}
      {showControls && (
        <div
          className={`absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-200 ${
            isHovered || !isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Progress Bar */}
          <div className="relative mb-3 flex items-center">
            <input
              type="range"
              min="0"
              max="100"
              value={duration ? (currentTime / duration) * 100 : 0}
              onChange={handleSeek}
              className="w-full h-1 bg-white/20 rounded-none appearance-none cursor-pointer accent-accent"
              style={{
                background: `linear-gradient(to right, #B8FF3D ${
                  duration ? (currentTime / duration) * 100 : 0
                }%, rgba(255,255,255,0.2) ${
                  duration ? (currentTime / duration) * 100 : 0
                }%)`,
              }}
            />
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between text-xs text-neutral-300">
            <div className="flex items-center space-x-3">
              <button
                onClick={togglePlay}
                className="hover:text-white transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current" />
                )}
              </button>

              <button
                onClick={toggleMute}
                className="hover:text-white transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              <span className="font-mono text-[11px] text-neutral-400">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-[10px] font-mono text-neutral-500 hidden sm:inline-block">
                4K UHD // AI GENERATED
              </span>
              <button
                onClick={toggleFullscreen}
                className="hover:text-white transition-colors"
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
