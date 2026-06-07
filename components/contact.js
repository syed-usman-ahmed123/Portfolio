"use client";
import React, { useState } from "react";

export default function ContactSection() {
    const [copied, setCopied] = useState(false);
    const emailAddress = "usman.dev@example.com"; // ⚠️ Yahan apni Gmail dalein

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="py-24 bg-[var(--primary-bg)] transition-colors duration-300" id="contact">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

                {/* Section Header */}
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--accent)] mb-3">
                    What's Next?
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[var(--primary-text)] tracking-tight mb-6">
                    Let's Connect
                </h2>

                <p className="text-base text-[var(--secondary-text)] max-w-xl mx-auto mb-12 leading-relaxed">
                    Main actively **Junior Frontend Developer** opportunities dhoond raha hoon. Agar aap koi dev dhoond rahe hain, ya sirf mere code par baat karna chahte hain, toh neeche diye gaye tareeqon se direct rabta karein!
                </p>

                {/* Recruiter & Client Focused 5-Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 w-full mx-auto">

                    {/* 1. LinkedIn Card */}
                    <a
                        href="https://linkedin.com/in/yourusername" // ⚠️ Apna LinkedIn link lagaein
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 bg-[var(--section-bg)] border border-[var(--card-border,rgba(0,0,0,0.06))] dark:border-[var(--card-border,rgba(255,255,255,0.08))] rounded-2xl hover:border-[var(--accent)] transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-4 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-[var(--primary-text)] mb-1">LinkedIn</span>
                        <span className="text-xs text-[var(--secondary-text)]">Professional Profile</span>
                    </a>

                    {/* 2. WhatsApp Card */}
                    <a
                        href="https://wa.me/923001234567?text=Hi%20Usman,%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20an%20opportunity." // ⚠️ Apna no dalein (Country code ke sath bina zero ke)
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 bg-[var(--section-bg)] border border-[var(--card-border,rgba(0,0,0,0.06))] dark:border-[var(--card-border,rgba(255,255,255,0.08))] rounded-2xl hover:border-green-500 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 mb-4 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512" className="w-6 h-6">
                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-[var(--primary-text)] mb-1">WhatsApp</span>
                        <span className="text-xs text-[var(--secondary-text)]">Instant Chat</span>
                    </a>

                    {/* 3. GitHub Card */}
                    <a
                        href="https://github.com/yourusername" // ⚠️ Apna GitHub link lagaein
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-6 bg-[var(--section-bg)] border border-[var(--card-border,rgba(0,0,0,0.06))] dark:border-[var(--card-border,rgba(255,255,255,0.08))] rounded-2xl hover:border-purple-500 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.061.069-.061 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-[var(--primary-text)] mb-1">GitHub</span>
                        <span className="text-xs text-[var(--secondary-text)]">Review My Code</span>
                    </a>

                    {/* 4. Email Card with Copy Feature */}
                    <button
                        onClick={handleCopy}
                        className="flex flex-col items-center p-6 bg-[var(--section-bg)] border border-[var(--card-border,rgba(0,0,0,0.06))] dark:border-[var(--card-border,rgba(255,255,255,0.08))] rounded-2xl hover:border-amber-500 cursor-pointer transition-all duration-300 group relative w-full"
                    >
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5A2.25 2.25 0 0 1 2.25 17.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-[var(--primary-text)] mb-1">
                            {copied ? "Copied! 📋" : "Direct Email"}
                        </span>
                        <span className="text-xs text-[var(--secondary-text)]">
                            {copied ? "Ready to paste" : "Click to copy"}
                        </span>
                    </button>

                    {/* 5. Resume Download Card */}
                    <a
                        href="/my-resume.pdf" // ⚠️ Apni PDF file Next.js ke 'public' folder mein rakh kar naam 'my-resume.pdf' set kar dena
                        download
                        className="flex flex-col items-center p-6 bg-[var(--section-bg)] border border-[var(--card-border,rgba(0,0,0,0.06))] dark:border-[var(--card-border,rgba(255,255,255,0.08))] rounded-2xl hover:border-red-500 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500 mb-4 group-hover:scale-110 transition-transform">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </div>
                        <span className="text-sm font-semibold text-[var(--primary-text)] mb-1">Download CV</span>
                        <span className="text-xs text-[var(--secondary-text)]">PDF (1 Page)</span>
                    </a>

                </div>

            </div>
        </section>
    );
}