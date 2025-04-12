import React, { useState } from "react";
import { postCompra } from "../../api";
import "../../scss/layout/_pagoForm.scss";

export default function PagoForm({
  funcion,
  tipo = "compra",
  onConfirm,
  modal = false,
  isOpen = true,
  onClose,
}) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [tarjeta, setTarjeta] = useState("");
  const [fecha, setFecha] = useState("");
  const [cvv, setCvv] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  if (!funcion || (modal && !isOpen)) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await postCompra({
        funcion_id: funcion.id,
        nombre,
        email,
        cantidad,
        tipo,
      });
      setConfirmado(true);
      if (onConfirm) onConfirm();
    } catch (error) {
      console.error("Error al registrar:", error);
      alert("Hubo un error al registrar la compra/reserva.");
    }
  };

  const contenido = (
    <>
      {confirmado ? (
        <div className="confirmacion">
          <h4>✅ ¡{tipo === "compra" ? "Compra" : "Reserva"} confirmada!</h4>
          <p>
            Te hemos enviado un correo a <strong>{email}</strong>.
          </p>
        </div>
      ) : (
        <>
          <h3>
            {tipo === "reserva" ? "Reservar Entradas" : "Comprar Entradas"}
          </h3>
          <p>
            <strong>Obra:</strong> {funcion.Obra?.titulo}
          </p>
          <p>
            <strong>Fecha:</strong>{" "}
            {new Date(funcion.fecha).toLocaleString("es-ES")}
          </p>

          <form onSubmit={handleSubmit} className="form-pago">
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="number"
              placeholder="Cantidad de entradas"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              min="1"
              required
            />

            {tipo === "compra" && (
              <>
                <input
                  type="text"
                  placeholder="Número de tarjeta"
                  value={tarjeta}
                  onChange={(e) => setTarjeta(e.target.value)}
                  required
                />
                <div className="grupo-mini">
                  <input
                    type="text"
                    className="fecha"
                    placeholder="MM/AA"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="cvv"
                    placeholder="CVV"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    required
                  />
                </div>
              </>
            )}

            <button type="submit">Confirmar {tipo}</button>
          </form>
        </>
      )}
    </>
  );

  if (modal) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal-contenido" onClick={(e) => e.stopPropagation()}>
          <button className="modal-cerrar" onClick={onClose}>
            ×
          </button>
          {contenido}
        </div>
      </div>
    );
  }

  return contenido;
}
