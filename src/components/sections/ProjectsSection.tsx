import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, forwardRef, useState } from "react";
import { Github } from "lucide-react";

// Projects data
const projects = [
  {
    id: 1,
    title: "QuizGen AI",
    description: "AI-powered quiz generation platform that creates intelligent quizzes automatically. Features include dynamic quiz creation, real-time analytics, and an intuitive user interface with advanced AI capabilities.",
    technologies: ["React", "TypeScript", "AI/ML", "Node.js", "TailwindCSS", "Framer Motion"],
    image: "/Projects/QuizGenai.png",
    githubUrl: "https://github.com/manthrivamshi8919/QuizGen-AI",
    demoUrl: "https://quizgen-ai-yi8u.onrender.com/"
  },
  {
    id: 2,
    title: "ProfileMagnet - Professional LinkedIn Optimization",
    description: "A complete, production-ready website for LinkedIn profile optimization services featuring advanced animations, responsive design, and modern UI components. Built with React 18, TypeScript, Tailwind CSS, and Vite.",
    technologies: ["React 18", "TypeScript", "Tailwind CSS", "Vite", "Canvas API", "Framer Motion"],
    image: "/Projects/profilemagnet.png",
    githubUrl: "https://github.com/manthrivamshi8919/ProfileMagnet",
    demoUrl: "https://profilemagnet.pages.dev/"
  },
  {
    id: 3,
    title: "Code Generator",
    description: "AI-powered code generation web application using Streamlit and Groq LLMs. Generate production-ready code from natural language descriptions with multi-language support, secure API integration, and instant download capabilities.",
    technologies: ["Streamlit", "Python", "Groq API", "Pygments", "AI/ML"],
    image: "/Projects/codegeneration.png",
    githubUrl: "https://github.com/manthrivamshi8919/Code_Generation_LLM.git",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "Smart AI Budget Assistant",
    description: "AI-powered personal finance management application with comprehensive financial tools including budget analysis, savings goal planning, expense tracking, investment advice, and debt management using Streamlit and Groq AI.",
    technologies: ["Streamlit", "Python", "Groq API", "Pandas", "AI/ML", "Financial Analysis"],
    image: "/Projects/smartaibudget.png",
    githubUrl: "https://github.com/manthrivamshi8919/smart-ai-budget-assistant-genai.git",
    demoUrl: "#"
  },
  {
    id: 5,
    title: "SharePoint File Agent",
    description: "Smart file discovery and cloud upload automation solution connecting local storage with Microsoft cloud services. Features secure MSAL authentication, intelligent file scanning, batch processing, and enterprise-grade security.",
    technologies: ["Streamlit", "Python", "Microsoft Graph API", "MSAL", "OAuth 2.0", "Enterprise Security"],
    image: "/Projects/Agentfileupload.png",
    githubUrl: "https://github.com/manthrivamshi8919/agent-file-sharepoint-onedrive-uploader.git",
    demoUrl: "#"
  },
  {
    id: 6,
    title: "LangChain Chatbot with Hugging Face",
    description: "A modern, interactive chatbot powered by LangChain and Hugging Face's Mistral-7B model, built with Streamlit for an elegant user interface. Features real-time conversation flow, secure API key management, and session-based chat history.",
    technologies: ["Streamlit", "Python", "LangChain", "Hugging Face", "Mistral-7B", "AI/ML"],
    image: "/Projects/langchain_chatbot.png",
    githubUrl: "https://github.com/manthrivamshi8919/langchain-chatbot-huggingface-api.git",
    demoUrl: "#"
  },
  {
    id: 7,
    title: "Blockchain-Based Management of Blood Donation",
    description: "Built a private-Ethereum-based system with smart contracts (Remix) and IPFS for off-chain storage, plus a Java/J2EE web app (JSP/Servlets) and databases to manage donors, hospitals, and blood bankers securely and transparently.",
    technologies: ["Private Ethereum Blockchain", "IPFS","Java", "J2EE", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat", "JFreeChart"],
    image: "/Projects/Blooddonation.png",
    githubUrl: "https://github.com/manthrivamshi8919/Block-Chain-Based-Management-Of-Blood-Donation",
    demoUrl: "#"
  },
  {
    id: 8,
    title: "Health Monitoring on Social Media Over Time",
    description: "Developed a web application to detect and predict health trends from Twitter data using TM–ATAM and T–ATAM models, with features for posting and monitoring health tweets, tracking regional disease trends, and visualizing data through interactive charts.",
    technologies: ["Java/J2EE", "JSP", "Servlets", "HTML", "JavaScript", "MySQL", "JDBC", "Apache Tomcat", "JFreeChart", "Client-Server Architecture"],
    image: "/Projects/Healtmonitoring.png",
    githubUrl: "https://github.com/manthrivamshi8919/Health-Monitoring-On-Social-Media-Over-Time-project",
    demoUrl: "#"
  },
  {
    id: 9,
    title: "Task Management App",
    description: "Developed a task management application enabling users to create, update, and delete tasks, with a dynamic React frontend, TypeScript components, and REST API integration for seamless data handling.",
    technologies: ["React", "JavaScript", "TypeScript", "REST APIs"],
    image: "/Projects/Taskmanagement.png",
    githubUrl: "https://github.com/manthrivamshi8919/Task-Management-Application",
    demoUrl: "#"
  },
  {
    id: 10,
    title: "YouTube Clone (static)",
    description: "Built a responsive, static replica of YouTube's UI — homepage, video player layout, sidebar, search bar, and video cards — implemented entirely with HTML and CSS (no JavaScript or backend).",
    technologies: ["HTML", "CSS"],
    image: "/Projects/Youtubeclone.png",
    githubUrl: "https://manthrivamshi8919.github.io/YouTube-Clone/",
    demoUrl: "#"
  }
];

const ProjectsSection = forwardRef<HTMLDivElement>((props, ref) => {
  const internalRef = useRef<HTMLDivElement>(null);
  const sectionRef = (ref as React.RefObject<HTMLDivElement>) || internalRef;
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);
  const remainingProjects = projects.length - 6;
  return (
    <section 
      ref={ref || internalRef}
      id="projects" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Here are some of my recent projects. Each project was built to solve a specific
            problem and to learn new technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{ pointerEvents: 'auto' }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pointer-events-auto">
                  {project.id === 1 || project.id === 2 ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center pointer-events-auto relative z-10"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center pointer-events-auto relative z-10"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Code
                      </a>
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demoUrl, '_blank', 'noopener,noreferrer');
                          }}
                          className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center pointer-events-auto relative z-10"
                        >
                          Live Demo
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAllProjects && remainingProjects > 0 && (
          <div className="text-center mt-12">
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowAllProjects(true);
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-base font-medium rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 pointer-events-auto relative z-10"
            >
              See More Projects
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
});

ProjectsSection.displayName = 'ProjectsSection';

export default ProjectsSection;
