import React, { useState } from 'react';
import './Skills.css';
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFire,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiPostman,
} from 'react-icons/si';

import { IoGitBranchOutline } from "react-icons/io5";

const skillIcons = {
  Java: <FaJava />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  TailwindCSS: <SiTailwindcss />,
  Javascript: <FaJs />,
  ReactJS: <FaReact />,
  NodeJS: <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Firebase: <FaFire />,
  Git: <IoGitBranchOutline />,
  GitHub: <FaGithub />,
  Postman: <SiPostman />,
};

const Skills = () => {
  const skills = Object.keys(skillIcons);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div data-aos='zoom-out-down' id='skills' className='skills-section'>
      <h2 className='skills-heading'>Skills</h2>
      <div className='skills-container'>
        <ul data-aos="zoom-out-right" className='skills-list'>
          {skills.map((skill, index) => (
            <li
              className={`skills-item ${hoveredIndex !== null && hoveredIndex !== index ? 'blur' : ''}`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {skillIcons[skill]} 
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
