const WhyWeExist = () => {
  return (
    <section className="relative text-white bg-gradient-to-b from-[#0d3b2e] via-[#051a14] to-[#04151a] mt-32 pt-40 lg:pt-56 pb-64 lg:pb-96 min-h-screen overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,197,94,0.2),transparent_50%)] blur-3xl" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col justify-center items-center gap-20">
        
        {/* Top Progress bar */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 text-white/90 tracking-[0.2em] text-xs sm:text-sm mb-32">
          <span className="font-serif">01</span>
          <div className="w-12 sm:w-24 border-t border-dotted border-white/30" />
          <span className="font-serif">02</span>
          <div className="w-12 sm:w-24 border-t border-dotted border-white/30" />
          <span className="font-serif">03</span>
        </div>

        {/* Title Block */}
        <div className="text-center max-w-4xl mb-32 lg:mb-48">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 bg-white/70" />
            <span className="uppercase text-[10px] tracking-[0.3em] text-white/60">THE SOLUTION</span>
          </div>
          <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-4xl sm:text-5xl lg:text-7xl mb-8">
            <span className="italic font-light">This is</span> <span className="font-semibold">Why We Exist</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-4">
            Trust transforms everything engagement, innovation, performance, & culture. The Institute of Trusted Leadership scales this impact through research-backed methods, turning trusted leadership into the global standard.
          </p>
        </div>

        {/* Timeline Grid Container */}
        <div className="relative w-full max-w-[1200px]">
          {/* TABLET/MOBILE VERTICAL LINE */}
          <div className="lg:hidden absolute left-[45px] sm:left-[80px] top-0 bottom-0 w-px border-l border-dotted border-white/30" />
          
          {/* LAPTOP HORIZONTAL BASELINE */}
          <div className="hidden lg:block absolute bottom-[-200px] left-0 right-0 border-b border-dotted border-white/80 h-px w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 lg:gap-8 relative">
            <TimelineItem 
              number="1" 
              title="ITL APPROACH" 
              text="Evidence-based methodology combining research, training, and consulting to build trusted leaders." 
              align="start"
            />
            <TimelineItem 
              number="2" 
              title="OUR ECOSYSTEM" 
              text="Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation." 
              align="center"
              offsetY="lg:-translate-y-16"
            />
            <TimelineItem 
              number="3" 
              title="GLOBAL IMPACT" 
              text="UN SDG-aligned programs ensuring every initiative creates measurable social value." 
              align="end"
              offsetY="lg:translate-y-16"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ number, title, text, align, offsetY = "" }) => {
  const alignmentClass = {
    start: "lg:items-start lg:text-left lg:mt-16",
    center: "lg:items-center lg:text-center",
    end: "lg:items-start lg:text-left lg:mt-32"
  };

  return (
    /* Changed gap-0 to gap-12 for mobile/tablet view to create space between number and text */
    <div className={`relative flex flex-col lg:flex-col items-center lg:gap-10 gap-8 ${alignmentClass[align]} ${offsetY} px-2 sm:px-10 lg:px-4`}>

      {/* VERTICAL DOT FOR TABLET */}
      <div className="lg:hidden absolute left-[41px] sm:left-[76px] top-[45px] w-2.5 h-2.5 bg-white rounded-full z-30 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />

      {/* BIG NUMBER */}
      <span
        className="text-[80px] sm:text-[120px] lg:text-[160px] font-serif font-light text-white/20 leading-none min-w-[80px] sm:min-w-[120px] lg:min-w-0 lg:absolute lg:left-0 lg:translate-x-[-20%] lg:-top-20 select-none"
        style={{ fontFamily: "Playfair Display, serif" }}
      >
        {number}
      </span>

      {/* TEXT CONTENT */}
      {/* Removed left-15 and used pl-4 to create internal spacing from the vertical line */}
      <div className="relative z-10 text-left lg:text-inherit flex flex-col gap-2 pt-4 pl-4">
        <h3 className="text-sm lg:text-base font-bold tracking-[0.2em] mb-2 lg:mb-4 uppercase">{title}</h3>
        <p className="text-xs lg:text-sm text-white/40 leading-loose max-w-[260px] md:text-[15px]">{text}</p>
      </div>

      {/* LAPTOP VERTICAL CONNECTORS */}
      <div 
        className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-px border-l border-white/80" 
        style={{ 
          height: align === 'center' ? '380px' : align === 'start' ? '280px' : '200px', 
          top: '100%',
          marginTop: '50px'
        }}
      />
    </div>
  );
};


export default WhyWeExist;





// const WhyWeExist = () => {
//   return (
//     <section className="relative text-white bg-gradient-to-b from-[#0d3b2e] via-[#051a14] to-[#04151a] mt-32 pt-40 lg:pt-56 pb-64 lg:pb-96 min-h-screen overflow-hidden">

//       {/* Background radial glow */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(34,197,94,0.2),transparent_50%)] blur-3xl" />

//       <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col justify-center items-center gap-20">
        
//         {/* Top Progress bar */}
//         <div className="flex items-center justify-center gap-6 sm:gap-10 text-white/90 tracking-[0.2em] text-xs sm:text-sm mb-32">
//           <span className="font-serif">01</span>
//           <div className="w-12 sm:w-24 border-t border-dotted border-white/30" />
//           <span className="font-serif">02</span>
//           <div className="w-12 sm:w-24 border-t border-dotted border-white/30" />
//           <span className="font-serif">03</span>
//         </div>

//         {/* Title Block */}
//         <div className="text-center max-w-4xl mb-32 lg:mb-48">
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <span className="w-1.5 h-1.5 bg-white/70" />
//             <span className="uppercase text-[10px] tracking-[0.3em] text-white/60">THE SOLUTION</span>
//           </div>
//           <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-4xl sm:text-5xl lg:text-7xl mb-8">
//             <span className="italic font-light">This is</span> <span className="font-semibold">Why We Exist</span>
//           </h2>
//           <p className="text-white/40 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-4">
//             Trust transforms everything engagement, innovation, performance, & culture. The Institute of Trusted Leadership scales this impact through research-backed methods, turning trusted leadership into the global standard.
//           </p>
//         </div>

//         {/* Timeline Grid Container */}
//         <div className="relative w-full max-w-[1200px]">

//           {/* TABLET/MOBILE VERTICAL LINE: Positioned to the left of text */}
//           <div className="lg:hidden absolute left-[45px] sm:left-[80px] top-0 bottom-0 w-px border-l border-dotted border-white/30" />
          
//           {/* LAPTOP HORIZONTAL BASELINE */}
//           <div className="hidden lg:block absolute bottom-[-200px] left-0 right-0 border-b border-dotted border-white/80 h-px w-full" />

//           {/* Grid Layout: 
//               - Mobile: 1 column (vertical stack)
//               - Laptop: 3 columns (staggered)
//           */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-8 relative">
//             <TimelineItem 
//               number="1" 
//               title="ITL APPROACH" 
//               text="Evidence-based methodology combining research, training, and consulting to build trusted leaders." 
//               align="start"
//             />

//             <TimelineItem 
//               number="2" 
//               title="OUR ECOSYSTEM" 
//               text="Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation." 
//               align="center"
//               offsetY="lg:-translate-y-16" // Lift item 2 on laptop
//             />
//             <TimelineItem 
//               number="3" 
//               title="GLOBAL IMPACT" 
//               text="UN SDG-aligned programs ensuring every initiative creates measurable social value." 
//               align="end"
//               offsetY="lg:translate-y-16" // Drop item 3 on laptop
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// const TimelineItem = ({ number, title, text, align, offsetY = "" }) => {
//   // Positioning logic for Laptop
//   const alignmentClass = {
//     start: "lg:items-start lg:text-left lg:mt-16",
//     center: "lg:items-center lg:text-center",
//     end: "lg:items-start lg:text-left lg:mt-32"
//   };

//   return (
//     <div className={`relative flex flex-row lg:flex-col items-center lg:gap-10 gap-0 ${alignmentClass[align]} ${offsetY} px-2 sm:px-10 lg:px-4`}>

//       {/* VERTICAL DOT FOR TABLET (beside text) */}
//       <div className="lg:hidden absolute left-[41px] sm:left-[76px] top-[45px] w-2.5 h-2.5 bg-white rounded-full z-30 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />


//       {/* BIG NUMBER: Positioned beside text for mobile/tablet */}
//       <span
//         className="text-[80px] sm:text-[120px] lg:text-[160px] font-serif font-light text-white/20 leading-none min-w-[80px] sm:min-w-[120px] lg:min-w-0 lg:absolute lg:left-0 lg:translate-x-[-20%] lg:-top-20 select-none"
//         style={{ fontFamily: "Playfair Display, serif" }}
//       >
//         {number}
//       </span>


//       {/* TEXT CONTENT */}
//       <div className="relative z-10 text-left lg:text-inherit left-15 flex flex-col gap-2 pt-4">
//         <h3 className="text-sm lg:text-base font-bold tracking-[0.2em] mb-2 lg:mb-4 uppercase">{title}</h3>
//         <p className="text-xs lg:text-sm text-white/40 leading-loose max-w-[260px] md:text-[15px]">{text}</p>
//       </div>

//       {/* LAPTOP VERTICAL CONNECTORS */}
//       <div 
//         className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-px border-l border-white/80" 
//         style={{ 
//           height: align === 'center' ? '420px' : align === 'start' ? '320px' : '240px', 
//           top: '100%',
//           marginTop: '40px'
//         }}
//       />
//     </div>
//   );
// };

// export default WhyWeExist;





// const WhyWeExist = () => {
//   return (
//     <section className="relative text-white bg-gradient-to-b from-[#0d3b2e] via-[#051a14] to-[#04151a] mt-48 pt-48 lg:pt-64 pb-60 lg:pb-80 min-h-screen overflow-hidden">
//       {/* Background radial glow as seen in the top center of the image */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-10%,rgba(34,197,94,0.25),transparent_50%)] blur-2xl" />

//       {/* <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col items-center"> */}
        
//         {/* Top Progress bar */}
//         {/* <div className="flex items-center justify-center gap-10 text-white/90 tracking-[0.2em] text-xs sm:text-sm mb-32">
//           <span className="font-serif">01</span>
//           <div className="w-16 sm:w-24 border-t border-dotted border-white/30" />
//           <span className="font-serif">02</span>
//           <div className="w-16 sm:w-24 border-t border-dotted border-white/30" />
//           <span className="font-serif">03</span>
//         </div> */}

//         {/* Title Block */}
//         <div className="flex items-center justify-center flex-col gap-32 h-full">

//           <div className="flex items-center justify-center gap-7 text-white/90 tracking-[0.2em] text-xs sm:text-sm mb-20 gap-5">
//           <span className="font-serif">01</span>
//           <div className="w-16 sm:w-24 border-t border-dotted border-white/30" />
//           <span className="font-serif">02</span>
//           <div className="w-16 sm:w-24 border-t border-dotted border-white/30" />
//           <span className="font-serif">03</span>
//         </div>

//           <div className="text-center max-w-4xl mb-48">
//           <div className="flex items-center justify-center gap-2 mb-6">
//             <span className="w-1.5 h-1.5 bg-white/70" />
//             <span className="uppercase text-[10px] tracking-[0.3em] text-white/60">THE SOLUTION</span>
//           </div>
//           <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-4xl sm:text-5xl lg:text-7xl mb-8">
//             <span className="italic font-light">This is</span> <span className="font-semibold">Why We Exist</span>
//           </h2>
//           <p className="text-white/40 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto px-4">
//             Trust transforms everything engagement, innovation, performance, & culture. The Institute of Trusted Leadership scales this impact through research-backed methods, turning trusted leadership into the global standard.
//           </p>
//         </div>

//         {/* Timeline Grid */}
//         <div className="relative w-full max-w-[1100px]">
//           {/* Main Horizontal Bottom Dotted Line */}
//           <div className="absolute top-70 left-0 right-0 border-b border-dotted border-white/80 h-px w-full" />

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-4 relative">
//             <TimelineItem 
//               number="1" 
//               title="ITL APPROACH" 
//               text="Evidence-based methodology combining research, training, and consulting to build trusted leaders." 
//               align="start"
//             />
//             <TimelineItem 
//               number="2" 
//               title="OUR ECOSYSTEM" 
//               text="Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation." 
//               align="center"
//               offsetY="-translate-y-15" // Item 2 is higher in the image
//             />
//             <TimelineItem 
//               number="3" 
//               title="GLOBAL IMPACT" 
//               text="UN SDG-aligned programs ensuring every initiative creates measurable social value." 
//               align="end"
//               offsetY="translate-y-12" // Item 3 is slightly lower
//             />
//           </div>
//         </div>
//         </div>
//       {/* </div> */}
//     </section>
//   );
// };

// const TimelineItem = ({ number, title, text, align, offsetY = "" }) => {
//   // Logic to handle alignment and vertical line positioning
//   const alignmentClass = {
//     start: "items-start text-left md:mt-25",
//     center: "items-center text-center",
//     end: "items-start text-left md:mt-32"
//   };

//   return (
//     <div className={`relative flex flex-col ${alignmentClass[align]} ${offsetY} px-4`}>
//       {/* Large Decorative Number */}
//       <div 
//         className="text-[100px] md:text-[140px] font-serif font-light text-white/50 leading-none absolute -left-4 md:-left-8 -top-12 pointer-events-none"
//         style={{ fontFamily: "Playfair Display, serif" }}
//       >
//         {number}
//       </div>

//       {/* Content */}
//       <div className="relative z-10">
//         <h3 className="text-sm md:text-base font-bold tracking-widest mb-4">{title}</h3>
//         <p className="text-xs md:text-sm text-white/30 leading-loose max-w-[240px]">{text}</p>
//       </div>

//       {/* Vertical Connector Line to the bottom horizontal line */}
//       <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-px border-l border-white/100 h-50 bottom-[-200px]`} 
//            style={{ height: align === 'center' ? '350px' : align === 'start' ? '280px' : '220px', bottom: align === 'center' ? '-350px' : align === 'start' ? '-280px' : '-220px' }}
//       />
//     </div>
//   );
// };

// export default WhyWeExist;





// // const WhyWeExist = () => {
// //   return (
// //     <section className="relative text-white bg-gradient-to-b from-[#0d3b2e] via-[#051a14] to-[#04151a] pt-32 lg:pt-44 pb-40 lg:pb-56 min-h-screen">

// //       {/* ================= BACKGROUND ================= */}
// //       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.35),transparent_45%),linear-gradient(180deg,#0d3b2e,#051a14,#04151a)]" />


// //       {/* ================= WRAPPER ================= */}
// //       <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 flex flex-col gap-20 items-center">

// //         <div className="flex items-center justify-center gap-6 text-white/90 tracking-[0.3em] text-sm sm:text-base md:text-lg w-full"> 
// //         <span className="font-serif">01</span> 
        
// //         <div className="flex-1 max-w-[140px] sm:max-w-[220px] flex flex-col gap-1"> 
// //           <div className="h-px bg-white/20" /> 
// //           <div className="h-px bg-white/10" /> 
          
// //           </div> <span className="font-serif">02</span> 
          
// //           <div className="flex-1 max-w-[140px] sm:max-w-[220px] flex flex-col gap-1"> 
// //             <div className="h-px bg-white/20" /> 
// //             <div className="h-px bg-white/10" /> 
// //           </div> 
          
// //           <span className="font-serif">03</span> 
// //         </div>


// //         {/* ================================================= */}
// //         {/* ================= TITLE BLOCK ==================== */}
// //         {/* ================================================= */}
// //         <div className="text-center max-w-4xl">

// //           <div className="flex items-center justify-center gap-3 mb-6">
// //             <span className="w-2 h-2 bg-white/70" />
// //             <span className="uppercase text-sm tracking-wider text-white/80">
// //               THE SOLUTION
// //             </span>
// //           </div>

// //           <h2
// //             style={{ fontFamily: "Playfair Display, serif" }}
// //             className="italic text-4xl sm:text-5xl md:text-6xl lg:text-[72px]"
// //           >
// //             This is <span className="not-italic font-semibold text-white">Why We Exist</span>
// //           </h2>

// //           <p className="text-white/60 mt-8 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
// //             Trust transforms everything — engagement, innovation, performance & culture.
// //             The Institute of Trusted Leadership scales this impact through research-backed methods,
// //             turning trusted leadership into the global standard.
// //           </p>
// //         </div>



// //         {/* ================================================= */}
// //         {/* ================= TIMELINE ======================= */}
// //         {/* ================================================= */}
// //           <div className="relative w-full mt-16 flex justify-center">

// //           {/* ===== Desktop baseline ===== */}

// //           <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[300px] w-[85%] border-b border-dotted border-white/40" />

// //           {/* ===== GRID ===== */}


// //           <div
// //     className="
// //       grid
// //       grid-cols-1
// //       md:grid-cols-2
// //       lg:grid-cols-3

// //       gap-10 md:gap-16 lg:gap-24

// //       w-full
// //       max-w-[1200px]
// //       mx-auto
// //       justify-items-center
// //     "
// //   >

// //             <TimelineItem
// //               number="1"
// //               title="ITL APPROACH"
// //               text="Evidence-based methodology combining research, training, and consulting to build trusted leaders."
// //             />

// //             <TimelineItem
// //               number="2"
// //               title="OUR ECOSYSTEM"
// //               text="Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation."
// //             />

// //             <TimelineItem
// //               number="3"
// //               title="GLOBAL IMPACT"
// //               text="UN SDG-aligned programs ensuring every initiative creates measurable social value."
// //             />
// //           </div>
// //         </div>
// //         </div>
// //     </section>
// //   );
// // };


// // /* ================================================= */
// // /* ================= TIMELINE ITEM ================= */
// // /* ================================================= */

// // const TimelineItem = ({ number, title, text }) => {
// //   return (
// //     <div
// //       className="
// //         relative
// //         flex flex-col

// //         items-center lg:items-start
// //         text-center lg:text-left

// //         gap-6
// //         pb-24 md:pb-32 lg:pb-40
// //         max-w-sm
// //       "
// //     >

// //       {/* CONTENT */}
// //       <div className="flex items-center gap-6">

// //         {/* BIG NUMBER */}
// //         <span
// //           className="
// //             text-[70px]
// //             sm:text-[90px]
// //             md:text-[110px]
// //             lg:text-[140px]
// //             text-white/25
// //             font-semibold
// //             leading-none
// //           "
// //           style={{ fontFamily: "Playfair Display, serif" }}
// //         >
// //           {number}
// //         </span>

// //         {/* TEXT */}
// //         <div>
// //           <h3 className="uppercase tracking-wider text-base md:text-lg mb-3 font-semibold">
// //             {title}
// //           </h3>

// //           <p className="text-white/45 text-sm md:text-base leading-relaxed">
// //             {text}
// //           </p>
// //         </div>

// //       </div>

// //       {/* ===== Vertical connector (desktop only) ===== */}
// //       <div
// //         className="
// //           hidden lg:block
// //           absolute
// //           left-1/2 -translate-x-1/2
// //           top-[190px]
// //           w-[3px]
// //           h-24
// //           bg-white/40
// //         "
// //       />
// //     </div>
// //   );
// // };


// // export default WhyWeExist;
