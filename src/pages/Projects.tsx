import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";

type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  demoUrl?: string;
};

const projects: Project[] = [
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

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 6);
  const remainingProjects = projects.length - 6;
  
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain p-2"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">{project.title}</h3>
                <p className="text-sm text-gray-600 text-center mt-2">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAllProjects && remainingProjects > 0 && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setShowAllProjects(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 hover:from-blue-600 hover:via-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-base font-medium rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              See More Projects
            </motion.button>
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Projects;
