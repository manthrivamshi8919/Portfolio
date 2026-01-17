import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaNodeJs, FaJs, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaPython, FaDatabase, FaLock, FaRobot, FaBrain, FaComments, FaLink, FaMicrophone, FaBullseye, FaUsers, FaSearch, FaTree } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss, SiScikitlearn, SiNumpy, SiPandas } from "react-icons/si";

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Individual refs for each skill category
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const coreRef = useRef(null);
  const mlRef = useRef(null);
  const genAiRef = useRef(null);
  const advancedAiRef = useRef(null);
  
  const frontendInView = useInView(frontendRef, { once: true, margin: "-100px" });
  const backendInView = useInView(backendRef, { once: true, margin: "-100px" });
  const coreInView = useInView(coreRef, { once: true, margin: "-100px" });
  const mlInView = useInView(mlRef, { once: true, margin: "-100px" });
  const genAiInView = useInView(genAiRef, { once: true, margin: "-100px" });
  const advancedAiInView = useInView(advancedAiRef, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend",
      color: "orange",
      gradient: "linear-gradient(135deg, #ff9a76 0%, #ff6b6b 50%, #ff8e53 100%)",
      shadowColor: "orange-200/40",
      titleColor: "orange-500",
      skills: [
        { name: "CSS3", icon: <FaCss3Alt className="text-3xl md:text-4xl lg:text-5xl" />, color: "#1572B6" },
        { name: "React", icon: <FaReact className="text-3xl md:text-4xl lg:text-5xl" />, color: "#61DAFB" },
        { name: "HTML5", icon: <FaHtml5 className="text-3xl md:text-4xl lg:text-5xl" />, color: "#E34F26" },
        { name: "JavaScript", icon: <FaJs className="text-3xl md:text-4xl lg:text-5xl" />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript className="text-3xl md:text-4xl lg:text-5xl" />, color: "#3178C6" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-3xl md:text-4xl lg:text-5xl" />, color: "#06B6D4" },
      ]
    },
    {
      title: "Backend",
      color: "teal",
      gradient: "linear-gradient(135deg, #20E3B2 0%, #29ffc6 50%, #20E3B2 100%)",
      shadowColor: "teal-200/40",
      titleColor: "teal-500",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-3xl md:text-4xl lg:text-5xl" />, color: "#339933" },
        { name: "Express", icon: <SiExpress className="text-3xl md:text-4xl lg:text-5xl" />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb className="text-3xl md:text-4xl lg:text-5xl" />, color: "#47A248" },
        { name: "REST API", icon: <FaLink className="text-3xl md:text-4xl lg:text-5xl" />, color: "#FF6C37" },
        { name: "JWT", icon: <FaLock className="text-3xl md:text-4xl lg:text-5xl" />, color: "#000000" },
      ]
    },
    {
      title: "Core Programming",
      color: "blue",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%)",
      shadowColor: "blue-200/40",
      titleColor: "blue-600",
      skills: [
        { name: "Java", icon: <FaJava className="text-3xl md:text-4xl lg:text-5xl" />, color: "#007396" },
        { name: "Python", icon: <FaPython className="text-3xl md:text-4xl lg:text-5xl" />, color: "#3776AB" },
      ]
    },
    {
      title: "Machine Learning",
      color: "amber",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 50%, #f093fb 100%)",
      shadowColor: "amber-200/40",
      titleColor: "amber-600",
      skills: [
        { name: "ML", icon: <FaBrain className="text-3xl md:text-4xl lg:text-5xl" />, color: "#FF6F00" },
        { name: "Scikit-learn", icon: <SiScikitlearn className="text-3xl md:text-4xl lg:text-5xl" />, color: "#F7931E" },
        { name: "NumPy", icon: <SiNumpy className="text-3xl md:text-4xl lg:text-5xl" />, color: "#013243" },
        { name: "Pandas", icon: <SiPandas className="text-3xl md:text-4xl lg:text-5xl" />, color: "#150458" },
      ]
    },
    {
      title: "Generative AI",
      color: "purple",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 50%, #a8edea 100%)",
      shadowColor: "purple-200/40",
      titleColor: "purple-600",
      skills: [
        { name: "LLMs", icon: <FaRobot className="text-3xl md:text-4xl lg:text-5xl" />, color: "#412991" },
        { name: "Prompt Eng", icon: <FaComments className="text-3xl md:text-4xl lg:text-5xl" />, color: "#7C3AED" },
        { name: "LangChain", icon: <FaLink className="text-3xl md:text-4xl lg:text-5xl" />, color: "#00A67E" },
        { name: "NLP", icon: <FaMicrophone className="text-3xl md:text-4xl lg:text-5xl" />, color: "#0066CC" },
      ]
    },
    {
      title: "Advanced AI Systems",
      color: "pink",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #ff9a9e 100%)",
      shadowColor: "pink-200/40",
      titleColor: "pink-600",
      skills: [
        { name: "Agentic AI", icon: <FaUsers className="text-3xl md:text-4xl lg:text-5xl" />, color: "#EC4899" },
        { name: "Multi-Agent", icon: <FaBullseye className="text-3xl md:text-4xl lg:text-5xl" />, color: "#8B5CF6" },
        { name: "RAG", icon: <FaSearch className="text-3xl md:text-4xl lg:text-5xl" />, color: "#10B981" },
        { name: "Pinecone", icon: <FaTree className="text-3xl md:text-4xl lg:text-5xl" />, color: "#000000" },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-50 dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950"
    >
      {/* Ambient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/2 to-cyan-500/2 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Comprehensive expertise spanning modern web development, machine learning, and cutting-edge AI technologies.
          </p>
        </motion.div>
        {/* Main Skills Grid - Frontend & Backend */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            ref={frontendRef}
            initial={{ opacity: 0, x: -50 }}
            animate={frontendInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-${skillCategories[0].titleColor} mb-8 text-center`}>{skillCategories[0].title}</h2>
            {/* 3D Platform */}
            <div className="relative h-80 md:h-96 flex items-end justify-center">
              {/* Platform Shadow */}
              <div className={`absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-${skillCategories[0].shadowColor} to-transparent rounded-full blur-2xl`}></div>
              
              {/* 3D Platform */}
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Platform Surface */}
                <div 
                  className="relative h-20 md:h-24 rounded-full shadow-2xl"
                  style={{
                    background: skillCategories[0].gradient,
                    transform: "perspective(600px) rotateX(60deg)",
                  }}
                >
                  {/* Platform Shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Icons on Platform */}
                <div className="absolute inset-x-0 -top-36 md:-top-48 flex flex-wrap justify-center gap-3 md:gap-6 px-4 md:px-8">
                  {skillCategories[0].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      animate={floatAnimation}
                      transition={{ delay: index * 0.2, ...floatAnimation.transition }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="bg-card p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-card"
                        style={{ minWidth: "60px", maxWidth: "80px" }}
                      >
                        <div style={{ color: skill.color }} className="flex flex-col items-center gap-1 md:gap-2">
                          {skill.icon}
                          <span className="text-[10px] md:text-xs font-bold text-foreground text-center leading-tight">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            ref={backendRef}
            initial={{ opacity: 0, x: 50 }}
            animate={backendInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className={`text-3xl md:text-4xl font-bold text-${skillCategories[1].titleColor} mb-8 text-center`}>{skillCategories[1].title}</h2>
            {/* 3D Platform */}
            <div className="relative h-80 md:h-96 flex items-end justify-center">
              {/* Platform Shadow */}
              <div className={`absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-${skillCategories[1].shadowColor} to-transparent rounded-full blur-2xl`}></div>
              
              {/* 3D Platform */}
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Platform Surface */}
                <div 
                  className="relative h-20 md:h-24 rounded-full shadow-2xl"
                  style={{
                    background: skillCategories[1].gradient,
                    transform: "perspective(600px) rotateX(60deg)",
                  }}
                >
                  {/* Platform Shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Icons on Platform */}
                <div className="absolute inset-x-0 -top-36 md:-top-48 flex flex-wrap justify-center gap-3 md:gap-6 px-4 md:px-8">
                  {skillCategories[1].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      animate={floatAnimation}
                      transition={{ delay: index * 0.2, ...floatAnimation.transition }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="bg-card p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-card"
                        style={{ minWidth: "60px", maxWidth: "80px" }}
                      >
                        <div style={{ color: skill.color }} className="flex flex-col items-center gap-1 md:gap-2">
                          {skill.icon}
                          <span className="text-[10px] md:text-xs font-bold text-foreground text-center leading-tight">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Skills Sections */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            ref={coreRef}
            initial={{ opacity: 0, x: -50 }}
            animate={coreInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className={`text-4xl font-bold text-${skillCategories[2].titleColor} mb-8 text-center`}>{skillCategories[2].title}</h2>
            {/* 3D Platform */}
            <div className="relative h-80 md:h-96 flex items-end justify-center">
              {/* Platform Shadow */}
              <div className={`absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-${skillCategories[2].shadowColor} to-transparent rounded-full blur-2xl`}></div>
              
              {/* 3D Platform */}
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Platform Surface */}
                <div 
                  className="relative h-20 md:h-24 rounded-full shadow-2xl"
                  style={{
                    background: skillCategories[2].gradient,
                    transform: "perspective(600px) rotateX(60deg)",
                  }}
                >
                  {/* Platform Shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Icons on Platform */}
                <div className="absolute inset-x-0 -top-36 md:-top-48 flex flex-wrap justify-center gap-3 md:gap-6 px-4 md:px-8">
                  {skillCategories[2].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      animate={floatAnimation}
                      transition={{ delay: index * 0.2, ...floatAnimation.transition }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="bg-card p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-card"
                        style={{ minWidth: "60px", maxWidth: "80px" }}
                      >
                        <div style={{ color: skill.color }} className="flex flex-col items-center gap-1 md:gap-2">
                          {skill.icon}
                          <span className="text-[10px] md:text-xs font-bold text-foreground text-center leading-tight">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            ref={mlRef}
            initial={{ opacity: 0, x: 50 }}
            animate={mlInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className={`text-4xl font-bold text-${skillCategories[3].titleColor} mb-8 text-center`}>{skillCategories[3].title}</h2>
            {/* 3D Platform */}
            <div className="relative h-80 md:h-96 flex items-end justify-center">
              {/* Platform Shadow */}
              <div className={`absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-${skillCategories[3].shadowColor} to-transparent rounded-full blur-2xl`}></div>
              
              {/* 3D Platform */}
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Platform Surface */}
                <div 
                  className="relative h-20 md:h-24 rounded-full shadow-2xl"
                  style={{
                    background: skillCategories[3].gradient,
                    transform: "perspective(600px) rotateX(60deg)",
                  }}
                >
                  {/* Platform Shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Icons on Platform */}
                <div className="absolute inset-x-0 -top-36 md:-top-48 flex flex-wrap justify-center gap-3 md:gap-6 px-4 md:px-8">
                  {skillCategories[3].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      animate={floatAnimation}
                      transition={{ delay: index * 0.2, ...floatAnimation.transition }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="bg-card p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-card"
                        style={{ minWidth: "60px", maxWidth: "80px" }}
                      >
                        <div style={{ color: skill.color }} className="flex flex-col items-center gap-1 md:gap-2">
                          {skill.icon}
                          <span className="text-[10px] md:text-xs font-bold text-foreground text-center leading-tight">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            ref={genAiRef}
            initial={{ opacity: 0, x: -50 }}
            animate={genAiInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className={`text-4xl font-bold text-${skillCategories[4].titleColor} mb-8 text-center`}>{skillCategories[4].title}</h2>
            {/* 3D Platform */}
            <div className="relative h-80 md:h-96 flex items-end justify-center">
              {/* Platform Shadow */}
              <div className={`absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-${skillCategories[4].shadowColor} to-transparent rounded-full blur-2xl`}></div>
              
              {/* 3D Platform */}
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Platform Surface */}
                <div 
                  className="relative h-20 md:h-24 rounded-full shadow-2xl"
                  style={{
                    background: skillCategories[4].gradient,
                    transform: "perspective(600px) rotateX(60deg)",
                  }}
                >
                  {/* Platform Shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Icons on Platform */}
                <div className="absolute inset-x-0 -top-36 md:-top-48 flex flex-wrap justify-center gap-3 md:gap-6 px-4 md:px-8">
                  {skillCategories[4].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      animate={floatAnimation}
                      transition={{ delay: index * 0.2, ...floatAnimation.transition }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="bg-card p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-card"
                        style={{ minWidth: "60px", maxWidth: "80px" }}
                      >
                        <div style={{ color: skill.color }} className="flex flex-col items-center gap-1 md:gap-2">
                          {skill.icon}
                          <span className="text-[10px] md:text-xs font-bold text-foreground text-center leading-tight">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            ref={advancedAiRef}
            initial={{ opacity: 0, x: 50 }}
            animate={advancedAiInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <h2 className={`text-4xl font-bold text-${skillCategories[5].titleColor} mb-8 text-center`}>{skillCategories[5].title}</h2>
            {/* 3D Platform */}
            <div className="relative h-80 md:h-96 flex items-end justify-center">
              {/* Platform Shadow */}
              <div className={`absolute bottom-0 w-full h-24 md:h-32 bg-gradient-to-t from-${skillCategories[5].shadowColor} to-transparent rounded-full blur-2xl`}></div>
              
              {/* 3D Platform */}
              <div className="relative w-full max-w-sm md:max-w-md">
                {/* Platform Surface */}
                <div 
                  className="relative h-20 md:h-24 rounded-full shadow-2xl"
                  style={{
                    background: skillCategories[5].gradient,
                    transform: "perspective(600px) rotateX(60deg)",
                  }}
                >
                  {/* Platform Shine */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>

                {/* Icons on Platform */}
                <div className="absolute inset-x-0 -top-36 md:-top-48 flex flex-wrap justify-center gap-3 md:gap-6 px-4 md:px-8">
                  {skillCategories[5].skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      animate={floatAnimation}
                      transition={{ delay: index * 0.2, ...floatAnimation.transition }}
                      className="group cursor-pointer"
                    >
                      <div 
                        className="bg-card p-2 md:p-4 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-4 border-card"
                        style={{ minWidth: "60px", maxWidth: "80px" }}
                      >
                        <div style={{ color: skill.color }} className="flex flex-col items-center gap-1 md:gap-2">
                          {skill.icon}
                          <span className="text-[10px] md:text-xs font-bold text-foreground text-center leading-tight">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Description */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 6 * 0.2, ease: "easeOut" }}
          className="text-center mt-20 text-muted-foreground max-w-3xl mx-auto"
        >
          <p className="text-lg leading-relaxed">
            Comprehensive expertise spanning modern web development, machine learning, and cutting-edge AI technologies. 
            From crafting responsive user interfaces to building intelligent AI-powered systems with advanced capabilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;