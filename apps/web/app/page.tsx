import { Navbar } from '@/components/landing/Navbar';
import { HeroSection } from '@/components/landing/HeroSection';
import { ProductsSection } from '@/components/landing/ProductsSection';
import { FeaturesGrid } from '@/components/landing/FeaturesGrid';
import { PricingSection } from '@/components/landing/PricingSection';
import { Footer } from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative bg-[var(--color-bg-primary)] overflow-hidden">
        <HeroSection />
        <ProductsSection />
        <FeaturesGrid />
        <PricingSection />
        <Footer />
      </main>
    </>
  );
}
