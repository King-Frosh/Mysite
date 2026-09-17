import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Radio, 
  Zap, 
  BookOpen, 
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { WORK_EXPERIENCES } from '../data/portfolioData';

export function Experience() {
  const [expandedId, setExpandedId] = useState<string | null>('briccs-int');

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const getCompanyIcon = (id: string) => {
    switch (id) {
      case 'briccs-int':
        return <Radio className="w-5 h-5 text-cyan-500" />;
      case 'ibedc':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'easytech':
        return <BookOpen className="w-5 h-5 text-indigo-500" />;
      default:
        return <Building2 className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Hands-on professional roles spanning telecommunications VAS monitoring, utility IT operations, and research consultancy.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {WORK_EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`relative rounded-3xl transition-all duration-300 border ${
                  exp.isCurrent
                    ? 'bg-white dark:bg-slate-900/95 border-cyan-500/50 shadow-xl shadow-cyan-500/5'
                    : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 shadow-md'
                }`}
              >
                {/* Current Badge Accent Bar */}
                {exp.isCurrent && (
                  <div className="absolute -top-3 left-8 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-wider uppercase bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md">
                    Current Position
                  </div>
                )}

                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Top Bar: Company, Role & Duration */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      
                      {/* Company Logo or Icon */}
                      {exp.logo ? (
                        <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center p-1.5 border border-slate-700/50 shadow-md shrink-0">
                          <img
                            src={exp.logo}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center p-3 border border-slate-200 dark:border-slate-700 shadow-md shrink-0">
                          {getCompanyIcon(exp.id)}
                        </div>
                      )}

                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm">
                          <span className="font-bold text-cyan-600 dark:text-cyan-400">
                            {exp.company}
                          </span>
                          {exp.location && (
                            <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 self-start">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Summary Brief */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {exp.summary}
                  </p>

                  {/* Mobile Operators Callout for BRICCS */}
                  {exp.id === 'briccs-int' && (
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mr-1">
                        Coordinated MNOs:
                      </span>
                      {['Airtel Nigeria', 'MTN Nigeria', 'Globacom (Glo)', '9mobile'].map((telco, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 shadow-2xs"
                        >
                          {telco}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Responsibilities Bullet Points */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                      Key Responsibilities & Deliverables:
                    </p>
                    <ul className="space-y-2.5">
                      {exp.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                          <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Technologies / Tags */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1">
                      Focus Areas:
                    </span>
                    {exp.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
