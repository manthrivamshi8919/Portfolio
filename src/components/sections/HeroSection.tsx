import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Bot } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/2 to-cyan-500/2 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>

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
                  AI ENGINEER • BACKEND SYSTEMS • FULL STACK
                </span>
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.3] tracking-tight whitespace-nowrap"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="block text-gray-900 dark:text-white mb-2">AI Engineer &</span>
                <span className="block bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 dark:from-blue-400 dark:via-cyan-400 dark:to-blue-500 bg-clip-text text-transparent h-[1.5em] overflow-visible">
                  <TypeAnimation
                    sequence={[
                      "Machine Learning",
                      2000,
                      "Full Stack Developer",
                      2000,
                      "Backend Systems",
                      2000,
                      "Automation Expert",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="inline-block"
                  />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.div
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="font-medium text-gray-700 dark:text-gray-300">Building Scalable AI Systems, Automation Platforms &amp; APIs</p>
                <ul className="space-y-2 text-base">
                  <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">▸</span><span>Developed AI agents, RAG pipelines &amp; enterprise automation systems</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">▸</span><span>Built production-grade APIs with Node.js, TypeScript &amp; Azure</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-500 mt-1">▸</span><span>Integrated CI/CD-based automated testing &amp; AI-powered test generation</span></li>
                </ul>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 lg:gap-4 justify-center lg:justify-start items-center w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Button
                  onClick={() => scrollToSection(projectsRef)}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white px-5 lg:px-6 py-6 text-sm lg:text-base font-medium rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
                <Button
                  onClick={() => scrollToSection(contactRef)}
                  size="lg"
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white px-5 lg:px-6 py-6 text-sm lg:text-base font-medium rounded-full shadow-lg transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <Mail className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const btn = document.getElementById('chatbot-trigger') as HTMLButtonElement | null;
                    btn?.click();
                  }}
                  className="border-2 border-cyan-400/60 dark:border-cyan-500/60 hover:border-cyan-500 bg-transparent hover:bg-cyan-50 dark:hover:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 px-5 lg:px-6 py-6 text-sm lg:text-base font-medium rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  <Bot className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
                  Try AI Chatbot
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