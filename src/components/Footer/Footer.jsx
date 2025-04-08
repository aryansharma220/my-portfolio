import React from 'react';
import { FaGithub, FaLinkedin} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="menu">
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#">Home</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#projects">Projects</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#skills">Skills</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#myApproach">My Approach</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#Certificates">Certifications</a></li>
        {/* <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#hackathons">Hackathons</a></li> */}
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#education">Education</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#contact">Contact</a></li>
      </ul>
      
      <div className="footer-social-icons">
        <a href="https://github.com/aryansharma220" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/aryansharma2022" target="_blank" rel="noopener noreferrer" className="footer-social-icon">
          <FaLinkedin />
        </a>

      </div>

      <p className="copyright">
        &copy;2024 <span>Aryan Sharma</span> | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
