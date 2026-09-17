import React from 'react';
import { X, Printer, Download, MapPin, Mail, Phone, ExternalLink, Briefcase, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { 
  SITE_METADATA, 
  PROFESSIONAL_SUMMARY, 
  WORK_EXPERIENCES, 
  SKILLS_DATA,
  ABOUT_WRITEUP 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 space-y-8 print:p-0 print:border-none print:shadow-none print:bg-white print:text-black print:max-h-none print:overflow-visible"
        onClick={(e) => e.stopPropagation()}
        id="printable-resume"
      >
        {/* Floating Action Controls (Hidden on Print) */}
        <div className="sticky top-0 right-0 z-10 flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
              OFFICIAL CURRICULUM VITAE
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 shadow-sm transition-all"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition-colors"
              aria-label="Close CV preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Header */}
        <div className="space-y-4 pb-6 border-b border-slate-200 dark:border-slate-800 print:border-slate-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight">
                {SITE_METADATA.authorName} <span className="text-cyan-600 print:text-cyan-800">· FROSH HUB</span>
              </h1>
              <p className="text-base font-bold text-cyan-600 dark:text-cyan-400 print:text-slate-700 mt-1">
                Computer Science Graduate | IT / Technical Support Specialist | Web Solutions
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-600 dark:text-slate-400 print:text-slate-600">
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-cyan-500 print:text-black" />
              <span>{SITE_METADATA.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-500 print:text-black" />
              <span>{SITE_METADATA.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ExternalLink className="w-3.5 h-3.5 text-cyan-500 print:text-black" />
              <span>github.com/King-Frosh</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="space-y-2">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 print:text-slate-500">
            Professional Summary
          </h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
            {PROFESSIONAL_SUMMARY}
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 print:text-slate-500 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-cyan-500 print:text-black" />
            <span>Work Experience</span>
          </h2>

          <div className="space-y-6">
            {WORK_EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <div>
                    <span className="font-extrabold text-slate-900 dark:text-white print:text-black">
                      {exp.role}
                    </span>
                    <span className="text-cyan-600 dark:text-cyan-400 print:text-slate-700 font-semibold ml-2">
                      — {exp.company}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-1.5 pl-2">
                  {exp.bulletPoints.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-black leading-relaxed">
                      <span className="text-cyan-500 print:text-black font-bold">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800 print:border-slate-300">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 print:text-slate-500 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-cyan-500 print:text-black" />
            <span>Education</span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
            <div>
              <span className="font-extrabold text-slate-900 dark:text-white print:text-black">
                Bachelor of Science (B.Sc.) in Computer Science
              </span>
              <p className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-600">
                Core coursework: Systems Architecture, Database Management, Computer Networks, Software Engineering & Algorithms.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
              Graduate Degree
            </span>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800 print:border-slate-300">
          <h2 className="text-xs font-mono font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500 print:text-slate-500 flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-500 print:text-black" />
            <span>Key Competencies & Technical Skills</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {SKILLS_DATA.map((skill) => (
              <div 
                key={skill.id} 
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 print:bg-slate-100 border border-slate-200 dark:border-slate-700 print:border-slate-300"
              >
                <p className="text-xs font-bold text-slate-900 dark:text-white print:text-black">
                  {skill.name}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 print:text-slate-600 mt-0.5">
                  {skill.tools.slice(0, 2).join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer Controls (Hidden on Print) */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between print:hidden">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Format: Standard Executive CV · Ready for PDF Export
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-cyan-600 hover:bg-cyan-500 shadow-md transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
