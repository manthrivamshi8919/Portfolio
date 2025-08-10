import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { FaReact, FaNodeJs, FaJava, FaJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from "react-icons/si";

const technologies = [
  { name: "Java", icon: <FaJava className="text-orange-500" /> },
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-800 dark:text-gray-300" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-gray-300" /> },
];

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
    institution: "Sai sri Junior College, Sircilla",
    description: "Percentage: 86.8%",
  },
  {
    year: "2019",
    degree: "SSC",
    institution: "Kerala High School, Sircilla",
    description: "CGPA: 9.7/10",
  },
];

const experienceData = [
  {
    year: "2025 - Present",
    position: "Junior Full Stack Developer Intern",
    company: "X360 Technologies",
    description: "Working on the company website and developing new features.",
    responsibilities: [
      "Developing and maintaining website features",
      "Working with modern web technologies",
      "Collaborating with the development team",
    ]
  },
];

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Full Stack Developer passionate about creating beautiful, functional web applications
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-16 max-w-5xl space-y-8">
          {/* About Me */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Who I Am</h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Manthri Vamshi</span>,2025 B.Tech graduate in Computer Science and Engineering with a passion for building modern, high-performance web applications. I believe in writing clean, efficient, and maintainable code that transforms ideas into impactful digital solutions.
              </p>
              <p>
              
I enjoy working across the full stack and have hands-on experience with Java, JavaScript, React, Node.js, TypeScript, and databases like MySQL and MongoDB. My journey includes multiple internships in full stack development, Salesforce, AI cloud, and cybersecurity, where I worked on real-world projects and strengthened my problem-solving abilities.

Always eager to learn, adapt, and innovate, I strive to stay ahead of emerging technologies and contribute to projects that deliver genuine value to users.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Experience</h2>
            {experienceData.map((exp, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.position}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full mt-2 sm:mt-0">
                    {exp.year}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                <ul className="space-y-1.5">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-600 dark:text-gray-400">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Education</h2>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute -left-[9px] w-3.5 h-3.5 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800" />
                  <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">{edu.year}</div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mt-1">{edu.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{edu.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h2 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">Technologies</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <span className="text-sm text-center text-gray-700 dark:text-gray-300">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
