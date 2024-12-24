'use client';

import { useEffect } from 'react';
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import TypewriterComponent from 'typewriter-effect';

export default function Home() {
  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(tsParticles);
      
      await tsParticles.load({
        id: "tsparticles",
        options: {
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            color: {
              value: "#9333ea",
            },
            links: {
              color: "#9333ea",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 2.5,
            },
            move: {
              enable: true,
              speed: 1,
            },
            number: {
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            size: {
              value: { min: 2, max: 4 },
            },
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
        },
      });
    };

    initParticles();
  }, []);

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden">
      <div id="tsparticles" className="absolute inset-0" />
      
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-center z-10 animate-fadeIn px-4">
          <h3 className="text-xl md:text-2xl mb-4 animate-slideDown text-purple-200 drop-shadow-lg">
            Hello, I&apos;m
          </h3>
          <h1 className="text-6xl md:text-7xl font-bold mb-4 animate-slideUp bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 drop-shadow-lg">
            Mohammed Sellak
          </h1>
          <div className="text-xl md:text-2xl mb-8 animate-slideDown text-purple-100 h-20">
            <TypewriterComponent
              options={{
                strings: [
                  'Full Stack Developer',
                  'AI & Data Scientist',
                  'Problem Solver',
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 80,
              }}
            />
          </div>
          
          <div className="space-y-6 md:space-y-0 md:space-x-6 animate-fadeIn delay-500">
            <a 
              download="" 
              href="./assets/cv/cv.pdf" 
              className="inline-block bg-transparent backdrop-blur-sm border-2 border-purple-500 rounded-full text-purple-100 px-8 py-3.5 hover:bg-purple-500/20 hover:border-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-purple-500/25 relative overflow-hidden group"
            >
              <span className="relative z-10 font-medium">Download CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-purple-800/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <a 
              href="#about" 
              className="inline-block rounded-full bg-gradient-to-r from-purple-600 to-purple-800 px-8 py-3.5 font-medium hover:from-purple-700 hover:to-purple-900 text-white transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-purple-600/50 relative overflow-hidden group"
            >
              <span className="relative z-10">About Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-600/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>

          <div className="mt-12 flex justify-center space-x-6 animate-fadeIn delay-700">
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-purple-200 hover:text-purple-400 transition-colors duration-300"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
