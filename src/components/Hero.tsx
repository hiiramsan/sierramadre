export default function Hero() {
  return (
    <section id="hero-section" className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img src="/images/fondo5.jpg" alt="Sierra Madre Occidental" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-start pt-16 px-12">
        <div id="hero-text" className="text-center text-white z-10">
          <h1 className="font-display italic text-7xl md:text-8xl">Bacanora Artesanal</h1>
          <p className="font-serif-elegant text-amber-200/90 tracking-[0.4em] text-lg mt-4 uppercase">100% Agave</p>
        </div>

        <div className="absolute bottom-0 flex items-end justify-center">
          <img id="hero-bottle" src="/images/bacanora.png" alt="Bacanora Sierra Madre" className="h-[68vh] object-contain drop-shadow-2xl" />
        </div>

        <div
          id="hero-card"
          className="absolute bottom-10 left-16 w-52 rounded-md overflow-hidden bg-[#0e0e0e]/90 backdrop-blur-sm border border-white/10 flex flex-col items-center text-center px-6 py-8 gap-4 shadow-2xl"
        >
          <p className="font-serif-elegant text-white/50 text-sm leading-snug tracking-wide">
            This week's picks
            <br />
            by sommeliers
          </p>
          <h3 className="font-display text-white text-lg font-bold uppercase">SIERRA MADRE OCCIDENTAL</h3>

          <img src="/images/yes.png" alt="" />

          <div className="w-full border-t border-white/10 pt-3 flex flex-col gap-1">
            <p className="font-serif-elegant text-white/70 text-md tracking-wider">Yecora, Sonora</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-b from-transparent to-black pointer-events-none z-20"></div>
    </section>
  );
}
