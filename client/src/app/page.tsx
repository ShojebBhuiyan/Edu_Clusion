import FeaturesSection from "@/components/landing/features-section";
import HeroSection from "@/components/landing/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
