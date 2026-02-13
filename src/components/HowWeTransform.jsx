const HowWeTransform = () => {
  return (
    /* Increased pt-40 to pt-64 for mobile and pt-80 for laptop. 
       Added border-t to create a subtle visual separator.
    */
    <section className="relative text-white bg-[#05111a] pt-64 md:pt-80 lg:pt-96 pb-40">
      
      {/* ================= WRAPPER ================= */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col gap-32">

        {/* ================= HEADER ========================= */}
        {/* Added extra mb-12 to push the bars even further down */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-12">

          <div className="space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 text-white/50 text-xs tracking-[4px] uppercase font-medium">
              <span className="w-2 h-2 bg-white/40" />
              Our Methodology
            </div>

            <h2
              style={{ fontFamily: "Playfair Display, serif" }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1]"
            >
              How We Transform <br className="hidden lg:block" /> Leadership
            </h2>
          </div>

          <div className="flex flex-col gap-6 items-center lg:items-start">
             <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed text-center lg:text-left max-w-xl">
              Trusted leadership isn't built on theory alone. Our integrated
              approach combines rigorous research and practical training to create
              lasting organizational change.
            </p>
          </div>
        </div>

        {/* ================= STEPS ========================== */}
        {/* Same grid logic as before but with consistent gap control */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 lg:gap-12 items-end">
          <StepItem
            barHeight="h-[350px] lg:h-[560px]"
            title="Research & Insights"
            bullets={[
              "Evidence-based leadership models",
              "Continuous innovation",
              "Data-driven understanding",
            ]}
          />
          <StepItem
            barHeight="h-[250px] lg:h-[380px]"
            title="Training & Development"
            bullets={[
              "Practical skill-building",
              "Certification programs",
              "Organizational transformation",
            ]}
          />
          <StepItem
            barHeight="h-[150px] lg:h-[240px]"
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

const StepItem = ({ barHeight, title, bullets }) => (
  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 w-full">
    <div className={`${barHeight} w-[100px] lg:w-[140px] rounded-sm bg-gradient-to-t from-[#0c2a3d] to-transparent border-t border-white/10`} />
    <div className="max-w-[280px] space-y-4 text-center lg:text-left">
      <h3 style={{ fontFamily: "Playfair Display, serif" }} className="text-2xl font-medium">{title}</h3>
      <ul className="text-white/40 text-sm space-y-3 list-none lg:list-disc lg:pl-5">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default HowWeTransform;






// const HowWeTransform = () => {
//   return (
//     // Added mt-20 to separate from WhyWeExist section and adjusted padding
//     <section className="relative text-white bg-[#05111a] mt-20 lg:mt-32">
      
//       {/* ================= WRAPPER ================= */}
//       <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 py-24 lg:py-44 flex flex-col gap-20 lg:gap-32">

//         {/* ================= HEADER ========================= */}
//         {/* Adjusted grid to stack on mobile/tablet and side-by-side on laptop */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center justify-center">

//           <div className="space-y-6 text-center lg:text-left">
//             <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70 text-xs tracking-[3px] uppercase">
//               <span className="w-2 h-2 bg-white/70" />
//               Our Methodology
//             </div>

//             <h2
//               style={{ fontFamily: "Playfair Display, serif" }}
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
//             >
//               How We Transform <br className="hidden lg:block" /> Leadership
//             </h2>
//           </div>

//           <p className="text-white/60 text-base sm:text-lg lg:text-xl max-w-xl leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
//             Trusted leadership isn't built on theory alone. Our integrated
//             approach combines rigorous research and practical training to create
//             lasting organizational change.
//           </p>
//         </div>


//         {/* ================= STEPS ========================== */}
//         {/* Grid remains 1 col on mobile and 3 cols on large screens */}
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-10 items-end justify-items-center">
//           <StepItem
//             barHeight="h-[300px] sm:h-[400px] lg:h-[560px]"
//             title="Research & Insights"
//             bullets={[
//               "Evidence-based leadership models",
//               "Continuous innovation",
//               "Data-driven understanding",
//             ]}
//           />

//           <StepItem
//             barHeight="h-[200px] sm:h-[300px] lg:h-[380px]"
//             title="Training & Development"
//             bullets={[
//               "Practical skill-building",
//               "Certification programs",
//               "Organizational transformation",
//             ]}
//           />

//           <StepItem
//             barHeight="h-[120px] sm:h-[200px] lg:h-[240px]"
//             title="Consulting & Implementation"
//             bullets={[
//               "Strategic partnership",
//               "Custom solutions",
//               "Measurable impact",
//             ]}
//           />
//         </div>

//       </div>
//     </section>
//   );
// };


// /* ================================================= */
// /* ================= RESPONSIVE STEP ================ */
// /* ================================================= */

// const StepItem = ({ barHeight, title, bullets }) => (
//   // Fixed: On Mobile/Tablet, stack vertically. On Laptop, side-by-side.
//   <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8 w-full">

//     {/* BAR - Now responsive with min-width on laptop */}
//     <div className={`${barHeight} w-[80px] sm:w-[120px] lg:w-[140px] rounded-md bg-gradient-to-t from-[#0c2a3d] via-black/40 to-transparent border-t border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]`} />

//     {/* TEXT - Centered on mobile, left-aligned on laptop */}
//     <div className="max-w-[280px] space-y-4 text-center lg:text-left">
//       <h3
//         style={{ fontFamily: "Playfair Display, serif" }}
//         className="text-xl sm:text-2xl font-semibold"
//       >
//         {title}
//       </h3>

//       <ul className="text-white/50 text-sm sm:text-base space-y-2 list-none lg:list-disc lg:pl-5">
//         {bullets.map((b, i) => (
//           <li key={i} className="opacity-80">
//             {b}
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// );

// export default HowWeTransform;





// // const HowWeTransform = () => {
// //   return (
// //     <section className="relative text-white">
      
// //       {/* ================= WRAPPER ================= */}
// //       <div className="relative z-10 max-w-[2000px] mx-auto py-32 lg:py-44 px-6 sm:px-10 lg:px-20 pt-36 lg:pt-44 pb-56 lg:pb-72 xl:pb-80 flex flex-col items-center justify-center gap-50">

// //         {/* ================================================= */}
// //         {/* ================= HEADER ========================= */}
// //         {/* ================================================= */}
// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-center justify-center">

// //           <div className="space-y-6 text-center lg:text-left">
// //             <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70 text-xs tracking-[3px] uppercase">
// //               <span className="w-2 h-2 bg-white/70" />
// //               Our Methodology
// //             </div>

// //             <h2
// //               style={{ fontFamily: "Playfair Display, serif" }}
// //               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight"
// //             >
// //               How We Transform <br /> Leadership
// //             </h2>
// //           </div>

// //           <p className="text-white/70 text-base sm:text-lg max-w-xl leading-relaxed text-center lg:text-left">
// //             Trusted leadership isn't built on theory alone. Our integrated
// //             approach combines rigorous research and practical training to create
// //             lasting organizational change.
// //           </p>
// //         </div>


// //         {/* ================================================= */}
// //         {/* ================= STEPS ========================== */}
// //         {/* ================================================= */}

// //         <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-20 lg:gap-28 items-end justify-items-center pt-16">
// //           <StepDesktop
// //             height="h-[560px]"
// //             title="Research & Insights"
// //             bullets={[
// //               "Evidence-based leadership models",
// //               "Continuous innovation",
// //               "Data-driven understanding",
// //             ]}
// //           />

// //           <StepDesktop
// //             height="h-[380px]"
// //             title="Training & Development"
// //             bullets={[
// //               "Practical skill-building",
// //               "Certification programs",
// //               "Organizational transformation",
// //             ]}
// //           />

// //           <StepDesktop
// //             height="h-[240px]"
// //             title="Consulting & Implementation"
// //             bullets={[
// //               "Strategic partnership",
// //               "Custom solutions",
// //               "Measurable impact",
// //             ]}
// //           />
// //         </div>

// //       </div>
// //     </section>
// //   );
// // };


// // /* ================================================= */
// // /* ================= DESKTOP STEP ================== */
// // /* ================================================= */

// // const StepDesktop = ({ height, title, bullets }) => (
// //   <div className="flex items-start gap-10">

// //     {/* BAR */}
// //     <div className={`${height} w-[160px] rounded-md bg-gradient-to-t from-black via-black/70 to-transparent shadow-[0_0_60px_rgba(0,0,0,0.8)]`}/>

// //     {/* TEXT */}
// //     <div className="max-w-[260px] space-y-3">
// //       <h3
// //         style={{ fontFamily: "Playfair Display, serif" }}
// //         className="text-xl"
// //       >
// //         {title}
// //       </h3>

// //       <ul className="text-white/70 text-sm space-y-1 list-disc pl-5">
// //         {bullets.map((b, i) => <li key={i}>{b}</li>)}
// //       </ul>
// //     </div>
// //   </div>
// // );

// // export default HowWeTransform;