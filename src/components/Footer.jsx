import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section py-8 px-4 md:px-16 bg-gray-100 text-gray-700">
      <div className="footer-container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left side: copyright */}
        <p className="text-center md:text-left text-sm">
          &copy; {new Date().getFullYear()} Ritu Pagar. All rights reserved.
        </p>

        {/* Right side: social links */}
        <div className="social-icons flex gap-4">
          <a href="https://github.com/Ritupagar12" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ritu-pagar" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
            <FaTwitter size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
