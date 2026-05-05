import { HeroSection } from "@/components/site/HeroSection";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LogoStrip } from "@/components/site/LogoStrip";
import { ClientsSection } from "@/components/site/ClientsSection";
import { HowItWorksSection } from "@/components/site/HowItWorksSection";
import { FeaturesSection } from "@/components/site/FeaturesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { ShowcaseSection } from "@/components/site/ShowcaseSection";
import { PriceSection } from "@/components/site/PriceSection";
import { BlogSection } from "@/components/site/BlogSection";
import { FAQSection } from "@/components/site/FAQSection";
import { SiteHeader } from "@/components/site/SiteHeader"; // ✅ ADD THIS

export default function Home() {
  return (
    <main className="w-full overflow-hidden">
      <SiteHeader />

      <div className="relative bg-white">
        <HeroSection />
        <LogoStrip />
      </div>

      <HowItWorksSection />
      <FeaturesSection />
      <ClientsSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <PriceSection />
      <FAQSection />
      <BlogSection />
      <SiteFooter />
      
    </main>
  );
}