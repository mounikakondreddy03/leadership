const HowWeTransform = () => {
  return (
    <section className="relative text-white">
      
      {/* ================= WRAPPER ================= */}
      <div
        className="
          relative z-10
          max-w-[2000px]
          mx-auto
          py-32 lg:py-44
          px-6 sm:px-10 lg:px-20

           pt-36 lg:pt-44
           pb-56 lg:pb-72 xl:pb-80

          flex flex-col
          items-center justify-center gap-50
        "
      >

        {/* ================================================= */}
        {/* ================= HEADER ========================= */}
        {/* ================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-center justify-center">

          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70 text-xs tracking-[3px] uppercase">
              <span className="w-2 h-2 bg-white/70" />
              Our Methodology
            </div>

            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
            >
              How We Transform <br /> Leadership
            </h2>
          </div>

          <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed text-center lg:text-left">
            Trusted leadership isn't built on theory alone. Our integrated
            approach combines rigorous research and practical training to create
            lasting organizational change.
          </p>
        </div>


        {/* ================================================= */}
        {/* ================= STEPS ========================== */}
        {/* ================================================= */}

        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-20 lg:gap-28 items-end justify-items-center pt-16">
          <StepDesktop
            height="h-[560px]"
            title="Research & Insights"
            bullets={[
              "Evidence-based leadership models",
              "Continuous innovation",
              "Data-driven understanding",
            ]}
          />

          <StepDesktop
            height="h-[380px]"
            title="Training & Development"
            bullets={[
              "Practical skill-building",
              "Certification programs",
              "Organizational transformation",
            ]}
          />

          <StepDesktop
            height="h-[240px]"
            title="Consulting & Implementation"
            bullets={[
              "Strategic partnership",
              "Custom solutions",
              "Measurable impact",
            ]}
          />
        </div>

      </div>
    </section>
  );
};


/* ================================================= */
/* ================= DESKTOP STEP ================== */
/* ================================================= */

const StepDesktop = ({ height, title, bullets }) => (
  <div className="flex items-start gap-10">

    {/* BAR */}
    <div className={`${height} w-[160px] rounded-md bg-gradient-to-t from-black via-black/70 to-transparent shadow-[0_0_60px_rgba(0,0,0,0.8)]`}/>

    {/* TEXT */}
    <div className="max-w-[260px] space-y-3">
      <h3
        style={{ fontFamily: "Playfair Display, serif" }}
        className="text-xl"
      >
        {title}
      </h3>

      <ul className="text-white/70 text-sm space-y-1 list-disc pl-5">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  </div>
);

export default HowWeTransform;