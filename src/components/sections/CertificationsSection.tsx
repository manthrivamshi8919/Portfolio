import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

// Certifications data
const certifications = [
  {
    id: 1,
    name: "AI & Cloud Virtual Internship",
    issuer: "Edunet Foundation (AICTE)",
    image: "/certificates/AI&Cloud_page-0001.jpg",
    certId: "STU63a011fac6c081671434746",
    issueDate: "March 2024"
  },
  {
    id: 2,
    name: "Full Stack Development Internship",
    issuer: "EY / Edunet",
    image: "/certificates/Full stack development_page-0001.jpg",
    certId: "INTERNSHIP_170662655565b90dfb357f2",
    issueDate: "April 2024"
  },
  {
    id: 3,
    name: "AI and ML in IOT and its Applications workshop in NIT",
    issuer: "NIT Warangal",
    image: "/certificates/NIT.jpg",
    certId: "-",
    issueDate: "October 2023"
  },
  // Commented out certifications
  /*
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
  */
];

const CertificationsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<any>(null);
  return (
    <section 
      ref={sectionRef}
      id="certifications" 
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
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Selected certifications that support my full-stack and cloud engineering skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50, rotateY: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-2">{cert.issuer}</p>
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
        
        {/* Modal for enlarged certificate view */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-lg"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white/80 rounded-full p-1"
                  onClick={() => setSelectedCert(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.name}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-center mb-2">{selectedCert.name}</h2>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-medium text-center mb-4">{selectedCert.issuer}</p>
                  <div className="text-center text-gray-600 mb-4">
                    {selectedCert.certId && <div className="mb-1">Certificate ID: {selectedCert.certId}</div>}
                    {selectedCert.issueDate && <div>Issued: {selectedCert.issueDate}</div>}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CertificationsSection;
