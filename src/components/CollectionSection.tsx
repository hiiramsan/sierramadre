const bottles = [
  { name: "Café", alt: "Bacanora sabor Café", img: "Cafe.png" },
  { name: "Piña Colada", alt: "Bacanora sabor Piña Colada", img: "Pina.png" },
  { name: "Cítricos", alt: "Bacanora sabor Cítricos", img: "Citricos.png" },
  { name: "Fresa con Crema", alt: "Bacanora sabor Fresa con Crema", img: "Fresa.png" },
];

export default function CollectionSection() {
  return (
    <section id="collection-section" className="relative w-full min-h-screen bg-[#111a10] overflow-hidden flex flex-col">
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 flex items-center justify-center font-display italic text-[22vw] text-white/4 leading-none whitespace-nowrap z-0"
      >
        artesanal
      </span>

      <div className="relative z-10 px-10 md:px-16 pt-20 pb-10">
        <p className="text-amber-400 tracking-[0.3em] text-sm uppercase font-serif-elegant mb-1">EXPLORA</p>
        <h2 className="font-display italic text-5xl md:text-6xl text-white leading-none">Nuestra Colección</h2>
      </div>

      <div id="collection-grid" className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-0 px-6 md:px-10 flex-1 items-center content-center">
        {bottles.map((bottle, index) => (
          <div key={bottle.name} className="collection-bottle flex flex-col items-center py-6" data-delay={index * 120}>
            <img
              src={`/images/${bottle.img}`}
              alt={bottle.alt}
              className="bottle-img w-[80%] md:w-[85%] max-w-85 object-contain drop-shadow-2xl"
            />
            <div className="w-full px-4 pt-5 text-center">
              <h3 className="font-display italic text-2xl md:text-3xl text-white leading-tight">
                <br />
                {bottle.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
