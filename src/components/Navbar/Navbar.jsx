import React, { useState, useEffect } from 'react';
import logo from '../../Assets/LogoWithoutBg.webp';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navbar')) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const menuItems = [
    { title: 'Home', link: '#home' },
    { title: 'Projects', link: '#projects' },
    { title: 'Skills', link: '#skills' },
    { title: 'My Approach', link: '#myApproach' },
    { title: 'Certifications', link: '#Certificates' },
    // { title: 'Hackathons', link: '#hackathons' },
    { title: 'Education', link: '#education' },
    { title: 'Contact', link: '#contact' },
  ];

  return (
    <div className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div data-aos='fade-up' className="navbar">
        <div className="logo-div">
          <div className="logo">
            <a href="#">
              <img className="logo-img" src={logo} alt="Logo" />
            </a>
            <span className="logo-text">Artisan Cove</span>
          </div>
        </div>

        <div className="menu-toggle-container">
          <input 
            type="checkbox" 
            id="checkbox" 
            checked={isMenuOpen}
            onChange={toggleMenu}
            aria-label="Toggle navigation menu"
          />
          <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>

        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <ul className="nav-ul">
            {menuItems.map((item, index) => (
              <li className="nav-ul-li" key={index}>
                <a 
                  className="a-shine" 
                  href={item.link} 
                  onClick={closeMenu}
                  aria-label={item.title}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;