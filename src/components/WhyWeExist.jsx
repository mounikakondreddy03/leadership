const WhyWeExist = () => {
  return (
    // <section className="relative text-white overflow-hidden py-32 lg:py-40">

    <section className="relative text-white bg-gradient-to-b from-[#0d3b2e] via-[#051a14] to-[#04151a] pt-32 lg:pt-44 pb-40 lg:pb-56 min-h-screen">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.35),transparent_45%),linear-gradient(180deg,#0d3b2e,#051a14,#04151a)]" />


      {/* ================= WRAPPER ================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col gap-20 items-center">

        <div className="flex items-center justify-center gap-6 text-white/90 tracking-[0.3em] text-sm sm:text-base md:text-lg w-full"> 
        <span className="font-serif">01</span> 
        
        <div className="flex-1 max-w-[140px] sm:max-w-[220px] flex flex-col gap-1"> 
          <div className="h-px bg-white/20" /> 
          <div className="h-px bg-white/10" /> 
          
          </div> <span className="font-serif">02</span> 
          
          <div className="flex-1 max-w-[140px] sm:max-w-[220px] flex flex-col gap-1"> 
            <div className="h-px bg-white/20" /> 
            <div className="h-px bg-white/10" /> 
          </div> 
          
          <span className="font-serif">03</span> 
        </div>


        {/* ================================================= */}
        {/* ================= TITLE BLOCK ==================== */}
        {/* ================================================= */}
        <div className="text-center max-w-4xl">

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-2 h-2 bg-white/70" />
            <span className="uppercase text-sm tracking-wider text-white/80">
              THE SOLUTION
            </span>
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="italic text-4xl sm:text-5xl md:text-6xl lg:text-[72px]"
          >
            This is <span className="not-italic font-semibold text-white">Why We Exist</span>
          </h2>

          <p className="text-white/60 mt-8 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            Trust transforms everything — engagement, innovation, performance & culture.
            The Institute of Trusted Leadership scales this impact through research-backed methods,
            turning trusted leadership into the global standard.
          </p>
        </div>



        {/* ================================================= */}
        {/* ================= TIMELINE ======================= */}
        {/* ================================================= */}
          <div className="relative w-full mt-16 flex justify-center">

          {/* ===== Desktop baseline ===== */}
          {/* <div className="hidden lg:block absolute left-0 right-0 top-[300px] border-b border-dotted border-white/40" /> */}

          <div className="
    hidden lg:block
    absolute
    left-1/2 -translate-x-1/2
    top-[300px]
    w-[85%]
    border-b border-dotted border-white/40
  " />

          {/* ===== GRID ===== */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24"> */}

          <div
    className="
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3

      gap-10 md:gap-16 lg:gap-24

      w-full
      max-w-[1200px]
      mx-auto
      justify-items-center
    "
  >

            <TimelineItem
              number="1"
              title="ITL APPROACH"
              text="Evidence-based methodology combining research, training, and consulting to build trusted leaders."
            />

            <TimelineItem
              number="2"
              title="OUR ECOSYSTEM"
              text="Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation."
            />

            <TimelineItem
              number="3"
              title="GLOBAL IMPACT"
              text="UN SDG-aligned programs ensuring every initiative creates measurable social value."
            />
          </div>
        </div>
        </div>
    </section>
  );
};


/* ================================================= */
/* ================= TIMELINE ITEM ================= */
/* ================================================= */

const TimelineItem = ({ number, title, text }) => {
  return (
    <div
      className="
        relative
        flex flex-col

        items-center lg:items-start
        text-center lg:text-left

        gap-6
        pb-24 md:pb-32 lg:pb-40
        max-w-sm
      "
    >

      {/* CONTENT */}
      <div className="flex items-center gap-6">

        {/* BIG NUMBER */}
        <span
          className="
            text-[70px]
            sm:text-[90px]
            md:text-[110px]
            lg:text-[140px]
            text-white/25
            font-semibold
            leading-none
          "
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {number}
        </span>

        {/* TEXT */}
        <div>
          <h3 className="uppercase tracking-wider text-base md:text-lg mb-3 font-semibold">
            {title}
          </h3>

          <p className="text-white/45 text-sm md:text-base leading-relaxed">
            {text}
          </p>
        </div>

      </div>

      {/* ===== Vertical connector (desktop only) ===== */}
      <div
        className="
          hidden lg:block
          absolute
          left-1/2 -translate-x-1/2
          top-[190px]
          w-[3px]
          h-24
          bg-white/40
        "
      />
    </div>
  );
};


export default WhyWeExist;
