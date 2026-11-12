"use client";
import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimate from "./scroll-animate";

export default function ProjectsGridSection() {
    const [copiedId, setCopiedId] = useState(null);

    const handleCopyPassword = (id, password) => {
        navigator.clipboard.writeText(password);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const projectsData = [
        {
            id: 1,
            title: "Vortex Threads",
            description: "A custom streetwear  e-commerce store built with <span class='text-[var(--accent)] font-semibold'>Shopify</span> using <span class='text-[var(--accent)] font-semibold'>Liquid</span>,  <span class='text-[var(--accent)] font-semibold'>Schema</span>, <span class='text-[var(--accent)] font-semibold'>HTML</span>, <span class='text-[var(--accent)] font-semibold'>CSS</span>, and <span class='text-[var(--accent)] font-semibold'>JS</span> featuring <span class='text-[var(--accent)] font-semibold'>variable products</span> and custom variant swatches.",
            liveUrl: "https://vortex-threads-pohacfwx.myshopify.com/",
            githubUrl: "https://github.com/syed-usman-ahmed123/Vortex-threads",
            isShopify: true,
            storePassword: "Usman.dev",
            image: "/v-t.png"
        },
        {
            id: 2,
            title: "Age Calculator App",
            description: "A clean and responsive age calculator built using <span class='text-[var(--accent)] font-semibold'>HTML</span>, <span class='text-[var(--accent)] font-semibold'>Tailwind CSS</span>, and <span class='text-[var(--accent)] font-semibold'>JavaScript</span>.",
            liveUrl: "https://usmanagecalculator.netlify.app/",
            githubUrl: "https://github.com/syed-usman-ahmed123/Age-Calculator-App",
            image: "/age calculator 1.png"
        },
        {
            id: 3,
            title: "Twitter / X UI Clone",
            description: "A pixel-perfect frontend replica of Twitter/X built using <span class='text-[var(--accent)] font-semibold'>HTML</span> and <span class='text-[var(--accent)] font-semibold'>Tailwind CSS</span> to demonstrate complex responsive layouts.",
            liveUrl: "https://usmancodertwitterclone.netlify.app/",
            githubUrl: "https://github.com/syed-usman-ahmed123/Twitter-UI-Clone",
            image: "/twitter-clone.png"
        },
        {
            id: 4,
            title: "Apex Apparel",
            description: "A custom e-commerce store built using <span class='text-[var(--accent)] font-semibold'>WordPress</span>, <span class='text-[var(--accent)] font-semibold'>WooCommerce</span>, and <span class='text-[var(--accent)] font-semibold'>Elementor</span> featuring <span class='text-[var(--accent)] font-semibold'>variable products</span>.",
            liveUrl: "https://dev-apex-apparel.pantheonsite.io/",
            image: "/dev apex.png"
        },
        {
            id: 5,
            title: "Driven For Growth Clone",
            description: "A professional corporate clone website built using <span class='text-[var(--accent)] font-semibold'>WordPress</span> and <span class='text-[var(--accent)] font-semibold'>Elementor</span> with custom layouts.",
            liveUrl: "https://usmancoderdrivenclone.free.nf/",
            image: "/d-1.png"
        },
        {
            id: 6,
            title: "URL Shortener App",
            description: "A secure full-stack link optimization tool built using <span class='text-[var(--accent)] font-semibold'>Next.js</span>,  <span class='text-[var(--accent)] font-semibold'>MongoDB</span>,  and <span class='text-[var(--accent)] font-semibold'>Tailwind CSS</span> for custom slug generation and routing.",
            githubUrl: "https://github.com/syed-usman-ahmed123/URL-Shortner-Project-in-NextJS",
            image: "/urlshort.png"
        },

    ];

    return (
        <section className="py-24 bg-[var(--section-bg)] transition-colors duration-300" id="projects">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <ScrollAnimate direction="down" duration={0.6}>
                        <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-2">
                            My Portfolio
                        </p>
                        <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] tracking-tight">
                            Recent Work <span className="text-[var(--accent)]"> & Projects</span>
                        </h2>
                    </ScrollAnimate>
                </div>

                {/* Projects Grid Container */}
                <div className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {projectsData.map((project) => (
                            <ScrollAnimate key={project.id} direction="up" duration={0.6}>
                                <div
                                    className="project-card bg-[var(--section-bg)] border border-[var(--card-border)] rounded-2xl overflow-hidden flex flex-col h-full"
                                >
                                    {/* Image Container (60% - 80% visual focus) */}
                                    <div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden bg-zinc-800 flex-shrink-0">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover object-top transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-6 flex flex-col flex-grow justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-[var(--primary-text)] mb-2 hover:text-[var(--accent)] transition-colors duration-200">
                                                {project.title}
                                            </h3>

                                            <p
                                                className="text-sm text-[var(--secondary-text)] leading-relaxed mb-4"
                                                dangerouslySetInnerHTML={{ __html: project.description }}
                                            />
                                        </div>

                                        {/* Footer Area: Password + Action Links pushed to bottom consistently */}
                                        <div className="mt-auto pt-4 border-t border-[var(--border-color,rgba(0,0,0,0.05))]">

                                            {/* Shopify Password Row */}
                                            {project.isShopify && project.storePassword ? (
                                                <div className="mb-4 p-2.5 sm:px-3 rounded-xl bg-[var(--primary-bg)] border border-[var(--card-border)] flex items-center justify-between gap-2">
                                                    <div className="text-xs text-[var(--secondary-text)] truncate">
                                                        <span className="font-semibold text-[var(--primary-text)]">Password:</span>{" "}
                                                        <code className="bg-[var(--section-bg)] px-1.5 py-0.5 rounded text-[var(--accent)] font-mono">
                                                            {project.storePassword}
                                                        </code>
                                                    </div>
                                                    <button
                                                        onClick={() => handleCopyPassword(project.id, project.storePassword)}
                                                        className="text-[11px] font-medium px-3 py-1 rounded-lg bg-[var(--accent)] text-white transition-opacity hover:opacity-90 active:scale-95 cursor-pointer flex-shrink-0"
                                                    >
                                                        {copiedId === project.id ? "Copied!" : "Copy"}
                                                    </button>
                                                </div>
                                            ) : (
                                                // Empty placeholder spacer to keep non-shopify card alignments uniform if needed
                                                <div className="hidden md:block mb-4 opacity-0 pointer-events-none select-none p-2.5 text-xs">
                                                    Spacer
                                                </div>
                                            )}

                                            {/* Action Links */}
                                            <div className="flex flex-wrap items-center gap-3">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex me-4 md:me-0  items-center gap-2 bg-[var(--accent)] text-white text-sm font-medium px-5 py-2 rounded-full btn-hover-slide transition-colors duration-300"
                                                    >
                                                        <span className="relative z-10">Live Demo</span>
                                                        <svg className="w-3.5 h-3.5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex mt-2 md:mt-0 items-center gap-2 border border-[var(--secondary-text)] text-[var(--primary-text)] font-medium px-5 py-2 rounded-full btn-whatsapp-hover text-sm"
                                                    >
                                                        <span className="relative z-10">Source Code</span>
                                                        <svg className="w-3.5 h-3.5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </ScrollAnimate>
                        ))}
                    </div>

                </div>

                {/* Customization Global CSS */}
                <style jsx global>{`
          .project-card {
            box-shadow: none !important;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease;
          }
          
          .project-card:hover {
            box-shadow: none !important;
            border-color: var(--accent) !important;
            transform: translateY(-4px);
          }
        `}</style>

            </div>
        </section>
    );
}