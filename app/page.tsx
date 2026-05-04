import { HeroSection } from "@/components/site/HeroSection";
import { SiteHeader } from "@/components/site/SiteHeader";
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

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <LogoStrip />
        <HowItWorksSection />
        <ClientsSection />
        <ShowcaseSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PriceSection />
        <BlogSection />
        <FAQSection />
        
      </main>
      <SiteFooter />
    </>
  );
}
