import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../scss/layout/_actorCarousel.scss";

export default function ActorCarouselEstreno({ elenco = [] }) {
  if (!elenco.length) return null;

  const getImage = (imgURL) =>
    imgURL?.startsWith("http")
      ? imgURL
      : `${import.meta.env.VITE_UPLOADS_URL}/${imgURL}`;

  return (
    <div className="actor-carousel-container">
      <h3 className="subtitulo">ELENCO</h3>
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        showStatus={false}
        centerMode
        centerSlidePercentage={33}
        swipeable
        emulateTouch
      >
        {elenco.map((actor, i) => (
          <div className="actor-slide" key={i}>
            <div className="actor-img-wrapper">
              <img src={getImage(actor.imgURL)} alt={actor.nombre} />
            </div>
            <h4>{actor.nombre}</h4>
            <p>{actor.ObraActor?.personaje || ""}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
