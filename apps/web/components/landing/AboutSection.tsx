"use client";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-24 md:py-32 px-6"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-px h-64 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
      <div className="absolute bottom-20 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] font-medium">
              ABOUT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-[var(--color-text-primary)]">
            Built by someone
            <br />
            <span className="gradient-text">who needed it</span>
          </h2>
        </div>

        {/* Founder card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 sm:p-10 md:p-12 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all group overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br from-[#FF6B35]/10 to-[#A78BFA]/10" />

            <div className="relative">
              {/* Founder avatar placeholder */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#A78BFA] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-2xl font-instrument text-white font-bold">
                  T
                </span>
              </div>

              <p className="text-lg sm:text-xl text-[var(--color-text-primary)] mb-6 leading-relaxed">
                Hi, I&apos;m Toan — the founder of NLPvision.
              </p>

              <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed">
                <p>
                  I built NLPvision because I wanted to read manga and play
                  games in their original language without constantly switching
                  apps to look up translations.
                </p>
                <p>
                  Most translation tools break your flow. They require you to
                  copy, paste, or screenshot — and by the time the translation
                  appears, you&apos;ve lost the moment.
                </p>
                <p>
                  NLPvision is built around one idea:{" "}
                  <span className="text-[var(--color-text-primary)] font-medium">
                    the best translation app is one you don&apos;t notice
                  </span>
                  . The language barrier should disappear naturally, without
                  friction.
                </p>
                <p>
                  We&apos;re currently in prototype stage on Android, building
                  toward an early access launch in 2026.
                </p>
              </div>

              {/* Contact & badges */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href="mailto:toan@nlpvisions.com"
                    className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
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
                    toan@nlpvisions.com
                  </a>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                    <div className="w-2 h-2 rounded-full bg-[#34D399]" />
                    <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                      Google for Startups Program Applicant
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
