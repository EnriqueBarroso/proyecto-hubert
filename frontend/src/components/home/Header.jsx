import React from "react";
import "../../scss/layout/_footer.scss";

function Header() {
  return (
    <header id="inicio" className="header">
      {/* Contenedor con ancho máximo */}
      <div className="header-container">
        {/* Imagen de fondo */}
        <div className="header-background"></div>

        {/* Contenedor centrado */}
        <div className="header-textos">
          <h1 className="texto-izq">
            MÁS DE <span>30 AÑOS</span> <br />DE HISTORIA
            <br /> Y TRADICIÓN
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
