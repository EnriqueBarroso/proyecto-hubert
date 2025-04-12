import React from "react";
import "../../scss/layout/_footer.scss";
import { FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">Compañía Teatral Hubert de Blanck</h3>
          <p>📍 Calle 23, La Habana, Cuba</p>
          <p>📞 +53 7 832 1234</p>
          <p>
            ✉️ <a>contacto@hubertteatro.cu</a>
          </p>
        </div>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/huber_teatro.oficial"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {year} Hubert de Blanck Teatro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
