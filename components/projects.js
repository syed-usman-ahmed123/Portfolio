"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function ProjectsPremiumSlider() {
  const projectsData = [
    {
      id: 1,
      title: "Twitter / X UI Clone",
      category: "UI Clone",
      description: "A pixel-perfect frontend replica of Twitter/X built to demonstrate complex responsive layouts, advanced sidebar navigation, and flawless mobile responsiveness.",
      tags: ["HTML", "Tailwind CSS"],
      liveUrl: "https://usmancodertwitterclone.netlify.app/",
      githubUrl: "https://github.com/syed-usman-ahmed123/Twitter-UI-Clone",
      image: "/twitter.png"
    },
    {
      id: 2,
      title: "Driven For Growth Clone",
      category: "Website",
      description: "A professional corporate website rebuilt using WordPress and Elementor, featuring clean layouts, optimized media structures, and complete cross-browser compatibility.",
      tags: ["WordPress", "Elementor"],
      liveUrl: "https://usmancoderdrivenclone.free.nf/",
      // githubUrl nahi hai yahan, toh button automatic nahi dikhega
      image: "/driven.png"
    },
    {
      id: 3,
      title: "Functional Todo List App",
      category: "Web App",
      description: "A fully operational state-driven task management application. Features include real-time task CRUD operations and persistent data storage utilizing browser LocalStorage.",
      tags: ["React.js", "Tailwind CSS"],
      liveUrl: "https://usmancodertodolistapp.netlify.app/",
      githubUrl: "https://github.com/syed-usman-ahmed123/TodoList-App",
      image: "/todolist.png"
    },
    {
      id: 4,
      title: "Full-Stack URL Shortener",
      category: "Web App",
      description: "A secure full-stack link optimization tool built with database architecture. Supports instant custom slug generation, routing redirection, and backend data mutation.",
      tags: ["Next.js", "MongoDB", "Tailwind CSS"],
      // liveUrl nahi hai yahan, toh button automatic nahi dikhega
      githubUrl: "https://github.com/syed-usman-ahmed123/URL-Shortner-Project-in-NextJS",
      image: "/urlshort.png"
    }
  ];

  return (
    <section className="py-24 bg-[var(--section-bg)] transition-colors duration-300" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="text-center mb-16"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
            My Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] tracking-tight">
            Recent Work <span className="text-[var(--accent)]"> &  Projects</span>
          </h2>
        </motion.div>

        {/* Swiper Slider Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
          className="w-full relative project-slider"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 30 }
            }}
            className="mySwiper !pb-16"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="h-auto pt-5">

                <div className="project-card bg-[var(--section-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden flex flex-col h-full">

                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-1 rounded-md w-fit mb-3">
                      {project.category}
                    </span>

                    <h3 className="text-lg font-bold text-[var(--primary-text)] mb-2 hover:text-[var(--accent)] transition-colors duration-200">
                      {project.title}
                    </h3>

                    <p className="text-sm text-[var(--secondary-text)] leading-relaxed mb-6 flex-grow line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-[11px] bg-[var(--primary-bg)] text-[var(--primary-text)] px-2.5 py-1 rounded-md border border-[var(--border-color,rgba(0,0,0,0.03))]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Links (Fixed with Conditional Rendering) */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color,rgba(0,0,0,0.05))] mt-auto">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-[var(--primary-text)] hover:text-[var(--accent)] transition-colors duration-200"
                          >
                            Live Demo
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition-colors duration-200"
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button className="custom-prev w-10 h-10 rounded-full flex items-center justify-center bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--primary-text)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 cursor-pointer select-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button className="custom-next w-10 h-10 rounded-full flex items-center justify-center bg-[var(--section-bg)] border border-[var(--card-border)] text-[var(--primary-text)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-all duration-200 cursor-pointer select-none">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Customization Global CSS */}
        <style jsx global>{`
          .project-slider .project-card {
            box-shadow: none !important;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease;
          }
          
          .project-slider .project-card:hover {
            box-shadow: none !important;
            border-color: var(--accent) !important;
            transform: translateY(-6px);
          }

          .project-slider .custom-prev:active, .custom-next:active {
            transform: scale(0.95);
          }
          
          .project-slider .swiper-pagination-bullet {
            background: var(--secondary-text) !important;
            opacity: 0.35;
            transition: all 0.3s ease;
          }
          .project-slider .swiper-pagination-bullet-active {
            background: var(--accent) !important;
            opacity: 1;
            width: 10px !important;
            height: 10px !important;
            border-radius: 50% !important;
          }
        `}</style>

      </div>
    </section>
  );
}