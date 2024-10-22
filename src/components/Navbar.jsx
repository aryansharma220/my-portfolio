import React from 'react'
import logo from '../Assets/LogoWithoutBg.webp'

const Navbar = () => {
  return (
    <div className="header">

    <div className='navbar'>
      <div className="logo-div">
        <div className="logo">
          <a href='/'><img className='logo-img' src={logo} alt='Logo'/></a>
          <span className="logo-text">Artisan Cove</span>
        </div>
      </div>
      <div className="nav-links">
        <ul className='nav-ul'>
          <li className='nav-ul-li'><a  className="a-shine" href='#projects'>Projects</a></li>
          <li className='nav-ul-li'><a  className="a-shine " href='#skills'>Skills</a></li>
          <li className='nav-ul-li'><a  className="a-shine" href='#experience'>Experience</a></li>
          <li className='nav-ul-li'><a  className="a-shine" href='#education'>Education</a></li>
          <li className='nav-ul-li'><a  className="a-shine" href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Navbar