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
              Breaking language barriers with real-time screen translation.
              Translate any text on your screen instantly.
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
                {[
                  "Help Center",
                  "FAQ",
                  "Contact Us",
                  "Report Bug",
                  "Feature Request",
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

        {/* Download buttons in footer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 py-8 border-y border-[var(--color-border)]">
          <span className="text-[var(--color-text-secondary)] text-sm">
            Download NLPvision:
          </span>
          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-text-primary)] transition-all"
            >
              <svg
                className="w-5 h-5 text-[var(--color-text-primary)]"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                App Store
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-4 py-2 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg hover:border-[var(--color-text-primary)] transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#34D399"
                  d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"
                />
                <path
                  fill="#FF6B35"
                  d="M14.5 12.708l2.302 2.302-10.937 6.298 8.635-8.6z"
                />
                <path
                  fill="#FBBF24"
                  d="M19.76 10.322l-2.96 1.69-2.3-2.304 2.3-2.302 2.96 1.69c.893.512.893 1.714 0 2.226z"
                />
                <path
                  fill="#60A5FA"
                  d="M5.865 2.692l10.937 6.298-2.302 2.302-8.635-8.6z"
                />
              </svg>
              <span className="text-sm font-medium text-[var(--color-text-primary)]">
                Google Play
              </span>
            </a>
          </div>
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
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[var(--color-text-tertiary)] font-mono text-xs">
                All Systems Operational
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
