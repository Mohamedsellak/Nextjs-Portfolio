'use client'
import React, { useState, useEffect } from 'react'
import { FaHome, FaUser, FaBook, FaBriefcase, FaComment } from 'react-icons/fa';

const navItems = [
  { icon: FaHome, href: '#home', label: 'Home' },
  { icon: FaUser, href: '#about', label: 'About' },
  { icon: FaBook, href: '#skills', label: 'Skills' },
  { icon: FaBriefcase, href: '#work', label: 'Work' },
  { icon: FaComment, href: '#contact', label: 'Contact' }
];

export default function Nav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed bottom-0 start-0 end-0 z-40 px-4 pb-6 pointer-events-none">
      <nav className="mx-auto max-w-fit pointer-events-auto">
        <div className="bg-gray-900/80 backdrop-blur-2xl rounded-full px-6 py-3 shadow-2xl border border-white/10 hover:border-purple-500/20 transition-colors duration-500">
          <ul className="flex items-center gap-1.5 sm:gap-2">
            {navItems.map(({ icon: Icon, href, label }) => {
              const isActive = activeSection === href.substring(1);
              return (
                <li key={href} className="relative group">
                  <a
                    href={href}
                    className={`
                      relative flex h-10 w-10 items-center justify-center rounded-full
                      transition-all duration-300 ease-out
                      ${isActive 
                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' 
                        : 'text-slate-300 hover:text-purple-400 hover:bg-gray-800/50'
                      }
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
                      hover:scale-105 active:scale-95
                    `}
                    aria-label={label}
                  >
                    <Icon className={`h-4 w-4 transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                    <span className="sr-only">{label}</span>
                    
                    {/* Tooltip */}
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 
                      bg-gray-900 text-white px-2 py-0.5 rounded-full text-xs
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      pointer-events-none whitespace-nowrap shadow-lg">
                      {label}
                    </span>
                  </a>
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-purple-500/20 blur-md animate-pulse"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
