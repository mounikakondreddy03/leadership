import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    "The Institute",
    "Our Approach",
    "Ecosystem",
    "Insights",
    "Contact Us",
  ];

  return (
    <header className="sticky top-0 w-full z-50 backdrop-blur-md border-b shadow-lg border-white/20 bg-[#000000]/50">

      <div className="w-full mx-auto px-8 md:px-10 h-20 flex md:items-center justify-center gap-50">

        <div className="flex items-center justify-between gap-5">

          <span className="text-white text-lg md:text-3xl font-semibold italic">
            I.T.L
          </span>

          <div className="hidden sm:block text-md text-white/70 leading-tight">
            Institute for <br /> Trusted Leadership
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10 text-lg">

          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`transition duration-300
                ${
                  index === 0
                    ? "text-white font-semibold"                   
                    : "text-white/60 hover:text-white"
                }
              `}
            >
              {item}
            </a>
          ))}

        </nav>

          <button 
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 px-8 py-6 space-y-4 w-full tracking-tight leading-[1.9em]">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`block ${
                index === 0
                  ? "text-white font-semibold fontfamily-['IBM_Plex_Sans'] fontsize-[14px]"
                  : "text-white/80"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;