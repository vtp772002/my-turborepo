export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="support"
      className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30"
    >
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#FF6B35] to-[#A78BFA] flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
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
              </div>
              <span className="text-2xl font-instrument gradient-text">
                NLPvision
              </span>
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
              Building the most natural screen translation experience for manga
              readers and gamers. Prototype · Android · 2026.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {[
                { name: "Twitter", icon: "T" },
                { name: "Instagram", icon: "I" },
                { name: "Discord", icon: "D" },
                { name: "YouTube", icon: "Y" },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] rounded-full hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-all"
                  aria-label={social.name}
                >
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium mb-4 text-sm">Product</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Features",
                  "How It Works",
                  "Download",
                  "Pricing",
                  "Changelog",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-sm">Languages</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Japanese",
                  "Korean",
                  "Chinese",
                  "Spanish",
                  "All Languages",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-sm">Support</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#download"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:toan@nlpvisions.com"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:toan@nlpvisions.com?subject=Bug Report"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    Report Bug
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:toan@nlpvisions.com?subject=Feature Request"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                  >
                    Feature Request
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-4 text-sm">Legal</h4>
              <ul className="space-y-3 text-sm">
                {[
                  "Privacy Policy",
                  "Terms of Service",
                  "Cookie Policy",
                  "GDPR",
                  "Licenses",
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact info in footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 py-8 border-y border-[var(--color-border)]">
          <span className="text-[var(--color-text-secondary)] text-sm">
            Get in touch:
          </span>
          <a
            href="mailto:toan@nlpvisions.com"
            className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-text-primary)] transition-all"
          >
            <svg
              className="w-5 h-5 text-[var(--color-text-primary)]"
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
            <span className="text-sm font-medium text-[var(--color-text-primary)]">
              toan@nlpvisions.com
            </span>
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-tertiary)]">
            © {currentYear} NLPvision. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              Terms of Service
            </a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#FBBF24] animate-pulse" />
              <span className="text-[var(--color-text-tertiary)] font-mono text-xs">
                In Development
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-primary)] to-transparent opacity-50" />
    </footer>
  );
}
