import React, { useState } from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  Search, 
  Palette, 
  Monitor, 
  FileCheck, 
  BarChart, 
  Globe, 
  Layout, 
  Check,
  CheckCircle2,
  Wrench
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export function Skills() {
  const [filter, setFilter] = useState<'all' | 'technical' | 'analytical' | 'core' | 'creative'>('all');

  const filteredSkills = filter === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === filter);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-cyan-500" />;
      case 'Search':
        return <Search className="w-6 h-6 text-blue-500" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-pink-500" />;
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-emerald-500" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-teal-500" />;
      case 'BarChart':
        return <BarChart className="w-6 h-6 text-amber-500" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-indigo-500" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-purple-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-slate-100/60 dark:bg-[#0a0f1d]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Wrench className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional Skills
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A balanced synthesis of technical precision, analytical rigor, creative design, and effective communication.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {[
              { id: 'all', label: 'All 8 Skills' },
              { id: 'technical', label: 'Technical & IT' },
              { id: 'analytical', label: 'Analytical & Research' },
              { id: 'core', label: 'Core & Editorial' },
              { id: 'creative', label: 'Creative & Design' },
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map(skill => (
            <div
              key={skill.id}
              className="group p-6 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:border-cyan-500/50 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header: Icon & Category Badge */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {skill.proficiencyLevel}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.description}
                </p>

              </div>

              {/* Tools & Application Chips */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  Associated Tools:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tools.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Banner: Technical Versatility */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold">
              Looking for a Multi-Talented IT & Technical Specialist?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Combines technical troubleshooting, web engineering, rigorous data analysis, and office management.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
          >
            Schedule a Conversation
          </a>
        </div>

      </div>
    </section>
  );
}
