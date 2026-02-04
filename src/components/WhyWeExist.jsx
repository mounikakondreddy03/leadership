const WhyWeExist = () => { 
  return ( 
    <section className="relative text-white overflow-hidden flex items-center justify-center min-h-screen"> 
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(34,197,94,0.35),transparent_45%),linear-gradient(180deg,#0d3b2e,#051a14,#000)]" /> 
      
      <div className="relative z-10 max-w-[1280px] w-full h-[1100px] flex flex-col gap-24 items-center justify-center"> 
        
        <div className="flex items-center justify-center gap-6 text-white/100 tracking-[0.35em] text-xl w-full"> 
          <span className="font-serif">01</span> 
          
          <div className="flex-1 max-w-[220px] md:max-w-[300px] flex flex-col justify-center gap-1"> 
            
            <div className="h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.25)_0_2px,transparent_2px_6px)]" /> 
              <div className="h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0_2px,transparent_2px_6px)]" />
            </div> 
            
            <span className="font-serif">02</span> 
            
            <div className="flex-1 max-w-[220px] md:max-w-[300px] flex flex-col justify-center gap-1"> 
              <div className="h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.25)_0_2px,transparent_2px_6px)]" /> 
                <div className="h-px bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.18)_0_2px,transparent_2px_6px)]" /> 
              </div> 
            
              <span className="font-serif">03</span> 
            </div> 
            
          <div className="text-center max-w-4xl mx-auto flex items-center justify-center flex-col"> 
            <div className="flex items-center justify-center gap-3 mb-6"> 
              <span className="w-3 h-3 bg-white/70" /> 
              <span className="uppercase text-sm tracking-wider text-white/80"> 
                THE SOLUTION 
              </span> 
            </div> 
            
            <h2 style={{ fontFamily: "Playfair Display, serif" }} className="leading-tight" > 
              <span className="italic text-white/40 text-4xl block mb-1 text-[72px]"> 
                This is 
                <span className="text-white/80 font-bold"> 
                  Why We Exist 
                </span> 
              </span> 
            </h2> 
            
            <p className="text-white/60 mt-8 text-xl leading-relaxed text-center max-w-3xl mx-auto">
              Trust transforms everything engagement, innovation, performance & culture. 
              <br /> The Institute of Trusted Leadership scales this impact through research-backed methods, turning trusted leadership into the global standard. 
            </p> 
          </div> 
          
          <div className="relative mt-16"> 
            <div className="absolute top-80 bottom-1 left-0 right-0 border-b border-dotted border-white/50" /> 
              <div className="grid grid-cols-3 gap-[150px] items-end"> 
                <TimelineItem 
                  number="1" 
                  title="ITL APPROACH" 
                  text="Evidence-based methodology combining research, training, and consulting to build trusted leaders." 
                /> 
                
                <TimelineItem 
                  number="2" 
                  title="OUR ECOSYSTEM" 
                  text="Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation." 
                /> 
                
                <TimelineItem 
                  number="3" 
                  title="GLOBAL IMPACT" 
                  text="UN SDG-aligned programs ensuring every initiative creates measurable social value." 
                /> 
              </div> 
            </div> 
          </div>
        </section> 
      ); 
    }; 
    

const TimelineItem = ({ number, title, text }) => { 
  return ( 
    <div className="relative flex items-start gap-6 pb-24"> 
      <span 
        className="text-[150px] text-white/25 font-semibold leading-none shrink-0" 
        style={{ fontFamily: "Playfair Display, serif" }} 
      > 
        {number} 
      </span> 
      
      <div className="text-left max-w-sm"> 
        <h3 className="uppercase tracking-wider text-lg mb-3 font-semibold"> 
          {title} 
        </h3> 
        
        <p className="text-white/45 text-lg leading-relaxed"> 
          {text} 
        </p> 
      </div> 
      
      <div className="absolute top-60 bottom-0 left-1/2 -translate-x-1/2 w-[10px] h-20 bg-white/50" /> 
    </div> 
  );
};

export default WhyWeExist;