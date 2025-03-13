import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Differentials from '@/components/Differentials';
import Categories from '@/components/Categories';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Pricing from '@/components/Pricing';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Benefits />
      <Differentials />
      <Categories />
      <Testimonials />
      <Pricing />
      <FAQ />
    </main>
  );
}
