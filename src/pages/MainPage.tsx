import { useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import ContactSection from "@/components/sections/ContactSection";

const MainPage = () => {
  // Refs for navigation
  const contactRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroSection contactRef={contactRef} projectsRef={projectsRef} scrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection ref={projectsRef} />
      <CertificationsSection />
      <ContactSection ref={contactRef} />
    </div>
  );
};

export default MainPage;
