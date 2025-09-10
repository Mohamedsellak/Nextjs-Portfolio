'use client';

import React, { useState, useEffect } from 'react';
import ProjectModal from './ProjectModel';
import { projects } from '@/app/data/projects';

type FilterType = 'all' | 'web' | 'mobile' | 'design';

export default function Projects() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');
    const [isLoading, setIsLoading] = useState(true);
    const [visibleProjects, setVisibleProjects] = useState(6);

    useEffect(() => {
        // Simulate loading for smoother UX
        const timer = setTimeout(() => setIsLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const filteredProjects = projects.filter(project => 
        activeFilter === 'all' ? true : project.category === activeFilter
    );

    const handleFilterChange = (filter: FilterType) => {
        setActiveFilter(filter);
        setVisibleProjects(6); // Reset visible projects when filter changes
    };

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 6);
    };

    return (
        <section className="w-full bg-gradient-to-b from-black via-gray-900/50 to-black py-20" id="work">
            <ProjectModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                projectId={selectedProject} 
            />

            <div className="w-full px-6 max-w-7xl mx-auto">
                {/* Modern Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 
                                  border border-purple-500/20 rounded-full mb-6 backdrop-blur-sm">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-purple-400 text-sm font-semibold tracking-wider uppercase">
                            My Portfolio
                        </span>
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 
                                       bg-clip-text text-transparent">
                            Recent Works
                        </span>
                    </h2>
                    
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Explore my collection of projects showcasing modern web development, 
                        creative design solutions, and innovative applications.
                    </p>
                </div>

                {/* Modern Filter Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    {(['all', 'web', 'mobile', 'design'] as FilterType[]).map((filter) => (
                        <button
                            key={filter}
                            onClick={() => handleFilterChange(filter)}
                            className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 
                                     border backdrop-blur-sm flex items-center gap-2
                                     ${activeFilter === filter 
                                         ? 'bg-purple-600 text-white border-purple-500 shadow-lg shadow-purple-500/30 scale-105' 
                                         : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-105'
                                     }`}
                        >
                            {filter === 'all' && <span className="w-4 h-4 text-xs">⊞</span>}
                            {filter === 'web' && <span className="w-4 h-4 text-xs">🌐</span>}
                            {filter === 'mobile' && <span className="w-4 h-4 text-xs">📱</span>}
                            {filter === 'design' && <span className="w-4 h-4 text-xs">🎨</span>}
                            
                            {filter.charAt(0).toUpperCase() + filter.slice(1)}
                            
                            <span className={`ml-1 px-2 py-0.5 text-xs rounded-full
                                          ${activeFilter === filter 
                                              ? 'bg-white/20 text-white' 
                                              : 'bg-gray-700/50 text-gray-400'
                                          }`}>
                                {filter === 'all' ? projects.length : projects.filter(p => p.category === filter).length}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {isLoading ? (
                    <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <div key={index} className="animate-pulse">
                                <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl overflow-hidden">
                                    <div className="aspect-[4/3] bg-gray-800/30"></div>
                                    <div className="p-6 space-y-4">
                                        <div className="h-6 bg-gray-800/30 rounded w-3/4"></div>
                                        <div className="h-4 bg-gray-800/30 rounded w-full"></div>
                                        <div className="h-4 bg-gray-800/30 rounded w-2/3"></div>
                                        <div className="flex gap-2 pt-2">
                                            <div className="h-6 bg-gray-800/30 rounded w-16"></div>
                                            <div className="h-6 bg-gray-800/30 rounded w-20"></div>
                                            <div className="h-6 bg-gray-800/30 rounded w-14"></div>
                                        </div>
                                        <div className="flex gap-3 pt-4 border-t border-white/[0.05]">
                                            <div className="h-8 bg-gray-800/30 rounded w-20"></div>
                                            <div className="h-8 bg-gray-800/30 rounded w-24"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        {/* Professional Projects Grid */}
                        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mb-12">
                            {filteredProjects.slice(0, visibleProjects).map((project) => (
                                <div
                                    key={project.id}
                                    className="group relative bg-white/[0.02] border border-white/[0.05] 
                                             rounded-2xl overflow-hidden cursor-pointer
                                             hover:bg-white/[0.03] hover:border-white/[0.08]
                                             transition-all duration-500 ease-out"
                                    onClick={() => {
                                        setSelectedProject(project.id);
                                        setIsModalOpen(true);
                                    }}
                                >
                                    {/* Image Section */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={`/images/projects${project.images[0]}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 
                                                     transition-transform duration-700 ease-out"
                                            loading="lazy"
                                        />
                                        
                                        {/* Subtle Dark Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                        
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 px-3 py-1.5 
                                                      bg-black/70 backdrop-blur-sm rounded-lg text-xs 
                                                      font-medium text-white/90">
                                            {project.category}
                                        </div>
                                        
                                        {/* Status Badge */}
                                        <div className="absolute top-4 right-4">
                                            {project.liveLink ? (
                                                <div className="px-3 py-1.5 bg-green-500/20 backdrop-blur-sm 
                                                              border border-green-500/30 rounded-lg text-xs 
                                                              font-medium text-green-400">
                                                    Live
                                                </div>
                                            ) : project.githubLink ? (
                                                <div className="px-3 py-1.5 bg-blue-500/20 backdrop-blur-sm 
                                                              border border-blue-500/30 rounded-lg text-xs 
                                                              font-medium text-blue-400">
                                                    Source
                                                </div>
                                            ) : (
                                                <div className="px-3 py-1.5 bg-amber-500/20 backdrop-blur-sm 
                                                              border border-amber-500/30 rounded-lg text-xs 
                                                              font-medium text-amber-400">
                                                    In Dev
                                                </div>
                                            )}
                                        </div>

                                        {/* Hover Overlay with View Button */}
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center
                                                      opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 
                                                          rounded-xl text-white font-medium text-sm 
                                                          transform translate-y-4 group-hover:translate-y-0 
                                                          transition-transform duration-300 flex items-center gap-2">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                View Project
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        {/* Title */}
                                        <h3 className="text-xl font-semibold text-white mb-3 
                                                     group-hover:text-white/90 transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.technologies.length > 0 ? (
                                                <>
                                                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                                                        <span
                                                            key={techIndex}
                                                            className="px-3 py-1 text-xs font-medium 
                                                                     bg-gray-800/50 text-gray-300 
                                                                     rounded-md border border-gray-700/50"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {project.technologies.length > 3 && (
                                                        <span className="px-3 py-1 text-xs font-medium 
                                                                       bg-gray-800/30 text-gray-400 
                                                                       rounded-md border border-gray-700/30">
                                                            +{project.technologies.length - 3} more
                                                        </span>
                                                    )}
                                                </>
                                            ) : (
                                                <span className="px-3 py-1 text-xs font-medium 
                                                               bg-gray-800/30 text-gray-500 
                                                               rounded-md border border-gray-700/30">
                                                    No tech specified
                                                </span>
                                            )}
                                        </div>

                                        {/* Action Links */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-white/[0.05]">
                                            {project.liveLink && (
                                                <a 
                                                    href={project.liveLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 
                                                             bg-green-500/10 hover:bg-green-500/20 
                                                             border border-green-500/30 hover:border-green-500/50 
                                                             text-green-400 text-xs font-medium rounded-lg 
                                                             transition-colors duration-200"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                    </svg>
                                                    Live Demo
                                                </a>
                                            )}
                                            {project.githubLink && (
                                                <a 
                                                    href={project.githubLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 
                                                             bg-gray-700/20 hover:bg-gray-700/30 
                                                             border border-gray-600/30 hover:border-gray-600/50 
                                                             text-gray-300 text-xs font-medium rounded-lg 
                                                             transition-colors duration-200"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                                    </svg>
                                                    Source Code
                                                </a>
                                            )}
                                            {!project.liveLink && !project.githubLink && (
                                                <div className="flex items-center gap-2 px-4 py-2 
                                                               bg-amber-500/10 border border-amber-500/30 
                                                               text-amber-400 text-xs font-medium rounded-lg">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    In Development
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        {visibleProjects < filteredProjects.length && (
                            <div className="text-center">
                                <button
                                    onClick={loadMoreProjects}
                                    className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 
                                             hover:border-purple-500/50 text-white font-medium rounded-xl 
                                             backdrop-blur-sm transition-all duration-300 hover:scale-105
                                             hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-3 mx-auto"
                                >
                                    Load More Projects
                                    <svg className="w-5 h-5 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                    </svg>
                                </button>
                            </div>
                        )}

                        {/* Empty State */}
                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20">
                                <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                                    <svg className="w-10 h-10 text-gray-400 stroke-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" 
                                              d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.239 0-4.236-.918-5.665-2.402" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-300 mb-2">No Projects Found</h3>
                                <p className="text-gray-500">No projects match the selected filter criteria.</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
