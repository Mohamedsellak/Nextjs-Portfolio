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
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-full px-6 py-4 shadow-lg border border-white/10">
          <ul className="flex items-center gap-1 sm:gap-2">
            {navItems.map(({ icon: Icon, href, label }) => {
              const isActive = activeSection === href.substring(1);
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`
                      relative flex h-12 w-12 items-center justify-center rounded-full
                      transition-all duration-300 ease-in-out
                      ${isActive 
                        ? 'bg-purple-500 text-white shadow-md' 
                        : 'text-slate-300 hover:text-purple-500 hover:bg-gray-800/50'
                      }
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500
                    `}
                    aria-label={label}
                  >
                    <Icon className={`h-5 w-5 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                    <span className="sr-only">{label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
