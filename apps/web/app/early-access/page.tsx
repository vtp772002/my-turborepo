import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

export default function EarlyAccessPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[var(--color-bg-primary)] overflow-hidden min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4">
              Get Early Access
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              NLPvision is currently in prototype stage on Android. Join the waitlist to be notified when we launch and get priority access.
            </p>
          </div>

          {/* Early Access Card */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-2xl p-8 md:p-12 border border-[var(--color-border)] hover:border-[#FF6B35]/50 transition-all text-center">
              {/* Android Icon */}
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#34D399] to-[#10B981] flex items-center justify-center mb-6 shadow-lg">
                <svg
                  className="w-12 h-12 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.523 15.34c-.5 0-.909.408-.909.91v4.8c0 .5.41.91.91.91h.907c.5 0 .91-.41.91-.91v-4.8c0-.5-.41-.91-.91-.91h-.908zM5.523 15.34c-.5 0-.909.408-.909.91v4.8c0 .5.41.91.91.91h.907c.5 0 .91-.41.91-.91v-4.8c0-.5-.41-.91-.91-.91h-.908zM15.023 6.82l1.2-2.16a.25.25 0 00-.433-.251l-1.215 2.19a7.383 7.383 0 00-2.575-.46c-.93 0-1.804.17-2.575.46L8.21 4.409a.25.25 0 00-.433.251l1.2 2.16C6.583 7.94 4.95 10.353 4.95 13.16h14.1c0-2.807-1.633-5.22-4.027-6.34zM9.5 11.16a.75.75 0 110-1.5.75.75 0 010 1.5zm5 0a.75.75 0 110-1.5.75.75 0 010 1.5zM5.527 14.59h12.946c.5 0 .908.408.908.91v5.59c0 .5-.408.91-.908.91H5.527c-.5 0-.908-.41-.908-.91V15.5c0-.5.408-.91.908-.91z" />
                </svg>
              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-primary)] mb-4">
                Android Prototype
              </h2>
              <p className="text-lg text-[var(--color-text-secondary)] mb-8 leading-relaxed max-w-lg mx-auto">
                We're building on Android first. Join our waitlist and be the first to experience NLPvision when it launches.
              </p>

              <a
                href="mailto:toan@nlpvisions.com?subject=NLPvision Early Access"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF6B35] text-white rounded-xl font-medium hover:bg-[#FF8C61] transition-all hover:scale-105 text-lg"
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
                Join the Waitlist
              </a>

              <div className="flex flex-wrap items-center justify-center gap-3 mt-8 text-sm text-[var(--color-text-tertiary)]">
                <span>Built on Android</span>
                <span>·</span>
                <span>Powered by Gemini AI</span>
                <span>·</span>
                <span>Launching 2026</span>
              </div>
            </div>
          </div>

          {/* What You Get */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-8 text-center">
              What You'll Get as an Early User
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  title: "Priority Access",
                  description: "Be among the first to use NLPvision when we launch"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  ),
                  title: "Direct Feedback",
                  description: "Help shape features and improvements"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  ),
                  title: "Early Bird Benefits",
                  description: "Special perks and potential discounts for early adopters"
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  ),
                  title: "Launch Updates",
                  description: "Regular updates on development progress"
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-6 bg-[var(--color-bg-secondary)] rounded-xl border border-[var(--color-border)] hover:border-[#FF6B35]/50 transition-all"
                >
                  <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0 text-[#FF6B35]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
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

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Is NLPvision free to use?",
                  a: "NLPvision is currently in development. We're working on our pricing model and will share details closer to launch. Join the waitlist to stay updated."
                },
                {
                  q: "Does it work offline?",
                  a: "Offline mode is on our roadmap. Our current prototype runs on-device OCR for fast recognition, with cloud-based Gemini AI for context-aware translation."
                },
                {
                  q: "How accurate is the translation?",
                  a: "We use Gemini AI for context-aware translation — going beyond word-for-word to understand characters, tone, and story context. Accuracy improves the more you read within the same series."
                },
                {
                  q: "Which languages are supported?",
                  a: "We support 100+ languages including Japanese, Korean, Chinese, Spanish, French, German, Arabic, and many more."
                },
                {
                  q: "When will NLPvision be available?",
                  a: "We're planning an early access launch on Android in 2026. Join the waitlist to be notified when we're ready to launch."
                },
                {
                  q: "Will there be an iOS version?",
                  a: "We're starting with Android, but an iOS version is definitely on our roadmap. Join the waitlist to stay updated on platform availability."
                }
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group p-6 border border-[var(--color-border)] rounded-xl bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all"
                >
                  <summary className="cursor-pointer text-base font-medium flex items-center justify-between text-[var(--color-text-primary)]">
                    {faq.q}
                    <span className="text-[var(--color-text-secondary)] group-open:rotate-180 transition-transform">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="max-w-2xl mx-auto text-center bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-3">
              Have Questions?
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Feel free to reach out directly
            </p>
            <a
              href="mailto:toan@nlpvisions.com"
              className="inline-flex items-center gap-2 text-[#FF6B35] hover:text-[#FF8C61] transition-colors"
            >
              <svg
                className="w-5 h-5"
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
