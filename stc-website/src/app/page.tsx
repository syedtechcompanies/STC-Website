import AboutPreview from "@/components/home/AboutPreview";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <Stats />
      <CTA />
    </>
  );
}
