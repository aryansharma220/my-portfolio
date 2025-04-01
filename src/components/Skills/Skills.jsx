import React from 'react';
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
  FaRobot,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiNextdotjs,
} from 'react-icons/si';

import { IoGitBranchOutline } from "react-icons/io5";

const skillIcons = {
  Java: <FaJava />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  TailwindCSS: <SiTailwindcss />,
  Javascript: <FaJs />,
  ReactJS: <FaReact />,
  NextJS: <SiNextdotjs />,
  NodeJS: <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Firebase: <FaFire />,
  Git: <IoGitBranchOutline />,
  GitHub: <FaGithub />,
  Postman: <SiPostman />,
  'Gen AI': <FaRobot />,
};

const Skills = () => {
  const skills = Object.keys(skillIcons);

  return (
    <div data-aos='fade-up' id='skills' className='skills-section'>
      <h2 className='skills-heading'>Skills</h2>
      <div className='skills-container'>
        <div className='skills-track'>
          <ul className='skills-list'>
            {skills.map((skill, index) => (
              <li className='skills-item' key={`first-${index}`}>
                {skillIcons[skill]}
                <span className='skill-name'>{skill}</span>
              </li>
            ))}
          </ul>
          <ul className='skills-list'>
            {skills.map((skill, index) => (
              <li className='skills-item' key={`second-${index}`}>
                {skillIcons[skill]}
                <span className='skill-name'>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
