export default function Hero() {
  return (
    <section id="hero-section" className="relative w-full h-screen">
      <div className="absolute inset-0">
        <img src="/images/fondo.jpg" alt="Sierra Madre Occidental" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-start pt-16 px-12">
        <div id="hero-text" className="text-center text-white z-10">
          <h1 className="font-display italic text-7xl md:text-8xl">Bacanora Sierra Madre</h1>
          <p className="font-serif-elegant text-amber-200/90 tracking-[0.4em] text-lg mt-2 uppercase">Destilado en el corazón de Yécora, Sonora.</p>
        </div>

        <div className="absolute bottom-0 flex items-end justify-center">
          <img id="hero-bottle" src="/images/bacanora.png" alt="Bacanora Sierra Madre" className="h-[68vh] object-contain drop-shadow-2xl" />
        </div>

        
      </div>

      <div className="absolute bottom-0 inset-x-0 h-56 bg-gradient-to-b from-transparent to-black pointer-events-none z-20"></div>
    </section>
  );
}
