import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <App />
  </StrictMode>
);
