import React from 'react';
import { 
  Server, 
  Radio, 
  Code, 
  FileSpreadsheet, 
  BookOpen, 
  PenTool, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/portfolioData';

export function Services() {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-6 h-6 text-cyan-500" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-blue-500" />;
      case 'Code':
        return <Code className="w-6 h-6 text-indigo-500" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-6 h-6 text-emerald-500" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-amber-500" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-pink-500" />;
      default:
        return <Sparkles className="w-6 h-6 text-cyan-500" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-100/60 dark:bg-[#0a0f1d]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Service Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Frosh Hub Delivers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            End-to-end technical problem solving, from server and network operations to interactive web design and client research.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:border-cyan-500/50 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Icon Box */}
                <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center border border-slate-200/70 dark:border-slate-700/70 group-hover:scale-110 transition-transform">
                  {getServiceIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-cyan-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Core Deliverables:
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Inquiry Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 group-hover:underline"
                >
                  <span>Request This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
