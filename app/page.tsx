import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { LogoCloud } from "@/components/sections/logo-cloud";
import { Features } from "@/components/sections/features";
import { ProductShowcase } from "@/components/sections/product-showcase";
import { Stats } from "@/components/sections/stats";
import { Testimonial } from "@/components/sections/testimonial";
import { Pricing } from "@/components/sections/pricing";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <LogoCloud />
        <Features />
        <ProductShowcase />
        <Stats />
        <Testimonial />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
