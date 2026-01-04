import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  contactRef: React.RefObject<HTMLDivElement>;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
}

const HeroSection = ({ contactRef, scrollToSection }: HeroSectionProps) => {
  const homeRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(homeRef, { once: true });

  return (
    <section 
      ref={homeRef} 
      id="home" 
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4 py-12 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 inline-block">
                <motion.span
                  className="text-sm md:text-base bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-1 font-medium glass-effect"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Hello, Welcome to my Portfolio
                </motion.span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                I'm <span className="text-gradient">Manthri Vamshi</span>, a{" "}
                <span className="text-gradient">Full Stack Developer</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 md:pr-12">
                I build modern web applications using the MERN stack. Passionate about
                creating intuitive and engaging user experiences through clean and
                efficient code.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection(contactRef)}
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/20 button-glow"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600"
                >
                  <a 
                    href="https://drive.google.com/file/d/1gAv8Tv-uL77f0HQShcFZZBtCQIhMDT0S/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    View Resume
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="relative z-10 w-1/2 mx-auto">
                <img
                  src="photo/profile.png"
                  alt="Manthri Vamshi"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-blue-500/10 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-cyan-500/10 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
