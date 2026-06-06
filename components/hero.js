import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[var(--primary-bg)]">
      {/* Background Glowing Blobs (Pure Dynamic Colors) */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--accent)] opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[var(--secondary-text)] opacity-10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Side */}
          <div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-[var(--primary-text)] mb-6">
              Hi, I'm <span className="text-[var(--accent)]">Syed Usman Ahmed</span>
            </h1>
            
            <p className="text-lg md:text-xl text-[var(--secondary-text)] font-light leading-relaxed max-w-md mb-10">
              Freelance{' '}
              <strong className="font-medium text-[var(--primary-text)]">
                UI/UX Designer &amp; Frontend Developer
              </strong>
              . I design and build digital products that people love to use — fast, clean, and accessible.
            </p>
            
            {/* Action Buttons (Using Pure Variables & No Hardcoded Black/White) */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="#projects" 
                className="inline-flex items-center gap-2 bg-[var(--accent)] text-white font-medium px-7 py-3.5 rounded-full btn-hover-slide transition-opacity text-sm"
              >
                View my work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              
              <Link 
                href="#contact" 
                className="inline-flex items-center gap-2 border border-[var(--secondary-text)] text-[var(--primary-text)] font-medium px-7 py-3.5 rounded-full hover:bg-[var(--primary-text)] hover:text-[var(--primary-bg)] transition-colors text-sm"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Right Image Side (Bilkul Clean - Kisi Kism Ka Koi Extra Border Ya Shadow Nahi) */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="w-full h-full rounded-3xl overflow-hidden relative">
                {/* Jab Image lagani ho toh bas comment hata dena */}
                {/* <Image
                  src="/your-image-path.jpg"
                  alt="Syed Usman Ahmed"
                  fill
                  priority
                  className="object-cover"
                /> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}