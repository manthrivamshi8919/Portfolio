import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { useState } from "react";

type Certification = {
  id: number;
  name: string;
  image: string;
  certId?: string;
  issueDate?: string;
};

const certifications: Certification[] = [
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

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">My Certifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedCert(cert)}
            >
              <img
                src={cert.image}
                alt={cert.name}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">{cert.name}</h3>
                <div className="mt-2 text-sm text-gray-600 text-center">
                  {cert.certId && <div>ID: {cert.certId}</div>}
                  {cert.issueDate && <div>Issued: {cert.issueDate}</div>}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
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
    </PageTransition>
  );
};

export default Certifications;