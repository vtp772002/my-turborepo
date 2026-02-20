"use client";

const features = [
  {
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
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Real-time Translation",
    description:
      "Instant screen translation with minimal latency. See translations as fast as you can capture.",
  },
  {
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
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
    title: "100+ Languages",
    description:
      "Support for over 100 languages including Japanese, Korean, Chinese, Arabic, and more.",
  },
  {
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
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Advanced OCR",
    description:
      "State-of-the-art text recognition that works on any font, style, or background.",
  },
  {
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
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
    title: "Offline Mode",
    description:
      "Download language packs for offline use. Translate anywhere, even without internet.",
  },
  {
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
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    title: "Floating Bubble",
    description:
      "Non-intrusive floating button stays on top of any app for instant access.",
  },
  {
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
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "History & Export",
    description:
      "Save translation history for later review. Export to text files or share directly.",
  },
];

export function FeaturesGrid() {
  return (
    <section
      id="features"
      className="relative py-20 sm:py-24 md:py-32 px-6 bg-[var(--color-bg-secondary)]/30"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
      <div className="absolute bottom-20 left-1/3 w-px h-48 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] font-medium">
              FEATURES
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-[var(--color-text-primary)]">
            Powerful
            <br />
            <span className="gradient-text">Translation Tools</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed px-4">
            Everything you need to break language barriers on your mobile
            device.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 bg-[var(--color-bg-primary)] hover:bg-[var(--color-bg-secondary)] transition-all duration-500"
            >
              {/* Icon with gradient on hover */}
              <div className="mb-4 sm:mb-6 text-[var(--color-text-secondary)] group-hover:text-[#FF6B35] transition-colors duration-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-instrument mb-2 sm:mb-3 text-[var(--color-text-primary)] group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--color-text-secondary)] text-xs sm:text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#FF6B35] to-[#A78BFA] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Supported languages showcase */}
        <div className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-8 border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-secondary)] backdrop-blur-sm">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-instrument mb-2 text-[var(--color-text-primary)]">
              Supported Languages
            </h3>
            <p className="text-[var(--color-text-secondary)] text-sm">
              Translate between 100+ languages
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {[
              { flag: "🇯🇵", name: "Japanese" },
              { flag: "🇰🇷", name: "Korean" },
              { flag: "🇨🇳", name: "Chinese" },
              { flag: "🇺🇸", name: "English" },
              { flag: "🇪🇸", name: "Spanish" },
              { flag: "🇫🇷", name: "French" },
              { flag: "🇩🇪", name: "German" },
              { flag: "🇮🇹", name: "Italian" },
              { flag: "🇵🇹", name: "Portuguese" },
              { flag: "🇷🇺", name: "Russian" },
              { flag: "🇸🇦", name: "Arabic" },
              { flag: "🇹🇭", name: "Thai" },
              { flag: "🇻🇳", name: "Vietnamese" },
              { flag: "🇮🇳", name: "Hindi" },
            ].map((lang, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-[var(--color-bg-tertiary)] rounded-full border border-[var(--color-border)] hover:border-[#FF6B35]/50 transition-all"
              >
                <span className="text-lg sm:text-xl">{lang.flag}</span>
                <span className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
                  {lang.name}
                </span>
              </div>
            ))}
            <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF6B35]/20 to-[#A78BFA]/20 rounded-full border border-[#FF6B35]/30">
              <span className="text-sm font-medium gradient-text">
                +86 more
              </span>
            </div>
          </div>
        </div>

        {/* Bottom stats */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-secondary)] backdrop-blur-sm">
          {[
            { label: "Languages", value: "100+" },
            { label: "Daily Users", value: "500K+" },
            { label: "Translations", value: "10M+" },
            { label: "Accuracy", value: "98%" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl sm:text-3xl font-instrument mb-1 gradient-text font-semibold">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs text-[var(--color-text-secondary)] font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
