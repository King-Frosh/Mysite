import React from 'react';
import { X, ExternalLink, CheckCircle, Tag, Layers, Cpu, Award } from 'lucide-react';
import { ProjectItem } from '../types';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pr-10">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              {project.status}
            </span>
            {project.badge && (
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20">
                {project.badge}
              </span>
            )}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {project.subtitle}
          </p>
        </div>

        {/* Metrics Row (if available) */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-center">
                <p className="text-lg font-mono font-extrabold text-cyan-600 dark:text-cyan-400">
                  {metric.value}
                </p>
                <p className="text-[11px] font-semibold text-slate-600 dark:text-slate-400 uppercase mt-0.5">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* In-depth Overview */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-500" />
            <span>Project Architecture & Purpose</span>
          </h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {project.longDescription}
          </p>
        </div>

        {/* Key Technical Highlights */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Key Engineering Highlights</span>
          </h3>
          <div className="space-y-2">
            {project.highlights.map((highlight, hIdx) => (
              <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-indigo-500" />
            <span>Technology Stack</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 shadow-md transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Inspect Source on GitHub</span>
            </a>
          ) : (
            <span className="text-xs text-slate-500 italic">
              Proprietary Enterprise Solution
            </span>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
}
