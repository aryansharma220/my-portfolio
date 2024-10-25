// Socials.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './Socials.css';

const socialLinks = [
  {
    href: "https://www.instagram.com/aryan.sharma2203/",
    icon: <FaInstagram />,
    className: "social-icon instagram"
  },
  {
    href: "https://github.com/aryansharma220",
    icon: <FaGithub />,
    className: "social-icon github"
  },
  {
    href: "https://www.linkedin.com/in/aryansharma2022/",
    icon: <FaLinkedin />,
    className: "social-icon linkedin"
  },
  {
    href: "https://leetcode.com/u/aryansharma220318/",
    icon: <SiLeetcode />,
    className: "social-icon leetcode"
  },
  {
    href: "https://www.geeksforgeeks.org/user/aryanshar491f/",
    icon: <SiGeeksforgeeks />,
    className: "social-icon gfg"
  },
  {
    href: "https://t.me/aryansharma220",
    icon: <FaTelegramPlane />,
    className: "social-icon telegram"
  }
];

const Socials = () => {
  return (
    <div className="socials">
      <div className="social-card">
        <div className="heading">My Socials</div>
        <div className="icons">
          {socialLinks.map((link, index) => (
            <a href={link.href} className={link.className} target="_blank" rel="noopener noreferrer" key={index}>
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
