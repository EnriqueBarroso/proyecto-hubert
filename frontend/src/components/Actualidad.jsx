import React from "react";
import "../scss/layout/_actualidad.scss";

export default function Actualidad() {
  return (
    <section className="actualidad-section">
      <div className="actualidad-content">
        <div className="actualidad-texto">
          <h3>¿QUÉ HACEMOS HOY?</h3>
          <p>
            Este colectivo exhibe en sus casi 34 años de fundada, las más altas
            condecoraciones que se pueden conceder a un grupo artístico, como
            resultado de su labor creadora, dirigida a fomentar el teatro en
            Cuba. Cabe también resaltar la permanente formación de nuevas
            generaciones de actores y creadores de la escena. Prestigian su
            historia tres Premios Nacionales de Teatro y uno de Literatura. La
            agrupación ha presentado su arte con gran éxito y reconocimiento de
            la crítica en diversos escenarios del mundo. También ha representado
            a nuestro país en más de 15 Festivales Internacionales; ha realizado
            más de 30 giras nacionales y más de 20 en el extranjero. Hasta el
            año 2024 ha estrenado más de 85 títulos y realizado más de 2500
            funciones. La compañía constituye hoy un baluarte del teatro
            universal y contemporáneo en Cuba, manteniendo un amplio y diverso
            repertorio con promedio de tres estrenos anuales.
          </p>
        </div>

        <div className="actualidad-destacado">
          <h1>
            AC
            <br />
            TUA
            <br />
            LI
            <br />
            DAD
          </h1>
          <a href="#" className="link-galeria">
            GALERÍA ↗
          </a>
        </div>
      </div>
    </section>
  );
}
