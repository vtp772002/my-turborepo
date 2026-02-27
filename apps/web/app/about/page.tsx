import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[var(--color-bg-primary)] overflow-hidden min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4">
              About NLPvision
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Built by someone who needed it
            </p>
          </div>

          {/* Founder Story */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 md:p-12 border border-[var(--color-border)]">
              {/* Founder avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#A78BFA] flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl font-display text-white font-bold">
                  T
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
                Hi, I'm Toan — the founder of NLPvision.
              </h2>

              <div className="space-y-4 text-[var(--color-text-secondary)] text-lg leading-relaxed">
                <p>
                  I built NLPvision because I wanted to read manga and play
                  games in their original language without constantly switching
                  apps to look up translations.
                </p>
                <p>
                  Most translation tools break your flow. They require you to
                  copy, paste, or screenshot — and by the time the translation
                  appears, you've lost the moment.
                </p>
                <p>
                  NLPvision is built around one idea:{" "}
                  <span className="text-[var(--color-text-primary)] font-semibold">
                    the best translation app is one you don't notice
                  </span>
                  . The language barrier should disappear naturally, without
                  friction.
                </p>
                <p>
                  We're currently in prototype stage on Android, building
                  toward an early access launch in 2026.
                </p>
              </div>

              {/* Contact & Status */}
              <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a
                    href="mailto:toan@nlpvisions.com"
                    className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
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
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-tertiary)] border border-[var(--color-border)]">
                    <div className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
                    <span className="text-sm font-mono text-[var(--color-text-tertiary)]">
                      Prototype · Android · 2026
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)]">
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#FF6B35]"
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
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Our Mission
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                To make content in any language accessible to everyone, without
                disrupting the natural flow of reading, gaming, or watching. Translation
                should be invisible.
              </p>
            </div>

            <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)]">
              <div className="w-12 h-12 bg-[#A78BFA]/10 rounded-xl flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-[#A78BFA]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                Our Vision
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                A world where language is never a barrier to enjoying the content you love.
                Where manga readers and gamers can immerse themselves completely in stories,
                regardless of language.
              </p>
            </div>
          </div>

          {/* Why NLPvision is Different */}
          <div className="bg-gradient-to-br from-[var(--color-bg-secondary)] to-[var(--color-bg-tertiary)] rounded-2xl p-8 md:p-12 border border-[var(--color-border)] mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-6 text-center">
              Why NLPvision is Different
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Built for Flow",
                  description: "Other tools interrupt your experience. We designed NLPvision to blend seamlessly into your reading or gaming session."
                },
                {
                  title: "Context First",
                  description: "We don't just translate words. Our AI understands characters, story arcs, and tone to give you natural, nuanced translations."
                },
                {
                  title: "Privacy Focused",
                  description: "On-device OCR means your screen content never leaves your phone. Only translation requests go to the cloud."
                },
                {
                  title: "Made by Users, For Users",
                  description: "Every feature comes from real user needs. We're building the tool we wish existed when we started reading manga."
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Development Status */}
          <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 md:p-12 border border-[var(--color-border)] mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-6">
              Current Development Status
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#10B981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                    Prototype Stage
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Working prototype running on Android with core features: screen capture, OCR, and AI translation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                    Refining Experience
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Testing with early users to perfect the UI/UX and improve translation quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                    Early Access 2026
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Planning limited early access launch for Android users in 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-[#FF6B35]/10 to-[#A78BFA]/10 rounded-2xl p-8 md:p-12 border border-[#FF6B35]/30">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-primary)] mb-4">
              Join the Journey
            </h2>
            <p className="text-lg text-[var(--color-text-secondary)] mb-6 max-w-2xl mx-auto">
              Be among the first to try NLPvision and help shape the future of screen translation.
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
