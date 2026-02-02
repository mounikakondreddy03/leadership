const LeadershipSection = () => {
  return (
    <section className="relative min-h-screen text-white overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b241c] to-[#0c3b2c]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 min-h-screen">
        
        <div className="flex flex-col justify-center px-12 lg:px-20">

          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-white" />
            <span className="uppercase text-sm tracking-wider text-white/70 font-semibold">
              Meet our founder
            </span>
          </div>

          <h2 className="font-serif text-[56px] md:text-[70px] leading-tight">
            Leslie Martinich
          </h2>
        </div>


        <div className="relative">
          <img
            src="/Leslie Martinich.png"
            alt="Leslie"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center px-10 lg:px-20 bg-gradient-to-br from-[#0d3a2c] to-[#0a2a22]">

          <div className="max-w-xl text-white/85 text-lg leading-relaxed space-y-6">
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


        <div className="flex items-center px-10 lg:px-20 bg-gradient-to-br from-[#0b241c] to-[#0f4b36]">

          <button className="font-serif text-3xl md:text-4xl hover:opacity-80 transition flex items-center gap-3">
            Meet Leslie
            <span className="text-4xl">↗</span>
          </button>

        </div>

      </div>
    </section>
  );
};

export default LeadershipSection;
