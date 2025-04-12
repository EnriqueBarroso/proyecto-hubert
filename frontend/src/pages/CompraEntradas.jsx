import React, { useEffect, useState } from "react";
import PagoForm from "../components/pago/PagoForm";
import "../scss/layout/_compraEntradas.scss";
import { postCompra } from "../api";
import { Link } from "react-router-dom";

export default function CompraEntradas() {
  const [funciones, setFunciones] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tipoAccion, setTipoAccion] = useState(""); // "compra" o "reserva"
  const [funcionSeleccionada, setFuncionSeleccionada] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cantidad, setCantidad] = useState(1);

  const abrirModal = (funcion, tipo) => {
    setFuncionSeleccionada(funcion);
    setTipoAccion(tipo);
    setModalAbierto(true);
  };

  const enviarFormulario = async (e) => {
    e.preventDefault();
    try {
      await postCompra({
        funcion_id: funcionSeleccionada.id,
        nombre,
        email,
        cantidad,
        tipo: tipoAccion,
      });
      alert("¡Reserva confirmada!");
      setModalAbierto(false);
      setNombre("");
      setEmail("");
      setCantidad(1);
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un problema. Intenta de nuevo.");
    }
  };

  useEffect(() => {
    fetch("http://localhost:4000/api/funciones")
      .then((res) => res.json())
      .then((data) => {
        const cartelera = data.filter(
          (f) => f.Obra && f.Obra.titulo && f.fecha
        );
        setFunciones(cartelera);
      })
      .catch((err) => console.error("Error al cargar funciones:", err));
  }, []);

  const formatFecha = (fecha) => {
    return new Date(fecha).toLocaleString("es-ES", {
      weekday: "long",
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <section className="compra-entradas">
      <h2 className="titulo">COMPRA DE ENTRADAS</h2>

      <div className="funciones-grid">
        {funciones.map((funcion) => (
          <div className="funcion-card" key={funcion.id}>
            <div className="imagen-wrapper">
              <img
                src={
                  funcion.Obra.imgURL?.startsWith("http")
                    ? funcion.Obra.imgURL
                    : `${import.meta.env.VITE_UPLOADS_URL}/${
                        funcion.Obra.imgURL
                      }`
                }
                alt={funcion.Obra.titulo}
              />
            </div>
            <div className="funcion-info">
              <h3>{funcion.Obra.titulo}</h3>
              <p>{formatFecha(funcion.fecha)}</p>
              <div className="botones">
                <button
                  className="comprar"
                  onClick={() => abrirModal(funcion, "compra")}
                >
                  COMPRAR
                </button>
                <button
                  className="reservar"
                  onClick={() => abrirModal(funcion, "reserva")}
                >
                  RESERVAR
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalAbierto && funcionSeleccionada && (
        <div className="modal-overlay" onClick={() => setModalAbierto(false)}>
          <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={() => setModalAbierto(false)}>
              ×
            </button>
            {tipoAccion === "reserva" && (
              <>
                <h3>Reserva de Entradas</h3>
                <p>
                  <strong>Obra:</strong> {funcionSeleccionada.Obra.titulo}
                </p>
                <p>
                  <strong>Fecha:</strong>{" "}
                  {new Date(funcionSeleccionada.fecha).toLocaleString("es-ES")}
                </p>
              </>
            )}
            {tipoAccion === "compra" ? (
              <PagoForm
                funcion={funcionSeleccionada}
                tipo="compra"
                modal={false}
                onConfirm={() => setModalAbierto(false)}
              />
            ) : (
              <form onSubmit={enviarFormulario}>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="number"
                  min="1"
                  value={cantidad}
                  onChange={(e) => setCantidad(e.target.value)}
                  required
                />
                <button type="submit">Confirmar reserva</button>
              </form>
            )}
          </div>
        </div>
      )}

      <Link to="/" className="btn-volver">
        ⬅ Volver al inicio
      </Link>
    </section>
  );
}
