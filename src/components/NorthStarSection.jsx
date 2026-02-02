import { Eye, Target, Trophy, Compass } from "lucide-react";

const NorthStar = () => {
  return (
    <section className="relative py-32 overflow-hidden text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-emerald-900/30 to-blue-900/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 items-center gap-24">

          <div className="relative flex justify-center">
            <div className="relative w-[380px] h-[380px] rounded-full border border-dashed border-white/25 flex items-center justify-center">

              <Compass size={140} className="text-white stroke-[1.6]" />

              <div className="absolute top-5 left-1/2 -translate-x-1/2 -translate-y-[50%] bg-blue-600 p-3 rounded-full shadow-lg">
                <Eye size={45} />
              </div>

              <div className="absolute left-10 top-75 -translate-x-[50%] -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full">
                <Target size={45} />
              </div>

              <div className="absolute right-10 top-75 translate-x-[50%] -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full">
                <Trophy size={45} />
              </div>
        
            </div>
          </div>


          <div>

            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-white" />
              <span className="uppercase text-sm tracking-wider text-white/70 font-semibold">
                What drives us
              </span>
            </div>

            <h2 className="font-serif text-[56px] md:text-[64px] mb-6">
              Our North Star
            </h2>

            <p className="italic text-2xl mb-4 text-white/90">
              Vision
            </p>

            <p className="text-white/70 max-w-lg leading-relaxed mb-8">
              A world in which organizations are led by trust and committed
              to the continuous development of people and purpose.
            </p>

            <div className="flex items-center gap-4">
              <span className="text-sm text-white/70">1/3</span>
              <div className="flex-1 h-[3px] bg-white/10 rounded">
                <div className="w-1/3 h-full bg-blue-500 rounded" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NorthStar;
