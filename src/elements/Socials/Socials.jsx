// Socials.js
import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaTelegramPlane } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si';
import './Socials.css';

const socialLinks = [
  {
    href: "https://www.instagram.com/aryan.sharma2203/",
    icon: <FaInstagram />,
    className: "social-icon instagram",
    ariaLabel: "Instagram"
  },
  {
    href: "https://github.com/aryansharma220",
    icon: <FaGithub />,
    className: "social-icon github",
    ariaLabel: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/aryansharma2022/",
    icon: <FaLinkedin />,
    className: "social-icon linkedin",
    ariaLabel: "LinkedIn"
  },
  {
    href: "https://leetcode.com/u/aryansharma220318/",
    icon: <SiLeetcode />,
    className: "social-icon leetcode",
    ariaLabel: "LeetCode"
  },
  {
    href: "https://www.geeksforgeeks.org/user/aryanshar491f/",
    icon: <SiGeeksforgeeks />,
    className: "social-icon gfg",
    ariaLabel: "GeeksforGeeks"
  },
  {
    href: "https://t.me/aryansharma220",
    icon: <FaTelegramPlane />,
    className: "social-icon telegram",
    ariaLabel: "Telegram"
  }
];

const Socials = () => {
  return (
    <div data-aos="zoom-out-right" className="socials">
      <div className="social-card">
        <div className="heading">My Socials</div>
        <div className="icons">
          {socialLinks.map((link, index) => (
            <a
              href={link.href}
              className={link.className}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
              key={index}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
