const Vision = () => {
  return (
    <section className="relative flex justify-center text-white overflow-hidden bg-[linear-gradient(180deg,#00264D_25%,rgba(0,38,77,0)_100%)]">

      <div className="absolute bottom-0 left-0 right-0 h-[1250px] bg-[radial-gradient(circle_at_bottom,rgba(0,120,70,0.7),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] w-full min-h-[1118px] top-50 flex flex-col gap-[100px]">

        <div className="flex items-center justify-center flex-col mx-auto text-center">

          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-3 h-3 bg-white/70" />
            <span className="uppercase text-sm tracking-wider text-white/80">
              Built on solid ground
            </span>
          </div>

          <h2 style={{ fontFamily: "Playfair Display, serif" }} className="text-[60px] leading-tight mb-6">
            One Vision.
            <br />
            Four Pathways to Impact.
          </h2>

          <p className="text-lg text-white/70 leading-relaxed max-w-3xl">
            The Institute of Trusted Leadership operates through an integrated ecosystem
            of specialized divisions, each designed to address different aspects of
            leadership development and organizational transformation.
          </p>
        </div>

        <div className="grid grid-cols-6 gap-[40px]">

          <div className="col-span-3 bg-black/40 backdrop-blur-md rounded-2xl p-10 flex flex-col justify-between min-h-[420px] shadow-[0_0_40px_rgba(0,0,0,0.6)]">

            <div className="space-y-6">

              <div className="relative rounded-xl overflow-hidden">

                <div className="w-[127px] h-[48px] absolute flex items-center gap-2 bg-blue-900 px-[20px] py-[16px] rounded-md">
                  <span className="w-3 h-3 bg-white/70" />
                  <span className="absolute gap-8 text-[15px] rounded-md tracking-wide">
                    OPEN TO ALL
                  </span>
                </div>

                <img src="/Luca.png" alt="Luca Preview" className="w-full h-[330px] object-cover" />
              </div>

              <div  className="px-2">
                <h3 style={{ fontFamily: "IBM Plex Serif" }} className="text-2xl mb-2 fontweight-[400px] fontsize-[32px] lineheight-[32px]">
                  LUCA The Leader
                </h3>

                <p className="text-white/60 text-lg fontweight-[400px] fontsize-[20px] leading-[1.5em] fontfamily-[IBM_Plex_Sans]">
                  Where Leadership Awareness Begins
                </p>
                  <span className="float-right">
                    <svg width="30" height="30" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.0006 1V14C18.0006 14.2652 17.8952 14.5196 17.7077 14.7071C17.5201 14.8946 17.2658 15 17.0006 15C16.7353 15 16.481 14.8946 16.2935 14.7071C16.1059 14.5196 16.0006 14.2652 16.0006 14V3.41375L1.70806 17.7075C1.52042 17.8951 1.26592 18.0006 1.00056 18.0006C0.735192 18.0006 0.480697 17.8951 0.293056 17.7075C0.105415 17.5199 0 17.2654 0 17C0 16.7346 0.105415 16.4801 0.293056 16.2925L14.5868 2H4.00056C3.73534 2 3.48099 1.89464 3.29345 1.70711C3.10591 1.51957 3.00056 1.26522 3.00056 1C3.00056 0.734784 3.10591 0.48043 3.29345 0.292893C3.48099 0.105357 3.73534 0 4.00056 0H17.0006C17.2658 0 17.5201 0.105357 17.7077 0.292893C17.8952 0.48043 18.0006 0.734784 18.0006 1Z" fill="white" />
                    </svg>
                  </span>

                 <div className="clear-both">
                   <p className="text-white/50 fontfamily-[IBM_Plex_Sans] fontsize-[14px] leading-[1.5em] mt-4">
                    Our flagship CSR initiative bringing trusted leadership awareness to communities, organizations, and emerging leaders. Start your journey with free resources, assessments, and community connection.
                </p>
                 </div>
              </div>
            </div>
          </div>

          {[
            {
              top: "FOR ORGANIZATIONS",
              text: "MARTINICH CONSULTING",
              text2: "Strategic Leadership Partnerships",
            },
            {
              top: "FOR INDIVIDUALS & TEAMS",
              text: "MARTINICH INSTITUTE",
              text2: "Learning That Transforms",
            },
            {
              top: "FOR RESEARCH & INNOVATION",
              text: "MARTINICH R&D",
              text2: "Innovation Meets Insight",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-black/40 backdrop-blur-md rounded-2xl p-4 min-h-[420px] flex flex-col justify-between shadow-[0_0_40px_rgba(0,0,0,0.6)]"
            >

              <div className="p-5 w-[">
                <p className="flex flex-col items-start gap-2 text-[15px] uppercase tracking-wider text-white/80 bg-blue-900 px-4 py-2 rounded-md">
                  <span className="w-2.5 h-2.5 bg-white/70" />
                  {item.top}
                </p>
              </div>

              <div className="flex-1 flex items-center justify-center">
                <p style={{ writingMode: "vertical-rl" }} className="font-serif text-[20px] tracking-wider text-white/80 rotate-180">
                  {item.text}
                  {item.text && (<>
                    <br />
                    {item.text2}
                  </>)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
