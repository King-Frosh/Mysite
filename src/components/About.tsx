import React from 'react';
import { 
  Sparkles, 
  CheckCircle, 
  Target, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Award,
  ArrowUpRight 
} from 'lucide-react';
import { ABOUT_WRITEUP, CORE_PILLARS } from '../data/portfolioData';
import { FroshHubMark } from './Icons';

export function About() {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Target':
        return <Target className="w-5 h-5 text-cyan-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-500" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-indigo-500" />;
      default:
        return <Award className="w-5 h-5 text-cyan-500" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-slate-100/60 dark:bg-[#0a0f1d]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About The Platform & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">FROSH HUB</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            A comprehensive overview of our mission, background in Computer Science, and multi-disciplinary capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main About Text Box (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-xl space-y-6">
              
              {/* Highlight Intro Quote */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-indigo-500/10 border border-cyan-500/20">
                <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
                  "{ABOUT_WRITEUP.paragraph1}"
                </p>
              </div>

              {/* Second Paragraph */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                With a background in <strong className="font-bold text-slate-900 dark:text-white">Computer Science</strong>, I bring a combination of technical knowledge, analytical thinking, creativity, and practical problem-solving to every project. My experience spans <strong className="font-semibold text-slate-900 dark:text-white">IT support, research and analysis, web design, graphics design, data analysis, and administrative support</strong>, allowing me to approach projects from both technical and user-focused perspectives.
              </p>

              {/* Third Paragraph */}
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
                I am passionate about using technology to solve problems, improve processes, and create solutions that are both functional and easy to use. Whether it involves developing a website, analyzing information, designing digital content, or providing technical support, I focus on delivering <strong className="font-bold text-slate-900 dark:text-white underline decoration-cyan-500 decoration-2 underline-offset-4">accurate, timely, and quality results</strong>.
              </p>

              {/* Skills Callout as specified in write-up */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-extrabold tracking-wider text-slate-900 dark:text-white uppercase mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-cyan-500" />
                  <span>My Skills</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {ABOUT_WRITEUP.skillsList.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 hover:border-cyan-500/40 transition-colors"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion Callout */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900 text-white dark:bg-slate-950 border border-cyan-500/30">
                  <div className="shrink-0 mt-0.5">
                    <FroshHubMark className="w-7 h-7" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold leading-relaxed text-slate-100">
                    "{ABOUT_WRITEUP.conclusion}"
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Core Pillars & Professional Values (Right 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-cyan-600 dark:text-cyan-400 tracking-wider uppercase">
                Work Philosophy
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Core Foundations
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                The values guiding every IT support ticket, data audit, and web deployment.
              </p>
            </div>

            <div className="space-y-4">
              {CORE_PILLARS.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all hover:border-cyan-500/40 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 shrink-0 group-hover:scale-110 transition-transform">
                      {getPillarIcon(pillar.iconName)}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Box: Academic & Technical Background */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-cyan-900/20 via-blue-900/20 to-indigo-900/20 border border-cyan-500/30">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2 flex items-center justify-between">
                <span>Computer Science Discipline</span>
                <ArrowUpRight className="w-4 h-4 text-cyan-500" />
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Applying foundational principles of algorithms, databases, computer networks, and systems architecture to real-world IT troubleshooting and digital platform development.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
