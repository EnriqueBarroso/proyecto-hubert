import ImagenActor from '../ImagenActor';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import styles from '../../scss/layout/_elencoActual.module.scss';

export default function ElencoActual({ nombre, apellidos, perfil, imgURL, onPerfilClick, instagram, facebook, twitter }) {
  return (
    <div className={styles.card} onClick={onPerfilClick}>
      <ImagenActor imgURL={imgURL} alt={nombre} />
      <h3>{nombre} {apellidos}</h3>
      <p>{perfil}</p>

      <div className={styles.redes}>
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
  );
}
