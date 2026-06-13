export default function Formulario({ t }) {
  return (
    <section>
      <div className="form-wrapper">
        <h2>{t.formTitle}</h2>

        <form>
          <input placeholder="Nombre" />
          <input placeholder="Email" />
          <textarea placeholder="Contanos brevemente tu idea o proyecto" />
          <button type="submit">{t.submit}</button>
        </form>
      </div>
    </section>
  );
}
