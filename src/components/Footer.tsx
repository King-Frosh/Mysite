import React from 'react';
import { ArrowUp, Heart, ExternalLink } from 'lucide-react';
import { FroshHubMark, GithubIcon } from './Icons';
import { SITE_METADATA } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-[#060911] border-t border-slate-200 dark:border-slate-800/80 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/60">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <FroshHubMark className="w-10 h-10" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white font-mono">
                  FROSH
                </span>
                <span className="text-lg font-black tracking-tight bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent font-mono">
                  HUB
                </span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                Digital Technology Platform · IT Support & Web Engineering
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-cyan-500 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-500 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-cyan-500 transition-colors">Projects</a>
            <a href="#services" className="hover:text-cyan-500 transition-colors">Services</a>
            <a href="#contact" className="hover:text-cyan-500 transition-colors">Contact</a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} <strong className="text-slate-700 dark:text-slate-200">FROSH HUB</strong>. Built with precision, reliability, and care.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={SITE_METADATA.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub / King-Frosh
            </a>
            <span>•</span>
            <span className="text-slate-400">Computer Science Graduate</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
