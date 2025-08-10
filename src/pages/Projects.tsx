import { motion } from "framer-motion";
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
    title: "Blockchain-Based Management of Blood Donation",
    description: "Built a private-Ethereum-based system with smart contracts (Remix) and IPFS for off-chain storage, plus a Java/J2EE web app (JSP/Servlets) and databases to manage donors, hospitals, and blood bankers securely and transparently.",
    technologies: ["Private Ethereum Blockchain", "IPFS","Java", "J2EE", "JSP", "Servlets", "JDBC", "MySQL", "Apache Tomcat", "JFreeChart"],
    image: "/Projects/Blooddonation.png",
    githubUrl: "https://github.com/manthrivamshi8919/Block-Chain-Based-Management-Of-Blood-Donation",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Health Monitoring on Social Media Over Time",
    description: "Developed a web application to detect and predict health trends from Twitter data using TM–ATAM and T–ATAM models, with features for posting and monitoring health tweets, tracking regional disease trends, and visualizing data through interactive charts.",
    technologies: ["Java/J2EE", "JSP", "Servlets", "HTML", "JavaScript", "MySQL", "JDBC", "Apache Tomcat", "JFreeChart", "Client-Server Architecture"],
    image: "/Projects/Healtmonitoring.png",
    githubUrl: "https://github.com/manthrivamshi8919/Health-Monitoring-On-Social-Media-Over-Time-project",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Developed a task management application enabling users to create, update, and delete tasks, with a dynamic React frontend, TypeScript components, and REST API integration for seamless data handling.",
    technologies: ["React", "JavaScript", "TypeScript", "REST APIs"],
    image: "/Projects/Taskmanagement.png",
    githubUrl: "https://github.com/manthrivamshi8919/Task-Management-Application",
    demoUrl: "#"
  },
  {
    id: 4,
    title: "YouTube Clone (static)",
    description: "Built a responsive, static replica of YouTube's UI — homepage, video player layout, sidebar, search bar, and video cards — implemented entirely with HTML and CSS (no JavaScript or backend).",
    technologies: ["HTML", "CSS"],
    image: "/Projects/Youtubeclone.png",
    githubUrl: "https://manthrivamshi8919.github.io/YouTube-Clone/",
    demoUrl: "#"
  }
];

const Projects = () => {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
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
      </div>
    </PageTransition>
  );
};

export default Projects;
