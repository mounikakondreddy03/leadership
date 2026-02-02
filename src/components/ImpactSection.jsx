const ImpactSection = () => {
  return (
    <section className="py-32 text-white bg-gradient-to-b from-[#052b46] to-[#0d5c3f]">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-6">
          Built on solid ground
        </p>

        <h2 className="font-serif text-[52px] md:text-[64px] mb-6">
          One Vision.<br />Four Pathways to Impact.
        </h2>

        <p className="text-white/60 max-w-3xl mx-auto mb-16">
          The Institute operates through an integrated ecosystem of specialized divisions.
        </p>


        <div className="grid md:grid-cols-4 gap-6">

          {["Consulting", "Institute", "R&D", "Programs"].map((title, i) => (
            <div key={i} className="bg-black/40 rounded-xl p-12 h-64 flex items-center justify-center font-serif text-xl">
              {title}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ImpactSection;
