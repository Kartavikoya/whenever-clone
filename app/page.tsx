import { HeroSection } from "@/components/site/HeroSection";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { LogoStrip } from "@/components/site/LogoStrip";
import { PricingStrip } from "@/components/site/PricingStrip";
import { HowItWorksSection } from "@/components/site/HowItWorksSection";
import { FeaturesSection } from "@/components/site/FeaturesSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { PricingDetailSection } from "@/components/site/PricingDetailSection";
import { BlogSection } from "@/components/site/BlogSection";
import { FAQSection } from "@/components/site/FAQSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <LogoStrip />
        <PricingStrip />
        <HowItWorksSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingDetailSection />
        <BlogSection />
        <FAQSection />
      </main>
      <SiteFooter />
    </>
  );
}
