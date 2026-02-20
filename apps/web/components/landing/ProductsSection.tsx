"use client";

import { useState } from "react";

const useCases = [
  {
    title: "Gaming",
    description:
      "Translate game dialogues, menus, and tutorials in real-time. Perfect for playing Japanese RPGs, Korean MMOs, or Chinese mobile games.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    accent: "#FF6B35",
    image: "game",
  },
  {
    title: "Social Media",
    description:
      "Understand foreign posts, comments, and stories instantly. Connect with friends worldwide without language barriers.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        />
      </svg>
    ),
    accent: "#A78BFA",
    image: "social",
  },
  {
    title: "Learning",
    description:
      "Study foreign languages naturally by reading real content. Translate textbooks, articles, and educational videos on the fly.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    accent: "#60A5FA",
    image: "learn",
  },
  {
    title: "Streaming",
    description:
      "Watch foreign movies, anime, and live streams without subtitles. Get real-time translations overlaid on your screen.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    accent: "#34D399",
    image: "stream",
  },
  {
    title: "Work & Business",
    description:
      "Communicate with international clients and colleagues. Translate emails, documents, and presentations seamlessly.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    accent: "#FBBF24",
    image: "work",
  },
  {
    title: "Travel",
    description:
      "Navigate foreign countries with ease. Translate signs, menus, and local apps to explore like a local.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    accent: "#F472B6",
    image: "travel",
  },
];

export function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="how-it-works"
      className="relative py-20 sm:py-24 md:py-32 px-6"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] font-medium">
              USE CASES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 max-w-3xl mx-auto text-[var(--color-text-primary)]">
            Translate
            <br />
            <span className="gradient-text">Anything, Anywhere</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            From gaming to business, NLPvision breaks language barriers across
            all your daily activities.
          </p>
        </div>

        {/* How it works steps */}
        <div className="mb-16 sm:mb-20">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Select Screen Area",
                description:
                  "Use the floating bubble to capture any part of your screen - games, apps, or videos.",
                icon: (
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
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "02",
                title: "AI Recognition",
                description:
                  "Advanced OCR powered by AI instantly detects and extracts text from any image or video.",
                icon: (
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
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                step: "03",
                title: "Instant Translation",
                description:
                  "Get accurate translations in your preferred language, displayed as an overlay on screen.",
                icon: (
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
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative p-6 sm:p-8 border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-secondary)] group hover:border-[#FF6B35]/50 transition-all duration-500"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-6 px-3 py-1 bg-[#FF6B35] rounded-full text-xs font-mono text-white font-bold">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[var(--color-bg-tertiary)] flex items-center justify-center mb-4 text-[var(--color-text-secondary)] group-hover:text-[#FF6B35] transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-xl sm:text-2xl font-instrument mb-3 text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Connector line (hidden on last item) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[var(--color-border)] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Use cases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-secondary)] backdrop-blur-sm hover:border-[var(--color-border-light)] transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${useCase.accent}20, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="mb-4 sm:mb-6 transition-colors duration-500"
                  style={{
                    color:
                      hoveredIndex === index
                        ? useCase.accent
                        : "var(--color-text-secondary)",
                  }}
                >
                  {useCase.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-instrument mb-2 transition-colors duration-300 text-[var(--color-text-primary)]">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm sm:text-[15px]">
                  {useCase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
