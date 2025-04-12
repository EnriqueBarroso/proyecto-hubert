import React, { useRef, useEffect, useState } from "react";
import SalaTeatro from "../components/SalaTeatro";
import Origenes from "../components/Origenes";
import Actualidad from "../components/Actualidad";
import "../scss/layout/_historiaLanding.scss";
import { Link } from "react-router-dom";

export default function HistoriaLanding() {
  const salaRef = useRef(null);
  const origenesRef = useRef(null);
  const actualidadRef = useRef(null);

  const [seccionActiva, setSeccionActiva] = useState("sala");

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setSeccionActiva(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (salaRef.current) observer.observe(salaRef.current);
    if (origenesRef.current) observer.observe(origenesRef.current);
    if (actualidadRef.current) observer.observe(actualidadRef.current);

    return () => observer.disconnect();
  }, []);


  return (
    <section className="historia-landing">
      {/* Barra de navegación superior */}
      <div className="historia-navbar">
        <Link to="/" className="historia-logo">
          <img src="/src/img/logo.png" alt="logo" />
          <span>HUBERT DE BLANCK</span>
        </Link>

        <div className="historia-menu">
          <button onClick={() => scrollTo(salaRef)} className={seccionActiva === "sala" ? "active" : ""}>Sala</button>
          <button onClick={() => scrollTo(origenesRef)} className={seccionActiva === "origenes" ? "active" : ""}>Orígenes</button>
          <button onClick={() => scrollTo(actualidadRef)} className={seccionActiva === "actualidad" ? "active" : ""}>Actualidad</button>
        </div>
      </div>
      
      {/* Secciones scrollables */}
      <div id="sala" ref={salaRef}><SalaTeatro /></div>
      <div id="origenes" ref={origenesRef}><Origenes /></div>
      <div id="actualidad" ref={actualidadRef}><Actualidad /></div>

      <Link to="/" className="btn-volver">
         ⬅ Volver al inicio
        </Link>
    </section>
  );
}
