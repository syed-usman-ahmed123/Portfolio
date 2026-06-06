"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsPremiumSlider() {
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Cloud Platform",
      category: "Web Apps",
      description: "A high-performance e-commerce engine with real-time inventory tracking, multi-currency support, and instant stripe checkouts.",
      tags: ["Next.js", "JavaScript", "Tailwind", "Stripe"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
    // add project img
    },
    {
      id: 2,
      title: "Crypto Wallet Dashboard",
      category: "Web Apps",
      description: "Web3 financial dashboard visualizing real-time crypto charts, gas-fee optimization analytics, and multi-wallet connectivity.",
      tags: ["React", "Chart.js", "Web3", "Tailwind"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      // add project img
    },
    {
      id: 3,
      title: "Fitness Tracker App",
      category: "Mobile App",
      description: "Cross-platform mobile application tracking daily micro-nutrients, workout routines, and biometric sync via smartwatches.",
      tags: ["React Native", "Expo", "Redux Toolkit"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
       // add project img
    },
    {
      id: 4,
      title: "AI SaaS Landing Page",
      category: "UI/UX Design",
      description: "A premium, conversion-optimized marketing interface with dark aesthetics, magnetic buttons, and glassmorphism layouts.",
      tags: ["Figma", "Framer Motion", "Tailwind"],
      liveUrl: "https://demo.example.com",
      githubUrl: "https://github.com",
      // add project img
    }
  ];

  return (
    <section className="py-24 bg-[var(--section-bg)] transition-colors duration-300" id="projects">
      {/* Section Width changed to max-w-6xl to match all other sections */}
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Header - Fixed Size to 4xl/5xl & Line Removed */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
            My Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] tracking-tight">
            Recent Work & <span className="text-[var(--accent)]">Projects</span>
          </h2>
        </div>

        {/* Premium Swiper Slider Container - Outer padding adjusted for full stretch */}
        <div className="w-full relative ">
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
            navigation={true}
            breakpoints={{
              // Desktop aur Laptop par poori width mein sirf 2 cards dikhane k liye
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2, spaceBetween: 30 }
            }}
            className="mySwiper !pb-16"
          >
            {projectsData.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="bg-[var(--section-bg)] rounded-2xl overflow-hidden border border-[var(--border-color,rgba(0,0,0,0.05))] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  
                  {/* Next.js Optimized Image Component */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-800">
                    {/* <Image 
                       // add project img
                      alt={project.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    /> */}
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

                    {/* Action Links */}
                    <div className="flex items-center gap-4 pt-4 border-t border-[var(--border-color,rgba(0,0,0,0.05))] mt-auto">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-[var(--primary-text)] hover:text-[var(--accent)] transition-colors duration-200"
                      >
                        Live Demo
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-[var(--secondary-text)] hover:text-[var(--primary-text)] transition-colors duration-200"
                      >
                        Source Code
                      </a>
                    </div>

                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Global CSS Style Customization */}
        <style jsx global>{`
          /* Minimal Navigation Arrows (No background, No borders, No jumps) */
          .swiper-button-next, .swiper-button-prev {
            color: var(--accent) !important;
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            width: auto !important;
            height: auto !important;
            transition: transform 0.2s ease;
          }
          .swiper-button-next:hover, .swiper-button-prev:hover {
            background: transparent !important;
            transform: scale(1.15);
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            font-size: 28px !important;
            font-weight: bold;
          }
          
          /* Full Circle Pagination Dots Fix */
          .swiper-pagination-bullet {
            background: var(--secondary-text) !important;
            opacity: 0.35;
            transition: all 0.3s ease;
          }
          .swiper-pagination-bullet-active {
            background: var(--accent) !important;
            opacity: 1;
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
          }

          /* Hide arrows on mobile devices */
          @media (max-w: 640px) {
            .swiper-button-next, .swiper-button-prev {
              display: none !important;
            }
          }
        `}</style>

      </div>
    </section>
  );
}