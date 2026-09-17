import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Code2, 
  Radio, 
  FileSpreadsheet, 
  Globe, 
  Layers, 
  Eye 
} from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { GithubIcon } from './Icons';
import { ProjectModal } from './ProjectModal';

export function Projects() {
  const [filter, setFilter] = useState<'all' | 'vas-telecom' | 'web' | 'data' | 'tools'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = filter === 'all'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Code2 className="w-3.5 h-3.5" />
            <span>Featured Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Portfolio & Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Real-world systems, telecommunications consoles, data utilities, and web applications developed by Frosh Hub.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'vas-telecom', label: 'Telecom & VAS' },
              { id: 'data', label: 'Data & Excel Tools' },
              { id: 'web', label: 'Web Applications' },
              { id: 'tools', label: 'Consultancy Systems' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  filter === tab.id
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-500/50 p-6 sm:p-7 group"
            >
              <div className="space-y-4">
                
                {/* Header: Status and Badge */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {project.status}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 line-clamp-1">
                    {project.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Highlights Preview */}
                <div className="pt-2 space-y-1.5 border-t border-slate-100 dark:border-slate-800">
                  {project.highlights.slice(0, 2).map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0"></span>
                      <span className="line-clamp-1">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-400">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

              </div>

              {/* Card Footer: Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group-hover:underline"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Deep Dive Details</span>
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="View GitHub Repository"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Modal for Deep Dive */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
