import React from 'react'
import ProfileImage from '../Assets/ProfilePic.webp'
import { FaInstagram, FaLinkedin, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { BsDownload } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div id='home' className="hero-section">
      <div className="hero-left-section">
        <h1 className="hero-heading animate-charcter">Welcome to Artisan Cove</h1>
        <h2 className="hero-subheading ">Crafted by Aryan Sharma</h2>
        <p className='hero-para'>Hello! I'm <b>Aryan Sharma</b>, a <b>full stack developer</b> and <b>designer</b> navigating the seas of technology. Explore my creations and embark on a journey through my portfolio! From crafting immersive user experiences to building scalable solutions, I aim to blend creativity with functionality in every project I undertake.</p>
        <div className="hero-buttons">
          <a href="/resume.pdf" download className="button">

          <BsDownload />
            Download My Resume
          </a>
          <a href="#contact" className="button">
          <RiContactsLine />
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero-right-section">
        <div className="image-container">
          <img src={ProfileImage} alt="Aryan Sharma" className="profile-image" />
          <div className="image-name">Aryan Sharma</div>
          <div className="image-profession">Full Stack Developer</div>
        </div>
        <div className="socials">
          <div className="card">
            <div className="heading">My Socials</div>
            <div className="icons">
              <a href="https://www.instagram.com/aryan.sharma2203/" className="social-icon instagram" target="_blank">
              <FaInstagram />
              </a>
              <a href="https://github.com/aryansharma220" className="social-icon github" target="_blank">
              <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/aryansharma2022/" className="social-icon linkedin" target="_blank">
                <FaLinkedin />
              </a>
              <a href="https://leetcode.com/u/aryansharma220318/" className="social-icon leetcode" target="_blank">
              <SiLeetcode />
              </a>
              <a href="https://www.geeksforgeeks.org/user/aryanshar491f/" className="social-icon gfg" target="_blank">
              <SiGeeksforgeeks />
              </a>
              <a href="https://t.me/aryansharma220" className="social-icon telegram" target="_blank">
              <FaTelegramPlane />
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero