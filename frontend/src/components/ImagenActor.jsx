export default function ImagenActor({ imgURL, alt = 'Actor' }) {
    if (!imgURL) return null;
  
    const baseUrl = import.meta.env.VITE_UPLOADS_URL || 'http://localhost:4000/uploads';
    const url = `${baseUrl}/${imgURL}`;
  
    return (
      <img
        src={url}
        alt={alt}
        style={{
          width: '100%',
          maxWidth: '200px',
          borderRadius: '100%',
          objectFit: 'cover',
          aspectRatio: '1/1',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      />
    );
  }
  