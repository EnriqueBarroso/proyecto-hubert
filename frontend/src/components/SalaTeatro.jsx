import React from "react";
import "../scss/layout/_salaTeatro.scss";
import { Link } from "react-router-dom";

export default function SalaTeatro() {
  
  return (
    <section className="sala-section">
      <div className="sala-contenido">
        {/* Parte Izquierda */}
        <div className="sala-texto">
          <h2 className="sala-pregunta">¿POR QUÉ HUBERT DE BLANCK?</h2>
          <p>
            Sala- Teatro Hubert de Blank. Calzada entre A y B. En 1947 este
            edificio fue comprado por la esposa e hija del músico belga Hubert
            de Blanck, quien fundó el primer conservatorio de música de La
            Habana; luego lo convirtieron en un teatro, con una capacidad para
            267 espectadores. Fue inaugurada por las musicólogas Olga de Blanck
            y Pilar Martín el 16 de octubre de 1955, en la planta alta del
            entonces Conservatorio Nacional de Música Hubert de Blanck. Este
            recinto posee valores arquitectónicos e histórico-culturales que lo
            convierten en un lugar muy especial. Su primera presentación teatral
            fue con la actriz cubana, Premio Nacional de Teatro Raquel Revuelta
            con la obra Hechizados de John Van Drutten dirigida por Antonio
            Losada. A partir de 1991 surge la Compañía Hubert de Blanck que
            realiza sus funciones en este teatro bajo la dirección general de
            Orietta Medina. El primer estreno de la Compañía  se produjo 
            el 21 de abril de 1991 con el exitoso espectáculo “El Tío Francisco y las Leandras” 
            en versión, dirección artística y puesta en escena de la Maestra Berta Martínez
             (Premio Nacional de teatro) que tuvo lugar en esta misma sala. Contó ademas con  y otras figuras relevantes 
            como Abelardo Estorino, (Premio Nacional de Teatro), 
            Doris Gutierrez, Luis Brunet y otros. Olga de Blanck fue pianista,
            guitarrista y compositora, considerada como una de las personas más
            destacadas y prestigiosas de la historia del magisterio cubano de la
            música.
          </p>
        </div>

        {/* Parte Derecha */}
        <div className="sala-destacado">
          <h1 className="sala-titulo">
            SALA
            <br />
            TEA
            <br />
            TRO
          </h1>
          <Link to="/galeria" className="sala-galeria">
            GALERIA <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
