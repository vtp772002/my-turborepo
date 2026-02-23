"use client";

import { useEffect, useState } from "react";
import { PhoneMockup } from "./PhoneMockup";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-[150px] opacity-25" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#A78BFA] rounded-full blur-[180px] opacity-20" />
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-[#60A5FA] rounded-full blur-[120px] opacity-25" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] backdrop-blur-sm mb-8 ${
                mounted ? "animate-fade-in-scale" : "opacity-0"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
              <span className="text-sm font-mono text-[var(--color-text-secondary)] font-medium">
                🚧 Prototype · Android · Early Access 2026
              </span>
            </div>

            {/* Main heading */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-[0.95] tracking-tight text-[var(--color-text-primary)] ${
                mounted ? "animate-fade-in-up stagger-1" : "opacity-0"
              }`}
            >
              Translate Your
              <br />
              <span className="gradient-text">Screen Instantly</span>
            </h1>

            {/* Subheading */}
            <p
              className={`text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed ${
                mounted ? "animate-fade-in-up stagger-2" : "opacity-0"
              }`}
            >
              Real-time screen translation powered by AI. Built for manga readers
              and gamers who want to enjoy foreign content naturally — without
              interrupting their experience.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center ${
                mounted ? "animate-fade-in-up stagger-3" : "opacity-0"
              }`}
            >
              {/* Waitlist CTA */}
              <a
                href="mailto:toan@nlpvisions.com?subject=NLPvision Early Access"
                className="group flex items-center gap-3 px-8 py-4 bg-[#FF6B35] text-white rounded-xl hover:bg-[#FF8C61] transition-all hover:scale-105 font-medium"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Join the Waitlist — Be First to Try
              </a>
            </div>

            {/* Stats */}
            <div
              className={`mt-12 flex flex-wrap justify-center lg:justify-start gap-8 ${
                mounted ? "animate-fade-in-up stagger-4" : "opacity-0"
              }`}
            >
              {[
                { value: "✦", label: "Powered by Gemini AI" },
                { value: "✦", label: "On-device OCR" },
                { value: "✦", label: "Android" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left flex items-center gap-2">
                  <div className="text-xl sm:text-2xl gradient-text font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-[var(--color-text-secondary)] font-mono">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Interactive Phone mockup */}
          <div
            className={`relative flex justify-center items-center ${
              mounted ? "animate-fade-in-up stagger-3" : "opacity-0"
            }`}
          >
            <PhoneMockup />
          </div>
        </div>

        {/* Try it hint */}
        <div
          className={`mt-12 sm:mt-8 text-center ${mounted ? "animate-fade-in-up stagger-5" : "opacity-0"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-secondary)]/50 border border-[var(--color-border)] rounded-full">
            <svg
              className="w-4 h-4 text-[#FF6B35]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <span className="text-sm text-[var(--color-text-secondary)]">
              Try it!{" "}
              <span className="text-[var(--color-text-primary)] font-medium">
                Tap the translate bubble
              </span>{" "}
              and scroll through the manga
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[var(--color-border-light)] rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
