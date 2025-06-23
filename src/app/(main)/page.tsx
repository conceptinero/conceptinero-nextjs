import {
  AboutSection,
  CTASection,
  FrustrationSection,
  HeroSection,
  ProcessSection,
  TestimonialsSection,
  WhyChooseSection,
} from "@/features/home";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FrustrationSection />
      <AboutSection />
      <WhyChooseSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
