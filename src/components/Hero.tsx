import React from 'react';
import { ArrowRight, FileText, CheckCircle2, Sparkles, Server, Terminal, Shield, Award } from 'lucide-react';
import { PROFESSIONAL_SUMMARY, SITE_METADATA, STATS_HIGHLIGHTS } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/80 shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                {SITE_METADATA.statusText}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-sm font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
                Welcome to Frosh Hub
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.12]">
                Building Practical, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                  Reliable & Smart
                </span>{' '}
                Digital Solutions.
              </h1>
            </div>

            {/* Professional Summary */}
            <div className="relative pl-4 border-l-2 border-cyan-500/70">
              <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                "{PROFESSIONAL_SUMMARY}"
              </p>
            </div>

            {/* Role / Current Affiliation Banner with Uploaded Company Logo */}
            <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800/90 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center p-1 border border-slate-700/40 shrink-0">
                <img
                  src="/briccs-logo.png"
                  alt="BRICCS International Ideal Limited"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Fallback to FroshHub Mark if missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    IT / Technical Support Officer
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                  BRICCS International Ideal Limited (Bulk SMS & VAS Platforms)
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/25 hover:shadow-cyan-600/40 transition-all hover:-translate-y-0.5"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4 text-cyan-500" />
                <span>Download / Print CV</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Contact Details &rarr;</span>
              </a>
            </div>

            {/* Key Assurance Badges */}
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Computer Science Foundation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Telecoms & VAS QA Rigor</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Full-Stack Web & Data Solutions</span>
              </div>
            </div>

          </div>

          {/* Interactive Card / Visual Dashboard Preview (Right 5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative border container */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-cyan-500/40 via-blue-500/20 to-purple-500/30 shadow-2xl">
                <div className="rounded-[22px] bg-white dark:bg-[#0c1222] p-6 sm:p-7 space-y-6">
                  
                  {/* Card Header: Platform Tag */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/30">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                          FroshHub Console
                        </h3>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400">
                          IT Support & Engineering Hub
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 font-bold">
                      SYSTEM READY
                    </span>
                  </div>

                  {/* Operational Capabilities Grid */}
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-500 shrink-0">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Telecom & VAS Gateway Monitoring
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Tracking message delivery rates, error code escalations, and Sender ID configs across Airtel, MTN, Glo & 9mobile.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Enterprise IT Operations & Systems
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Hands-on computing support, hardware maintenance, network management, and Microsoft Office workflows (IBEDC & BRICCS).
                        </p>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/60 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-500 shrink-0">
                        <Award className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                          Research Consultancy & Technical Scribing
                        </h4>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          Desk-based research, structured report synthesis, presentation design, and thorough editorial review (Easytech Consult).
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Metric Chips */}
                  <div className="pt-2 grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-center">
                      <p className="text-xl font-extrabold text-cyan-600 dark:text-cyan-400 font-mono">
                        99.9%
                      </p>
                      <p className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 uppercase mt-0.5">
                        Platform Uptime Focus
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-center">
                      <p className="text-xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
                        100%
                      </p>
                      <p className="text-[10px] font-semibold text-slate-600 dark:text-slate-400 uppercase mt-0.5">
                        Delivered Accuracy
                      </p>
                    </div>
                  </div>

                  {/* Quick link to experience */}
                  <div className="text-center">
                    <a
                      href="#experience"
                      className="text-xs font-bold text-cyan-600 dark:text-cyan-400 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Explore full professional timeline</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Global Impact Highlights Row */}
        <div className="mt-16 sm:mt-20 pt-10 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {STATS_HIGHLIGHTS.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-3xl sm:text-4xl font-extrabold font-mono text-slate-900 dark:text-white tracking-tight bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
