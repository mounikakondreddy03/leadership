
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-emerald-900/30 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(20,184,166,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(37,99,235,0.15),transparent_50%)]"></div>
      </div>
      
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex justify-between items-center max-w-1/3">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-white/80 text-sm tracking-wider uppercase font-semibold">
                Built on Solid Ground
              </span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
                Building Leaders –
              </h1>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                <span className="italic text-white/60">the </span>
                <span className="text-white">World Can Trust.</span>
              </h1>
            </div>
          </div>
          
          <div className="flex justify-end absolute">
            <div className="max-w-md">
              <p className="text-white/90 font-small md:align-text-top leading-relaxed relative left-195 top-50 float-start">
                Where purpose meets people. Where organizations transform through trusted leadership, continuous learning, & human responsibility.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
