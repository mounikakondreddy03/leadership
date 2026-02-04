import { Eye, Target, Trophy } from "lucide-react";

const NorthStar = () => {
  return (
    <section className="relative min-h-screen flex items-center text-white bg-gradient-to-b from-[#071b1a] to-[#051a14] overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(16,185,129,0.20),transparent_35%),radial-gradient(circle_at_78%_14%,rgba(30,144,255,0.16),transparent_35%),linear-gradient(180deg,#071b1a_0%,#083233_36%,#04151a_100%)]" />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 grid lg:grid-cols-2 items-center gap-24 lg:gap-40">

        <div className="flex justify-center">

          <div className="relative w-[480px] h-[480px] flex items-center justify-center">

            <div className="absolute inset-0 rounded-full bg-emerald-400/10 blur-3xl scale-125" />

            <div className="w-[360px] h-[360px] rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex items-center justify-center shadow-2xl">

              <svg viewBox="0 0 24 24" className="w-28 h-28 fill-white">
                <path d="M12 2 L14 8 L20 8 L15 13 L17 19 L12 15 L7 19 L9 13 L4 8 L10 8 Z" />
              </svg>
            </div>

            <div className="absolute top-[4%] left-1/2 -translate-x-1/2">
              <GlassIcon color="bg-blue-500" sizeClass="w-20 h-20">
                <Eye size={22} />
              </GlassIcon>
            </div>

            <div className="absolute left-[8%] top-[65%] -translate-y-1/2">
              <GlassIcon sizeClass="w-20 h-20">
                <Target size={22} />
              </GlassIcon>
            </div>

            <div className="absolute right-[8%] top-[65%] -translate-y-1/2">
              <GlassIcon sizeClass="w-20 h-20">
                <Trophy size={22} />
              </GlassIcon>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-center">

          <div className="flex items-center gap-3 text-white/70 text-sm tracking-widest uppercase font-semibold mb-8">
            <span className="w-3 h-3 bg-white" />
            WHAT DRIVES US
          </div>

          <h2
            style={{ fontFamily: "Playfair Display, serif" }}
            className="text-[80px] lg:text-[96px] leading-tight mb-6"
          >
            Our North Star
          </h2>

          <p className="italic text-2xl mb-6 text-white/90">Vision</p>

          <p className="text-white/70 text-xl max-w-[560px] leading-relaxed mb-12">
            A world in which organizations are led by trust and committed to the
            continuous development of people and purpose.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-sm text-white/70">1/3</span>

            <div className="w-56 h-2 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-1/3 bg-blue-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const GlassIcon = ({ children, color = "bg-white/10", sizeClass = "w-16 h-16" }) => (
  <div
    className={`${sizeClass} rounded-full ${color} backdrop-blur-xl border border-white/20 flex items-center justify-center shadow-xl text-white`}
  >
    {children}
  </div>
);

export default NorthStar;
