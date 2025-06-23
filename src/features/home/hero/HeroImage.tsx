import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";

function HeroImage() {
  return (
    <AnimatedSection
      className="md:w-1/2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0 }}
    >
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <Image
          src="/hero.webp"
          alt="Business professionals reviewing financial documents"
          width={600}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>
    </AnimatedSection>
  );
}

export default HeroImage;
