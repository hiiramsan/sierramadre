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
            <p className="font-serif-elegant uppercase tracking-[0.35em] text-lg text-black/70">Contacto</p>
            <h2 className="font-display italic text-5xl md:text-6xl leading-tight mt-3">Estamos para servirte</h2>
            <p className="font-serif-elegant text-xl text-black/80 mt-5 max-w-xl leading-relaxed">
              Escríbenos para pedidos, eventos o colaboraciones. Te respondemos rápido y con atención personalizada.
            </p>

            <div className="mt-8 space-y-3 text-base md:text-lg">
              <p>
                <span className="font-semibold">Teléfono:</span>{" "}
                <a className="underline underline-offset-4 hover:opacity-70" href="tel:+526441234567">+52 644 123 4567</a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a className="underline underline-offset-4 hover:opacity-70" href="mailto:hola@bacanorasierramadre.com">ventas@bacanorasierramadre.com</a>
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
              <li><a className="underline underline-offset-4 hover:opacity-70 text-lg" href="#hero-section">Inicio</a></li>
              <li><a className="underline underline-offset-4 hover:opacity-70 text-lg" href="#story-section">Nuestra historia</a></li>
              <li><a className="underline underline-offset-4 hover:opacity-70 text-lg" href="#collection-section">Colección</a></li>
              <li><a className="underline underline-offset-4 hover:opacity-70 text-lg" href="#contact-section">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display italic text-2xl">Síguenos</h4>
            <p className="font-serif-elegant text-black/75 mt-4 leading-relaxed text-lg">Conecta con nosotros en redes sociales.</p>
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center w-10 h-10 border border-black/30 bg-black hover:text-white transition-colors"
              >
                <svg className="w-6 h-6 bg-black text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                </svg>

              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center justify-center w-10 h-10 border border-black/30 bg-black hover:text-white transition-colors"
              >
                <svg className="w-6 h-6 text-text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                </svg>

              </a>
              <a
                href="https://wa.me/526441234567"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="inline-flex items-center justify-center w-10 h-10 border border-black/30 bg-black hover:text-white transition-colors"
              >
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path fill="currentColor" fill-rule="evenodd" d="M12 4a8 8 0 0 0-6.895 12.06l.569.718-.697 2.359 2.32-.648.379.243A8 8 0 1 0 12 4ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.96 9.96 0 0 1-5.016-1.347l-4.948 1.382 1.426-4.829-.006-.007-.033-.055A9.958 9.958 0 0 1 2 12Z" clip-rule="evenodd" />
                  <path fill="currentColor" d="M16.735 13.492c-.038-.018-1.497-.736-1.756-.83a1.008 1.008 0 0 0-.34-.075c-.196 0-.362.098-.49.291-.146.217-.587.732-.723.886-.018.02-.042.045-.057.045-.013 0-.239-.093-.307-.123-1.564-.68-2.751-2.313-2.914-2.589-.023-.04-.024-.057-.024-.057.005-.021.058-.074.085-.101.08-.079.166-.182.249-.283l.117-.14c.121-.14.175-.25.237-.375l.033-.066a.68.68 0 0 0-.02-.64c-.034-.069-.65-1.555-.715-1.711-.158-.377-.366-.552-.655-.552-.027 0 0 0-.112.005-.137.005-.883.104-1.213.311-.35.22-.94.924-.94 2.16 0 1.112.705 2.162 1.008 2.561l.041.06c1.161 1.695 2.608 2.951 4.074 3.537 1.412.564 2.081.63 2.461.63.16 0 .288-.013.4-.024l.072-.007c.488-.043 1.56-.599 1.804-1.276.192-.534.243-1.117.115-1.329-.088-.144-.239-.216-.43-.308Z" />
                </svg>

              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display italic text-2xl">Email</h4>
            <ul className="font-serif-elegant text-black/80 mt-4 space-y-2 break-all">
              <li><a className="underline underline-offset-4 hover:opacity-70 text-lg" href="mailto:ventas@bacanorasierramadre.com">ventas@bacanorasierramadre.com</a></li>
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