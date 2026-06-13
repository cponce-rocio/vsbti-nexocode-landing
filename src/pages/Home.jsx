import { useEffect, useContext, useState } from "react";
import vsbti from "../assets/vsbti.png";
import "../styles/global.css";
import { LangContext } from "../context/LangContext";
import { useTrafficSource } from "../hooks/useTrafficSource";

import kitImg from "../packs/kit.webp";
import minitallerImg from "../packs/minitaller.webp";
import profesionalImg from "../packs/profesional.webp";
import premiumImg from "../packs/premium.webp";
import estrellaImg from "../packs/estrella.webp";
import portadaImg from "../packs/portada.webp";
import productoDigitalesImg from "../packs/productosdigitales.webp";
import { useNavigate } from "react-router-dom";



export default function Home() {
  const { t } = useContext(LangContext);
  const source = useTrafficSource();
  const [activePack, setActivePack] = useState(null);
  const [zoomImage, setZoomImage] = useState(null);
  const navigate = useNavigate();

  const getCurrencyByCountry = (country) => {
  switch(country) {
    case "AR": return "ARS";
    case "CO": return "COP";
    case "ES": return "EUR";
    default: return "EUR";
  }
};


  /* Reveal animation */
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    

    elements.forEach(el => observer.observe(el));
  }, []);

  // =====> Aquí agregas el efecto para Esc
useEffect(() => {
  const handleEsc = (event) => {
    if (event.key === "Escape") {
      setZoomImage(null);
    }
  };

  window.addEventListener("keydown", handleEsc);

  return () => {
    window.removeEventListener("keydown", handleEsc);
  };
}, []);

  const scrollToPacks = () => {
    document.getElementById("packs-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const packDetails = {
    kit: {
      title: "Kit Activador de Talento Digital",
      description:
        "Convierte tu experiencia, talento o historia en tu primer producto digital profesional listo para vender",
      includes: [
        "E-book Kindle profesional listo para publicar",
        "Cuaderno / Workbook editable",
        "Planner de 7 días orientado a acción",
        "Guía Ikigai + Escalera de Valor",
      ],
      investment: "USD 499 · EUR 499",
      action: "stripe",
        stripeUrl: {
        USD: "https://buy.stripe.com/7sY14m7ZJ41yeOZ4225EY00",
        EUR: "https://buy.stripe.com/7sY14m7ZJ41yeOZ4225EY00",
        COP: "https://buy.stripe.com/7sY14m7ZJ41yeOZ4225EY00",
        ARS: "https://buy.stripe.com/7sY14m7ZJ41yeOZ4225EY00",
       /* USDprueba: "https://buy.stripe.com/test_aFaaEZ1tq3De6vy5RT4Vy00",*/
       
  },
    },
    minitaller: {
      title: "MiniTaller Exprés Pro",
      description:
        "Transforma una idea o conocimiento en tu primer producto estructurado y operativo.",
      includes: [
        "MiniTaller Exprés estructurado",
        "Escalera de valor inicial",
        "Hosting del producto",
        "Estrategia orgánica básica",
      ],
      investment: "USD 997 · EUR 997",
      action: "stripe",
        stripeUrl: {
        USD: "https://buy.stripe.com/aFa3cugwf41ydKV8ii5EY01",
        EUR: "https://buy.stripe.com/aFa3cugwf41ydKV8ii5EY01",
        COP: "https://buy.stripe.com/aFa3cugwf41ydKV8ii5EY01",
        ARS: "https://buy.stripe.com/aFa3cugwf41ydKV8ii5EY01",
  },
    },
    curso: {
      title: "Curso Profesional de Alto Nivel",
      description:
        "Ordena, profundiza y proyecta tu conocimiento en un curso profesional con impacto real.",
      includes: [
        "Curso completo estructurado",
        "Guía maestra + portada",
        "Cuaderno emocional",
        "Planner 7 días",
        "Landing page + Hosting",
      ],
      investment: "USD 1.997 · EUR 1.997",
      action: "stripe",
        stripeUrl: {
        USD: "https://buy.stripe.com/3cI14m2Fp7dK8qB8ii5EY02",
        EUR: "https://buy.stripe.com/3cI14m2Fp7dK8qB8ii5EY02",
        COP: "https://buy.stripe.com/3cI14m2Fp7dK8qB8ii5EY02",
        ARS: "https://buy.stripe.com/3cI14m2Fp7dK8qB8ii5EY02",
  },
    },
    premium: {
      title: "Pack Premium · Sistema Completo",
      description:
        "Tu conocimiento funcionando como un sistema completo de impacto y monetización.",
      includes: [
        "E-book + Curso + MiniTaller",
        "Cuaderno emocional + Planner",
        "Escalera de valor completa",
        "Embudo evergreen orgánico",
        "Landing page profesional",
        "Hosting + Estrategia de monetización",
      ],
      investment: "USD 5.990 · EUR 5.990",
      action: "stripe",
        stripeUrl: {
        USD: "https://buy.stripe.com/6oUfZgcfZ9lS8qBdCC5EY03/",
        EUR: "https://buy.stripe.com/6oUfZgcfZ9lS8qBdCC5EY03",
        COP: "https://buy.stripe.com/6oUfZgcfZ9lS8qBdCC5EY03",
        ARS: "https://buy.stripe.com/6oUfZgcfZ9lS8qBdCC5EY03",
  },
    },
    estrella: {
      title: "Producto Estrella · Arquitectura Personalizada",
      description:
        "Diseñamos contigo un proyecto único, escalable y totalmente alineado a tu visión.",
      includes: [
        "Todos los productos del Pack Premium",
        "Arquitectura personalizada",
        "Acompañamiento estratégico",
        "Sistema escalable global",
      ],
      investment: "Desde USD 6.990",
      action: "stripe",
       stripeUrl: {
        USD: "https://buy.stripe.com/dRmaEW93N8hO22d4225EY04",
        EUR: "https://buy.stripe.com/dRmaEW93N8hO22d4225EY04",
        COP: "https://buy.stripe.com/dRmaEW93N8hO22d4225EY04",
        ARS: "https://buy.stripe.com/dRmaEW93N8hO22d4225EY04",
  },
    },
  };

  const packs = [
    { key: "kit", title: "Kit Activador", img: kitImg },
    { key: "minitaller", title: "MiniTaller Exprés Pro", img: minitallerImg },
    { key: "curso", title: "Curso Profesional", img: profesionalImg },
    { key: "premium", title: "Pack Premium", img: premiumImg },
    { key: "estrella", title: "Producto Estrella", img: estrellaImg },
  ];

  const handleStripePayment = (packKey) => {
  const currency = getCurrencyByCountry(source.countryCode); // source viene de useTrafficSource()
  const url = packDetails[packKey].stripeUrl[currency] || packDetails[packKey].stripeUrl.USD;
  window.open(url, "_blank");
};

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero-premium hero-international">
        <div className="hero-glow"></div>

        <div className="container hero-text reveal">
      <div className="hero-mockup">
        <img src={portadaImg} alt="Portada VSBTI Nexocode" />
      </div>

          <h1>
            Tu conocimiento no nació para quedarse guardado.
            <span>
              Nació para tomar forma, impactar y dejar huella.
            </span>
          </h1>

          <p className="lead">
            Convertimos tu talento, experiencia o propósito
            en productos digitales profesionales,
            con estructura, estrategia y sentido humano.
            <br /><br />
            Aquí no improvisas.
            Aquí activas, ordenas y proyectas lo que sabes.
          </p>

          <p className="positioning">
            No vendemos promesas. Diseñamos acción estructurada.
          </p>

          <button
            className="btn-primary hero-cta"
            onClick={scrollToPacks}
          >
            👉 Quiero dar forma a mi talento
          </button>
        </div>
      </section>


      {/* ================= IDENTIFICACIÓN PREMIUM ================= */}
      <section className="section identification-premium">
        <div className="container identification-wrapper reveal">

          <div className="identification-visual">
            <div className="visual-card main">
            <img
              src={productoDigitalesImg}
              alt="Productos Digitales"
            />
          </div>
       
        </div>
                  <div className="identification-content">

            <span className="section-tag">
              ACTIVACIÓN CONSCIENTE
            </span>

            <h2>
              Esto es para ti si estás listo/a
              <span> para ordenar lo que ya vive dentro de ti.</span>
            </h2>

            <div className="professional-list">

              <div className="pro-item">
                <div className="pro-icon">01</div>
                <p>
                  Sientes que sabes mucho,
                  pero tu conocimiento está disperso
                  y sin estructura estratégica.
                </p>
              </div>

              <div className="pro-item">
                <div className="pro-icon">02</div>
                <p>
                  Tienes talento, experiencia o vocación
                  y aún no logras convertirlo en un producto real,
                  claro y profesional.
                </p>
              </div>

              <div className="pro-item">
                <div className="pro-icon">03</div>
                <p>
                  Deseas impactar vidas sin perder ética,
                  profundidad ni coherencia interna.
                </p>
              </div>

              <div className="pro-item">
                <div className="pro-icon">04</div>
                <p>
                  Buscas orden, claridad y estructura.
                  <strong> No humo. No ruido.</strong>
                </p>
              </div>

              <div className="pro-item">
                <div className="pro-icon">05</div>
                <p>
                  Estás listo/a para pasar
                  del pensamiento a la acción concreta.
                </p>
              </div>

            </div>

            <div className="guidance-premium">
              👉 Aquí no te empujamos. Te guiamos con estructura.
            </div>

          </div>
        </div>
      </section>


      {/* ================= PACKS ================= */}
      <section className="section" id="packs-section">
        <div className="container">
          <h2 className="center reveal">Inversión en tu Talento</h2>

          <div className="packs">
            {packs.map(pack => (
              <div className="pack reveal" key={pack.key}>
                <h3 className="pack-title">{pack.title}</h3>

              <div className="pack-image">
              <img
                src={pack.img}
                alt={pack.title}
                onDoubleClick={() => setZoomImage(pack.img)}
                style={{ cursor: "zoom-in" }}
              />
            </div>


                <div className="pack-content">
                  <p className="impact">
                    {packDetails[pack.key].description}
                  </p>

                  <button
                    className="btn-primary small"
                    onClick={() => setActivePack(pack.key)}
                  >
                    👉 Ver detalles
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= MODAL ================= */}
      {activePack && (
        <div className="modal-overlay" onClick={() => setActivePack(null)}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <h2>{packDetails[activePack].title}</h2>
            <p>{packDetails[activePack].description}</p>

            <ul>
              {packDetails[activePack].includes.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>

            <p className="investment">
              <strong>Inversión</strong><br />
              {packDetails[activePack].investment}
            </p>

          {packDetails[activePack].action === "stripe" ? (
          <button className="btn-primary" onClick={() => handleStripePayment(activePack)}>
            💳 Continuar a pago
          </button>
        ) : (
          <a
            href="https://wa.me/549XXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            💬 Hablar por WhatsApp
          </a>
        )}

            <button
              className="btn-secondary small"
              onClick={() => setActivePack(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    {zoomImage && (
      <div
        className="modal-overlay"
        onClick={() => setZoomImage(null)}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <img
            src={zoomImage}
            alt="Zoom Pack"
            style={{
              maxWidth: "90vw",
              maxHeight: "90vh",
              borderRadius: "20px",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
    )}


      {/* ================= CIERRE ================= */}
      <section className="section dark">
        <div className="container center reveal">

          <h2 className="closing-title">
            Tu talento no es casual.
            <br />
            Tu experiencia no es azar.
          </h2>

          <p className="lead closing-lead">
            Tu conocimiento pide forma, orden y expansión.
            <br /><br />
            Este es el momento donde dejas de guardar lo que sabes
            y empiezas a ofrecerlo al mundo
            con dignidad, estructura y verdad.
          </p>
      <p className="lead contacto-lead">
        Conectemos y demos claridad a tu proyecto digital:<br />

        {/* WhatsApp con icono verde al principio */}
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "10px" }}>
          <img 
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" 
            alt="WhatsApp" 
            style={{ width: "18px", height: "18px", filter: "invert(62%) sepia(88%) saturate(374%) hue-rotate(85deg) brightness(101%) contrast(106%)" }} 
          />
          <strong>WhatsApp:</strong>
          <a 
            href="https://wa.me/34635210757" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blanco"
            style={{ textDecoration: "none", marginLeft: "4px" }}
          >
            +34 635 210 757
          </a>
        </span>
        <br />

        {/* Email con icono de sobre rojo al principio */}
        <span style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
          <img 
            src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" 
            alt="Email" 
            style={{ width: "18px", height: "18px", filter: "invert(24%) sepia(91%) saturate(6382%) hue-rotate(352deg) brightness(96%) contrast(108%)" }} 
          />
          <strong>Email:</strong>
          <a 
            href="mailto:vsbti.vivianasaenz@gmail.com" 
            className="blanco"
            style={{ marginLeft: "4px", textDecoration: "none" }}
          >
            vsbti.vivianasaenz@gmail.com
          </a>
        </span>
        <br />
      </p>
      <button
        className="btn-primary hero-cta"
    onClick={() => navigate("/activacion")}
      >
        👉 Activa tu conocimiento hoy
      </button>

         {/* <img src={vsbti} alt="VSBTI" className="logo" /> */}
        </div>
      </section>
      {/* ================= DERECHOS / FOOTER ================= */}
      <footer className="footer dark reveal">
        <div className="container center">
          <p className="footer-text">
            © {new Date().getFullYear()} Todos los derechos reservados.<br />
            </p>

          <p className="footer-legal">
            <a href="/aviso-legal" className="blanco">Aviso Legal</a> · 
            <a href="/politica-privacidad" className="blanco">Política de Privacidad</a> · 
            <a href="/cookies" className="blanco">Política de Cookies</a>
          </p>
        </div>
      </footer>
    </main>
  );
}
