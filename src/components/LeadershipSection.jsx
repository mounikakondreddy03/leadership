const LeadershipSection = () => {
  return (
    <section className="leadership-section relative min-h-screen text-white overflow-hidden pl-6 lg:pl-24">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#07261a] to-[#0c4f36]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 min-h-screen">
        
        <div className="flex flex-col justify-center items-center text-center px-12 lg:px-20 cell-divider-right cell-divider-bottom">

          <div className="flex items-center gap-3 mb-6">
            <span className="leadership-small-dot" />
            <span className="uppercase text-sm tracking-wider text-white/70 font-semibold">
              Meet our founder
            </span>
          </div>

          <h2 style={{fontFamily: "'Playfair Display', serif"}} className="text-[48px] md:text-[72px] leading-tight">
            Leslie Martinich
          </h2>
        </div>

          <img
            src="\Leslie Martinich.png"
            alt="Leslie"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />


        <div className="flex items-center justify-center text-center px-10 lg:px-20 bg-gradient-to-br from-[#0d3a2c] to-[#0a2a22] cell-divider-right">

          <div className="max-w-xxl text-white/85 text-lg leading-relaxed space-y-6">
            <p>
              Leslie Martinich is a leadership expert with 20+ years of experience
              who founded the Institute of Trusted Leadership to address the global
              crisis of trust in organizations.
            </p>

            <p>
              Through evidence-based, practical approaches, her work develops leaders,
              transforms cultures, and scales trusted leadership worldwide.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center text-center px-10 lg:px-20 bg-gradient-to-br from-[#0b241c] to-[#0f5a39]">

          <button style={{fontFamily: "'Playfair Display', serif"}} className="text-2xl md:text-3xl hover:opacity-80 transition">
            Meet Leslie ↗
          </button>

        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
