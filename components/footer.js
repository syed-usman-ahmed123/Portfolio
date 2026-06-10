"use client";
import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full py-8 bg-[var(--primary-bg)] border-t border-[var(--card-border,rgba(0,0,0,0.06))] dark:border-[var(--card-border,rgba(255,255,255,0.08))] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Left Side */}
          <div className="text-sm text-[var(--secondary-text)]">
            <p>© {new Date().getFullYear()} <span className="font-semibold text-[var(--primary-text)]">Syed Usman Ahmed</span>. All rights reserved.</p>
          </div>

          {/* Middle Side */}
          <div className="text-xs text-[var(--secondary-text)] tracking-wide">
            Built with <span className="text-[var(--accent)] font-medium">Next.js</span> & <span className="text-sky-500 font-medium">Tailwind CSS</span>
          </div>

          {/* Right Side */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--secondary-text)] hover:text-[var(--accent)] transition-colors duration-200 cursor-pointer group"
            >
              Back to top
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2.5} 
                stroke="currentColor" 
                className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
}