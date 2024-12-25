'use client';

import React, { useState } from 'react';
import ProjectModal from './ProjectModel';
import { projects } from '@/app/data/projects';

type FilterType = 'all' | 'web' | 'mobile' | 'design';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    const filteredProjects = projects.filter(project => 
        activeFilter === 'all' ? true : project.category === activeFilter
    );

    return (
        <section className="w-full bg-black py-16" id="work">
            <ProjectModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                projectId={selectedProject} 
            />

            <div className="w-full px-4">
                <div className="text-center mb-12">
                    <span className="text-purple-500 text-sm font-semibold tracking-wider uppercase mb-3 block">My Portfolio</span>
                    <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-4">
                        Recent Works
                    </h2>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
                    {(['all', 'web', 'mobile', 'design'] as FilterType[]).map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 
                                ${activeFilter === filter 
                                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30 scale-105' 
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700 hover:scale-105'
                                }`}
                        >
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 lg:mx-24 md:mx-16">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative bg-gray-900/30 backdrop-blur-sm rounded-xl 
                                     overflow-hidden border border-gray-800/50
                                     transition-all duration-500 ease-out
                                     hover:shadow-2xl hover:shadow-purple-500/10 
                                     hover:border-purple-500/20 hover:bg-gray-800/50
                                     hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={`/images/projects/${project.images[0]}`}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-2
                                             transition-all duration-500 ease-out
                                             group-hover:scale-[1.02]"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/90" />
                            </div>

                            {/* Content Container */}
                            <div className="relative p-5 space-y-4">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white/90 
                                             group-hover:text-white transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.slice(0, 3).map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-2.5 py-1 text-xs font-medium
                                                     bg-purple-500/5 text-purple-300/90
                                                     border border-purple-500/10 rounded-md
                                                     transition-all duration-300
                                                     group-hover:border-purple-500/20
                                                     group-hover:bg-purple-500/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 3 && (
                                        <span className="px-2.5 py-1 text-xs text-gray-400">
                                            +{project.technologies.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* Action Button */}
                                <button
                                    onClick={() => {
                                        setSelectedProject(project.id);
                                        setIsModalOpen(true);
                                    }}
                                    className="w-full py-2.5 px-4 mt-2
                                             bg-gradient-to-r from-purple-600 to-purple-700
                                             text-sm font-medium text-white rounded-lg
                                             transition-all duration-300
                                             hover:from-purple-500 hover:to-purple-600
                                             hover:shadow-lg hover:shadow-purple-500/20
                                             active:scale-[0.98]
                                             focus:outline-none focus:ring-2 focus:ring-purple-500/40"
                                >
                                    View Details
                                </button>
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-3 right-3 px-2.5 py-1
                                          bg-black/50 backdrop-blur-md rounded-full
                                          text-xs font-medium text-gray-300
                                          border border-gray-700/50">
                                {project.category}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
