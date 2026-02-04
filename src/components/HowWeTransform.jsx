const HowWeTransform = () => {
  return (
    <section className="relative overflow-hidden py-40 text-white">

      <div className="absolute inset-0 bg-[linear-gradient(225deg,#000_10%,#001b36_55%,#00264D_100%)]" />

      <div className="relative z-10 max-w-[1280px] mx-auto h-[1118px] top-40 left-50 gap-40 ">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <div className="space-y-8 text-center lg:text-left">
            <div className="flex items-center gap-3 text-white/70 text-xs tracking-[3px] uppercase">
              <span className="w-2 h-2 bg-white/70"/>
              Our Methodology
            </div>

            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl md:text-5xl lg:text-6xl leading-tight"
            >
              How We Transform <br /> Leadership
            </h2>
          </div>

          {/* Right */}
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Trusted leadership isn't built on theory alone. Our integrated
            approach combines rigorous research and practical training to create
            lasting organizational change.
          </p>
        </div>


        {/* ================= BARS ================= */}
        <div className="flex justify-between items-end h-[700px]">

          <Step
            height="h-[560px]"
            title="Research & Insights"
            bullets={[
              "Evidence-based leadership models",
              "Continuous innovation",
              "Data-driven understanding",
            ]}
          />

          <Step
            height="h-[360px]"
            title="Training & Development"
            bullets={[
              "Practical skill-building",
              "Certification programs",
              "Organizational transformation",
            ]}
          />

          <Step
            height="h-[200px]"
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

/* ================= STEP ================= */

const Step = ({ height, title, bullets }) => {
  return (
    <div className="flex items-start gap-8">

      {/* Bar */}
      <div
        className={`
          ${height}
          w-[160px]
          rounded-md
          bg-gradient-to-t
          from-black
          via-black/70
          to-transparent
          shadow-[0_0_60px_rgba(0,0,0,0.8)]
        `}
      />

      {/* Text */}
      <div className="max-w-[280px] space-y-3">
        <h3
          style={{ fontFamily: "Playfair Display, serif" }}
          className="text-xl"
        >
          {title}
        </h3>

        <ul className="text-white/70 text-sm space-y-1 list-disc pl-5">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default HowWeTransform;
