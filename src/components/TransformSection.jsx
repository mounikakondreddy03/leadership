const TransformLeadershipSection = () => {
  return (
    <section className="py-32 text-white bg-gradient-to-b from-black via-[#071b16] to-[#052b46]">

      <div className="max-w-6xl mx-auto px-6">

        {/* header */}
        <div className="grid md:grid-cols-2 gap-12 mb-24">

          <div>
            <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-4">
              Our Methodology
            </p>

            <h2 className="font-serif text-[50px] md:text-[64px]">
              How We Transform Leadership
            </h2>
          </div>

          <p className="text-white/60">
            Trusted leadership isn't built on theory alone. Our integrated approach
            combines rigorous research, practical training, and consulting.
          </p>
        </div>


        {/* bars */}
        <div className="grid md:grid-cols-3 gap-16 items-end">

          {[
            {
              title: "Research & Insights",
              items: ["Evidence-based models", "Continuous innovation", "Data-driven understanding"],
              height: "h-64"
            },
            {
              title: "Training & Development",
              items: ["Skill building", "Certification programs", "Organizational transformation"],
              height: "h-48"
            },
            {
              title: "Consulting & Implementation",
              items: ["Strategic partnerships", "Custom solutions", "Measurable impact"],
              height: "h-36"
            }
          ].map((card, i) => (
            <div key={i} className="relative">

              <div className={`${card.height} bg-white/5 rounded-lg mb-6`} />

              <h3 className="font-serif text-xl mb-3">
                {card.title}
              </h3>

              <ul className="text-white/60 text-sm space-y-1">
                {card.items.map((it, idx) => (
                  <li key={idx}>• {it}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TransformLeadershipSection;
