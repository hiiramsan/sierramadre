export default function StorySection() {
  return (
    <section id="story-section" className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-12 flex items-center gap-16">
        <div className="shrink-0 flex items-center justify-center">
          <div className="rounded-xl overflow-hidden bg-[#111] shadow-2xl shadow-black/60" style={{ width: 300, height: 460 }}>
            <canvas id="frame-canvas" width={300} height={460} className="block w-full h-full"></canvas>
          </div>
        </div>

        <div id="story-text" className="flex flex-col gap-5">
          <p className="text-amber-400/80 tracking-[0.3em] text-xl uppercase font-serif-elegant">Destilado con caracter</p>
          <h2 className="font-display italic text-5xl md:text-6xl text-white leading-tight">De las entranas de la Sierra Madre</h2>
          <p className="text-white/60 font-serif-elegant text-lg leading-relaxed uppercase">
            Donde la tierra y el fuego crean magia. Nace el espiritu de Sonora, destilado artesanalmente desde agave
            Angustifolia Haw cultivado en las alturas de Yecora.
          </p>
        </div>
      </div>
    </section>
  );
}
