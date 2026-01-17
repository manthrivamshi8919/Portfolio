import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  contactRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}

const HeroSection = ({ contactRef, projectsRef, scrollToSection }: HeroSectionProps) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(homeRef, { once: true });

  return (
    <section 
      ref={homeRef} 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950"
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/2 to-cyan-500/2 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-24 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              {/* Top Tag */}
              <motion.div
                className="mb-8 inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="text-xs md:text-sm text-cyan-600 dark:text-cyan-400/80 tracking-[0.3em] uppercase font-light">
                  FULL STACK • GENERATIVE AI • AGENTIC SYSTEMS
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block text-gray-900 dark:text-white">Designing & Engineering</span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent">
                  Intelligent Digital Experiences
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Full Stack Developer & GenAI Engineer<br />
                focused on clean interfaces and intelligent systems.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  onClick={() => scrollToSection(projectsRef)}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-base font-medium rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900/50 text-gray-700 dark:text-gray-300 px-8 py-6 text-base font-medium rounded-full transition-all duration-300"
                >
                  <a 
                    href="https://drive.google.com/file/d/1gAv8Tv-uL77f0HQShcFZZBtCQIhMDT0S/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main Image Container with Arch Shape */}
                <div className="relative w-[320px] h-[420px] md:w-[380px] md:h-[480px]">
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-[200px_200px_40px_40px] bg-gradient-to-br from-blue-500/30 via-cyan-500/30 to-blue-600/30 blur-2xl"></div>
                  
                  {/* Border Frame */}
                  <div className="absolute inset-0 rounded-[200px_200px_40px_40px] bg-gradient-to-br from-blue-500/40 to-cyan-500/40 p-[3px]">
                    <div className="w-full h-full rounded-[200px_200px_40px_40px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl overflow-hidden">
                      {/* Profile Image */}
                      <img 
                        src="/photo/profile.png" 
                        alt="Manthri Vamshi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Decorative Elements */}
                <motion.div
                  className="absolute -top-8 -left-8 w-20 h-20 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-2xl rotate-12 backdrop-blur-sm border border-cyan-300/30 dark:border-cyan-500/30"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [12, 18, 12]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                ></motion.div>

                <motion.div
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 dark:from-blue-500/20 dark:to-cyan-500/20 rounded-3xl -rotate-12 backdrop-blur-sm border border-blue-300/30 dark:border-blue-500/30 flex items-center justify-center"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [-12, -18, -12]
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                </motion.div>

                {/* Additional Glow Effects */}
                <div className="absolute top-1/4 -right-4 w-24 h-24 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 -left-4 w-24 h-24 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;