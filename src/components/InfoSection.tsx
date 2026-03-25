export default function InfoSection() {
  return (
    <section
      id="origin-section"
      className="relative w-full h-screen overflow-hidden bg-[url('/images/infosectionbg.png')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_50%,rgba(0,0,0,0.05)_0%,rgba(0,0,0,0.5)_58%,rgba(0,0,0,0.85)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_65%,rgba(0,0,0,0.92)_100%)]" />

      <div className="relative z-10 h-full w-full pl-2 md:pl-4 pr-6 md:pr-10 lg:pr-16 ml-8 md:ml-14 lg:ml-20 flex items-center">
        <div className="flex flex-col gap-8">

          {/* Text block */}
          <div className="flex flex-col gap-5 max-w-2xl">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide text-white/90 leading-tight">
              De las entrañas de la Sierra Madre
            </h2>

            <div className="text-white/70 text-sm md:text-base font-[Montserrat] uppercase leading-relaxed space-y-3">
              <p>
                Bacanora nacido en Sonora, elaborado en pequeños lotes para
                lograr un perfil limpio, mineral y con una dulzura sutil que
                realza cualquier coctel.
              </p>
              <p>
                Destilado artesanalmente desde agave Angustifolia Haw cultivado
                en las alturas de Yecora, cada botella honra la tradicion
                serrana y la paciencia de nuestros maestros.
              </p>
            </div>
          </div>

          {/* Data grid — inline width, no word breaks */}
          <div className="inline-flex border border-white/15 bg-black/45">
            <div className="flex divide-x divide-white/20 text-amber-400/90 uppercase font-serif-elegant tracking-[0.2em] text-sm md:text-base">
              <span className="px-6 py-4 whitespace-nowrap">750ML</span>
              <span className="px-6 py-4 whitespace-nowrap">43.7% ALC.VOL</span>
              <span className="px-6 py-4 whitespace-nowrap">AGAVE ANGUSTIFOLIA HAW</span>
            </div>
          </div>

        </div>
      </div>

      
    </section>
  );
}