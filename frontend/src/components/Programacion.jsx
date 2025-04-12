import React from "react";
import obras from "../data/obrasProduccion";
import "../../scss/layout/_programacion.scss";

function Programacion() {
  return (
    <section id="programacion" className="programacion">
      <h3>PROGRAMACIÓN</h3>
      <div className="programacion-grid">
        {obras.map((obra) => (
          <div key={obra.id} className="obra-card">
            <img src={obra.imagen} alt={obra.nombre} className="obra-img" />
            <h4>{obra.nombre}</h4>
            <p>{obra.descripcion}</p>
            <p>{obra.fecha}</p>
            <button className="btn">Comprar Boletos</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Programacion;

