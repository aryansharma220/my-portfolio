import React, { useState } from 'react';
import logo from '../../Assets/LogoWithoutBg.webp';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Define the menu items array
  const menuItems = [
    { title: 'Home', link: '#home' },
    { title: 'Projects', link: '#projects' },
    { title: 'Skills', link: '#skills' },
    { title: 'My Approach', link: '#myApproach' },
    { title: 'Certifications', link: '#Certificates' },
    { title: 'Education', link: '#education' },
    { title: 'Contact', link: '#contact' },
  ];

  return (
    <div className="header">
      <div data-aos='fade-up' className="navbar">
        <div className="logo-div">
          <div className="logo">
            <a href="#">
              <img className="logo-img" src={logo} alt="Logo" />
            </a>
            <span className="logo-text">Artisan Cove</span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="menu-toggle-container">
          <input 
            type="checkbox" 
            id="checkbox" 
            checked={isMenuOpen}
            onChange={toggleMenu}
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>

        {/* Desktop navigation */}
        <div className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav-ul">
            {menuItems.map((item, index) => (
              <li className="nav-ul-li" key={index}>
                <a className="a-shine" href={item.link} onClick={closeMenu}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;