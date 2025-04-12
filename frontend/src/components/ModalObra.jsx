import React, { useEffect } from "react";
import ImagenObra from "../components/ImagenObra";
import "../scss/layout/_modalObra.scss";

export default function Modal({ isOpen, onClose, contenido }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cerrarAlFondo = (e) => {
    if (e.target.classList.contains("modal-overlay")) onClose();
  };

  return (
    <div className="modal-overlay" onClick={cerrarAlFondo}>
      <div className="modal-simple">
        <button className="modal-close" onClick={onClose}>✕</button>
        <ImagenObra imgURL={contenido.imgURL} alt={contenido.titulo} />
        <p className="modal-sinopsis">{contenido.sinopsis}</p>
      </div>
    </div>
  );
}
