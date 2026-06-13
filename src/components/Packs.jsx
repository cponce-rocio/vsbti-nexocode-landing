export default function Packs() {
  return (
    <section className="section">
      <div className="container center">
        <h2>Nuestros Packs · Next Level</h2>

        <div className="packs">

          <div className="pack reveal" style={{ "--delay": "0s" }}>
            <h3>Mini-Taller Pro</h3>
            <span>USD 499 · EUR 469</span>
            <p>
              Convierte tu chispa de talento en un mini-taller exprés que
              empieza a transformar tu mundo y el de otros.
            </p>
            <button className="btn-primary small">
              ¡Activa tu Mini-Taller!
            </button>
          </div>

          <div className="pack featured reveal" style={{ "--delay": "0.15s" }}>
            <h3>Curso Profesional</h3>
            <span>USD 1.299 · EUR 1.219</span>
            <p>
              Transforma tu experiencia en un curso completo que educa,
              inspira y conecta con quienes necesitan tu conocimiento.
            </p>
            <button className="btn-primary small">
              ¡Crea tu curso!
            </button>
          </div>

          <div className="pack reveal" style={{ "--delay": "0.3s" }}>
            <h3>Taller Llave en Mano</h3>
            <span>USD 2.499 · EUR 2.299</span>
            <p>
              Un sistema completo que toma tu talento y lo convierte en
              resultados inmediatos y escalables.
            </p>
            <button className="btn-primary small">
              ¡Llévalo al mundo!
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
