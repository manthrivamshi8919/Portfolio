import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, Lock, Cloud, Zap, Award, TrendingUp, Timer, Layers } from "lucide-react";

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
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  const isTitleInView = useInView(titleRef, { once: true, margin: "-50px" });
  const isIdentityInView = useInView(identityRef, { once: true, margin: "-50px" });
  const isAboutInView = useInView(aboutRef, { once: true, margin: "-50px" });
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
      position: "AI Full Stack Developer Intern",
      company: "X360 Technologies",
      description: "Building production-ready AI-powered backend systems and automation platforms used by real clients.",
      responsibilities: [
        "Designed and built scalable REST APIs using Node.js & TypeScript for automation workflows",
        "Improved API performance using server-side pagination (continuation tokens), reducing database load",
        "Developed secure API key authentication system with encryption and Cosmos DB storage",
        "Built internal NPM package for secure service-to-service communication (projectId, accountId, API keys)",
        "Implemented CI/CD-triggered automated test execution (smoke & regression testing)",
        "Developed AI chatbot that converts product requirements into automated test cases (Jira integration)",
        "Built RBAC system (Owner, Admin, Contributor) for secure platform access",
        "Integrated Azure AI Foundry for AI agent configuration and knowledge base-driven responses",
      ],
    },
    {
      year: "2025",
      position: "AI/ML Intern",
      company: "LnTeks",
      description: "Built AI/ML applications and automation tools that improved business efficiency.",
      responsibilities: [
        "Built AI/ML applications using NLP and LLM techniques",
        "Improved process efficiency by 20% through automation dashboards",
        "Performed data preprocessing, feature engineering & model evaluation",
        "Worked in Agile SDLC for deployment and debugging",
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/2 to-cyan-500/2 dark:from-blue-500/5 dark:to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.01)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(59,130,246,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,.02)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none"></div>
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
                AI Engineer &amp; Full Stack Developer
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
              Specializing in backend systems, automation platforms &amp; AI-powered applications
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
              I am an AI Engineer and Full Stack Developer specializing in building scalable backend systems, automation platforms, and AI-powered applications.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I have hands-on experience developing production-ready systems at X360 Technologies, where I designed REST APIs, implemented secure authentication mechanisms, and built event-driven workflows using Azure services. My work includes AI-powered solutions such as requirement-to-test-case generation, RAG-based chatbots, and intelligent agents integrated with real-world platforms.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              I focus on solving practical engineering problems - from optimizing API performance and designing secure architectures to integrating AI into business workflows. I have built automation systems that improved efficiency by up to 40% and reduced manual effort through intelligent pipelines.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base font-medium">
              My core strength lies in combining backend engineering with Generative AI to build systems that are scalable, efficient, and production-ready.
            </p>
          </motion.div>

          {/* Core Technologies Line */}
          <motion.div
            className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            animate={isAboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">Tech Stack:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-sm">
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-blue-600 dark:text-blue-400">Frontend:</span> React, TypeScript, Tailwind CSS</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-teal-600 dark:text-teal-400">Backend:</span> Node.js, Express, REST APIs</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-purple-600 dark:text-purple-400">AI/ML:</span> LLMs, RAG, LangChain, NLP, Prompt Engineering</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-cyan-600 dark:text-cyan-400">Cloud:</span> Azure AI Foundry, Cosmos DB, Service Bus</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-orange-600 dark:text-orange-400">Databases:</span> MongoDB, Cosmos DB</p>
              <p className="text-gray-700 dark:text-gray-300"><span className="font-medium text-green-600 dark:text-green-400">Tools:</span> Git, Jira, CI/CD Pipelines</p>
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

        {/* Systems & Platforms I Contributed To */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Systems &amp; Platforms I Contributed To</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Bot,
                title: "AI Test Automation Platform",
                bullets: [
                  "Contributed to a system that converts requirements into automated test cases",
                  "Integrated with Jira APIs and CI/CD pipelines for automated execution"
                ]
              },
              {
                icon: Lock,
                title: "API Key-Based Execution System",
                bullets: [
                  "Developed secure project-level authentication using API keys",
                  "Enabled controlled access for cloud-based test runners"
                ]
              },
              {
                icon: Cloud,
                title: "AI Agent Platform",
                bullets: [
                  "Worked on Azure AI Foundry-based configurable agents",
                  "Integrated knowledge base and RAG pipelines for contextual responses"
                ]
              },
              {
                icon: Zap,
                title: "Event-Driven Test System",
                bullets: [
                  "Implemented asynchronous workflows using Azure Service Bus",
                  "Enabled distributed and scalable test execution pipelines"
                ]
              },
            ].map((sys, i) => {
              const Icon = sys.icon;
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl p-6 border border-blue-500/10 bg-white/70 dark:bg-gray-800/60 backdrop-blur-sm shadow-sm flex flex-col"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="mb-4 text-blue-500 dark:text-blue-400">
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-4">{sys.title}</h4>
                  <ul className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed space-y-2 mt-auto">
                    {sys.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-0.5">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center">Achievements</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Award, value: "Star Performer", label: "2 Consecutive Months", sub: "X360 Technologies", color: "from-amber-500/10 to-yellow-500/10", border: "border-amber-500/20", iconColor: "text-amber-600 dark:text-amber-400" },
              { icon: TrendingUp, value: "20% Efficiency", label: "Process Improvement", sub: "LnTeks Internship · Automation Dashboards", color: "from-green-500/10 to-emerald-500/10", border: "border-green-500/20", iconColor: "text-green-600 dark:text-green-400" },
              { icon: Timer, value: "40% Faster", label: "Workflow Processing", sub: "SharePoint + Intelligent Pipeline Automation", color: "from-blue-500/10 to-cyan-500/10", border: "border-blue-500/20", iconColor: "text-blue-600 dark:text-blue-400" },
            ].map((ach, i) => {
              const Icon = ach.icon;
              return (
                <motion.div
                  key={i}
                  className={`rounded-2xl p-6 border bg-gradient-to-br ${ach.color} ${ach.border} backdrop-blur-sm text-center shadow-sm`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.12, type: "spring" }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border ${ach.border} shadow-sm`}>
                      <Icon className={`w-8 h-8 ${ach.iconColor}`} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{ach.value}</div>
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">{ach.label}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{ach.sub}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
