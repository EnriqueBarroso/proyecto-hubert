import ImagenObra from "../ImagenObra";

export default function ProduccionCard({ titulo, sinopsis, imgURL, año, directorArtistico }) {
  return (
    <div className="produccion-card">
      <ImagenObra imgURL={imgURL} alt={titulo} />
      <div className="produccion-card-texto">
        <h3>{titulo}</h3>
        <p>{sinopsis}</p>
        {año && <p><strong>Año:</strong> {año}</p>}
        {directorArtistico && <p><strong>Dirección artística:</strong> {directorArtistico}</p>}
      </div>
    </div>
  );
}
