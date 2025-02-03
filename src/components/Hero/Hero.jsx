import React from 'react';
import ProfileImage from '../../Assets/ProfilePic.webp';
import { BsDownload } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import Socials from '../../elements/Socials/Socials';
import './Hero.css';

const heroButtons = [
  {
    href: "/myResume.pdf",
    text: "Download My Resume",
    icon: <BsDownload />
  },
  {
    href: "#contact",
    text: "Get in Touch",
    icon: <RiContactsLine />
  }
];

const Hero = () => {
  return (
    <div data-aos='zoom-in-left' id='home' className="hero-section">
      <div className="hero-left-section">
        <h1 className="hero-heading animate-charcter">Welcome to Artisan Cove</h1>
        <h2 className="hero-subheading"><span>Crafted by Aryan Sharma</span></h2>
        <p className='hero-para'>
          Hello! I'm <b>Aryan Sharma</b>, a <b>full stack developer</b> and <b>designer</b> navigating the seas of technology. 
          Explore my creations and embark on a journey through my portfolio! 
          From crafting immersive user experiences to building scalable solutions, I aim to blend creativity with functionality in every project I undertake.
        </p>
        <div className="hero-buttons">
          {heroButtons.map((button, index) => (
            <a href={button.href} download={button.href.includes('.pdf')} className="button" key={index}>
              <span>
                {button.icon}
                {button.text}
              </span>
            </a>
          ))}
        </div>
      </div>
      <div className="hero-right-section">
        <div data-aos="zoom-out-right" className="image-container">
          <img src={ProfileImage} alt="Aryan Sharma" className="profile-image" />
          <div className="image-name">Aryan Sharma</div>
          <div className="image-profession">Full Stack Developer</div>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Hero;
