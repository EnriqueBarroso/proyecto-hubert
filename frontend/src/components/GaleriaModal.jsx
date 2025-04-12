import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../scss/layout/_galeriaModal.scss";
import { api } from "../api"; 

export default function GaleriaModal({ isOpen, onClose, obraId }) {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    if (isOpen && obraId) {
      api.get(`/obras/${obraId}/imagenes`)
        .then((res) => setImagenes(res.data))
        .catch((err) => {
          console.error("Error al cargar imágenes:", err);
          setImagenes([]);
        });
    }
  }, [isOpen, obraId]);

  const getImageSrc = (imgURL) =>
    imgURL.startsWith("http") ? imgURL : `${import.meta.env.VITE_UPLOADS_URL}/${imgURL}`;

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <button className="modal-cerrar" onClick={onClose}>✖</button>

        {imagenes.length > 0 ? (
          <Carousel showThumbs={false} infiniteLoop autoPlay>
            {imagenes.map((img, i) => (
              <div key={i}>
                <img src={getImageSrc(img.imgURL)} alt={img.descripcion || `Imagen ${i + 1}`} />
                {img.descripcion && <p className="legend">{img.descripcion}</p>}
              </div>
            ))}
          </Carousel>
        ) : (
          <p style={{ textAlign: "center" }}>No hay imágenes disponibles.</p>
        )}
      </div>
    </div>
  );
}
