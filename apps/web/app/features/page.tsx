import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

const features = [
  {
    icon: (
      <svg
        className="w-10 h-10"
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
    details: [
      "Sub-second response time",
      "Continuous translation mode",
      "Smart caching for repeated phrases",
      "Optimized for manga panels and game dialogue"
    ]
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
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
    details: [
      "Japanese (Kanji, Hiragana, Katakana)",
      "Korean (Hangul)",
      "Simplified & Traditional Chinese",
      "All major European & Asian languages"
    ]
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
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
    details: [
      "On-device processing for privacy",
      "Works with stylized fonts",
      "Handles vertical text (manga)",
      "Recognizes text on complex backgrounds"
    ]
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    title: "Context-Aware AI",
    description:
      "Powered by Gemini AI for translations that understand context, tone, and story — not just words.",
    details: [
      "Understands character personalities",
      "Maintains story context across sessions",
      "Adapts to genre and tone",
      "Learns from your reading patterns"
    ]
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
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
    details: [
      "Customizable position and size",
      "Auto-hide when not in use",
      "Works over any app",
      "Quick access gesture controls"
    ]
  },
  {
    icon: (
      <svg
        className="w-10 h-10"
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
    details: [
      "Searchable translation history",
      "Export to TXT, PDF, or clipboard",
      "Tag and organize by series/game",
      "Share translations directly"
    ]
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[var(--color-bg-primary)] overflow-hidden min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4">
              Features
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Everything you need to break language barriers on your mobile device
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[#FF6B35]/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#A78BFA]/10 rounded-xl flex items-center justify-center text-[#FF6B35]">
                      {feature.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] mb-4 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Details */}
                    <ul className="grid md:grid-cols-2 gap-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg
                            className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-[var(--color-text-secondary)]">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supported Languages Section */}
          <div className="mt-16 bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-3">
                Supported Languages
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Translate between 100+ languages
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
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
                  className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-tertiary)] rounded-full border border-[var(--color-border)] hover:border-[#FF6B35]/50 transition-all"
                >
                  <span className="text-xl">{lang.flag}</span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
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

          {/* Roadmap Section */}
          <div className="mt-16 bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-2xl p-8 border border-[var(--color-border)]">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-3">
                Coming Soon
              </h2>
              <p className="text-[var(--color-text-secondary)]">
                Features we're building for future releases
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Offline Mode",
                  description: "Download language packs for offline translation"
                },
                {
                  title: "Voice Translation",
                  description: "Translate spoken dialogue in games and videos"
                },
                {
                  title: "Auto-Detect Language",
                  description: "Automatically identify source language"
                },
                {
                  title: "Custom Dictionaries",
                  description: "Add your own terms and character names"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-[var(--color-bg-primary)]/50 rounded-xl border border-[var(--color-border)]"
                >
                  <div className="w-2 h-2 bg-[#F59E0B] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)]">
            <p className="text-lg text-[var(--color-text-secondary)] mb-2">
              Currently in active development. Prototype running on Android.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] mb-6">
              Be among the first to try NLPvision when we launch.
            </p>
            <a
              href="mailto:toan@nlpvisions.com?subject=NLPvision Early Access"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] text-white rounded-xl font-medium hover:bg-[#FF8C61] transition-all hover:scale-105"
            >
              Join the Waitlist
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
