import React from 'react';
import './Hackathon.css';
import { motion } from 'framer-motion';

const hackathonData = [
  {
    title: "HackVIT 2024",
    date: "March 2024",
    description: "Developed an AI-powered healthcare solution that provides personalized medical information and connects patients with healthcare providers.",
    achievement: "First Prize Winner",
    technologies: ["React", "Node.js", "MongoDB", "AI/ML"]
  },
  {
    title: "CodeFest 2024",
    date: "February 2024",
    description: "Built a real-time collaborative document editing platform with advanced formatting features and cloud storage integration.",
    achievement: "Runner Up",
    technologies: ["Next.js", "Socket.io", "Firebase", "TailwindCSS"]
  },
  {
    title: "InnovateX Hackathon",
    date: "January 2024",
    description: "Created an AI-powered travel planning application that generates personalized itineraries based on user preferences.",
    achievement: "Top 5 Finalist",
    technologies: ["React", "Python", "OpenAI", "MongoDB"]
  }
];

function Hackathon() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='hackathons' 
      className="hackathons-section"
    >
      <h2 className="hackathon-heading">Hackathon Achievements</h2>
      <div className="hackathons-grid">
        {hackathonData.map((hackathon, index) => (
          <motion.div 
            key={index} 
            className="hackathon-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="hackathon-title"
              initial={{ x: -20 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {hackathon.title}
            </motion.h3>
            <p className="hackathon-date">{hackathon.date}</p>
            <p className="hackathon-description">{hackathon.description}</p>
            <motion.p 
              className="hackathon-achievement"
              whileHover={{ scale: 1.05 }}
            >
              {hackathon.achievement}
            </motion.p>
            <div className="hackathon-tech">
              {hackathon.technologies.map((tech, i) => (
                <motion.span 
                  key={i} 
                  className="tech-tag"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Hackathon;
