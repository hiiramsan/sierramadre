import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: String) => {
    if(sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: 'smooth'});
    } else {

    }
  }

  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className={`${isOpen ? "fixed" : "hidden"} md:hidden inset-0 z-40 bg-transparent`}
      />
    <nav
      id="site-navbar"
      data-theme="dark"
      className="site-navbar fixed top-0 left-0 right-0 z-50 flex flex-col items-center gap-4 px-4 py-4 sm:px-6 sm:py-5 md:flex-row md:justify-between md:gap-0 md:px-14"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div> */}

      <div className="w-full flex items-center justify-between md:w-auto">
        <a href="/" className="relative flex items-center justify-center gap-3 group">
        <span className="nav-brand font-serif-elegant text-[11px] sm:text-sm tracking-[0.28em] sm:tracking-[0.3em] uppercase transition-colors duration-300">
          Sierra Madre
        </span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="site-navbar-menu"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-white/25 text-white/90 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex items-center gap-10">
        <ul className="relative flex items-center gap-10">
          <li><a href="#" onClick={(e)=> { e.preventDefault(); handleNavClick("hero")}} className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Bacanora</a></li>
          <li><a href="#origin-section" className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Origen</a></li>
          <li><a href="#collection-section" className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Coleccion</a></li>
          <li><a href="#contact-section" className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Contacto</a></li>
        </ul>

        <a
          href="https://wa.me/526441234567" target="_blank"
          className="nav-link nav-link-contact relative font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          ordenar
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="nav-icon">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div
        id="site-navbar-menu"
        className={`${isOpen ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"} md:hidden w-full flex flex-col items-center gap-3 border-t border-white/10 pt-4 pb-2 bg-black/75 backdrop-blur transition-all duration-300 ease-out overflow-hidden`}
      >
        <a href="#" onClick={(e)=> { e.preventDefault(); handleNavClick("hero"); setIsOpen(false); }} className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Bacanora</a>
        <a href="#origin-section" onClick={() => setIsOpen(false)} className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Origen</a>
        <a href="#collection-section" onClick={() => setIsOpen(false)} className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Coleccion</a>
        <a href="#contact-section" onClick={() => setIsOpen(false)} className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Contacto</a>
        <a
          href="https://wa.me/526441234567" target="_blank"
          className="nav-link nav-link-contact relative font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 flex items-center gap-2"
        >
          ordenar
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="nav-icon">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </nav>
    </>
  );
}
