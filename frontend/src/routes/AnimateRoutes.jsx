import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Importa tus páginas
import Home from "../pages/Home";
import Estreno from "../components/Estreno";
import HistoriaLanding from "../pages/HistoriaLanding";
import Repertorio from "../pages/Repertorio";
import Equipo from "../pages/Equipo";
import Produccion from "../pages/Produccion";
import CompraEntradas from "../pages/CompraEntradas";
import BlogDetalle from "../pages/BlogDetalle";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/entradas" element={<CompraEntradas />} />
        <Route path="/estreno/:id" element={<Estreno />} />        
        <Route path="/historia" element={<HistoriaLanding />} />
        <Route path="/repertorio" element={<Repertorio />} />
        <Route path="/equipo" element={<Equipo />} />
        <Route path="/produccion" element={<Produccion />} />
        <Route path="/blog/:id" element={<BlogDetalle />} />
      </Routes>
    </AnimatePresence>
  );
}
