'use client';

import { useState } from 'react';

const tiers = [
  {
    name: 'Developer',
    tagline: 'For individuals & experiments',
    price: { monthly: 0, annual: 0 },
    features: [
      '100K tokens/month',
      'Access to Neural model',
      'Community support',
      'Basic analytics',
      'Rate limit: 60 req/min',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'Professional',
    tagline: 'For production applications',
    price: { monthly: 99, annual: 990 },
    features: [
      '10M tokens/month',
      'All models & features',
      'Priority support',
      'Advanced analytics',
      'Rate limit: 1000 req/min',
      'Custom fine-tuning',
      'Team collaboration',
    ],
    cta: 'Start Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For large-scale deployments',
    price: { monthly: null, annual: null },
    features: [
      'Unlimited tokens',
      'Dedicated infrastructure',
      '24/7 premium support',
      'Custom SLA guarantees',
      'On-premise deployment',
      'Advanced security',
      'Volume discounts',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="relative py-32 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] mb-6">
            <span className="text-sm font-mono text-[var(--color-text-secondary)] font-medium">PRICING</span>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6 text-[var(--color-text-primary)]">
            Simple,
            <br />
            <span className="gradient-text">Transparent</span>
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed">
            Choose the plan that fits your needs. Scale as you grow.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-[#FF6B35] text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === 'annual'
                  ? 'bg-[#FF6B35] text-white'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              Annual
              <span className="ml-2 text-xs text-[#34D399]">-17%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-500 ${
                tier.highlighted
                  ? 'border-[#FF6B35] bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg-primary)] shadow-lg shadow-[#FF6B35]/10 scale-105'
                  : 'border-[var(--color-border)] bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)]'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FF6B35] to-[#FF8C61] rounded-full text-xs font-mono text-white font-medium">
                  MOST POPULAR
                </div>
              )}

              {/* Tier name */}
              <h3 className="text-2xl font-instrument mb-2 text-[var(--color-text-primary)]">{tier.name}</h3>

              {/* Tagline */}
              <p className="text-sm text-[var(--color-text-secondary)] mb-6 font-medium">{tier.tagline}</p>

              {/* Price */}
              <div className="mb-8">
                {tier.price[billingCycle] === null ? (
                  <div className="text-4xl font-instrument text-[var(--color-text-primary)]">Custom</div>
                ) : tier.price[billingCycle] === 0 ? (
                  <div className="text-4xl font-instrument text-[var(--color-text-primary)]">Free</div>
                ) : (
                  <>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-instrument text-[var(--color-text-primary)]">${tier.price[billingCycle]}</span>
                      <span className="text-[var(--color-text-secondary)] font-medium">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </div>
                    {billingCycle === 'annual' && tier.price.monthly !== null && tier.price.monthly > 0 && (
                      <div className="text-sm text-[var(--color-text-secondary)] mt-1 font-medium">
                        ${Math.round(tier.price.annual / 12)}/mo billed annually
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ color: tier.highlighted ? '#FF6B35' : '#C4C4C4' }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[var(--color-text-secondary)]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA button */}
              <button
                className={`w-full py-3 rounded-full font-medium transition-all ${
                  tier.highlighted
                    ? 'bg-[#FF6B35] text-white hover:bg-[#FF8C61] hover:scale-105'
                    : 'border-2 border-[var(--color-border-light)] text-[var(--color-text-primary)] hover:border-[#FF6B35] hover:bg-[var(--color-bg-secondary)]'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h3 className="text-3xl font-instrument mb-8 text-center text-[var(--color-text-primary)]">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: 'Can I change my plan later?',
                a: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, wire transfers, and purchase orders for Enterprise plans.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes, Professional plans include a 14-day free trial. No credit card required.',
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group p-6 border border-[var(--color-border)] rounded-xl bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-light)] transition-all"
              >
                <summary className="cursor-pointer font-medium flex items-center justify-between text-[var(--color-text-primary)]">
                  {faq.q}
                  <span className="text-[var(--color-text-secondary)] group-open:rotate-180 transition-transform">
                    ↓
                  </span>
                </summary>
                <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
