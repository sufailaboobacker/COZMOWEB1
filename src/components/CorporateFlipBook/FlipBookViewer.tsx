import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Grid,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  BookOpen,
  Sparkles,
} from "lucide-react";
import { CORPORATE_SLIDES, SlideData } from "./CorporateSlides";
import { playPageFlipSound } from "./soundUtils";

interface FlipBookViewerProps {
  slides?: SlideData[];
  autoPlayInterval?: number;
}

export function FlipBookViewer({
  slides = CORPORATE_SLIDES,
  autoPlayInterval = 5000,
}: FlipBookViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showThumbnails, setShowThumbnails] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSlides = slides.length;

  // Auto-play presentation timer
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        handleNext();
      }, autoPlayInterval);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        handleNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "Escape" && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, isFullscreen]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
    if (soundEnabled) {
      playPageFlipSound();
    }
  };

  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      setDirection("next");
      setCurrentIndex((prev) => prev + 1);
      if (soundEnabled) playPageFlipSound();
    } else if (isPlaying) {
      // Loop back to start in autoplay mode
      setDirection("next");
      setCurrentIndex(0);
      if (soundEnabled) playPageFlipSound();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setDirection("prev");
      setCurrentIndex((prev) => prev - 1);
      if (soundEnabled) playPageFlipSound();
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  const currentSlide = slides[currentIndex];

  // 3D Flip Variant Animations
  const pageVariants = {
    initial: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? 90 : -90,
      opacity: 0,
      scale: 0.95,
      transformOrigin: dir === "next" ? "left center" : "right center",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)",
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 1, 0.5, 1],
      },
    },
    exit: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? -90 : 90,
      opacity: 0,
      scale: 0.95,
      transformOrigin: dir === "next" ? "right center" : "left center",
      transition: {
        duration: 0.5,
        ease: [0.5, 0, 0.75, 0],
      },
    }),
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full flex flex-col items-center justify-between bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${
        isFullscreen ? "h-screen rounded-none p-4" : "min-h-[680px] p-6"
      }`}
      style={{ perspective: "1500px" }}
    >
      {/* Top Header Bar */}
      <div className="w-full flex items-center justify-between z-20 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
              Cozmo Travel Interactive Flipbook
              <span className="bg-blue-600/20 text-blue-400 text-[10px] px-2 py-0.5 rounded-full border border-blue-500/30 flex items-center gap-1 font-mono">
                <Sparkles className="w-3 h-3" /> 3D Presentation
              </span>
            </h3>
            <p className="text-xs text-slate-400">
              Slide {currentIndex + 1} of {totalSlides}: <span className="text-blue-300 font-medium">{currentSlide.title}</span>
            </p>
          </div>
        </div>

        {/* Top Control Buttons */}
        <div className="flex items-center gap-2">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? "Sound Effects On" : "Sound Effects Off"}
            className={`p-2 rounded-xl border transition-all ${
              soundEnabled
                ? "bg-blue-600/20 border-blue-500/40 text-blue-300 hover:bg-blue-600/30"
                : "bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-700"
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Thumbnail Tray Toggle */}
          <button
            onClick={() => setShowThumbnails(!showThumbnails)}
            title="Toggle Thumbnails"
            className={`p-2 rounded-xl border transition-all ${
              showThumbnails
                ? "bg-blue-600/20 border-blue-500/40 text-blue-300 hover:bg-blue-600/30"
                : "bg-slate-800/80 border-slate-700 text-slate-400 hover:bg-slate-700"
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>

          {/* Zoom controls */}
          <div className="flex items-center bg-slate-800/80 rounded-xl border border-slate-700 p-0.5">
            <button
              onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.1))}
              title="Zoom Out"
              className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="text-[11px] font-mono px-2 text-slate-400 min-w-[36px] text-center">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button
              onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
              title="Zoom In"
              className="p-1.5 hover:bg-slate-700 rounded-lg text-slate-300"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
            {zoomLevel !== 1 && (
              <button
                onClick={() => setZoomLevel(1)}
                title="Reset Zoom"
                className="p-1.5 hover:bg-slate-700 rounded-lg text-blue-400"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            className="p-2 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-all"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Flipbook Stage */}
      <div className="relative my-auto w-full flex-1 flex items-center justify-center py-4 overflow-hidden">
        {/* Previous Button Left Overlay */}
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className={`absolute left-2 md:left-6 z-30 p-3 rounded-full bg-slate-800/90 border border-slate-700/80 text-white shadow-xl backdrop-blur-md transition-all ${
            currentIndex === 0
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-blue-600 hover:border-blue-500 hover:scale-110 active:scale-95"
          }`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* 3D Slide Book Display Container */}
        <div
          className="relative w-[860px] max-w-[90vw] aspect-[16/10] max-h-[520px] transition-transform duration-300 ease-out"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Subtle Spine & Drop Shadow */}
          <div className="absolute inset-0 bg-black/40 blur-xl rounded-3xl -z-10 transform translate-y-4 scale-[0.98]" />

          {/* Flip Animated Container */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentSlide.id}
              custom={direction}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/60 bg-white"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Spine shadow overlay line */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black/15 to-transparent z-20 pointer-events-none" />

              {/* Render Slide Content */}
              {currentSlide.component}
            </motion.div>
          </AnimatePresence>

          {/* Clickable Corner Turn Handles */}
          {currentIndex < totalSlides - 1 && (
            <div
              onClick={handleNext}
              className="absolute right-0 top-0 bottom-0 w-16 cursor-pointer group z-30 flex items-center justify-end pr-2"
              title="Next Slide"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600/30 group-hover:bg-blue-600 group-hover:scale-110 border border-blue-400/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          )}

          {currentIndex > 0 && (
            <div
              onClick={handlePrev}
              className="absolute left-0 top-0 bottom-0 w-16 cursor-pointer group z-30 flex items-center justify-start pl-2"
              title="Previous Slide"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600/30 group-hover:bg-blue-600 group-hover:scale-110 border border-blue-400/50 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                <ChevronLeft className="w-5 h-5 text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Next Button Right Overlay */}
        <button
          onClick={handleNext}
          disabled={currentIndex === totalSlides - 1}
          className={`absolute right-2 md:right-6 z-30 p-3 rounded-full bg-slate-800/90 border border-slate-700/80 text-white shadow-xl backdrop-blur-md transition-all ${
            currentIndex === totalSlides - 1
              ? "opacity-30 cursor-not-allowed"
              : "hover:bg-blue-600 hover:border-blue-500 hover:scale-110 active:scale-95"
          }`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Thumbnails Drawer (Expandable) */}
      <AnimatePresence>
        {showThumbnails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-slate-950/90 border-t border-slate-800 p-4 rounded-2xl mb-4 overflow-hidden"
          >
            <div className="flex items-center justify-center gap-4 overflow-x-auto py-2">
              {slides.map((s, idx) => (
                <div
                  key={s.id}
                  onClick={() => goToSlide(idx)}
                  className={`relative flex-shrink-0 w-36 aspect-[16/10] rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                    idx === currentIndex
                      ? "border-blue-500 ring-4 ring-blue-500/20 scale-105"
                      : "border-slate-700 opacity-60 hover:opacity-100 hover:border-slate-500"
                  }`}
                >
                  <div className="w-full h-full pointer-events-none transform scale-[0.25] origin-top-left w-[400%] h-[400%]">
                    {s.component}
                  </div>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-1 left-2 text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5 rounded font-mono">
                    {idx + 1}. {s.title}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Controls Toolbar */}
      <div className="w-full z-20 pt-3 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Auto Play / Navigation controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isPlaying
                ? "bg-amber-500/20 border-amber-500/40 text-amber-300 hover:bg-amber-500/30"
                : "bg-blue-600/20 border-blue-500/40 text-blue-300 hover:bg-blue-600/30"
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4 fill-current" /> Pause Autoplay
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" /> Presentation Mode
              </>
            )}
          </button>

          <span className="text-xs text-slate-400 hidden md:inline">
            Use <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-300">←</kbd> <kbd className="bg-slate-800 px-1.5 py-0.5 rounded border border-slate-700 text-slate-300">→</kbd> keys to flip pages
          </span>
        </div>

        {/* Page Dots / Scrub Navigation */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentIndex
                  ? "w-8 bg-blue-500 shadow-md shadow-blue-500/50"
                  : "w-2.5 bg-slate-700 hover:bg-slate-500"
              }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
