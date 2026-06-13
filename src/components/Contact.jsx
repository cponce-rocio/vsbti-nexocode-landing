export default function Contact() {
  return (
    <section
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        background: "var(--card)",
        padding: "48px",
        borderRadius: "20px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.08)"
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "24px" }}>
        Hablemos de tu proyecto
      </h2>

      <input
        type="text"
        placeholder="Nombre"
        style={{ width: "100%", marginBottom: "16px", padding: "14px" }}
      />

      <input
        type="email"
        placeholder="Email"
        style={{ width: "100%", marginBottom: "16px", padding: "14px" }}
      />

      <textarea
        placeholder="Contanos brevemente tu idea"
        style={{ width: "100%", marginBottom: "24px", padding: "14px" }}
      />

      <button style={{ width: "100%" }}>
        Enviar mensaje
      </button>
    </section>
  );
}
