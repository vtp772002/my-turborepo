export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/30">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-4">
            <div className="text-2xl font-instrument mb-4 gradient-text">
              AI Platform
            </div>
            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6">
              Building the future of artificial intelligence, one API call at a time.
            </p>
            {/* Social links */}
            <div className="flex gap-4">
              {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-[var(--color-border)] rounded-full hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-all"
                  aria-label={social}
                >
                  <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                    {social[0]}
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
                {['Neural', 'Quantum API', 'Vision SDK', 'Pricing', 'Documentation'].map((item) => (
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
              <h4 className="font-medium mb-4 text-sm">Developers</h4>
              <ul className="space-y-3 text-sm">
                {['API Reference', 'SDKs', 'Guides', 'Changelog', 'Status'].map((item) => (
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
              <h4 className="font-medium mb-4 text-sm">Company</h4>
              <ul className="space-y-3 text-sm">
                {['About', 'Blog', 'Careers', 'Press Kit', 'Contact'].map((item) => (
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
                {['Privacy', 'Terms', 'Security', 'Cookies', 'Licenses'].map((item) => (
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

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-text-tertiary)]">
            © {currentYear} AI Platform. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
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
