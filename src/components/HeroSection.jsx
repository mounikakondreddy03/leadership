const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex overflow-hidden text-white justify-center items-center">

      {/* ================= BACKGROUND ================= */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#07261a] to-[#0c4f36]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(16,185,129,0.15),transparent_55%)]" />


      {/* ================= CONTENT WRAPPER (1080px) ================= */}
      <div className="relative z-10 w-full max-w-[1080px] mx-auto px-6 flex flex-col">

        {/* ================================================= */}
        {/* =============== TOP CONTENT (365px) ============== */}
        {/* ================================================= */}

        <div className="flex flex-col gap-[125px] min-h-[100px] justify-center">

          {/* ---------- LEFT (78px) ---------- */}
          <div className="flex flex-col items-center lg:items-start gap-2 min-h-[78px] text-center lg:text-left">

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white/80" />
              <span className="uppercase tracking-wider text-white/70 text-xs sm:text-sm font-semibold">
                Built on Solid Ground
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight">
                Building Leaders –
              </h1>

              <h1 className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight">
                <span className="italic text-white/60">the </span>
                <span>World Can Trust.</span>
              </h1>
            </div>
          </div>


          {/* ---------- RIGHT (162px) ---------- */}
          <div className="flex justify-center lg:justify-end min-h-[162px] text-center lg:text-left">

            <p className="max-w-[520px] text-white/85 text-base sm:text-lg leading-relaxed md:leading-loose">
              Where purpose meets people. Where organizations transform through
              trusted leadership, continuous learning, & human responsibility.
            </p>

          </div>
        </div>

        {/* ================= SCROLL ICON ONLY ================= */}
       <div className="flex justify-center">

           <div className="animate-bounce">
             <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-2">
               <div className="w-[2px] h-3 bg-white/50 rounded-full" />
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

export default HeroSection;
