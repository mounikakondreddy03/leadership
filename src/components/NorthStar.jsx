import { Eye, Target, Trophy } from "lucide-react";

const NorthStar = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white overflow-hidden bg-gradient-to-b from-[#071b1a] to-[#051a14]">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(16,185,129,0.20),transparent_35%),radial-gradient(circle_at_78%_14%,rgba(30,144,255,0.16),transparent_35%),linear-gradient(180deg,#071b1a_0%,#083233_36%,#04151a_100%)]" />



      {/* ================================================= */}
      {/* =============== MAIN WRAPPER ==================== */}
      {/* ================================================= */}
      <div
        className="
          relative z-10 max-w-[1400px] mx-auto w-full
          px-5 sm:px-8 lg:px-10
          pt-24 pb-25               /* ⭐ extra mobile spacing */
          sm:py-16 lg:py-0
          grid grid-cols-1 lg:grid-cols-2
          items-center
          gap-20 md:gap-20 lg:gap-40
        "
      >


        {/* ================================================= */}
        {/* =============== LEFT GRAPHIC ==================== */}
        {/* ================================================= */}
        <div className="flex justify-center items-center mb-14 lg:mb-0">

          {/* responsive circle container */}
          <div
            className="
              relative
              w-[240px] h-[240px]      /* ⭐ smaller on tiny phones */
              sm:w-[340px] sm:h-[340px]
              md:w-[420px] md:h-[420px]
              lg:w-[480px] lg:h-[480px]
            "
          >

            {/* dashed ellipse */}
            <div className="absolute inset-0 rounded-full border border-dashed border-white/40 bg-white/10 backdrop-blur-[24px] shadow-[0px_4px_80px_rgba(255,255,255,0.1)]" />

            {/* center star circle */}
            <div className="absolute inset-[15%] rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-14 md:w-24 fill-white">
                <path d="M12 2 L14 8 L20 8 L15 13 L17 19 L12 15 L7 19 L9 13 L4 8 L10 8 Z" />
              </svg>
            </div>


            {/* ===== EYE ===== */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[64px] h-[64px] md:w-[88px] md:h-[88px] rounded-full bg-[#0080FF]/60 border-[1.5px] border-[#0080FF]/70 backdrop-blur-[24px] flex items-center justify-center">
              <Eye size={22} />
            </div>


            {/* ===== TARGET ===== */}
            <div className="absolute bottom-0 left-[8%] translate-y-1/2 w-[72px] h-[72px] md:w-[96px] md:h-[96px] rounded-full bg-white/25 backdrop-blur-[24px] flex items-center justify-center">
              <Target size={22} />
            </div>


            {/* ===== TROPHY ===== */}
            <div className="absolute bottom-0 right-[8%] translate-y-1/2 w-[72px] h-[72px] md:w-[96px] md:h-[96px] rounded-full bg-white/25 backdrop-blur-[24px] flex items-center justify-center">
              <Trophy size={22} />
            </div>

          </div>
        </div>



        {/* ================================================= */}
        {/* =============== RIGHT CONTENT =================== */}
        {/* ================================================= */}
        <div className="flex flex-col justify-center text-center lg:text-left w-full space-y-6">

          <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70 text-xs sm:text-sm tracking-widest uppercase font-semibold">
            <span className="w-2 h-2 bg-white" />
            WHAT DRIVES US
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[96px] leading-tight"
          >
            Our North Star
          </h2>

          <p className="italic text-lg md:text-2xl text-white/90">
            Vision
          </p>

          <p className="text-white/70 text-base md:text-xl leading-relaxed md:leading-loose">
            A world in which organizations are led by trust and committed to the
            continuous development of people and purpose.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <span className="text-xs sm:text-sm text-white/70">1/3</span>

            <div className="w-40 sm:w-48 md:w-56 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-1/3 bg-blue-500 rounded-full" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default NorthStar;


// import { Eye, Target, Trophy } from "lucide-react";

// const NorthStar = () => {
//   return (
//     <section className="relative min-h-screen flex items-center text-white bg-gradient-to-b from-[#071b1a] to-[#051a14] overflow-hidden">

//       {/* background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(16,185,129,0.20),transparent_35%),radial-gradient(circle_at_78%_14%,rgba(30,144,255,0.16),transparent_35%),linear-gradient(180deg,#071b1a_0%,#083233_36%,#04151a_100%)]" />


//       {/* layout */}
//       <div className="relative z-10 max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-10 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-14 md:gap-20 lg:gap-40">


//         {/* ================================================= */}
//         {/* =============== LEFT GRAPHIC (FIXED) ============ */}
//         {/* ================================================= */}

//         <div className="flex justify-center items-center">

//           {/* responsive circle container */}
//           <div className="
//             relative
//             w-[280px] h-[280px]
//             sm:w-[340px] sm:h-[340px]
//             md:w-[420px] md:h-[420px]
//             lg:w-[480px] lg:h-[480px]
//           ">

//             {/* dashed ellipse */}
//             <div className="
//               absolute inset-0
//               rounded-full
//               border border-dashed border-white/40
//               bg-white/10
//               backdrop-blur-[24px]
//               shadow-[0px_4px_80px_rgba(255,255,255,0.1)]
//             " />

//             {/* center star circle */}
//             <div className="
//               absolute inset-[15%]
//               rounded-full
//               border border-white/20
//               bg-white/5
//               backdrop-blur-xl
//               flex items-center justify-center
//             ">
//               <svg viewBox="0 0 24 24" className="w-16 md:w-24 fill-white">
//                 <path d="M12 2 L14 8 L20 8 L15 13 L17 19 L12 15 L7 19 L9 13 L4 8 L10 8 Z" />
//               </svg>
//             </div>


//             {/* ===== EYE (top center) ===== */}
//             <div className="
//               absolute top-0 left-1/2
//               -translate-x-1/2 -translate-y-1/2
//               w-[72px] h-[72px] md:w-[88px] md:h-[88px]
//               rounded-full
//               bg-[#0080FF]/60
//               border-[1.5px] border-[#0080FF]/70
//               backdrop-blur-[24px]
//               shadow-lg
//               flex items-center justify-center
//             ">
//               <Eye size={45} />
//             </div>


//             {/* ===== TARGET (bottom left) ===== */}
//             <div className="
//               absolute bottom-0 left-[8%]
//               translate-y-1/2
//               w-[80px] h-[80px] md:w-[96px] md:h-[96px]
//               rounded-full
//               bg-white/25
//               backdrop-blur-[24px]
//               flex items-center justify-center
//             ">
//               <Target size={45} />
//             </div>


//             {/* ===== TROPHY (bottom right) ===== */}
//             <div className="
//               absolute bottom-0 right-[8%]
//               translate-y-1/2
//               w-[80px] h-[80px] md:w-[96px] md:h-[96px]
//               rounded-full
//               bg-white/25
//               backdrop-blur-[24px]
//               flex items-center justify-center
//             ">
//               <Trophy size={45} />
//             </div>

//           </div>
//         </div>


//         {/* ================================================= */}
//         {/* =============== RIGHT CONTENT =================== */}
//         {/* ================================================= */}

//         <div className="flex flex-col justify-center text-center lg:text-left w-full">

//           <div className="flex items-center justify-center lg:justify-start gap-3 text-white/70 text-xs sm:text-sm tracking-widest uppercase font-semibold mb-6">
//             <span className="w-2 h-2 sm:w-3 sm:h-3 bg-white" />
//             WHAT DRIVES US
//           </div>

//           <h2
//             style={{ fontFamily: "Playfair Display, serif" }}
//             className="text-3xl sm:text-5xl md:text-6xl lg:text-[96px] leading-tight md:leading-[1.2] mb-6"
//           >
//             Our North Star
//           </h2>

//           <p className="italic text-lg md:text-2xl mb-5 text-white/90">
//             Vision
//           </p>

//           <p className="text-white/70 text-base md:text-xl leading-relaxed md:leading-loose mb-10">
//             A world in which organizations are led by trust and committed to the
//             continuous development of people and purpose.
//           </p>

//           <div className="flex items-center justify-center lg:justify-start gap-4">
//             <span className="text-xs sm:text-sm text-white/70">1/3</span>

//             <div className="w-40 sm:w-48 md:w-56 h-2 rounded-full bg-white/10 overflow-hidden">
//               <div className="h-full w-1/3 bg-blue-500 rounded-full" />
//             </div>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };

// export default NorthStar;
