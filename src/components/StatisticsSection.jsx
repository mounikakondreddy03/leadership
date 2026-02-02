// const StatisticsSection = () => {
//   return (
//     <section className="relative py-32 text-white overflow-hidden">

//       <div className="absolute inset-0 bg-gradient-to-br from-[#0d5c3f] via-[#062b22] to-black" />

//       <div className="relative z-10 max-w-6xl mx-auto px-6">

//         <div className="flex justify-center items-center gap-12 mb-20 text-white/70 tracking-[0.4em] text-sm">

//           <span>01</span>
//           <div className="w-32 border-t border-dashed border-white/30" />

//           <span>02</span>
//           <div className="w-32 border-t border-dashed border-white/30" />

//           <span>03</span>
//         </div>

//         <div className="text-center mb-24 max-w-3xl mx-auto">

//           <div className="flex items-center justify-center gap-3 mb-6 top-5">
//             <span className="w-2 h-2 bg-white" />
//             <span className="uppercase text-xs tracking-[0.25em] text-white/70">
//               The Solution
//             </span>
//           </div>

//           <h2 className="font-serif text-[48px] md:text-[64px] leading-tight mb-6">
//             <span className="italic text-white/40">This is </span>
//             Why We Exist
//           </h2>

//           <p className="text-white/60 leading-relaxed">
//             Trust transforms everything engagement, innovation, performance, &
//             culture. The Institute of Trusted Leadership scales this impact through
//             research-backed methods, turning trusted leadership into the global
//             standard.
//           </p>
//         </div>


//         <div className="grid md:grid-cols-3 gap-16 relative">

//           <div className="hidden md:block absolute left-1/6 top-0 bottom-0 w-[1px] bg-white/10" />
//           <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10" />
//           <div className="hidden md:block absolute left-5/6 top-0 bottom-0 w-[1px] bg-white/10" />

//           <div className="relative">

//             <span className="text-[110px] font-serif text-white/10 absolute -top-10 left-0">
//               1
//             </span>

//             <h3 className="font-serif text-2xl mb-3 mt-16">
//               ITL Approach
//             </h3>

//             <p className="text-white/60 leading-relaxed">
//               Evidence-based methodology combining research, training, and
//               consulting to build trusted leaders.
//             </p>
//           </div>

//           <div className="relative">

//             <span className="text-[110px] font-serif text-white/10 absolute -top-10 left-0">
//               2
//             </span>

//             <h3 className="font-serif text-2xl mb-3 mt-16">
//               Our Ecosystem
//             </h3>

//             <p className="text-white/60 leading-relaxed">
//               Four integrated divisions delivering comprehensive leadership
//               solutions from awareness to transformation.
//             </p>
//           </div>

//           <div className="relative">

//             <span className="text-[110px] font-serif text-white/10 absolute -top-10 left-0">
//               3
//             </span>

//             <h3 className="font-serif text-2xl mb-3 mt-16">
//               Global Impact
//             </h3>

//             <p className="text-white/60 leading-relaxed">
//               UN SDG-aligned programs ensuring every initiative creates measurable
//               social value.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default StatisticsSection;


const StatisticsSection = () => {
  return (
    <section className="relative py-32 text-white bg-gradient-to-b from-[#0d5c3f] via-[#062b22] to-black">

      <div className="max-w-6xl mx-auto px-6">

        {/* progress */}
        <div className="flex justify-center items-center gap-10 mb-20 text-white/60 text-sm tracking-[0.3em]">
          <span>01</span>
          <div className="w-28 border-t border-dashed border-white/30" />
          <span>02</span>
          <div className="w-28 border-t border-white/30 border-dashed" />
          <span>03</span>
        </div>

        {/* heading */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <p className="uppercase text-xs tracking-[0.25em] text-white/70 mb-4">
            The Solution
          </p>

          <h2 className="font-serif text-[52px] md:text-[64px] mb-6">
            <span className="italic text-white/40">This is </span>
            Why We Exist
          </h2>

          <p className="text-white/60">
            Trust transforms everything engagement, innovation, performance, & culture.
            The Institute scales this impact through research-backed methods.
          </p>
        </div>

        {/* steps */}
        <div className="grid md:grid-cols-3 gap-16">

          {[
            {
              title: "ITL Approach",
              text: "Evidence-based methodology combining research, training, and consulting to build trusted leaders."
            },
            {
              title: "Our Ecosystem",
              text: "Four integrated divisions delivering comprehensive leadership solutions."
            },
            {
              title: "Global Impact",
              text: "UN SDG-aligned programs ensuring measurable social value."
            }
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="text-[110px] font-serif text-white/10 absolute -top-10">
                {i + 1}
              </span>

              <h3 className="font-serif text-2xl mt-16 mb-3">
                {item.title}
              </h3>

              <p className="text-white/60">{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatisticsSection;
