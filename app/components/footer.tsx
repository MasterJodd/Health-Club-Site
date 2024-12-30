import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-4 flex justify-between items-center px-8 border-t border-gray-700">
      <p className="text-xl font-bold ">&copy; 2024  |     HEALTH CLUB</p>
      <div className="flex space-x-4">
        {/* Social Icons */}
        <a
          href="https://github.com/MasterJodd"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00ffff]"
        >
          <FaGithub size={40} />
        </a> 
        <a
          href="https://x.com/Priyanshu_rajx"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00ffff]"
        >
          <FaTwitter size={40} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#00ffff]"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
