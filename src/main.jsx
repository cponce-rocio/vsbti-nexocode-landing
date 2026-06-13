import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { LangProvider } from "./context/LangContext";
import "./styles/global.css";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </React.StrictMode>
);
