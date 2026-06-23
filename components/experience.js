import ScrollAnimate from "./scroll-animate";


export default function Experience() {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Devstren",
      duration: "Jan 2026 - Apr 2026",
      description: "Converted complex Figma designs into pixel-perfect, responsive code using HTML, CSS, JavaScript, Tailwind CSS, and Bootstrap. Handled full WordPress setups and built custom dynamic widgets in WPBakery, enabling clients to easily manage content without code. Customized Shopify themes and layouts using custom CSS, while optimizing stores for better SEO performance.",
    },
    {
      role: "Frontend Developer",
      company: "Aykays",
      duration: "Sep 2025 - Dec 2025",
      description: "Converted complex Figma designs into live and fully responsive websites using HTML, CSS, JavaScript, Tailwind CSS, Bootstrap, and WordPress Elementor. Handled all kinds of WordPress work, including creating Custom Post Types (CPTs) and setting up dynamic plugins based on the website needs.",
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
          <div className="lg:sticky lg:top-28">
            <ScrollAnimate direction="left" duration={0.6}>
              <p className="text-sm font-medium text-[var(--accent)] tracking-widest uppercase mb-3">
                My Journey
              </p>

              <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-[var(--primary-text)] leading-tight">
                Professional <span className="text-[var(--accent)]">Experience</span>
              </h2>
            </ScrollAnimate>
          </div>
          {/* Column 2 Right Side */}
          <div className="lg:col-span-2 relative border-l-2 border-[var(--secondary-text)]/10 pl-6 md:pl-10 space-y-8 ml-1 md:ml-3">

            {experiences.map((exp, index) => (
              <div key={index} className="relative group">


                {/* Timeline Dot*/}
                <div className="absolute -left-[31px] md:-left-[47px] top-[30px] w-3 h-3 rounded-full bg-[var(--primary-bg)] border-2 border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-300 z-10" />

                <ScrollAnimate
                  direction="up"
                  duration={0.6 + index * 0.15}
                >
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
                </ScrollAnimate>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}