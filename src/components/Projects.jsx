import React from 'react'
import './Projects.css';
import onTheGo from '../Assets/onTheGo.webp';
import imageForge from '../Assets/imageForge.webp';

const Projects = () => {
  return (
    <div id='projects' className="projects-section">
      <h2 className='project-heading'>Projects</h2>
      <div className="projects">
        <div className="project-card">
          <div>
            <div className="project-img-container">
          <img className='project-img' src={onTheGo} alt="onTheGo" />
            </div>
            <p className="title">OnTheGo</p>
            <p>A seamless travel application with optimized performance.</p>
            <p>Technologies: JavaScript, React, MongoDB</p>
          </div>
          <button className="project-card-button">
          <a className='project-link' href="https://onthego-swcc.onrender.com/" target="_blank"><span>Checkout Website</span></a>
          </button>
          </div>
        <div className="project-card">
          <div>
          <div className="project-img-container">
          <img id='imageForgeImg' className='project-img' src={imageForge} alt="onTheGo" />
            </div>
            <p className="title">ImageForge</p>
            <p>An AI-powered image generation platform.</p>
            <p>Technologies: ReactJS, OpenAI API</p>
          </div>
          <button className="project-card-button">
          <a className='project-link' href="https://github.com/aryansharma220/ImageForge" target="_blank"><span>Checkout GitHub Repo</span></a>
          </button>
          </div>
      </div>
    </div>
  )
}

export default Projects