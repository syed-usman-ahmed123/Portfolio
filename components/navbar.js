"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  
  
  // hero active by dfault
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // 2. Active section track
    const sections = ["hero", "experience", "skills", "projects", "contact"];
    const observers = [];

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { rootMargin: "-30% 0px -60% 0px" } 
        );
        observer.observe(element);
        observers.push({ observer, element });
      }
    });


   return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach(({ observer, element }) => observer.unobserve(element));
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 h-16 ${scrolled
          ? "bg-[var(--primary-bg)]/90 backdrop-blur-md shadow-sm shadow-black/5"
          : "bg-transparent"
          }`}
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={() => setActiveSection("hero")}
            className="font-bold text-xl tracking-tight relative z-10 flex items-center"
          >
            <span className="text-[var(--primary-text)]">SU</span>
            <span className="text-[var(--accent)]">A</span>
          </a>

          {/* Desktop Menu  */}
          <ul className="hidden md:flex items-center gap-8 h-full text-sm" role="list">
            {["experience", "skills", "projects", "contact"].map((item) => {
              const isActive = activeSection === item;
              return (
                <li key={item} className="h-full flex items-center">
                  <a
                    href={`#${item}`}
                    onClick={() => setActiveSection(item)}
                    className={`relative capitalize font-medium pb-0.5 transition-colors duration-200 block cursor-pointer
                      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[var(--accent)] 
                      after:transition-transform after:duration-300 after:origin-left
                      ${isActive
                        ? "text-[var(--primary-text)] font-semibold after:scale-x-100"
                        : "text-[var(--secondary-text)] hover:text-[var(--primary-text)] after:scale-x-0 hover:after:scale-x-100"
                      }
                    `}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 h-full">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[var(--secondary-text)]/30 hover:bg-[var(--secondary-bg)] transition-colors text-[var(--primary-text)]"
              aria-label={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              {theme === "dark" ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
              )}
            </button>

            {/* Desktop let's talk Button */}
            <a
              href="#contact"
              onClick={() => setActiveSection("contact")}
              className="hidden md:inline-flex items-center gap-2 bg-[var(--accent)] text-white text-sm font-semibold px-5 py-2 rounded-full btn-hover-slide transition-colors duration-300"
            >
              <span className="relative z-10">Let's Talk</span>
              <svg className="w-3.5 h-3.5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-[var(--secondary-text)]/30 text-[var(--primary-text)]"
              aria-label="Open menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* tailwind drawer overlay and panel */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${mobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Drawer Content Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-64 bg-[var(--primary-bg)] shadow-xl p-6 flex flex-col justify-start transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between mb-8 w-full">
            <span className="font-bold text-lg text-[var(--primary-text)]">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[var(--secondary-text)]/20 text-[var(--primary-text)]"
              aria-label="Close menu"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Drawer Links List */}
          <ul className="flex flex-col gap-5 text-base font-medium w-full" role="list">
            {["experience", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => {
                    setActiveSection(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`block capitalize transition-colors ${activeSection === item
                    ? "text-[var(--accent)] font-semibold"
                    : "text-[var(--secondary-text)] hover:text-[var(--primary-text)]"
                    }`}
                >
                  {item}
                </a>
              </li>
            ))}

            {/* Mobile let's talk Button  */}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => {
                  setActiveSection("contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full relative overflow-hidden text-white justify-center inline-flex items-center gap-2 bg-[var(--accent)] font-semibold text-sm px-5 py-2.5 rounded-full text-center btn-hover-slide transition-colors duration-300"
              >
                <span className="relative z-10">Let's Talk</span>
                <svg className="w-3.5 h-3.5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}