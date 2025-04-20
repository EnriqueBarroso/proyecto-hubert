import ImagenActor from './ImagenActor';
import  '../../scss/layout/_actorCard.module.scss'; 

export default function ActorCard({ actor }) {
  return (
    <div className ="card">
      <ImagenActor imgURL={actor.imgURL} alt={actor.nombre} />
      <h4>{actor.nombre}</h4>
      <p>{actor.descripcion}</p>
    </div>
  );
}
