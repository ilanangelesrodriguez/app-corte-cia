import FeaturesSection from "@/components/main/featureSection";
import HeroSection from "@/components/main/heroSection";
import HowItWorks from "@/components/main/howItWork";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 md:py-8">
      <HeroSection />
      <HowItWorks />
      <FeaturesSection />
    </section>
  );
}
