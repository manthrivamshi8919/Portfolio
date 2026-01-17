import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Enhanced scroll animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  
  // Spring animations for smoother feel
  const springY = useSpring(y, { stiffness: 100, damping: 20 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 20 });
  
  // Individual refs for staggered animations
  const titleRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  
  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const isIdentityInView = useInView(identityRef, { once: true, margin: "-50px" });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
  const isStatsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const isEducationInView = useInView(educationRef, { once: true, margin: "-50px" });
  const isExperienceInView = useInView(experienceRef, { once: true, margin: "-50px" });
  
  // Education
  const educationData = [
    {
      year: "2021-2025",
      degree: "B.Tech in CSE",
      institution: "Jayamukhi Institute of Technology and Science",
      description: "CGPA: 8.5/10",
    },
    {
      year: "2019-2021",
      degree: "Intermediate (MPC)",
      institution: "Sai Sri Junior College, Sircilla",
      description: "Percentage: 86.8%",
    },
    {
      year: "2019",
      degree: "SSC",
      institution: "Kerala High School, Sircilla",
      description: "CGPA: 9.7/10",
    },
  ];

  // Experience
  const experienceData = [
    {
      year: "2025 - Present",
      position: "Junior Full Stack Developer Intern",
      company: "X360 Technologies",
      description: "Contributed to production-ready features and worked on real client-facing modules while collaborating with cross-functional teams.",
      responsibilities: [
        "Developing and maintaining scalable web applications",
        "Working with React, JavaScript, TypeScript, Node.js, and MongoDB",
        "Implementing REST APIs and JWT authentication",
        "Collaborating with development team on live projects",
        "Contributing to production-ready features",
        "Working on real client-facing modules",
      ],
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
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
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          ref={titleRef}
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 60 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={isTitleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
          
          {/* Professional Identity */}
          <motion.div 
            ref={identityRef}
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={isIdentityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="text-center">
              <motion.span 
                className="text-xl md:text-2xl font-light text-gray-700 dark:text-gray-200"
                initial={{ opacity: 0 }}
                animate={isIdentityInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span 
                  className="font-semibold text-blue-600 dark:text-blue-400"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isIdentityInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  Full Stack & Generative AI Engineer
                </motion.span>
              </motion.span>
              <motion.div 
                className="mt-3 h-px bg-gradient-to-r from-transparent via-blue-500 to-cyan-500 w-24 mx-auto"
                initial={{ scaleX: 0 }}
                animate={isIdentityInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                style={{ transformOrigin: "center" }}
              />
              <motion.p 
                className="text-lg text-gray-600 dark:text-gray-400 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isIdentityInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Building scalable, intelligent web applications
              </motion.p>
            </div>
          </motion.div>

          {/* About Content - Concise & Powerful */}
          <motion.div 
            ref={aboutRef}
            className="rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-gray-800/50 backdrop-blur-sm max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isAboutInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Short, Powerful Intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isAboutInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I am a Computer Science and Engineering graduate with hands-on industry experience as a Full Stack and Generative AI Engineer. I specialize in building scalable, high-quality web applications and integrating AI-driven capabilities into real-world products.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                I work across the full stack, developing robust frontends and scalable backends, while also designing and implementing Generative AI solutions such as LLM-powered applications, RAG pipelines, and multi-agent systems.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                Currently, I am a Junior Full Stack Developer Intern at X360 Technologies, contributing to live production projects and collaborating across teams. I have been recognized with the Star Performer Award for two consecutive months, reflecting my consistency, ownership, and impact.
              </p>
            </motion.div>

            {/* Core Technologies Line */}
            <motion.div 
              className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Core Technologies:</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                React, TypeScript, Node.js, Express, MongoDB, REST APIs, JWT, Tailwind CSS, Python, LLMs, LangChain, RAG, Vector Databases
              </p>
            </motion.div>
          </motion.div>

          {/* Professional Stats Grid - Clean Minimal Design */}
          <motion.div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            initial={{ opacity: 0, y: 60 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Experience Card */}
            <motion.div 
              className="rounded-2xl border border-blue-500/10 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm px-5 py-6 shadow-sm transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                >
                  6+ months
                </motion.div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 tracking-wide">Experience</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs uppercase tracking-[0.3em] mb-4">Industry</p>
                <div className="space-y-2">
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 justify-center">
                    <span>X360 Technologies</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 justify-center">
                    <span>Production Environment</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 justify-center">
                    <span>Full Stack Development</span>
                  </div>
                </div>
                <div className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-4">6+ months</div>
              </div>
            </motion.div>

            {/* Tech Stack Card */}
            <motion.div 
              className="rounded-2xl border border-cyan-500/10 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm px-5 py-6 shadow-sm transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="text-center">
                <motion.div 
                  className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2"
                  initial={{ scale: 0 }}
                  animate={isStatsInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                >
                  MERN
                </motion.div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 tracking-wide">Tech Stack</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs uppercase tracking-[0.3em] mb-4">Core Tools</p>
                <div className="flex items-center justify-center text-gray-600 dark:text-gray-300 text-xs leading-relaxed">
                  <span>React · Node.js · MongoDB · TypeScript<br />Generative AI (LLMs & RAG)</span>
                </div>
              </div>
            </motion.div>

            {/* Recognition Card */}
            <motion.div 
              className="rounded-2xl border border-amber-500/15 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm px-5 py-6 shadow-sm transition-transform duration-300"
              initial={{ opacity: 0, y: 40 }}
              animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <div className="text-center">
                <motion.div 
                  className="w-8 h-8 bg-yellow-100/80 dark:bg-yellow-900/40 rounded-full flex items-center justify-center mx-auto mb-3"
                  initial={{ rotate: 0 }}
                  animate={isStatsInView ? { rotate: 360 } : {}}
                  transition={{ duration: 0.8, delay: 0.7, ease: "easeInOut" }}
                >
                  <span className="text-xl font-bold text-yellow-600 dark:text-yellow-400">⭐</span>
                </motion.div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 tracking-wide">Recognition</h4>
                <p className="text-gray-600 dark:text-gray-300 text-xs uppercase tracking-[0.3em] mb-4">Achievements</p>
                <div className="text-blue-600 dark:text-blue-400 text-xs font-medium mt-4">Star Performer</div>
                <p className="text-gray-600 dark:text-gray-300 text-xs uppercase tracking-[0.25em]">2 Months</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Education & Experience Sections */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education */}
            <motion.div
              ref={educationRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isEducationInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isEducationInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Education
              </motion.h3>
              <div className="space-y-5">
                {educationData.map((edu, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-6 pb-4 border-l border-blue-500/20"
                    initial={{ opacity: 0, x: -26 }}
                    animate={isEducationInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.6 + index * 0.1 }}
                  >
                    <motion.div 
                      className="absolute w-3.5 h-3.5 bg-blue-500 rounded-full -left-[7px]"
                      initial={{ scale: 0 }}
                      animate={isEducationInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1, type: "spring" }}
                    />
                    <div className="text-xs tracking-wide uppercase text-blue-500/80">{edu.year}</div>
                    <h4 className="text-base font-medium mt-1 text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.institution}</p>
                    <p className="text-xs text-gray-500">{edu.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              ref={experienceRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            >
              <motion.h3 
                className="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={isExperienceInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                Experience
              </motion.h3>
              <div className="space-y-5">
                {experienceData.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="relative pl-6 pb-4 border-l border-blue-500/20"
                    initial={{ opacity: 0, x: 26 }}
                    animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.7 + index * 0.1 }}
                  >
                    <motion.div 
                      className="absolute w-3.5 h-3.5 bg-blue-500 rounded-full -left-[7px]"
                      initial={{ scale: 0 }}
                      animate={isExperienceInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.8 + index * 0.1, type: "spring" }}
                    />
                    <div className="text-xs tracking-wide uppercase text-blue-500/80">{exp.year}</div>
                    <h4 className="text-base font-medium mt-1 text-gray-900 dark:text-white">{exp.position}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 leading-relaxed">{exp.description}</p>
                    <motion.ul 
                      className="mt-3 space-y-2.5"
                      initial={{ opacity: 0 }}
                      animate={isExperienceInView ? { opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    >
                      {exp.responsibilities.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start text-left"
                          initial={{ opacity: 0, x: -18 }}
                          animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: 1.0 + index * 0.1 + i * 0.05 }}
                        >
                          <span className="text-blue-500 mr-2 text-base">▸</span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
