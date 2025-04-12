import React, { useState } from "react";
import "../scss/layout/_modalCompra.scss";

export default function ModalCompra({
  isOpen,
  onClose,
  funcion,
  tipo = "compra", // o "reserva"
}) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");

  if (!isOpen || !funcion) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      funcion_id: funcion.id,
      nombre,
      email,
      cantidad,
      tipo,
    };

    try {
      const res = await fetch("http://localhost:4000/api/compras", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setMensaje("¡Registro exitoso!");
        setNombre("");
        setEmail("");
        setCantidad(1);
      } else {
        setMensaje("Hubo un error al registrar.");
      }
    } catch (error) {
      console.error("Error al enviar:", error);
      setMensaje("Error de conexión.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="modal-cerrar" onClick={onClose}>X</button>

        <h3>{tipo === "reserva" ? "Reservar Entradas" : "Comprar Entradas"}</h3>
        <p><strong>Obra:</strong> {funcion.Obra.titulo}</p>
        <p><strong>Fecha:</strong> {new Date(funcion.fecha).toLocaleString("es-ES")}</p>

        <form onSubmit={handleSubmit}>
          <label>Nombre</label>
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} required />

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label>Cantidad</label>
          <input type="number" min="1" value={cantidad} onChange={(e) => setCantidad(e.target.value)} required />

          <button type="submit">Confirmar {tipo}</button>
        </form>

        {mensaje && <p className="mensaje">{mensaje}</p>}
      </div>
    </div>
  );
}
