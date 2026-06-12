"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[var(--primary-bg)]">
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent)] opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--secondary-text)] opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content Side */}
          <div>
            {/* 1. Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--primary-text)] mb-6"
            >
              Hi, I'm <span className="text-[var(--accent)]">Syed Usman Ahmed</span>
            </motion.h1>

            {/* 2. Description  */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="text-lg md:text-xl text-[var(--secondary-text)] font-light leading-relaxed max-w-md mb-10"
            >
              Web Developer{' '}
              <strong className="font-medium text-[var(--primary-text)]">
                focused on Frontend
              </strong> I build clean, fast, and fully responsive websites using modern code (Next.js, Tailwind CSS) and CMS platforms like WordPress (Elementor) and Shopify.
            </motion.p>

            {/* 3. Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-medium px-7 py-3.5 rounded-full btn-hover-slide transition-opacity text-sm"
              >
                View my work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </a>

              <a
                href="/my-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[var(--secondary-text)] text-[var(--primary-text)] font-medium px-7 py-3.5 rounded-full btn-whatsapp-hover text-sm"
              >
                Download CV
              </a>
            </motion.div>
          </div>

          {/* Right Image Side  */}
          <div className="flex justify-center md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96"
            >
              <div className="w-full h-full rounded-3xl overflow-hidden relative ">

                <Image
                  src="/usman1.png"
                  alt="Syed Usman Ahmed"
                  fill
                  priority
                  className="object-cover "
                />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}