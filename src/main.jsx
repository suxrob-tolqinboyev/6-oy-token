import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { NameProvider } from "./components/context/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <NameProvider>
      <App />
      </NameProvider>
    </BrowserRouter>
  </StrictMode>
);
