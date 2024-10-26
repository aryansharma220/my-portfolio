import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
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
    { title: 'Education', link: '#education' },
    { title: 'Contact', link: '#contact' },
  ];

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

        {/* Mobile menu button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>

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