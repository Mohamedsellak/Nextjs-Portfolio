'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { projects } from '@/app/data/projects';


interface ProjectModalProps {
  projectId: number | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ projectId, isOpen, onClose }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectId ? projects.find(p => p.id === projectId) : null;

  const nextImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  if (!project || !projectId) {
    return null;
  }

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center"
          onClick={onClose}
        >
          <div 
            className="relative w-full max-w-4xl bg-gray-900 rounded-lg shadow m-2"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 z-10 text-gray-400 bg-gray-800/50 hover:bg-gray-700 hover:text-white rounded-full p-2 transition-colors duration-300"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Gallery */}
            {project.images.length > 0 && (
              <div className="relative bg-gray-900/90">
                <div className="relative h-[50vh] flex items-center justify-center p-2">
                  <Image
                    src={`/images/projects${project.images[currentImageIndex]}`}
                    alt={`${project.title} preview ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    width={1200}
                    height={800}
                    priority
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75"
                      >
                        →
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                        {project.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-2 h-2 rounded-full ${
                              currentImageIndex === index ? 'bg-white w-4' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Project Info */}
            <div className="p-5 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-base text-gray-300">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4 pt-4">
                {/* Links Status */}
                {!project.liveLink && !project.githubLink && (
                  <p className="text-yellow-500/80 text-sm flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    Project links are not available at the moment
                  </p>
                )}
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Live Demo
                    </a>
                  ) : null}
                  {project.githubLink ? (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg border border-gray-600 text-sm font-medium px-5 py-2.5"
                    >
                      View Code
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

