import { useState, useEffect } from "react";
import "../styles/formulario.css";
import * as emailjs from "@emailjs/browser";
import { 
  User, Puzzle, Lightbulb, Target, 
  TrendingUp, ShieldCheck, Wrench, Send 
} from "lucide-react";

export default function Formulario() {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    pais: "",
    profesion: "",
    situacion: [],
    talento: "",
    proposito: [],
    vision: "",
    compromiso: "",
    acompanamiento: [],
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const current = prev[name] || [];
        return checked
          ? { ...prev, [name]: [...current, value] }
          : { ...prev, [name]: current.filter((v) => v !== value) };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      situacion: formData.situacion.join(", "),
      proposito: formData.proposito.join(", "),
      acompanamiento: formData.acompanamiento.join(", "),
    };

    emailjs
      .send(
        "service_40reqcm",
        "template_8ebc98j",
        templateParams,
        "my9eQQUadvbh8GqOR"
      )
      .then(() => alert("Formulario enviado correctamente ✨"))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <main className="main-layout">
      <div className="container-pro">

        {/* HEADER */}
        <section className="reveal header-impact">
          <span className="highlight-tag">Detente un momento</span>

          <h1 className="impact-title">
            Activa tu talento.
            <br />
            <span>Comencemos con claridad.</span>
          </h1>

          <p className="p-intro">
            Este formulario nos permite comprender tu punto de partida
            y acompañarte de forma <strong>consciente, ética y profesional.</strong>
          </p>

          <div className="cards-row">
            {[
              { num: "01", text: "Reconocer dónde estás hoy", clase: "etapa-1" },
              { num: "02", text: "Comprender qué quieres construir", clase: "etapa-2" },
              { num: "03", text: "Proyectar con estructura real", clase: "etapa-3" },
            ].map((step, i) => (
              <div key={i} className={`mini-card ${step.clase}`}>
                <span className="step-num">{step.num}</span>
                <p>{step.text}</p>
              </div>
            ))}
          </div>

          <div className="intro-closing">
            <p>Respira!</p>
            <p>...Lee con calma</p>
            <p>Responde con honestidad</p>
          </div>
        </section>

        <form onSubmit={handleSubmit} className="reveal form-premium">

          {/* BLOQUE 1 */}
          <div className="form-section">
            <div className="section-title info">
              <User size={20} />
              <h2>Datos básicos</h2>
            </div>

            <div className="grid-inputs">
              <div className="input-group">
                <label>Nombre completo</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>

              <div className="input-group">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nombre@email.com"
                  required
                />
              </div>

              <div className="input-group">
                <label>País / Zona horaria</label>
                <input
                  type="text"
                  name="pais"
                  value={formData.pais}
                  onChange={handleChange}
                  placeholder="Ej: España (CET)"
                />
              </div>

              <div className="input-group">
                <label>Profesión o actividad</label>
                <input
                  type="text"
                  name="profesion"
                  value={formData.profesion}
                  onChange={handleChange}
                  placeholder="¿A qué te dedicas?"
                />
              </div>
            </div>
          </div>

          {/* BLOQUE 2 */}
          <div className="form-section">
            <div className="section-title diagnostico">
              <Puzzle size={20} />
              <h2>Punto de partida</h2>
            </div>

            <p className="question-text">
              Hoy, ¿en qué situación te encuentras?
            </p>

            <div className="selection-group">
              {[
                "Tengo conocimiento, pero no lo he estructurado",
                "Tengo una idea, pero no sé cómo convertirla en producto",
                "Ya tengo contenido, pero está desordenado",
                "Quiero profesionalizar lo que ya hago",
                "Siento que tengo talento, pero no logro proyectarlo",
              ].map((op, i) => (
                <label
                  key={i}
                  className={`custom-option ${
                    formData.situacion.includes(op) ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="situacion"
                    value={op}
                    checked={formData.situacion.includes(op)}
                    onChange={handleChange}
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          {/* BLOQUE 3 */}
          <div className="form-section">
            <div className="section-title talento">
              <Lightbulb size={20} />
              <h2>Tu talento / conocimiento</h2>
            </div>

            <div className="input-group">
              <label className="text-area-label">
                ¿Qué talento deseas convertir en producto digital?
              </label>

              <textarea
                name="talento"
                value={formData.talento}
                onChange={handleChange}
                placeholder="Habilidad, método propio o conocimiento profesional..."
              />
            </div>
          </div>

          {/* BLOQUE 4 */}
          <div className="form-section">
            <div className="section-title impacto">
              <Target size={20} />
              <h2>Intención / Impacto</h2>
            </div>

            <div className="selection-group grid-2">
              {["Claridad", "Transformación", "Aprendizaje", "Acompañamiento", "Cambio de perspectiva"].map((op, i) => (
                <label
                  key={i}
                  className={`custom-option ${
                    formData.proposito.includes(op) ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="proposito"
                    value={op}
                    checked={formData.proposito.includes(op)}
                    onChange={handleChange}
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          {/* BLOQUE 5 */}
          <div className="form-section">
            <div className="section-title vision">
              <TrendingUp size={20} />
              <h2>Visión de crecimiento</h2>
            </div>

            <select
              name="vision"
              value={formData.vision}
              onChange={handleChange}
              className="styled-select"
            >
              <option value="">Selecciona tu meta final</option>
              <option value="dar el primer paso">Dar el primer paso</option>
              <option value="crear un producto profesional sólido">
                Crear un producto profesional sólido
              </option>
              <option value="construir una escalera de valor">
                Construir una escalera de valor
              </option>
              <option value="posicionarme como referente">
                Posicionarme como referente
              </option>
              <option value="desarrollar un proyecto integral y escalable">
                Proyecto integral y escalable
              </option>
            </select>
          </div>

          {/* BLOQUE 6 */}
          <div className="form-section">
            <div className="section-title compromiso">
              <ShieldCheck size={20} />
              <h2>Nivel de compromiso</h2>
            </div>

            <div className="selection-group">
              {[
                "Estoy listo/a para comenzar ahora",
                "Necesito guía y estructura",
                "Quiero acompañamiento profesional",
              ].map((op, i) => (
                <label
                  key={i}
                  className={`custom-option ${
                    formData.compromiso === op ? "active" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="compromiso"
                    value={op}
                    checked={formData.compromiso === op}
                    onChange={handleChange}
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          {/* BLOQUE 7 */}
          <div className="form-section">
            <div className="section-title estrategia">
              <Wrench size={20} />
              <h2>Elección orientativa</h2>
            </div>

            <div className="selection-group grid-2">
              {[
                "Kit Activador",
                "MiniTaller Exprés",
                "Curso Profesional",
                "Pack Premium",
                "Producto Estrella",
                "Necesito orientación",
              ].map((op, i) => (
                <label
                  key={i}
                  className={`custom-option ${
                    formData.acompanamiento.includes(op) ? "active" : ""
                  }`}
                >
                  <input
                    type="checkbox"
                    name="acompanamiento"
                    value={op}
                    checked={formData.acompanamiento.includes(op)}
                    onChange={handleChange}
                  />
                  {op}
                </label>
              ))}
            </div>
          </div>

          <section className="final-message-card">
            <p>
              <strong>Gracias por compartir tu visión.</strong>
              <br />
              Tu talento merece estructura, respeto y proyección real.
            </p>
          </section>

          <button type="submit" className="btn-impact-main">
            Enviar y dar el primer paso <Send size={18} />
          </button>
        </form>
      </div>
    </main>
  );
}