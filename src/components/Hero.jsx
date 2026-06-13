import nexocode from "../assets/nexocode.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Tu talento merece brillar</h1>
        <p>
          Convierte tu conocimiento en un legado digital que cambia vidas.
        </p>
        <p className="hero-sub">
          Aquí no solo estructuramos tu idea, la transformamos en un producto
          digital profesional listo para impactar, inspirar y escalar
          globalmente.
        </p>

        <button className="cta">
          Empieza tu transformación ahora →
        </button>
      </div>

      <div className="hero-image">
        <img src={nexocode} alt="Nexocode" />
      </div>
    </section>
  );
}
