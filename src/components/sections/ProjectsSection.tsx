import { motion } from "framer-motion";
import { Github } from "lucide-react";

// Projects data
const projects = [
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

const ProjectsSection = () => {
  return (
    <section 
      id="projects" 
      className=""
    >
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                  >
                    <Github className="mr-1 h-4 w-4" />
                    Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 flex items-center"
                    >
                      
                      
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
