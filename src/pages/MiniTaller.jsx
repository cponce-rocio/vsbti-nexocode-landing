import "../styles/global.css";

export default function MiniTaller() {
  return (
    <main>

      {/* HERO */}
      <section className="hero hero-premium">
        <div className="hero-glow"></div>
        <div className="container">
          <div className="hero-text">

            <p className="eyebrow">MINITALLER EXPRÉS</p>

            <h1>
              Convierte tu conocimiento
              <span>en tu primer producto digital vendible</span>
            </h1>

            <p className="lead">
              En pocas semanas, pasás de idea difusa a un MiniTaller
              profesional, claro y listo para vender.
            </p>

            <button
              className="btn-primary hero-cta"
              onClick={() => window.location.href = "/checkout"}
            >
              🚀 Quiero crear mi MiniTaller
            </button>

          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="section soft">
        <div className="container center">
          <h2>¿Qué vas a lograr?</h2>

          <ul className="benefits">
            <li>Salir del bloqueo y ordenar tu conocimiento</li>
            <li>Crear un producto simple pero profesional</li>
            <li>Tener una oferta clara y vendible</li>
            <li>Publicar sin miedo ni perfeccionismo</li>
            <li>Dar tu primer paso real en el mundo digital</li>
          </ul>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="section">
        <div className="container center">
          <h2>Lo que dicen quienes ya lo hicieron</h2>

          <div className="packs">

            <div className="pack">
              <p>
                “Tenía mil ideas y cero estructura. El MiniTaller me dio
                claridad total y confianza para lanzarme.”
              </p>
              <strong>— Laura · España</strong>
            </div>

            <div className="pack featured">
              <p>
                “No es humo. Salís con algo concreto, real y usable.
                Fue el empujón que necesitaba.”
              </p>
              <strong>— Marcos · México</strong>
            </div>

            <div className="pack">
              <p>
                “Nunca pensé que podía convertir lo que sé en algo vendible.
                Hoy tengo mi primer producto online.”
              </p>
              <strong>— Sofía · Argentina</strong>
            </div>

          </div>
        </div>
      </section>

      {/* PRECIO */}
      <section className="section soft">
        <div className="container center">
          <h2>Acceso completo al MiniTaller Exprés</h2>

          <div className="pack featured" style={{ maxWidth: 420, margin: "40px auto" }}>
            <h3>MiniTaller Exprés</h3>
            <span>USD 997 · EUR 997</span>

            <ul className="benefits">
              <li>Diseño del MiniTaller</li>
              <li>Estructura clara y accionable</li>
              <li>Guía paso a paso</li>
              <li>Entrega profesional</li>
            </ul>

            <button
              className="btn-primary"
              onClick={() => window.location.href = "/checkout"}
            >
              👉 Ir al Checkout
            </button>

            <p className="small">
              Pago único · Acceso inmediato · Cupos limitados
            </p>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="section dark">
        <div className="container center">
          <h2>Este es tu primer paso real</h2>

          <p className="max">
            No necesitás tener todo resuelto.
            Necesitás empezar con dirección.
          </p>

          <button
            className="btn-primary"
            onClick={() => window.location.href = "/checkout"}
          >
            🌟 Empezar ahora
          </button>
        </div>
      </section>

    </main>
  );
}
