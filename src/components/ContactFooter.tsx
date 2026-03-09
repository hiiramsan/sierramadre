export default function ContactFooter() {
  return (
    <section id="contact-section" className="w-full bg-white text-black border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 md:pt-20 pb-4 md:pb-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          <div className="md:pl-10">
            <img
              src="/images/bottleserving2.png"
              alt="Bacanora servido en copa"
              className="w-full max-w-150 md:ml-auto h-auto object-cover"
            />
          </div>
          
          <div>
            <p className="font-serif-elegant uppercase tracking-[0.35em] text-sm text-black/70">Contacto</p>
            <h2 className="font-display italic text-5xl md:text-6xl leading-tight mt-3">Estamos para servirte</h2>
            <p className="font-serif-elegant text-lg text-black/80 mt-5 max-w-xl leading-relaxed">
              Escríbenos para pedidos, eventos o colaboraciones. Te respondemos rápido y con atención personalizada.
            </p>

            <div className="mt-8 space-y-3 text-base md:text-lg">
              <p>
                <span className="font-semibold">Teléfono:</span>{" "}
                <a className="underline underline-offset-4 hover:opacity-70" href="tel:+526441234567">+52 644 123 4567</a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a className="underline underline-offset-4 hover:opacity-70" href="mailto:hola@bacanorasierramadre.com">hola@bacanorasierramadre.com</a>
              </p>
            </div>
          </div>

          
        </div>

        <div className="mt-14 border-t border-black/15 pt-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* <div>
            <h4 className="font-display italic text-2xl">Visítanos</h4>
            <p className="font-serif-elegant text-black/75 mt-4 leading-relaxed">
              Calle Principal 21,<br />
              Yécora, Sonora,<br />
              México
            </p>
            <p className="font-serif-elegant text-black/75 mt-4 leading-relaxed">
              Lun-Vie: 9:00 - 18:00<br />
              Sáb: 10:00 - 14:00
            </p>
          </div> */}

          <div>
            <h4 className="font-display italic text-2xl">Enlaces rápidos</h4>
            <ul className="font-serif-elegant text-black/80 mt-4 space-y-2">
              <li><a className="underline underline-offset-4 hover:opacity-70" href="#hero-section">Inicio</a></li>
              <li><a className="underline underline-offset-4 hover:opacity-70" href="#story-section">Nuestra historia</a></li>
              <li><a className="underline underline-offset-4 hover:opacity-70" href="#collection-section">Colección</a></li>
              <li><a className="underline underline-offset-4 hover:opacity-70" href="#contact-section">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display italic text-2xl">Síguenos</h4>
            <p className="font-serif-elegant text-black/75 mt-4 leading-relaxed">Conecta con nosotros en redes sociales.</p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 border border-black/30 hover:bg-black hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-10 h-10 border border-black/30 hover:bg-black hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M14.5 8H17V5h-2.5C11.9 5 10 6.9 10 9.5V12H8v3h2v4h3v-4h2.5l.5-3H13V9.5c0-.9.6-1.5 1.5-1.5Z" />
                </svg>
              </a>
              <a
                href="https://wa.me/526441234567"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 border border-black/30 hover:bg-black hover:text-white transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M20 11.7c0 4.6-3.7 8.3-8.3 8.3a8.3 8.3 0 0 1-4-1L4 20l1.1-3.5a8.3 8.3 0 1 1 14.9-4.8Z" />
                  <path d="M9 9.7c.2 1 1.3 2.9 3.2 4.1 1.2.8 2.2.9 2.8.5l1-.9" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display italic text-2xl">Emails</h4>
            <ul className="font-serif-elegant text-black/80 mt-4 space-y-2 break-all">
              <li><a className="underline underline-offset-4 hover:opacity-70" href="mailto:ventas@bacanorasierramadre.com">ventas@bacanorasierramadre.com</a></li>
              <li><a className="underline underline-offset-4 hover:opacity-70" href="mailto:hola@bacanorasierramadre.com">hola@bacanorasierramadre.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-black/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 text-sm text-black/60">
          <p>© 2026 Bacanora Sierra Madre.</p>
          <p>Todos los derechos reservados.</p>
        </div>
      </div>
    </section>
  );
}