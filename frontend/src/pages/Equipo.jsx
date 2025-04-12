import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import "../scss/layout/_equipo.scss";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";
import ElencoActual from "../components/card/ElencoActual";
import { getActores } from "../api"; // 🔥 Desde la base de datos

const itemsPerPage = 8;

export default function Equipo() {
  const [actores, setActores] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Modal
  const [modalAbierto, setModalAbierto] = useState(false);
  const [contenidoModal, setContenidoModal] = useState({});

  useEffect(() => {
    getActores()
      .then((res) => {
        setActores(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar actores:", err);
        setLoading(false);
      });
  }, []);

  const totalPages = Math.ceil(actores.length / itemsPerPage);

  const abrirModal = (actor) => {
    setContenidoModal(actor);
    setModalAbierto(true);
  };

  const handleNext = () => {
    setPageIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleActores = actores.slice(
    pageIndex * itemsPerPage,
    (pageIndex + 1) * itemsPerPage
  );

  return (
    <>
      <Navbar />

      <section className="equipo" id="equipo">
        <h2 className="equipo-titulo">EQUIPO ARTÍSTICO</h2>

        {loading ? (
          <p className="cargando">Cargando actores...</p>
        ) : (
          <div className="carrusel-controles">
            <button className="btn-carrusel" onClick={handlePrev}>
              &lt;
            </button>

            <div className="elenco-grid">
              {visibleActores.map((actor, index) => (
                <ElencoActual
                  key={actor.id || index}
                  nombre={actor.nombre}
                  apellidos={actor.apellidos}
                  perfil={actor.perfil}
                  descripcion={actor.descripcion}
                  imgURL={actor.imgURL}
                  instagram={actor.instagram}
                  facebook={actor.facebook}
                  twitter={actor.twitter}
                  onPerfilClick={() => abrirModal(actor)}
                />
              ))}
            </div>

            <button className="btn-carrusel" onClick={handleNext}>
              &gt;
            </button>
          </div>
        )}

        <Modal
          isOpen={modalAbierto}
          onClose={() => setModalAbierto(false)}
          contenido={contenidoModal}
        />
      </section>

      <Footer />
    </>
  );
}
