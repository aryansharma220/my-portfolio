import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <ul className="menu">
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#">Home</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#projects">Projects</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#skills">Skills</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#experience">Experience</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#education">Education</a></li>
        <li className="nav-ul-li menu__item"><a className="a-shine menu__link" href="#contact">Contact</a></li>
      </ul>
      <p className="copyright">&copy;2024 <span>
      Aryan Sharma</span> | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
