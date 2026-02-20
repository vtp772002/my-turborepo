"use client";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Finally I can play Japanese games without waiting for translations! This app is a game changer.",
    platform: "iOS",
  },
  {
    name: "Alex K.",
    rating: 5,
    text: "Use it daily for translating Korean webtoons. Super fast and accurate!",
    platform: "Android",
  },
  {
    name: "Maria L.",
    rating: 5,
    text: "Perfect for watching Chinese dramas. The real-time translation is incredible.",
    platform: "iOS",
  },
];

export function PricingSection() {
  return (
    <section id="download" className="relative py-20 sm:py-24 md:py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-12 sm:mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-mono text-[var(--color-text-secondary)] font-medium">
              DOWNLOAD
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-[var(--color-text-primary)]">
            Get
            <br />
            <span className="gradient-text">NLPvision Now</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4">
            Download free on iOS and Android. Start translating in seconds.
          </p>
        </div>

        {/* Download cards */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* iOS Card */}
          <div className="relative p-8 sm:p-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all group overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br from-[#FF6B35]/10 to-transparent" />

            <div className="relative">
              {/* Platform icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#333] to-[#000] flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-instrument mb-2 text-[var(--color-text-primary)]">
                iOS
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                iPhone & iPad
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#FBBF24]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  4.8 (12K reviews)
                </span>
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full py-4 bg-[#FF6B35] text-white rounded-xl font-medium hover:bg-[#FF8C61] transition-all hover:scale-[1.02]"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on App Store
              </a>

              <p className="text-xs text-[var(--color-text-tertiary)] text-center mt-4">
                Requires iOS 14.0 or later
              </p>
            </div>
          </div>

          {/* Android Card */}
          <div className="relative p-8 sm:p-10 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all group overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl bg-gradient-to-br from-[#34D399]/10 to-transparent" />

            <div className="relative">
              {/* Platform icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-10 h-10 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.34c-.5 0-.909.408-.909.91v4.8c0 .5.41.91.91.91h.907c.5 0 .91-.41.91-.91v-4.8c0-.5-.41-.91-.91-.91h-.908zM5.523 15.34c-.5 0-.909.408-.909.91v4.8c0 .5.41.91.91.91h.907c.5 0 .91-.41.91-.91v-4.8c0-.5-.41-.91-.91-.91h-.908zM15.023 6.82l1.2-2.16a.25.25 0 00-.433-.251l-1.215 2.19a7.383 7.383 0 00-2.575-.46c-.93 0-1.804.17-2.575.46L8.21 4.409a.25.25 0 00-.433.251l1.2 2.16C6.583 7.94 4.95 10.353 4.95 13.16h14.1c0-2.807-1.633-5.22-4.027-6.34zM9.5 11.16a.75.75 0 110-1.5.75.75 0 010 1.5zm5 0a.75.75 0 110-1.5.75.75 0 010 1.5zM5.527 14.59h12.946c.5 0 .908.408.908.91v5.59c0 .5-.408.91-.908.91H5.527c-.5 0-.908-.41-.908-.91V15.5c0-.5.408-.91.908-.91z" />
                </svg>
              </div>

              <h3 className="text-2xl sm:text-3xl font-instrument mb-2 text-[var(--color-text-primary)]">
                Android
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6">
                Phone & Tablet
              </p>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#FBBF24]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  4.7 (8K reviews)
                </span>
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center w-full py-4 bg-[#34D399] text-white rounded-xl font-medium hover:bg-[#10B981] transition-all hover:scale-[1.02]"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
                  />
                  <path
                    fill="currentColor"
                    d="M14.5 12.708l2.302 2.302-10.937 6.298 8.635-8.6z"
                  />
                  <path
                    fill="currentColor"
                    d="M19.76 10.322l-2.96 1.69-2.3-2.304 2.3-2.302 2.96 1.69c.893.512.893 1.714 0 2.226z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.865 2.692l10.937 6.298-2.302 2.302-8.635-8.6z"
                  />
                </svg>
                Get it on Google Play
              </a>

              <p className="text-xs text-[var(--color-text-tertiary)] text-center mt-4">
                Requires Android 8.0 or later
              </p>
            </div>
          </div>
        </div>

        {/* Reviews section */}
        <div className="mb-16 sm:mb-20">
          <h3 className="text-2xl sm:text-3xl font-instrument mb-8 text-center text-[var(--color-text-primary)]">
            What Users Say
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="p-6 border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-[#FBBF24]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[var(--color-text-secondary)] mb-4 text-sm leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    {review.name}
                  </span>
                  <span className="text-xs text-[var(--color-text-tertiary)] px-2 py-1 bg-[var(--color-bg-tertiary)] rounded">
                    {review.platform}
                  </span>
                </div>
              </div>
            ))}
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
                a: "Yes! NLPvision is free to download and use. We offer a premium subscription for unlimited translations and offline language packs.",
              },
              {
                q: "Does it work offline?",
                a: "Yes, you can download language packs for offline use. Perfect for traveling or areas with limited connectivity.",
              },
              {
                q: "How accurate is the translation?",
                a: "We use state-of-the-art AI models achieving 98% accuracy. Results are continuously improved based on user feedback.",
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
