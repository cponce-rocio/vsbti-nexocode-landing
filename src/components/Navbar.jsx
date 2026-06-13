import { useContext } from "react";
import { LangContext } from "../context/LangContext";

export default function Navbar() {
  const { lang, setLang } = useContext(LangContext);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <span className="navbar-badge">
          VSBTI & NEXOCODE · NEXT LEVEL
        </span>

        <button
          className="lang-switch"
          onClick={() => setLang(lang === "es" ? "en" : "es")}
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </header>
  );
}
