"use client";
import ScrollAnimate from "./scroll-animate";
import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Devstren",
      duration: "Jan 2026 - Apr 2026",
      description: "Developed and optimized custom frontend pages for e-commerce websites on Shopify and business sites on WordPress. Focused on creating smooth, high-performance shopping experiences, custom theme tweaking, and integrating dynamic plugins to ensure seamless user browsing and responsive design across all devices.",
    },
    {
      role: "Frontend Developer",
      company: "Aykays",
      duration: "Sep 2025 - Dec 2025",
      description: "Converted complex Figma designs into live, pixel-perfect web pages using both clean custom code (HTML5, Tailwind CSS, JavaScript) and the WordPress Elementor page builder. Responsibilities included setting up layouts, handling site responsiveness, and configuring essential plugins based on project requirements.",
    },
  ];

  return (
    <section id="experience" className="relative py-24 bg-[var(--section-bg)] overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[var(--accent)] opacity-[0.03] rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* main div divide into two columns*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-start">

          {/* Left Side  */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="lg:sticky lg:top-28"
          >
            <ScrollAnimate>
            <p className="text-sm font-medium text-[var(--accent)] tracking-widest uppercase mb-3">
              My Journey
            </p>
            </ScrollAnimate>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[var(--primary-text)] leading-tight">
              Professional <span className="text-[var(--accent)]">Experience</span>
            </h2>
          </motion.div>

          {/* Column 2: Right Side */}
          <div className="lg:col-span-2 relative border-l-2 border-[var(--secondary-text)]/10 pl-6 md:pl-10 space-y-8 ml-1 md:ml-3">

            {experiences.map((exp, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                className="relative group"
              >

                {/* Timeline Dot*/}
                <div className="absolute -left-[31px] md:-left-[47px] top-[30px] w-3 h-3 rounded-full bg-[var(--primary-bg)] border-2 border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-300 z-10" />

                {/* Content Card */}
                <div className="bg-[var(--secondary-bg)]/40 backdrop-blur-sm border border-[var(--secondary-text)]/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/20 hover:shadow-lg hover:shadow-black/[0.02]">

                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-xl md:text-2xl text-[var(--primary-text)] group-hover:text-[var(--accent)] transition-colors duration-200">
                        {exp.role}
                      </h3>
                      <p className="text-sm md:text-base font-medium text-[var(--secondary-text)] opacity-80 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    {/* Date Badge */}
                    <span className="inline-block text-xs md:text-sm font-medium text-[var(--accent)] bg-[var(--accent)]/5 border border-[var(--accent)]/10 px-4 py-1.5 rounded-full self-start sm:self-center whitespace-nowrap">
                      {exp.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-base text-[var(--secondary-text)] font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}