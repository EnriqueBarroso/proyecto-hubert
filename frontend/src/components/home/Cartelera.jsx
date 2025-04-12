import React, { useEffect, useState } from "react";
import "../../scss/layout/_cartelera.scss";
import { useNavigate } from "react-router-dom";
import { getFuncionesCartelera } from "../../api";
import ImagenObra from "../ImagenObra";
import PagoForm from "../pago/PagoForm";

export default function Cartelera() {
  const [funciones, setFunciones] = useState([]);
  const navigate = useNavigate();
  const [modalAbierto, setModalAbierto] = useState(false);
  const [funcionSeleccionada, setFuncionSeleccionada] = useState(null);
  const [tipoModal, setTipoModal] = useState("compra");

  useEffect(() => {
    getFuncionesCartelera()
      .then((res) => {
        setFunciones(res.data);
      })
      .catch((err) => console.error("Error cargando funciones:", err));
  }, []);

  return (
    <section id="cartelera" className="cartelera">
      <div className="cartelera-header">
        <h2 className="cartelera-titulo">CARTELERA</h2>
      </div>

      <div className="cartelera-grid">
        {funciones.length === 0 && <p>No hay funciones disponibles.</p>}

        {funciones.map((funcion) => (
          <div key={funcion.id} className="cartel-card">
            <ImagenObra
              imgURL={funcion.Obra?.imgURL}
              alt={funcion.Obra?.titulo}
            />

            <h3>{funcion.Obra?.titulo}</h3>
            <p className="fecha">
              {new Date(funcion.fecha).toLocaleString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <div className="button-group">
              <button
                className="comprar"
                onClick={() => {
                  setFuncionSeleccionada(funcion);
                  setTipoModal("compra");
                  setModalAbierto(true);
                }}
              >
                Comprar Ticket
              </button>

              <button
                className="reservar"
                onClick={() => {
                  setFuncionSeleccionada(funcion);
                  setTipoModal("reserva");
                  setModalAbierto(true);
                }}
              >
                Reservar
              </button>

              <button
                className="info"
                onClick={() => navigate(`/estreno/${funcion.id}`)}
              >
                + Info
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="produccion-link">
        <p>¿Quieres ver nuestras próximas producciones?</p>
        <button onClick={() => navigate("/produccion")}>Ver Producción</button>
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
    </section>
  );
}
