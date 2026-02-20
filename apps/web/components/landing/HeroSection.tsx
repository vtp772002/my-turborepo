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
                Coming soon
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
              Real-time screen translation powered by AI. Translate any text on
              your screen - games, apps, videos, documents - in 100+ languages
              without leaving your app.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center ${
                mounted ? "animate-fade-in-up stagger-3" : "opacity-0"
              }`}
            >
              {/* App Store Button */}
              <a
                href="#download"
                className="group flex items-center gap-3 px-6 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-light)] rounded-xl hover:border-[var(--color-text-primary)] transition-all hover:scale-105"
              >
                <svg
                  className="w-8 h-8 text-[var(--color-text-primary)]"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                    Download on the
                  </div>
                  <div className="text-base font-semibold text-[var(--color-text-primary)]">
                    App Store
                  </div>
                </div>
              </a>

              {/* Google Play Button */}
              <a
                href="#download"
                className="group flex items-center gap-3 px-6 py-3 bg-[var(--color-bg-secondary)] border border-[var(--color-border-light)] rounded-xl hover:border-[var(--color-text-primary)] transition-all hover:scale-105"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path
                    fill="#34D399"
                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
                  />
                  <path
                    fill="#FF6B35"
                    d="M14.5 12.708l2.302 2.302-10.937 6.298 8.635-8.6z"
                  />
                  <path
                    fill="#FBBF24"
                    d="M19.76 10.322l-2.96 1.69-2.3-2.304 2.3-2.302 2.96 1.69c.893.512.893 1.714 0 2.226z"
                  />
                  <path
                    fill="#60A5FA"
                    d="M5.865 2.692l10.937 6.298-2.302 2.302-8.635-8.6z"
                  />
                </svg>
                <div className="text-left">
                  <div className="text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider">
                    Get it on
                  </div>
                  <div className="text-base font-semibold text-[var(--color-text-primary)]">
                    Google Play
                  </div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div
              className={`mt-12 flex flex-wrap justify-center lg:justify-start gap-8 ${
                mounted ? "animate-fade-in-up stagger-4" : "opacity-0"
              }`}
            >
              {[
                { value: "100+", label: "Languages" },
                { value: "5M+", label: "Downloads" },
                { value: "4.8", label: "App Rating" },
              ].map((stat, i) => (
                <div key={i} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-instrument mb-1 gradient-text font-semibold">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] font-mono uppercase tracking-wider">
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
