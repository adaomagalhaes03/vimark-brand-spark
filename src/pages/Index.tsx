import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TechnologySection } from '@/components/sections/TechnologySection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <TechnologySection />
      <TeamSection />
      <ProjectsSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
