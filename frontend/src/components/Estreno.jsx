import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/layout/_estreno.scss";
import GaleriaModal from "../components/GaleriaModal";
import ActorCarousel from "./ActorCarousel";
import ImagenObra from "../components/ImagenObra";
import PagoForm from "./pago/PagoForm";
import Navbar from "./home/Navbar";
import Footer from "./home/Footer";

export default function Estreno() {
  const { id } = useParams();
  const [funcion, setFuncion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalGaleriaAbierto, setModalGaleriaAbierto] = useState(false);
  const [elenco, setElenco] = useState([]);
  const [funcionSeleccionada, setFuncionSeleccionada] = useState(null);
  const [tipoModal, setTipoModal] = useState("compra");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:4000/api/funciones/${id}`);
        const data = await res.json();
        setFuncion(data);

        const resElenco = await fetch(
          `http://localhost:4000/api/obras/${data.Obra.id}/elenco`
        );
        const dataElenco = await resElenco.json();
        setElenco(dataElenco);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Cargando función...</p>;
  if (!funcion) return <p>Función no encontrada</p>;

  return (

    <>
      <Navbar hideButton={true} />
      <section className="estreno-section">
      <h2 className="titulo-obra">{funcion.Obra.titulo}</h2>

      <div className="estreno-container">
        <div className="obra-info">
          <ImagenObra imgURL={funcion.Obra.imgURL} alt={funcion.Obra.titulo} />

          <p className="sinopsis">{funcion.Obra.sinopsis}</p>
          <p className="fecha">
            {new Date(funcion.fecha).toLocaleString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>

          <div className="botones">
            <button
              className="comprar"
              onClick={() => {
                setFuncionSeleccionada(funcion);
                setTipoModal("compra");
                setModalAbierto(true);
              }}
            >
              COMPRAR
            </button>
            <button
              className="reservar"
              onClick={() => {
                setFuncionSeleccionada(funcion);
                setTipoModal("reserva");
                setModalAbierto(true);
              }}
            >
              RESERVAR
            </button>
            <button className="galeria" onClick={() => setModalGaleriaAbierto(true)}>
              GALERÍA
            </button>
          </div>
        </div>
      </div>
     
     {modalAbierto && funcionSeleccionada && (
             <PagoForm
               funcion={funcionSeleccionada}
               tipo={tipoModal}
               modal={true}
               isOpen={modalAbierto}
               onClose={() => setModalAbierto(false)}
             />
           )}

  
      <ActorCarousel elenco={elenco} />

      <GaleriaModal
        isOpen={modalGaleriaAbierto}
        onClose={() => setModalGaleriaAbierto(false)}
        obraId={funcion.Obra.id}
      />
    </section>
    <Footer />
    </>
    
  );
}
