import { HeroSection } from "@/components/site/HeroSection";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
      </main>
      <SiteFooter />
    </>
  );
}
