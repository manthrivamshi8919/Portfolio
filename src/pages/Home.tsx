import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/PageTransition";
import { ArrowRight, Download, Github } from "lucide-react";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const Home = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-4 inline-block">
                <motion.span
                  className="text-sm md:text-base bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-1 font-medium glass-effect"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
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
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/20 button-glow"
                >
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg"
                  className="group card-hover"
                >
                  <a 
                    href="/src/files/Manthri_Vamshi_CV.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                    View CV
                  </a>
                </Button>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-6 border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm font-medium shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors card-hover"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Profile
                </motion.a>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 125,
                damping: 10 
              }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full relative bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-600 p-1 shadow-lg shadow-blue-500/30">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-100">
                  <img
                    src="/photo/cccc2d0c-3776-4434-9341-b8066285ff05.png"
                    alt="Developer Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div
                className="absolute -bottom-4 -right-4 glass-effect px-4 py-2 rounded-lg shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                }}
              >
                <span className="text-lg font-bold text-gradient">MERN Stack</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="mt-24 md:mt-32 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Tech Stack I Work With</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Modern technologies for building powerful web applications
          </p>
          
          <div className="flex justify-center flex-wrap gap-6 md:gap-10">
            {[
              { name: "React", icon: <FaReact className="text-cyan-500" /> },
              { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
              { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
              { name: "Express", icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
              { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="w-24 h-24 rounded-xl glass-effect shadow-md flex items-center justify-center text-5xl mb-2 card-hover">
                  {tech.icon}
                </div>
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            className="mt-10" 
            asChild
          >
            <Link to="/about">
              Learn more about me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>

          <div className="mt-6">
            <Button 
              variant="outline" 
              asChild
            >
              <Link to="/certifications">
                View my certifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
