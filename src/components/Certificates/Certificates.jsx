import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import './Certificates.css';

function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Gfg x Adobe AI",
      issuer: "Adobe",
      image: "/genSolveAI.png",
      description: "Certificate for completion of Adobe AI fundamentals course",
      date: "2024",
      skills: ["AI", "Machine Learning", "Problem Solving"]
    },
    {
      title: "DSA",
      issuer: "GfG",
      image: "/dsaGfg.png",
      description: "Certificate for completion of Data Structures and Algorithms course",
      date: "2024",
      skills: ["Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      title: "Gen AI Introduction",
      issuer: "Google",
      image: "/GenAI.png",
      description: "Certificate for completion of Generative AI Introduction course",
      date: "2025",
      skills: ["Generative AI", "Machine Learning"]
    },
    {
      title: "GitHub Foundation",
      issuer: "GitHub",
      image: "/gitHubFoundation.png",
      description: "Certificate for completion of GitHub Foundation course",
      date: "2025",
      skills: ["Version Control", "GitHub"]
    },
    {
      title: "GSSoC 2024",
      issuer: "GirlScript Foundation",
      image: "/gssoc.png",
      description: "Certificate for participation in GirlScript Summer of Code 2024",
      date: "2024",
      skills: ["Open Source", "Collaboration"]
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      image: "/NPTEL_Cloud_Computing.png",
      description: "Certificate for completion of Cloud Computing course",
      date: "2024",
      skills: ["Cloud Computing", "AWS", "Azure"]
    },
    {
      title: "Postman API",
      issuer: "Postman",
      image: "/postMan.png",
      description: "Certificate for completion of Postman API course",
      date: "2024",
      skills: ["API Testing", "Postman"]
    },
    {
      title: "Introduction to VPC using AWS",
      issuer: "Coursera",
      image: "/VPC_using_AWS.jpg",
      description: "Certificate for completion of Introduction to VPC using AWS course",
      date: "2023",
      skills: ["AWS", "VPC"]
    }
    // Add more certificates as needed
  ];

  return (
    <div id='Certificates' className="certificates-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="certificates-content"
      >
        <h2 className="section-title">Certificates</h2>
        
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="certificate-card"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="certificate-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              className="modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div 
                className="modal-content"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                onClick={e => e.stopPropagation()}
              >
                <button className="close-button" onClick={() => setSelectedCert(null)}>×</button>
                <img src={selectedCert.image} alt={selectedCert.title} />
                <h2>{selectedCert.title}</h2>
                <p className="modal-issuer">{selectedCert.issuer}</p>
                <p className="modal-description">{selectedCert.description}</p>
                <p className="modal-date">Issued: {selectedCert.date}</p>
                <div className="skills-container">
                  {selectedCert.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Certificates;
