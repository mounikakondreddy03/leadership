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
    <header className="fixed top-4 left-7 right-5 z-50  border-black shadow-lg">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        <div className="flex items-start gap-3">

          <span className="text-white text-3xl font-semibold tracking-tight italic">
            I.T.L
          </span>

          <div className="text-[13px] text-white/70 leading-tight">
            Institute for <br /> Trusted Leadership
          </div>
        </div>


        <nav className="hidden lg:flex items-center gap-10 text-sm">

          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`transition duration-300
                ${
                  index === 0
                    ? "text-white font-semibold"                   
                    : "text-white/50 hover:text-white"
                }
              `}
            >
              {item}
            </a>
          ))}

        </nav>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
      </div>


      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10 px-8 py-6 space-y-4">
          {navItems.map((item, index) => (
            <a
              key={item}
              href="#"
              className={`block ${
                index === 0
                  ? "text-white font-bold"
                  : "text-white/70"
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
