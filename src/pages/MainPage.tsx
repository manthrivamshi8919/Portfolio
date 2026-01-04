import { useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

const MainPage = () => {
  // Refs for navigation
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-20">
      <HeroSection contactRef={contactRef} scrollToSection={scrollToSection} />
      <AboutSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  );
};

export default MainPage;
