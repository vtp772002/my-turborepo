"use client";

export function PricingSection() {
  return (
    <section id="download" className="relative py-20 sm:py-24 md:py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] font-medium">
              EARLY ACCESS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-[var(--color-text-primary)]">
            Get
            <br />
            <span className="gradient-text">Early Access</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            NLPvision is currently in prototype stage on Android. Join the
            waitlist to be notified when we launch and get priority access.
          </p>
        </div>

        {/* Early Access Card */}
        <div className="max-w-xl mx-auto mb-16 sm:mb-20">
          <div className="relative p-8 sm:p-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all group overflow-hidden text-center">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br from-[#FF6B35]/10 to-transparent" />

            <div className="relative">
              {/* Android icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.34c-.5 0-.909.408-.909.91v4.8c0 .5.41.91.91.91h.907c.5 0 .91-.41.91-.91v-4.8c0-.5-.41-.91-.91-.91h-.908zM5.523 15.34c-.5 0-.909.408-.909.91v4.8c0 .5.41.91.91.91h.907c.5 0 .91-.41.91-.91v-4.8c0-.5-.41-.91-.91-.91h-.908zM15.023 6.82l1.2-2.16a.25.25 0 00-.433-.251l-1.215 2.19a7.383 7.383 0 00-2.575-.46c-.93 0-1.804.17-2.575.46L8.21 4.409a.25.25 0 00-.433.251l1.2 2.16C6.583 7.94 4.95 10.353 4.95 13.16h14.1c0-2.807-1.633-5.22-4.027-6.34zM9.5 11.16a.75.75 0 110-1.5.75.75 0 010 1.5zm5 0a.75.75 0 110-1.5.75.75 0 010 1.5zM5.527 14.59h12.946c.5 0 .908.408.908.91v5.59c0 .5-.408.91-.908.91H5.527c-.5 0-.908-.41-.908-.91V15.5c0-.5.408-.91.908-.91z" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-instrument mb-3 text-[var(--color-text-primary)]">
                Android Prototype
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                We&apos;re building on Android first. Join our waitlist and be
                the first to experience NLPvision when it launches.
              </p>

              <a
                href="mailto:toan@nlpvisions.com?subject=NLPvision Early Access"
                className="inline-flex items-center justify-center w-full py-4 bg-[#FF6B35] text-white rounded-xl font-medium hover:bg-[#FF8C61] transition-all hover:scale-[1.02]"
              >
                <svg
                  className="w-6 h-6 mr-2"
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
                Join the Waitlist
              </a>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs text-[var(--color-text-tertiary)]">
                <span>Built on Android</span>
                <span>·</span>
                <span>Powered by Gemini AI</span>
                <span>·</span>
                <span>Launching 2026</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-instrument mb-6 sm:mb-8 text-center text-[var(--color-text-primary)]">
            Frequently Asked Questions
          </h3>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "Is NLPvision free to use?",
                a: "NLPvision is currently in development. We're working on our pricing model and will share details closer to launch. Join the waitlist to stay updated.",
              },
              {
                q: "Does it work offline?",
                a: "Offline mode is on our roadmap. Our current prototype runs on-device OCR for fast recognition, with cloud-based Gemini AI for context-aware translation.",
              },
              {
                q: "How accurate is the translation?",
                a: "We use Gemini AI for context-aware translation — going beyond word-for-word to understand characters, tone, and story context. Accuracy improves the more you read within the same series.",
              },
              {
                q: "Which languages are supported?",
                a: "We support 100+ languages including Japanese, Korean, Chinese, Spanish, French, German, Arabic, and many more.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group p-4 sm:p-6 border border-[var(--color-border)] rounded-xl bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all"
              >
                <summary className="cursor-pointer text-sm sm:text-base font-medium flex items-center justify-between text-[var(--color-text-primary)]">
                  {faq.q}
                  <span className="text-[var(--color-text-secondary)] group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
