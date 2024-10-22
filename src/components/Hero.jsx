import React from 'react'
import ProfileImage from '../Assets/ProfilePic.webp'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-left-section">
        <h1 className="hero-heading animate-charcter">Welcome to Artisan Cove</h1>
        <h2 className="hero-subheading ">Crafted by Aryan Sharma</h2>
        <p className='hero-para'>Hello! I'm Aryan Sharma, a web developer and designer navigating the seas of technology. Explore my creations and embark on a journey through my portfolio!</p>
        <div className="hero-buttons">
          <a href="/resume.pdf" download className="resume-button">
            Download My Resume
          </a>
          <a href="#contact" className="contact-button">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-right-section">
        <div className="image-container">
        <img src={ProfileImage} alt="Aryan Sharma" className="profile-image" />
        </div>
        <div className="shine">Hey</div>
      </div>
    </div>
  )
}

export default Hero