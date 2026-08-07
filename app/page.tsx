import { Nav } from "@/components/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Advantages } from "@/components/sections/advantages";
import { Programs } from "@/components/sections/programs";
import { Schedule } from "@/components/sections/schedule";
import { Nutrition } from "@/components/sections/nutrition";
import { Gallery } from "@/components/sections/gallery";
import { VideoSection } from "@/components/sections/video";
import { Testimonials } from "@/components/sections/testimonials";
import { Teachers } from "@/components/sections/teachers";
import { Faq } from "@/components/sections/faq";
import { Transparency } from "@/components/sections/transparency";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Advantages />
        <Programs />
        <Schedule />
        <Nutrition />
        <Gallery />
        <VideoSection />
        <Teachers />
        <Testimonials />
        <Faq />
        <Transparency />
        <Contact />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
