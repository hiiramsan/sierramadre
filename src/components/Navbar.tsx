export default function Navbar() {
  return (
    <nav
      id="site-navbar"
      data-theme="dark"
      className="site-navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 py-5"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none"></div> */}

      <a href="/" className="relative flex items-center gap-3 group">
        <span className="nav-brand font-serif-elegant text-sm tracking-[0.3em] uppercase transition-colors duration-300">
          Sierra Madre
        </span>
      </a>

      <ul className="relative flex items-center gap-10">
        <li><a href="#hero-section" className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Bacanora</a></li>
        <li><a href="#story-section" className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Origen</a></li>
        <li><a href="#collection-section" className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Coleccion</a></li>
        <li><a href="#contact-section" className="nav-link font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300">Contacto</a></li>
      </ul>

      <a
        href="#contact-section"
        className="nav-link nav-link-contact relative font-[Montserrat] text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 flex items-center gap-2"
      >
        Contacto
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="nav-icon">
          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </nav>
  );
}
