const LeadershipSection = () => {
  return (
    <section className="relative text-white overflow-hidden mb-20 lg:mb-32">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#07261a] to-[#0c4f36]" />

      <div className="relative z-10 mx-auto w-full">
        {/* Adjusted Grid: grid-cols-1 for mobile/tablet to avoid 4-quadrant cramping, lg:grid-cols-2 for desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* ================= TITLE ========================= */}
          {/* Added extra top padding (pt-24) for tablets to prevent header overlap */}
          <div className="flex flex-col justify-center items-center text-center px-6 sm:px-10 py-10 h-[250px] md:px-14 md:h-[400px] lg:px-20 pt-24 pb-16 lg:h-full md:py-32 lg:py-28 border-b lg:border-r border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-white" />
              <span className="uppercase text-xs sm:text-sm tracking-wider text-white/70 font-semibold">
                Meet our founder
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] xl:text-[72px] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Leslie Martinich
            </h2>
          </div>
          

          {/* ================= IMAGE ========================= */}
          {/* Increased height on mobile/tablet (min-h-[400px]) for better spacing */}
          <div className="relative w-full md:h-[400px] lg:h-full border-b border-white/10 lg:border-b-0">
            <img
              src="/Leslie Martinich.png"
              alt="Leslie"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* ================= TEXT ========================== */}
          {/* Increased padding (py-20) to ensure content doesn't feel cramped */}
          <div className="flex items-center justify-center text-center lg:text-center px-12 sm:px-10 py-10 h-[250px] md:px-25 md:h-[400px] lg:px-15 h-full md:py-32 bg-gradient-to-br from-[#0d3a2c] to-[#0a2a22] border-b lg:border-b-0 lg:border-r border-white/10">
            
            <div className="w-full max-w-2xl text-white/85 text-sm md:text-lg lg:text-xl leading-relaxed md:leading-loose space-y-6">
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


          {/* ================= BUTTON ======================== */}
          <div className="flex items-center justify-center px-15 sm:px-10 py-24 h-[200px] md:px-25 h-[300px] lg:px-20 py-20 lg:h-full bg-gradient-to-br from-[#0b241c] to-[#0f5a39]">
            <button
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:opacity-80 transition">
              Meet Leslie ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default LeadershipSection;




// const LeadershipSection = () => {
//   return (
//     <section className="relative text-white overflow-hidden">

//       {/* ================= BACKGROUND ================= */}
//       <div className="absolute inset-0 bg-gradient-to-br from-black via-[#07261a] to-[#0c4f36]" />


//       {/* ================================================= */}
//       {/* ================= WRAPPER ======================= */}
//       {/* ================================================= */}
//       <div className="relative z-10 mx-auto w-full">

//         {/* ================================================= */}
//         {/* ================= GRID ========================== */}
//         {/* ================================================= */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2">

//           {/* ================================================= */}
//           {/* ================= TITLE ========================= */}
//           {/* ================================================= */}
//           <div className="flex flex-col justify-center items-center text-center px-6 sm:px-10 md:px-14 lg:px-20 py-16 sm:py-20 md:py-24 lg:py-28 border-b lg:border-b lg:border-r border-white/10">
//             <div className="flex items-center gap-2 mb-6">
//               <span className="w-2 h-2 bg-white" />
//               <span className="uppercase text-xs sm:text-sm tracking-wider text-white/70 font-semibold">
//                 Meet our founder
//               </span>
//             </div>

//             <h2
//               className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] xl:text-[72px]leading-tight"
//               style={{ fontFamily: "'Playfair Display', serif" }}
//             >
//               Leslie Martinich
//             </h2>
//           </div>
          

//           {/* ================================================= */}
//           {/* ================= IMAGE ========================= */}
//           {/* ================================================= */}
//           <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-full border-b lg:border-b-0 border-white/10">
//             <img
//               src="/Leslie Martinich.png"
//               alt="Leslie"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//           </div>


//           {/* ================================================= */}
//           {/* ================= TEXT ========================== */}
//           {/* ================================================= */}
//           <div className="flex items-center justify-center text-center lg:text-left px-6 sm:px-10 md:px-14 lg:px-20 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0d3a2c] to-[#0a2a22] border-b lg:border-b-0 lg:border-r border-white/10">
            
//             <div className="w-full max-w-2xl text-white/85 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed md:leading-loose space-y-6">
//               <p>
//                 Leslie Martinich is a leadership expert with 20+ years of experience
//                 who founded the Institute of Trusted Leadership to address the global
//                 crisis of trust in organizations.
//               </p>

//               <p>
//                 Through evidence-based, practical approaches, her work develops leaders,
//                 transforms cultures, and scales trusted leadership worldwide.
//               </p>
//             </div>
//           </div>


//           {/* ================================================= */}
//           {/* ================= BUTTON ======================== */}
//           {/* ================================================= */}
//           <div className="flex items-center justify-center px-6 sm:px-10 md:px-14 lg:px-20 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#0b241c] to-[#0f5a39]">
//             <button
//               style={{ fontFamily: "'Playfair Display', serif" }}
//               className="text-lg sm:text-xl md:text-2xl lg:text-3xl hover:opacity-80 transition">
//               Meet Leslie ↗
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default LeadershipSection;
