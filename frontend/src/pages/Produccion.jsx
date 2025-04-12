import React, { useState, useEffect } from "react";
import "../scss/layout/_produccion.scss";
import { getObrasProduccion } from "../api";
import ProduccionCard from "../components/card/produccionCard";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const itemsPerPage = 8;

export default function Produccion() {
  const [obras, setObras] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    getObrasProduccion()
      .then(setObras)
      .catch((err) => console.error("Error al cargar obras en producción:", err));
  }, []);

  const totalPages = Math.ceil(obras.length / itemsPerPage);

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleObras = obras.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage);

  return (

    <>
    <Navbar />
    <section className="produccion" id="produccion">
      <h2 className="produccion-titulo">EN PRODUCCIÓN</h2>

      <div className="carrusel-controles">
        <button className="btn-carrusel" onClick={handlePrev}>&lt;</button>

        <div className="produccion-grid">
          {visibleObras.map((obra) => (
            <ProduccionCard
              key={obra.id}
              titulo={obra.titulo}
              sinopsis={obra.sinopsis}
              imgURL={obra.imgURL}
            />
          ))}
        </div>

        <button className="btn-carrusel" onClick={handleNext}>&gt;</button>
      </div>
    </section>
    <Footer />      
    </>
    
  );
}
