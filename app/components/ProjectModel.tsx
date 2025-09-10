'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { projects } from '@/app/data/projects';

interface ProjectModalProps {
  projectId: number | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ projectId, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoading, setImageLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const project = projectId ? projects.find(p => p.id === projectId) : null;

  // Reset state when project changes
  useEffect(() => {
    if (project) {
      setCurrentImageIndex(0);
      setImageLoading(true);
      setIsAnimating(false);
    }
  }, [projectId]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isOpen || !project) return;
      
      if (e.key === 'ArrowLeft' && project.images.length > 1) {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'ArrowRight' && project.images.length > 1) {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, project]);

  const nextImage = () => {
    if (project && project.images.length > 1 && !isAnimating) {
      setIsAnimating(true);
      setImageLoading(true);
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const prevImage = () => {
    if (project && project.images.length > 1 && !isAnimating) {
      setIsAnimating(true);
      setImageLoading(true);
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const goToImage = (index: number) => {
    if (project && !isAnimating && index !== currentImageIndex) {
      setIsAnimating(true);
      setImageLoading(true);
      setCurrentImageIndex(index);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  if (!project || !projectId) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center 
                   p-1 sm:p-2 md:p-3"
          onClick={onClose}
        >
          <div 
            className="relative w-full 
                     max-w-[98vw] sm:max-w-[95vw] md:max-w-[92vw] lg:max-w-[90vw] xl:max-w-7xl
                     bg-white/[0.02] border border-white/[0.08] 
                     rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden 
                     max-h-[99vh] sm:max-h-[98vh] md:max-h-[96vh] 
                     flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 sm:p-4 md:p-6 border-b border-white/[0.05]">
              <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1 min-w-0">
                <div className="px-2 sm:px-3 py-1 bg-purple-500/10 border border-purple-500/20 
                              rounded-lg text-purple-400 text-xs sm:text-sm font-medium">
                  {project.category}
                </div>
                <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-white truncate">
                  {project.title}
                </h2>
              </div>
              
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] 
                         rounded-lg transition-colors duration-200 flex-shrink-0"
                aria-label="Close modal"
              >
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
              {/* Image Section */}
              <div className="flex-1 relative bg-gray-900/20 lg:min-h-full">
                {project.images.length > 0 ? (
                  <div className="relative h-full flex items-center justify-center p-2 sm:p-4 md:p-6">
                    {/* Loading State */}
                    {imageLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-6 sm:w-8 h-6 sm:h-8 border-2 border-white/20 border-t-white/60 
                                        rounded-full animate-spin"></div>
                          <span className="text-xs sm:text-sm text-gray-400">Loading image...</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Main Image */}
                    <div className={`relative transition-opacity duration-300 ${imageLoading ? 'opacity-0' : 'opacity-100'}`}>
                      <Image
                        src={`/images/projects${project.images[currentImageIndex]}`}
                        alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                        className="max-w-full max-h-[45vh] sm:max-h-[60vh] lg:max-h-[80vh] 
                                 w-auto h-auto object-contain rounded-lg"
                        width={1600}
                        height={1000}
                        priority
                        onLoad={() => setImageLoading(false)}
                        onError={() => setImageLoading(false)}
                      />
                    </div>

                    {/* Navigation - Only show if multiple images */}
                    {project.images.length > 1 && (
                      <>
                        {/* Navigation Arrows */}
                        <button
                          onClick={prevImage}
                          disabled={isAnimating}
                          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 
                                   p-2 sm:p-3 z-10
                                   bg-black/60 hover:bg-black/80 text-white rounded-full 
                                   border border-white/10 hover:border-white/20
                                   transition-all duration-200 hover:scale-110 
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Previous image"
                        >
                          <svg className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        
                        <button
                          onClick={nextImage}
                          disabled={isAnimating}
                          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 
                                   p-2 sm:p-3 z-10
                                   bg-black/60 hover:bg-black/80 text-white rounded-full 
                                   border border-white/10 hover:border-white/20
                                   transition-all duration-200 hover:scale-110
                                   disabled:opacity-50 disabled:cursor-not-allowed"
                          aria-label="Next image"
                        >
                          <svg className="w-3 sm:w-4 lg:w-5 h-3 sm:h-4 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>

                        {/* Image Counter */}
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 
                                      bg-black/60 text-white text-xs sm:text-sm font-medium rounded-lg 
                                      border border-white/10">
                          {currentImageIndex + 1} of {project.images.length}
                        </div>

                        {/* Dot Indicators - Hidden on small screens */}
                        <div className="hidden md:flex absolute bottom-4 left-1/2 -translate-x-1/2 
                                      gap-2 px-3 py-2 bg-black/60 rounded-full 
                                      border border-white/10">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => goToImage(index)}
                              disabled={isAnimating}
                              className={`transition-all duration-200 rounded-full
                                ${currentImageIndex === index 
                                  ? 'w-6 h-2 bg-white' 
                                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
                                }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-gray-400">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} 
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm">No images available</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-80 xl:w-96 lg:border-l border-white/[0.05] flex flex-col
                            border-t lg:border-t-0 lg:max-w-sm xl:max-w-md">
                <div className="flex-1 p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6 overflow-y-auto
                              max-h-[40vh] lg:max-h-none">
                  {/* Description */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                      About this project
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  {project.technologies.length > 0 && (
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-2 sm:px-3 py-1 bg-gray-800/50 text-gray-300 
                                     text-xs sm:text-sm rounded-md border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 sm:mb-3">
                      Links
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-2 sm:p-3 
                                   bg-green-500/10 hover:bg-green-500/20 
                                   border border-green-500/30 hover:border-green-500/50 
                                   rounded-lg transition-colors duration-200 group"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 sm:w-8 h-6 sm:h-8 bg-green-500/20 rounded-lg 
                                          flex items-center justify-center">
                              <svg className="w-3 sm:w-4 h-3 sm:h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-green-400 font-medium text-xs sm:text-sm">Live Demo</div>
                              <div className="text-green-400/70 text-xs">View the live project</div>
                            </div>
                          </div>
                          <svg className="w-3 sm:w-4 h-3 sm:h-4 text-green-400/60 group-hover:text-green-400 
                                        group-hover:translate-x-1 transition-all duration-200" 
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}

                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-3 
                                   bg-gray-700/20 hover:bg-gray-700/30 
                                   border border-gray-600/30 hover:border-gray-600/50 
                                   rounded-lg transition-colors duration-200 group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-gray-700/20 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                              </svg>
                            </div>
                            <div>
                              <div className="text-gray-300 font-medium text-sm">Source Code</div>
                              <div className="text-gray-400 text-xs">View on GitHub</div>
                            </div>
                          </div>
                          <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-300 
                                        group-hover:translate-x-1 transition-all duration-200" 
                               fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}

                      {!project.liveLink && !project.githubLink && (
                        <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-amber-400 font-medium text-sm">In Development</div>
                              <div className="text-amber-400/70 text-xs">Links coming soon</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer with keyboard shortcuts */}
                {project.images.length > 1 && (
                  <div className="p-4 border-t border-white/[0.05] bg-white/[0.01]">
                    <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-gray-800/50 rounded text-[10px] border border-gray-700/50">←→</kbd>
                        Navigate
                      </span>
                      <span className="flex items-center gap-1">
                        <kbd className="px-2 py-1 bg-gray-800/50 rounded text-[10px] border border-gray-700/50">ESC</kbd>
                        Close
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
