import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import ImagenActor from './ImagenActor';
import '../scss/layout/_modal.scss';

export default function Modal({ isOpen, onClose, contenido }) {
  if (!isOpen || !contenido) return null;

  const { nombre, descripcion, imgURL, instagram, facebook, twitter } = contenido;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content large" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>

        <div className="modal-body">
          <div className="modal-img">
            <ImagenActor imgURL={imgURL} alt={nombre} />
          </div>

          <div className="modal-info">
            <h2>{nombre}</h2>
            <p className="modal-descripcion">{descripcion}</p>

            <div className="modal-redes">
              {instagram && (
                <a href={`https://instagram.com/${instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
              )}
              {facebook && (
                <a href={`https://${facebook}`} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </a>
              )}
              {twitter && (
                <a href={`https://${twitter}`} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
