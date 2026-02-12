'use client';

import { useState } from 'react';

const products = [
  {
    name: 'Neural Core',
    tagline: 'Advanced Language Model',
    description: 'State-of-the-art conversational AI with exceptional reasoning capabilities, context understanding, and natural language generation.',
    features: ['175B+ parameters', 'Multi-modal support', 'Real-time inference', 'Custom fine-tuning'],
    accent: '#FF6B35',
    icon: '🧠',
  },
  {
    name: 'Quantum API',
    tagline: 'Developer Platform',
    description: 'Enterprise-grade API infrastructure built for scale, with comprehensive SDKs, webhooks, and real-time monitoring.',
    features: ['99.9% uptime SLA', 'Global edge network', 'Advanced analytics', 'Rate limiting'],
    accent: '#A78BFA',
    icon: '⚡',
  },
  {
    name: 'Vision Pro',
    tagline: 'Computer Vision Suite',
    description: 'Powerful image and video understanding models for object detection, segmentation, and visual reasoning.',
    features: ['Real-time processing', 'Custom training', 'Edge deployment', 'Video analysis'],
    accent: '#60A5FA',
    icon: '👁️',
  },
  {
    name: 'Audio Engine',
    tagline: 'Speech & Sound AI',
    description: 'Advanced speech recognition, synthesis, and audio processing powered by deep learning models.',
    features: ['Multi-language support', 'Real-time transcription', 'Voice cloning', 'Noise reduction'],
    accent: '#34D399',
    icon: '🎵',
  },
  {
    name: 'Data Insights',
    tagline: 'Analytics Platform',
    description: 'Transform raw data into actionable insights with automated analysis, predictions, and visualizations.',
    features: ['Predictive analytics', 'Auto-reporting', 'Data pipelines', 'Custom dashboards'],
    accent: '#FBBF24',
    icon: '📊',
  },
  {
    name: 'Code Assistant',
    tagline: 'AI Pair Programmer',
    description: 'Intelligent code completion, refactoring suggestions, and automated testing for 50+ programming languages.',
    features: ['Context-aware suggestions', 'Bug detection', 'Code review', 'Documentation generation'],
    accent: '#F472B6',
    icon: '💻',
  },
];

export function ProductsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="products" className="relative py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-6">
            <span className="text-sm font-mono text-[var(--color-text-secondary)] font-medium">PRODUCTS</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6 max-w-3xl text-[var(--color-text-primary)]">
            Tools for the
            <br />
            <span className="gradient-text">Next Generation</span>
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
            Production-ready AI products designed to integrate seamlessly into your workflow.
          </p>
        </div>

        {/* Product cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative p-8 border border-[var(--color-border)] rounded-2xl bg-[var(--color-bg-secondary)] backdrop-blur-sm hover:border-[var(--color-border-light)] transition-all duration-500 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${product.accent}20, transparent 70%)`,
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div className="text-6xl mb-6 transition-transform duration-500 group-hover:scale-110">
                  {product.icon}
                </div>

                {/* Product name */}
                <h3 className="text-3xl font-instrument mb-2 transition-colors duration-300 text-[var(--color-text-primary)]">
                  {product.name}
                </h3>

                {/* Tagline */}
                <div
                  className="text-sm font-mono mb-4 transition-colors duration-300 font-medium"
                  style={{
                    color: hoveredIndex === index ? product.accent : 'var(--color-text-secondary)'
                  }}
                >
                  {product.tagline}
                </div>

                {/* Description */}
                <p className="text-[var(--color-text-secondary)] mb-6 leading-relaxed text-[15px]">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <div
                        className="w-1.5 h-1.5 rounded-full transition-colors duration-300"
                        style={{
                          backgroundColor: hoveredIndex === index ? product.accent : 'var(--color-border-light)'
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="group/btn flex items-center gap-2 text-sm font-medium text-[var(--color-text-primary)] hover:gap-3 transition-all"
                  style={{
                    color: hoveredIndex === index ? product.accent : 'var(--color-text-primary)'
                  }}
                >
                  Learn more
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-[var(--color-text-secondary)] mb-4 text-lg">
            Need a custom solution?
          </p>
          <button className="px-8 py-3 border border-[var(--color-border-light)] rounded-full text-sm font-medium text-[var(--color-text-primary)] hover:border-[var(--color-text-primary)] hover:bg-[var(--color-bg-secondary)] transition-all hover:scale-105">
            Contact Enterprise Sales
          </button>
        </div>
      </div>
    </section>
  );
}
