import React, { useEffect, useState } from "react";
import "../scss/layout/_repertorio.scss";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import ModalObra from "../components/ModalObra";
import RepertorioCard from "../components/card/RepertorioCard";
import { getObrasRepertorio } from "../api"; 


const itemsPerPage = 8;

export default function Repertorio() {
  const [pageIndex, setPageIndex] = useState(0);
  const [obras, setObras] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [contenidoModal, setContenidoModal] = useState({});

  const totalPages = Math.ceil(obras.length / itemsPerPage);

  useEffect(() => {
    getObrasRepertorio()
      .then((res) => {
        console.log("📚 Obras recibidas:", res);
        setObras(res);
      })
      .catch((err) => console.error("Error al cargar repertorio:", err));
  }, []);

  const abrirModal = (obra) => {
    setContenidoModal(obra);
    setModalAbierto(true);
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleObras = obras.slice(
    pageIndex * itemsPerPage,
    (pageIndex + 1) * itemsPerPage
  );

  return (
    <>
      <Navbar />
      <section className="repertorio" id="repertorio">
        <h2 className="repertorio-titulo">REPERTORIO</h2>

        <div className="carrusel-controles">
          <button className="btn-carrusel" onClick={handlePrev}>&lt;</button>

          <div className="repertorio-grid">
            {visibleObras.map((obra, index) => (
              <RepertorioCard
                key={index}
                titulo={obra.titulo}
                imgURL={obra.imgURL}
                directorArtistico={obra.directorArtistico}
                anio={obra.anio}
                onPerfilClick={() => abrirModal(obra)}
              />
            ))}
          </div>

          <button className="btn-carrusel" onClick={handleNext}>&gt;</button>
        </div>

        <ModalObra
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
          contenido={contenidoModal}
        />
      </section>
      <Footer />
    </>
  );
}
