import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[var(--color-bg-primary)] overflow-hidden min-h-screen pt-24">
        <div className="max-w-[1200px] mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-[var(--color-text-primary)] mb-4">
              How It Works
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Translate any text on your screen in three simple steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[#FF6B35] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#FF8C61] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                  Select Screen Area
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Tap the floating bubble to activate selection mode. Draw a box around any text on your screen - manga panels, game dialogue, or app content.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[#A78BFA] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#A78BFA] to-[#C4B5FD] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                  AI Recognition
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Our on-device OCR instantly recognizes text in any language. Advanced AI understands context, characters, and story flow.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 border border-[var(--color-border)] hover:border-[#10B981] transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-[var(--color-text-primary)] mb-3">
                  Instant Translation
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  Get context-aware translation powered by Gemini AI. Results appear in a clean overlay without interrupting your experience.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="bg-[var(--color-bg-secondary)] rounded-2xl p-8 md:p-12 border border-[var(--color-border)]">
            <h2 className="text-2xl font-semibold text-[var(--color-text-primary)] mb-6">
              Why NLPvision Works Better
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#FF6B35]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    Lightning Fast
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    On-device OCR processes text instantly. No waiting, no lag.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#A78BFA]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    Context-Aware
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Gemini AI understands tone, characters, and story context for natural translations.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#10B981]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    Works Everywhere
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Translates text in games, manga apps, videos, websites - any app on your screen.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#F59E0B]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    Zero Interruption
                  </h3>
                  <p className="text-[var(--color-text-secondary)]">
                    Stay in your app. No copying, pasting, or switching between windows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
