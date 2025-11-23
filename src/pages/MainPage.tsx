import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { FaReact, FaNodeJs, FaJs, FaJava, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript, SiTailwindcss } from "react-icons/si";
import { useToast } from "@/components/ui/use-toast";

// Import components that will be used
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Certifications data
const certifications = [
  {
    id: 1,
    name: "AI & Cloud Virtual Internship",
    image: "/certificates/AI&Cloud_page-0001.jpg",
    certId: "STU63a011fac6c081671434746",
    issueDate: "March 2024"
  },
  {
    id: 2,
    name: "Full Stack Development Internship",
    image: "/certificates/Full stack development_page-0001.jpg",
    certId: "INTERNSHIP_170662655565b90dfb357f2",
    issueDate: "April 2024"
  },
  {
    id: 3,
    name: "AI and ML in IOT and its Applications workshop in NIT",
    image: "/certificates/NIT.jpg",
    certId: "-",
    issueDate: "October 2023"
  },
  {
    id: 4,
    name: "Salesforce Administrator Virtual Internship",
    image: "/certificates/salesforce admin_page-0001.jpg",
    certId: "SISFVIPAD2024-2856",
    issueDate: "July 2024"
  },
  {
    id: 5,
    name: "Salesforce Developer Virtual Internship",
    image: "/certificates/salesforce developer_page-0001.jpg",
    certId: "SISFVIPAD2024-95080",
    issueDate: "July 2024"
  }
];

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

const MainPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Refs for navigation
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const certificationsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // Scroll to section function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Form handling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  // InView hooks for animations
  const isInView = useInView(homeRef, { once: true });
  
  // Contact info
  const contactInfo = [
    { icon: Mail, text: "manthrivamshi1@gmail.com", href: "mailto:manthrivamshi1@gmail.com" },
    { icon: Phone, text: "+91 8919859787", href: "tel:+918919859787" },
    { icon: MapPin, text: "Sircilla, Telangana, India", href: "#" },
    { icon: Github, text: "github.com/manthrivamshi8919", href: "https://github.com/manthrivamshi8919" },
    { icon: Linkedin, text: "linkedin.com/in/manthrivamshi123", href: "https://www.linkedin.com/in/vamshimanthri123/" },
  ];

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
    <div className="space-y-20">
      {/* Hero Section */}
      <section 
        ref={homeRef} 
        id="home" 
        className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container mx-auto px-4 py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
              >
                <div className="mb-4 inline-block">
                  <motion.span
                    className="text-sm md:text-base bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full px-4 py-1 font-medium glass-effect"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
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
                    onClick={() => scrollToSection(contactRef)}
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white shadow-lg shadow-blue-500/20 button-glow"
                  >
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 dark:border-gray-600"
                  >
                    <a 
                      href="https://drive.google.com/file/d/1gAv8Tv-uL77f0HQShcFZZBtCQIhMDT0S/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      View Resume
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="relative z-10 w-1/2 mx-auto">
                  <img
                    src="photo/profile.png"
                    alt="Manthri Vamshi"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-1/2 h-1/2 bg-blue-500/10 rounded-2xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-cyan-500/10 rounded-2xl -z-10"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef} 
        id="about" 
        className="py-20 bg-muted/20"
      >
        <div className="container mx-auto px-4">
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

      {/* Projects Section */}
      <section 
        ref={projectsRef} 
        id="projects" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
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

      {/* Certifications Section */}
      <section 
        ref={certificationsRef} 
        id="certifications" 
        className="py-20 bg-muted/20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Here are some of the certifications I've earned to enhance my skills and knowledge.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                  {cert.certId && (
                    <p className="text-sm text-gray-500 mb-2">
                      <span className="font-medium">ID:</span> {cert.certId}
                    </p>
                  )}
                  {cert.issueDate && (
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Issued:</span> {cert.issueDate}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        ref={contactRef} 
        id="contact" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Have a project in mind or want to collaborate? Feel free to reach out to me!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject" className="mb-2 block">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
                  />
                </div>
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Feel free to get in touch with me. I'm always open to discussing new projects,
                  creative ideas, or opportunities to be part of your visions.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 10 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{info.text}</h4>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: "https://github.com/manthrivamshi8919" },
                    { icon: Linkedin, href: "https://www.linkedin.com/in/vamshimanthri123/" },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
