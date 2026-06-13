import { createContext, useState } from "react";
import es from "../lang/es";
import en from "../lang/en";

export const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState("es");

  const t = lang === "es" ? es : en;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}
