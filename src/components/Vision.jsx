const Vision = () => {
  return (

    <section className="relative flex justify-center text-white mt-24 lg:mt-32">


      <div className="absolute bottom-0 left-0 right-0 h-[900px] bg-[radial-gradient(circle_at_bottom,rgba(0,120,70,0.7),transparent_70%)] pointer-events-none" />

      {/* ================= WRAPPER ================= */}
      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-5 sm:px-8 lg:px-12 py-24 sm:py-28 lg:py-32 flex flex-col gap-16 sm:gap-20 lg:gap-24 items-center">

        <div className="flex items-center justify-center flex-col mx-auto text-center max-w-4xl">

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-3 h-3 bg-white/70" />
            <span className="uppercase text-sm tracking-wider text-white/80">
              Built on solid ground
            </span>
          </div>

          <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] leading-tight mb-6">
            One Vision.
            <br />
            Four Pathways to Impact.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
            The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each designed to address different aspects of leadership development and organizational transformation.
          </p>
        </div>


        {/* ================= GRID ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 lg:gap-10 items-stretch">

          {/* BIG CARD */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-black/40 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[380px] shadow-[0_0_40px_rgba(0,0,0,0.6)]">

            <div className="space-y-6">

              <div className="relative rounded-xl overflow-hidden">

                <div className="absolute top-4 left-4 flex items-center gap-2 bg-blue-900 px-4 py-2 rounded-md text-xs">
                  <span className="w-2.5 h-2.5 bg-white/70" />
                  OPEN TO ALL
                </div>

                <img
                  src="/Luca.png"
                  alt="Luca Preview"
                  className="w-full h-[220px] sm:h-[280px] md:h-[320px] object-cover"
                />
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl mb-2">
                  LUCA The Leader
                </h3>

                <p className="text-white/60 text-sm sm:text-base">
                  Where Leadership Awareness Begins
                </p>

                <p className="text-white/50 text-xs sm:text-sm mt-4">
                  Our flagship CSR initiative bringing trusted leadership awareness
                  to communities, organizations, and emerging leaders.
                </p>
              </div>
            </div>
          </div>


          {/* SMALL CARDS */}
          {[
            {
              top: "FOR ORGANIZATIONS",
              text: "MARTINICH CONSULTING",
              text2: "Strategic Leadership Partnerships",
            },
            {
              top: "FOR INDIVIDUALS & TEAMS",
              text: "MARTINICH INSTITUTE",
              text2: "Learning That Transforms",
            },
            {
              top: "FOR RESEARCH & INNOVATION",
              text: "MARTINICH R&D",
              text2: "Innovation Meets Insight",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-5 min-h-[300px] flex flex-col justify-between shadow-[0_0_40px_rgba(0,0,0,0.6)]"
            >
              <p className="text-xs uppercase tracking-wider text-white/80 bg-blue-900 px-3 py-2 rounded-md w-fit">
                {item.top}
              </p>

              <div className="flex items-center justify-center">
                <p
                  style={{ writingMode: "vertical-rl" }}
                  className="font-serif text-sm sm:text-base tracking-wider text-white/80 rotate-180"
                >
                  {item.text}
                  <br />
                  {item.text2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
