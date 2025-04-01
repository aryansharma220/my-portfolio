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

const skillsData = {
  Java: { icon: <FaJava /> },
  HTML: { icon: <FaHtml5 /> },
  CSS: { icon: <FaCss3Alt /> },
  TailwindCSS: { icon: <SiTailwindcss /> },
  Javascript: { icon: <FaJs /> },
  ReactJS: { icon: <FaReact /> },
  NextJS: { icon: <SiNextdotjs /> },
  NodeJS: { icon: <FaNodeJs /> },
  MongoDB: { icon: <SiMongodb /> },
  Firebase: { icon: <FaFire /> },
  Git: { icon: <IoGitBranchOutline /> },
  GitHub: { icon: <FaGithub /> },
  Postman: { icon: <SiPostman /> },
  'Gen AI': { icon: <FaRobot /> },
};

const Skills = () => {
  const skills = Object.entries(skillsData);

  const renderSkillItem = (skill, index, key) => (
    <li className='skills-item' key={key}>
      {skill[1].icon}
      <span className='skill-name'>{skill[0]}</span>
    </li>
  );

  return (
    <div data-aos='fade-up' id='skills' className='skills-section'>
      <h2 className='skills-heading'>Skills</h2>
      <div className='skills-container'>
        <div className='skills-track'>
          <ul className='skills-list'>
            {skills.map((skill, index) => renderSkillItem(skill, index, `first-${index}`))}
          </ul>
          <ul className='skills-list'>
            {skills.map((skill, index) => renderSkillItem(skill, index, `second-${index}`))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
