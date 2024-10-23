import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../Assets/LogoWithoutBg.webp';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <div className="navbar">
        <div className="logo-div">
          <div className="logo">
            <a href="#">
              <img className="logo-img" src={logo} alt="Logo" />
            </a>
              <span className="logo-text">Artisan Cove</span>
          </div>
        </div>

        {/* Hamburger menu button */}
        <button 
          className="menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="nav-links">
          <ul className="nav-ul">
            <li className="nav-ul-li">
              <a className="a-shine" href="#projects">Projects</a>
            </li>
            <li className="nav-ul-li">
              <a className="a-shine" href="#skills">Skills</a>
            </li>
            <li className="nav-ul-li">
              <a className="a-shine" href="#experience">Experience</a>
            </li>
            <li className="nav-ul-li">
              <a className="a-shine" href="#education">Education</a>
            </li>
            <li className="nav-ul-li">
              <a className="a-shine" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#projects" onClick={toggleMenu}>Projects</a>
          </li>
          <li>
            <a href="#skills" onClick={toggleMenu}>Skills</a>
          </li>
          <li>
            <a href="#experience" onClick={toggleMenu}>Experience</a>
          </li>
          <li>
            <a href="#education" onClick={toggleMenu}>Education</a>
          </li>
          <li>
            <a href="#contact" onClick={toggleMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;