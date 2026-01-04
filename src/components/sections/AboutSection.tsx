import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from "react-icons/si";

const AboutSection = () => {
  // Technologies
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

  // Experience
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
      ],
    },
  ];

  return (
    <section 
      id="about" 
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I'm a passionate Full Stack Developer with expertise in the MERN stack. 
            I love building web applications that solve real-world problems and provide 
            great user experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-500/20">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2"></div>
                  <div className="text-sm text-blue-500">{edu.year}</div>
                  <h4 className="text-lg font-medium mt-1">{edu.degree}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            <div className="space-y-6">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-blue-500/20">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2"></div>
                  <div className="text-sm text-blue-500">{exp.year}</div>
                  <h4 className="text-lg font-medium mt-1">{exp.position}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">{exp.description}</p>
                  <ul className="mt-2 space-y-1">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center">My Skills</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300 w-28 h-28"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <span className="text-sm font-medium text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
