import React from 'react';
import './Projects.css';
import onTheGo from '../../Assets/onTheGo.webp';
import imageForge from '../../Assets/imageForge.webp';
import cloudQuill from '../../Assets/cloudQuill.webp';

const projectData = [
  {
    id: 1,
    title: 'Cloud Quill',
    description: 'A cloud-based collaborative document management platform.',
    technologies: 'NextJS, TailwindCSS, ConvexDB, Liveblocks',
    image: cloudQuill,
    alt: 'Cloud Quill',
    link: 'https://cloud-quill.vercel.app/',
    linkText: 'Checkout Website'
  },
  {
    id: 2,
    title: 'OnTheGo',
    description: 'A seamless travel application with optimized performance.',
    technologies: 'JavaScript, React, MongoDB',
    image: onTheGo,
    alt: 'OnTheGo',
    link: 'https://onthego-swcc.onrender.com/',
    linkText: 'Checkout Website'
  },
  {
    id: 3,
    title: 'ImageForge',
    description: 'An AI-powered image generation platform.',
    technologies: 'ReactJS, OpenAI API',
    image: imageForge,
    alt: 'ImageForge',
    link: 'https://github.com/aryansharma220/ImageForge',
    linkText: 'Checkout GitHub Repo'
  }
];

const Projects = () => {
  return (
    <div data-aos='zoom-out-up' id='projects' className="projects-section">
      <h2 className='project-heading'>Projects</h2>
      <div className="projects" data-aos= 'zoom-in-up' >
        {projectData.map(project => (
          <div key={project.id} className="project-card">
            <div>
              <div className="project-img-container">
                <img className='project-img' src={project.image} alt={project.alt} />
              </div>
              <p className="title">{project.title}</p>
              <p>{project.description}</p>
              <p>Technologies: {project.technologies}</p>
            </div>
            <button className="project-card-button">
              <a className='project-link' href={project.link} target="_blank" rel="noopener noreferrer">
                <span>{project.linkText}</span>
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
