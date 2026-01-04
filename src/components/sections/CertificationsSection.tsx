import { motion } from "framer-motion";

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

const CertificationsSection = () => {
  return (
    <section 
      id="certifications" 
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
  );
};

export default CertificationsSection;
