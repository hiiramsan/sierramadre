export default function StorySection() {
  return (
    <section id="story-section" className="relative w-full h-screen bg-[#080706] overflow-hidden flex items-center justify-center">
      <div
        id="origin-map"
        className="absolute inset-0 bg-center bg-cover opacity-80"
        style={{ backgroundImage: "url('/images/MAPYECORA.png')" }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(219,168,98,0.35),transparent_45%),radial-gradient(circle_at_80%_70%,rgba(145,72,35,0.28),transparent_45%)]"></div>
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/45 to-black/80"></div>

      <div className="relative w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-full grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="relative h-[40vh] lg:h-[70vh] order-2 lg:order-1">
          <img
            id="origin-bottle"
            src="/images/bacanora.png"
            alt="Botella de Bacanora Sierra Madre"
            className="absolute bottom-0 left-[6%] h-[50vh] md:h-[60vh] lg:h-[66vh] w-auto object-contain drop-shadow-[0_18px_32px_rgba(0,0,0,0.75)]"
          />
          <div className="absolute top-[18%] left-[20%] w-3 h-3 rounded-full bg-amber-200/85 shadow-[0_0_22px_rgba(255,216,143,0.9)]"></div>
          <div className="absolute top-[42%] left-[56%] w-2.5 h-2.5 rounded-full bg-amber-300/75 shadow-[0_0_18px_rgba(255,199,106,0.75)]"></div>
        </div>

        <div id="origin-text" className="flex flex-col gap-6 max-w-xl order-1 lg:order-2">
          <p className="text-amber-300/80 tracking-[0.34em] text-sm md:text-base uppercase font-serif-elegant">Origen Sierra Madre</p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
            Donde la tierra y el fuego crean magia.
          </h2>
          <p className="text-stone-200/78 font-serif-elegant text-lg md:text-xl leading-relaxed">
            A mas de 1,500 metros sobre el nivel del mar, el clima extremo de Yecora exige lo mejor del Agave
            Angustifolia Haw. En Sierra Madre, respetamos los tiempos de la naturaleza, transformando el agave
            silvestre en un destilado con caracter unico, forjado por el frio de la montana y el calor del horno de
            lena.
          </p>
        </div>
      </div>
    </section>
  );
}
