"use client";
import { useState } from "react";

export default function Skills() {
  const skillCategories = [
    {
      id: "mern",
      title: "Full Stack MERN",
      badge: "App Ecosystem",
      description: "JavaScript ecosystem for building scalable web applications.",
      skills: [
        { name: "React.js", color: "#61dafb" },
        { name: "Next.js", color: "#ffffff" },
        { name: "Node.js", color: "#6cc24a" },
        { name: "Express.js", color: "#828282" },
        { name: "MongoDB", color: "#47a248" },
        { name: "Tailwind CSS", color: "#38bdf8" },
      ],
    },
    {
      id: "cms",
      title: "CMS & E-Commerce",
      badge: "Platforms",
      description: "Custom platform development and performance tuning.",
      skills: [
        { name: "WordPress", color: "#21759b" },
        { name: "Shopify", color: "#96bf48" },
        { name: "Liquid", color: "#b042ff" },
        { name: "WooCommerce", color: "#96588a" },
        { name: "Speed Tuning", color: "#ff9f43" },
        { name: "Custom Themes", color: "#10ac84" },
      ],
    },
    {
      id: "tools",
      title: "Backend & Dev Tools",
      badge: "Architecture",
      description: "Architecture, state management, and deployment pipelines.",
      skills: [
        { name: "RESTful APIs", color: "#0abde3" },
        { name: "Redux Toolkit", color: "#764abc" },
        { name: "Git & GitHub", color: "#f05032" },
        { name: "JWT Auth", color: "#00ffff" },
        { name: "Postman", color: "#ff6c37" },
        { name: "Vercel / Hosting", color: "#ee5253" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(skillCategories[0].id);
  const currentCategory = skillCategories.find((cat) => cat.id === activeTab);

  // Custom Function: Mobile par automatic target box par scroll karwayega
  const handleTabClick = (id) => {
    setActiveTab(id);
    
    // Sirf mobile/tablet view checks (agar screen width 1024px se choti hai)
    if (window.innerWidth < 1024) {
      setTimeout(() => {
        const targetElement = document.getElementById("tech-showcase-box");
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
      }, 100); // Small timeout to ensure state update doesn't conflict with transition
    }
  };

  return (
    <section id="skills" className="relative py-20 lg:py-28 bg-[var(--primary-bg)] overflow-hidden">
      {/* Background High-Tech Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[var(--accent)] opacity-[0.03] rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <div className="mb-12 lg:mb-20 text-center lg:text-left">
          <p className="text-xs font-semibold text-[var(--accent)] tracking-[0.25em] uppercase mb-3">
            Expertise Matrix
          </p>
          <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tight text-[var(--primary-text)]">
            Capabilities <span className="text-[var(--secondary-text)]/40 font-light">&amp; stack.</span>
          </h2>
        </div>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT SIDE: Mobile compact navigation / Desktop Futuristic Controller */}
          <div className="lg:col-span-5 flex flex-col md:flex-row lg:flex-col justify-center gap-3 lg:space-y-4 lg:gap-0">
            {skillCategories.map((category) => {
              const isActive = category.id === activeTab;
              return (
                <button
                  key={category.id}
                  onClick={() => handleTabClick(category.id)}
                  className={`w-full text-left p-4 lg:p-6 rounded-xl lg:rounded-2xl transition-all duration-500 relative overflow-hidden flex flex-col group ${
                    isActive
                      ? "bg-[var(--section-bg)] border border-[var(--accent)]/40 shadow-lg lg:shadow-xl"
                      : "bg-[var(--section-bg)]/20 border border-[var(--secondary-text)]/5 lg:bg-transparent lg:border-transparent hover:bg-[var(--section-bg)]/30"
                  }`}
                >
                  {/* Active Indicator Line (Hidden on mobile grid view for cleaner looks) */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--accent)] transition-transform duration-500 hidden lg:block ${
                      isActive ? "scale-y-100" : "scale-y-0 group-hover:scale-y-50"
                    }`}
                  />

                  <span className={`text-[10px] lg:text-xs font-mono uppercase tracking-wider mb-0.5 lg:mb-1 transition-colors duration-300 ${
                    isActive ? "text-[var(--accent)]" : "text-[var(--secondary-text)]/60"
                  }`}>
                    {category.badge}
                  </span>
                  
                  <h3 className="font-display font-bold text-base lg:text-2xl text-[var(--primary-text)] mb-1 lg:mb-2">
                    {category.title}
                  </h3>
                  
                  {/* Hidden description on mobile to keep things compact */}
                  <p className="text-sm text-[var(--secondary-text)] font-light leading-relaxed max-w-sm hidden lg:line-clamp-2">
                    {category.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* RIGHT SIDE: Immersive Interactive Showcase (7 Columns) */}
          <div 
            id="tech-showcase-box"
            className="lg:col-span-7 bg-[var(--section-bg)]/40 backdrop-blur-xl border border-[var(--secondary-text)]/10 rounded-3xl p-6 md:p-8 lg:p-12 flex flex-col justify-start min-h-[420px] sm:min-h-[360px] lg:h-[540px] relative shadow-2xl overflow-hidden scroll-mt-24"
          >
            
            {/* Visual Decorative Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] rounded-3xl pointer-events-none" />

            {/* Header Section (Always Fixed Top) */}
            <div className="relative z-10 flex items-center justify-between border-b border-[var(--secondary-text)]/10 pb-4 lg:pb-6 mb-6 lg:mb-8 w-full">
              <div className="font-mono text-[10px] lg:text-xs text-[var(--secondary-text)]/60 uppercase tracking-widest">
                // Technologies integrated
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] text-[var(--accent)] tracking-wider block lg:hidden">TAP TO EFFECT</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>

            {/* Skills Grid Wrapper */}
            <div 
              key={activeTab} 
              className="relative z-10 w-full flex-1 overflow-y-auto pr-1"
              style={{
                animation: 'portfolioFadeIn 0.35s cubic-bezier(0.4, 0, 0.2, 1) forwards'
              }}
            >
              <style>{`
                @keyframes portfolioFadeIn {
                  from { opacity: 0; transform: translateY(4px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `}</style>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 auto-rows-max">
                {currentCategory?.skills.map((skill, sIndex) => (
                  <div
                    key={sIndex}
                    style={{ "--brand-color": skill.color }}
                    className="flex items-center justify-between p-3.5 lg:p-4 bg-[var(--primary-bg)]/80 border border-[var(--secondary-text)]/5 rounded-xl transition-all duration-300 hover:border-[var(--brand-color)]/30 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] active:border-[var(--brand-color)]/40 group cursor-default"
                  >
                    <div className="flex items-center gap-3.5">
                      <div 
                        style={{ backgroundColor: skill.color }}
                        className="w-2.5 h-2.5 rounded-full shadow-[0_0_8px_var(--brand-color)] transition-transform duration-300 group-hover:scale-125 group-active:scale-125" 
                      />
                      <span className="text-sm md:text-base font-medium text-[var(--primary-text)] group-hover:translate-x-1 transition-transform duration-300">
                        {skill.name}
                      </span>
                    </div>
                    
                    <span className="text-[10px] font-mono text-[var(--secondary-text)]/30 uppercase opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Tech Spec Bar (Always Fixed Bottom) */}
            <div className="relative z-10 border-t border-[var(--secondary-text)]/10 pt-4 lg:pt-6 mt-6 flex items-center justify-between text-[10px] lg:text-xs font-mono text-[var(--secondary-text)]/50 w-full">
              <span>SYSTEM: READY</span>
              <span>STACK_ID: {currentCategory?.id.toUpperCase()}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}