"use client";

import { useState, useRef, useCallback, useEffect } from "react";

type Phase = "idle" | "scanning" | "translated";

const SCAN_DURATION = 1800;
const FADE_DURATION = 400;
const TRANSLATED_BADGE_DURATION = 1800;

export function PhoneMockup() {
  const [phase, setPhase]               = useState<Phase>("idle");
  const [scanProgress, setScanProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [fadeIn, setFadeIn]             = useState(false);
  const [showTranslatedBadge, setShowTranslatedBadge] = useState(false);

  const scrollRef  = useRef<HTMLDivElement>(null);
  const rafRef     = useRef<number | null>(null);
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const translatedBadgeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const resetMockup = useCallback((behavior: ScrollBehavior = "smooth") => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (translatedBadgeTimerRef.current) clearTimeout(translatedBadgeTimerRef.current);
    setPhase("idle");
    setScanProgress(0);
    setFadeIn(false);
    setShowTranslatedBadge(false);
    setScrollProgress(0);
    scrollRef.current?.scrollTo({ top: 0, behavior });
  }, []);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const p = el.scrollTop / (el.scrollHeight - el.clientHeight);
    setScrollProgress(Math.min(1, Math.max(0, p)));
  }, []);

  const isScanning   = phase === "scanning";
  const isTranslated = phase === "translated";
  const isActive     = phase !== "idle";
  const showTranslated = isTranslated || fadeIn;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
    if (translatedBadgeTimerRef.current) clearTimeout(translatedBadgeTimerRef.current);
  }, []);

  useEffect(() => {
    if (!isTranslated) {
      setShowTranslatedBadge(false);
      return;
    }

    setShowTranslatedBadge(true);
    if (translatedBadgeTimerRef.current) clearTimeout(translatedBadgeTimerRef.current);
    translatedBadgeTimerRef.current = setTimeout(() => {
      setShowTranslatedBadge(false);
    }, TRANSLATED_BADGE_DURATION);

    return () => {
      if (translatedBadgeTimerRef.current) clearTimeout(translatedBadgeTimerRef.current);
    };
  }, [isTranslated]);

  const handleTranslate = useCallback(() => {
    if (phase === "scanning") return;

    // Reset to original
    if (phase === "translated") {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (timerRef.current) clearTimeout(timerRef.current);
      setFadeIn(false);
      timerRef.current = setTimeout(() => {
        resetMockup("smooth");
      }, FADE_DURATION);
      return;
    }

    // Start scan
    setPhase("scanning");
    setScanProgress(0);
    setFadeIn(false);
    const startTime = Date.now();

    const scanFrame = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(100, (elapsed / SCAN_DURATION) * 100);
      setScanProgress(progress);
      if (progress < 100) {
        rafRef.current = requestAnimationFrame(scanFrame);
      } else {
        timerRef.current = setTimeout(() => {
          setFadeIn(true);
          timerRef.current = setTimeout(() => setPhase("translated"), FADE_DURATION);
        }, 150);
      }
    };
    rafRef.current = requestAnimationFrame(scanFrame);
  }, [phase, resetMockup]);

  return (
    <div className="relative w-[min(84vw,320px)] h-[min(168vw,640px)] min-h-[520px] max-h-[640px] mx-auto">
      {/* Phone body */}
      <div className="relative w-full h-full bg-[#111] rounded-[3rem] border-[3px] border-[#333] shadow-2xl shadow-black/60 overflow-hidden">
          {/* Frame reflection */}
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/[0.08] to-transparent pointer-events-none z-40" />

          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#1a1a2e] ring-1 ring-[#333]" />
          </div>

          {/* Screen */}
          <div className="absolute inset-[3px] rounded-[2.7rem] overflow-hidden bg-black">

            {/* SCROLLABLE CONTENT */}
            <div
              ref={scrollRef}
              className="absolute inset-0 overflow-y-auto overflow-x-hidden scrollbar-hide"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="relative">

                {/* Original image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screen-original.webp"
                  alt="Original"
                  className="w-full select-none block"
                  draggable={false}
                  style={{
                    position: showTranslated ? "absolute" : "relative",
                    top: 0, left: 0, width: "100%",
                    opacity: fadeIn ? 0 : 1,
                    transition: `opacity ${FADE_DURATION}ms ease`,
                    zIndex: showTranslated ? 1 : "auto",
                  }}
                />

                {/* Translated image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/screen-translated.webp"
                  alt="Translated"
                  className="w-full select-none block"
                  draggable={false}
                  style={{
                    display: showTranslated ? "block" : "none",
                    opacity: fadeIn ? 1 : 0,
                    transition: `opacity ${FADE_DURATION}ms ease`,
                  }}
                />

                {/* SCAN LINE */}
                {isScanning && (
                  <div
                    className="absolute left-0 right-0 pointer-events-none z-10"
                    style={{ top: `${scanProgress}%` }}
                  >
                    <div
                      className="w-full h-[3px]"
                      style={{
                        background: "linear-gradient(90deg, transparent 0%, #00DFFF 20%, #fff 50%, #00DFFF 80%, transparent 100%)",
                        boxShadow: "0 0 12px 6px rgba(0,223,255,0.5), 0 0 40px 10px rgba(0,223,255,0.2)",
                      }}
                    />
                    <div
                      className="w-full pointer-events-none"
                      style={{ height: "30px", background: "linear-gradient(to bottom, rgba(0,223,255,0.08), transparent)" }}
                    />
                  </div>
                )}

                {/* AI grid mesh */}
                {isScanning && (
                  <div
                    className="absolute inset-0 pointer-events-none z-[5]"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(0,223,255,0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(0,223,255,0.04) 1px, transparent 1px)
                      `,
                      backgroundSize: "20px 20px",
                    }}
                  />
                )}
              </div>
            </div>

            {/* SCROLL BAR */}
            <div className="absolute top-12 right-[2px] bottom-12 w-[3px] z-20 pointer-events-none">
              <div className="relative w-full h-full rounded-full bg-white/10">
                <div
                  className="absolute top-0 left-0 w-full rounded-full transition-all duration-150"
                  style={{
                    height: `${Math.max(6, (1 / 12) * 100)}%`,
                    top: `${scrollProgress * (100 - (1 / 12) * 100)}%`,
                    backgroundColor: isActive ? "#00DFFF" : "rgba(255,107,53,0.7)",
                  }}
                />
              </div>
            </div>

            {/* STATUS BADGE */}
            {isScanning && (
              <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm whitespace-nowrap">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00DFFF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#00DFFF]" />
                </span>
                <span className="text-[8px] font-mono text-white tracking-wider uppercase">
                  AI Translating · {Math.round(scanProgress)}%
                </span>
              </div>
            )}

            {showTranslatedBadge && (
              <div
                className="absolute top-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 backdrop-blur-sm whitespace-nowrap animate-fade-in-quick"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
                <span className="text-[8px] font-mono text-white tracking-wider uppercase">
                  Translated
                </span>
              </div>
            )}

            {/* TRANSLATE FAB */}
            <button
              onClick={handleTranslate}
              disabled={isScanning}
              className={`absolute bottom-4 right-3 z-30 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer disabled:cursor-not-allowed ${
                isActive
                  ? "bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/40"
                  : "bg-white shadow-lg shadow-black/30 hover:scale-110"
              }`}
            >
              {isTranslated ? (
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : isScanning ? (
                <svg className="w-5 h-5 text-white animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeOpacity="0.3" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-[#FF6B35]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 8 6 6" /><path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" /><path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" /><path d="M14 18h6" />
                </svg>
              )}
              {!isActive && (
                <span className="absolute inset-0 rounded-full border-2 border-[#FF6B35]/40 animate-ping-slow" />
              )}
            </button>

            {/* Scroll hint */}
            {!isActive && scrollProgress < 0.05 && (
              <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-0.5 animate-bounce">
                <span className="text-[8px] text-white/70 font-medium">Scroll to read</span>
                <svg className="w-3 h-3 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M19 14l-7 7m0 0l-7-7" />
                </svg>
              </div>
            )}
          </div>
      </div>

      {/* Floating language badges */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#FF6B35] to-[#A78BFA] rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: "3s" }}>
        <span className="text-2xl">🇯🇵</span>
      </div>
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#60A5FA] to-[#34D399] rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}>
        <span className="text-xl">🇺🇸</span>
      </div>
      <div className="absolute top-1/4 -left-8 w-14 h-14 bg-gradient-to-br from-[#A78BFA] to-[#F472B6] rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: "2.8s", animationDelay: "1s" }}>
        <span className="text-lg">🇰🇷</span>
      </div>
      <div className="absolute top-1/2 -right-7 w-12 h-12 bg-gradient-to-br from-[#34D399] to-[#60A5FA] rounded-xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDuration: "2.6s", animationDelay: "0.8s" }}>
        <span className="text-base">🇻🇳</span>
      </div>

    </div>
  );
}
