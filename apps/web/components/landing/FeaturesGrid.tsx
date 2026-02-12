'use client';

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Lightning Fast',
    description: 'Sub-100ms response times with global edge deployment and intelligent caching.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with end-to-end encryption and zero-knowledge architecture.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: 'Real-time Analytics',
    description: 'Comprehensive dashboards with custom metrics, alerts, and performance insights.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    title: 'Infinite Scale',
    description: 'Auto-scaling infrastructure that grows with your needs, from prototype to enterprise.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: 'Developer First',
    description: 'Intuitive SDKs in 10+ languages with extensive docs and interactive examples.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Global Infrastructure',
    description: 'Deployed across 50+ regions with intelligent routing and automatic failover.',
  },
];

export function FeaturesGrid() {
  return (
    <section id="features" className="relative py-32 px-6 bg-[var(--color-bg-secondary)]/30">
      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-px h-64 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
      <div className="absolute bottom-20 left-1/3 w-px h-48 bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />

      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-20 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-6">
            <span className="text-sm font-mono text-[var(--color-text-secondary)] font-medium">FEATURES</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6 text-[var(--color-text-primary)]">
            Built for
            <br />
            <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Everything you need to build, deploy, and scale AI applications in production.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-border)] border border-[var(--color-border)] rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-[var(--color-bg-primary)] hover:bg-[var(--color-bg-secondary)] transition-all duration-500"
            >
              {/* Icon with gradient on hover */}
              <div className="mb-6 text-[var(--color-text-secondary)] group-hover:text-[#FF6B35] transition-colors duration-500">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-instrument mb-3 text-[var(--color-text-primary)] group-hover:gradient-text transition-all duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#FF6B35] to-[#A78BFA] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-secondary)] backdrop-blur-sm">
          {[
            { label: 'Countries', value: '150+' },
            { label: 'Developers', value: '1M+' },
            { label: 'Requests/Day', value: '5B+' },
            { label: 'Avg Response', value: '87ms' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-instrument mb-1 gradient-text font-semibold">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
