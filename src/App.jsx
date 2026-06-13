import React from "react";
import Home from "./pages/Home";
import Formulario from "./pages/Formulario";
import Checkout from "./pages/Checkout";

import es from "./i18n/es";
import en from "./i18n/en";
import { HashRouter, Routes, Route } from "react-router-dom";

const lang = navigator.language.startsWith("en") ? en : es;

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home t={lang} />} />
        <Route path="/activacion" element={<Formulario />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </HashRouter>
  );
}
