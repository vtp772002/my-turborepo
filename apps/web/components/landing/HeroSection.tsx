'use client';

import { useEffect, useState } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF6B35] rounded-full blur-[150px] opacity-25" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#A78BFA] rounded-full blur-[180px] opacity-20" />
        <div className="absolute bottom-1/4 left-1/2 w-[400px] h-[400px] bg-[#60A5FA] rounded-full blur-[120px] opacity-25" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 py-20 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-border-light)] bg-[var(--color-bg-secondary)] backdrop-blur-sm mb-8 ${
            mounted ? 'animate-fade-in-scale' : 'opacity-0'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B35] animate-pulse" />
          <span className="text-sm font-mono text-[var(--color-text-secondary)] font-medium">Now Available</span>
        </div>

        {/* Main heading */}
        <h1
          className={`text-7xl md:text-8xl lg:text-9xl mb-6 leading-[0.95] tracking-tight text-[var(--color-text-primary)] ${
            mounted ? 'animate-fade-in-up stagger-1' : 'opacity-0'
          }`}
        >
          Intelligence
          <br />
          <span className="gradient-text">Reimagined</span>
        </h1>

        {/* Subheading */}
        <p
          className={`text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed ${
            mounted ? 'animate-fade-in-up stagger-2' : 'opacity-0'
          }`}
        >
          Build the future with advanced AI models designed for developers,
          enterprises, and innovators pushing the boundaries of what's possible.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
            mounted ? 'animate-fade-in-up stagger-3' : 'opacity-0'
          }`}
        >
          <button className="group relative px-8 py-4 bg-[#FF6B35] text-white rounded-full font-medium overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#FF6B35]/20">
            <span className="relative z-10">Start Building</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button className="group px-8 py-4 border-2 border-[var(--color-border-light)] rounded-full font-medium text-[var(--color-text-primary)] hover:border-[#A78BFA] transition-all hover:bg-[var(--color-bg-secondary)]">
            View Documentation
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Stats */}
        <div
          className={`mt-24 grid grid-cols-3 gap-12 max-w-3xl mx-auto ${
            mounted ? 'animate-fade-in-up stagger-4' : 'opacity-0'
          }`}
        >
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '<100ms', label: 'Latency' },
            { value: '50B+', label: 'API Calls' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-instrument mb-2 gradient-text font-semibold">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--color-text-secondary)] font-mono uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-[var(--color-border-light)] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-2 bg-[var(--color-text-secondary)] rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
