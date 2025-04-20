import React from "react";
import ImagenObra from "../ImagenObra";

export default function RepertorioCard({ titulo, sinopsis, imgURL, anio, directorArtistico, onPerfilClick }) {
  return (
    <div className="repertorio-card">
      <ImagenObra imgURL={imgURL} alt={titulo} />
      <h3 className="obra-titulo">{titulo}</h3>
      <p className="sinopsis">{sinopsis}</p>
      <p className="anio"><strong>Año:</strong> {anio}</p>
      {directorArtistico && <p className="direccion"><strong>Dirección artística</strong> {directorArtistico}</p>}
      <button className="btn-info"  onClick={onPerfilClick}>
        + INFO <span className="arrow">↗</span>
      </button>
    </div>
  );
}