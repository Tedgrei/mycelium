import { ContactSection } from "@/components/sections/contact-section";
import { CultivationSection } from "@/components/sections/cultivation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProductsSection } from "@/components/sections/products-section";
import { TechnologySection } from "@/components/sections/technology-section";

export default function Home() {
  return (
    <div className="bg-transparent">
      <HeroSection />
      <ProductsSection />
      <CultivationSection />
      <TechnologySection />
      <ContactSection />
    </div>
  );
}
