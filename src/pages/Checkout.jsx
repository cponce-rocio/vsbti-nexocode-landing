import { useSearchParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Checkout() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const selectedPack = searchParams.get("pack") || "kit";
    const currency = searchParams.get("currency") || "EUR"; // moneda por defecto
  const country = searchParams.get("country") || "ES";    // país por defecto

  const packLinks = {
    kit: {
      USD: { default: "https://buy.stripe.com/test_kit123abc" },
      EUR: { default: "https://buy.stripe.com/test_kit_eur123" },
    },
    minitaller: {
      USD: { default: "https://buy.stripe.com/test_minitaller123" },
      EUR: { default: "https://buy.stripe.com/test_minitaller_eur123" },
    },
    curso: {
      USD: { default: "https://buy.stripe.com/test_curso123" },
      EUR: { default: "https://buy.stripe.com/test_curso_eur123" },
    },
    premium: {
      USD: { default: "https://buy.stripe.com/test_premium123" },
      EUR: { default: "https://buy.stripe.com/test_premium_eur123" },
    },
    estrella: {
      USD: { default: "https://buy.stripe.com/test_estrella123" },
      EUR: { default: "https://buy.stripe.com/test_estrella_eur123" },
    },
  };

  const packPrices = {
    kit: { USD: "USD 499", EUR: "€449" },
    minitaller: { USD: "USD 997", EUR: "€897" },
    curso: { USD: "USD 1.997", EUR: "€1.797" },
    premium: { USD: "USD 5.990", EUR: "€5.390" },
    estrella: { USD: "Desde USD 6.990", EUR: "Desde €6.290" },
  };
  const packTitles = {
    kit: "Kit Activador",
    minitaller: "MiniTaller Exprés",
    curso: "Curso Profesional",
    premium: "Pack Premium",
    estrella: "Producto Estrella",
  };

  useEffect(() => {
    const link = packLinks[selectedPack];

    if (!link || link === "#") {
      // Redirige al Home si no hay link
      navigate("/");
    } else {
      // Abre Stripe automáticamente en la misma pestaña
      window.location.href = link;
    }
  }, [selectedPack, navigate, packLinks]);

  // Opcional: mientras se redirige, muestra algo
  return (
    <main className="checkout-page">
      <section className="section">
        <div className="container card center">
          <h1>Redirigiendo al pago de {packTitles[selectedPack]}...</h1>
          <p>Si no se redirige automáticamente, haz clic aquí:</p>
          <a href={packLinks[selectedPack]} className="btn-primary">
            💳 Finalizar compra
          </a>
        </div>
      </section>
    </main>
  );
}
