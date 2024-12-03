import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Mohammed Sellak</h3>
            <p className="text-sm">
              Full Stack Developer & AI Engineer crafting exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-purple-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-purple-500 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-purple-500 transition-colors">Skills</a></li>
              <li><a href="#work" className="hover:text-purple-500 transition-colors">Work</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com/Mohamedsellak" 
                 className="text-gray-400 hover:text-purple-500 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <FaGithub className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/mohammed-sellak" 
                 className="text-gray-400 hover:text-purple-500 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" 
                 className="text-gray-400 hover:text-purple-500 transition-colors"
                 target="_blank"
                 rel="noopener noreferrer">
                <FaTwitter className="h-6 w-6" /> 
              </a>
              <a href="mailto:mohammed.sellak@hotmail.com" 
                 className="text-gray-400 hover:text-purple-500 transition-colors">
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {currentYear} Mohammed Sellak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
