export default function ImagenObra({ imgURL, alt = 'Imagen' }) {
  if (!imgURL) return null;

  // Detecta si es una URL completa o un nombre de archivo local
  const isExternal = imgURL.startsWith("http");
  const url = isExternal
    ? imgURL
    : `${import.meta.env.VITE_UPLOADS_URL}/${imgURL}`;

  return (
    <img
      src={url}
      alt={alt}
      style={{
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        borderRadius: '8px',
        objectFit: 'cover',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'block',
        margin: '0 auto'
      }}
    />
  );
}
