import AboutPreview from "@/components/home/AboutPreview";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WorkApproach from "@/components/home/WorkApproach";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <WorkApproach />
      <CTA />
    </>
  );
}
