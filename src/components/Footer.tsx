import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Github, href: "https://github.com/manthrivamshi8919", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/vamshimanthri123", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
              >
                <span className="sr-only">{social.label}</span>
                <social.icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
