import React, { useState } from "react";
import { useLocation,useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import "../../scss/layout/_navbar.scss";

function Navbar( {hideButton} ) {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScrollOrNavigate = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      // Si NO estamos en Home, navegamos primero
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }, 200); // Esperamos que se renderice Home
    } else {
      // Si ya estamos en Home
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="navbar-container">
      {/*Contenedor principal*/}
      <nav className="navbar">
        {/* Sección del logo y título */}
        <div className="navbar-logo">
          <a oncClick={() => handleScrollOrNavigate("inicio")}>
            <img
              src={logo}
              alt="logo del sitio"
              className="logo-img"
            ></img>
          </a>
          <a onClick={() => handleScrollOrNavigate("inicio")}>
            <span className="logo-title">
              Compañía Teatral<br></br>HUBERT DE BLANCK
            </span>
          </a>
        </div>

          {/* Botón Hamburguesa */}
          <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="burger-icon">☰</span>
        </div>

        {/* Menú de navegación*/}
        <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <li className="menu-item">
            <a onClick={() => handleScrollOrNavigate("inicio")}>INICIO</a>
          </li>
          <li className="menu-item">
            <a  onClick={() => handleScrollOrNavigate("cartelera")}>CARTELERA</a>
          </li>
          <li className="menu-item">
            <a  onClick={() => handleScrollOrNavigate("nosotros")}>NOSOTROS</a>
          </li>
          <li className="menu-item">
            <a  onClick={() => handleScrollOrNavigate("blog")}>BLOG</a>
          </li>
        </ul>

        {!hideButton && (
        <button className="navbar-btn" onClick={() => window.open("/entradas", "_self")}>Comprar Ticket</button>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
