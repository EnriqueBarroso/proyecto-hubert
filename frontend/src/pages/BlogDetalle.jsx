import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../scss/layout/_blogDetalle.scss";
import { getPostById } from "../api";

export default function BlogDetalle() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostById(id)
      .then((res) => {
        setPost(res.data);
        console.log("📄 Post cargado:", res.data);
        setLoading(false);;
      })
      .catch((err) => {
        console.error("Error cargando el post:", err);
        setLoading(false);
      }); 
  }, [id]);

  const handleComentario = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:4000/api/comentarios-blog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        blog_id: post.id,
        nombre,
        mensaje,
      }),
    });
    setNombre("");
    setMensaje("");
    alert("Comentario enviado");
  };

  if (loading) return <p>Cargando publicación...</p>

  if (!post) return <p>No se encontró la publicación</p>;

  return (
    <div className="blog-detalle">
      <h2>{post.titulo}</h2>
      <img src={formatImg(post.imagen)} alt={post.titulo} />
      <p className="fecha">{post.fecha}</p>
      <p className="contenido">{post.contenido}</p>

      <hr />
      <h4>Deja tu comentario</h4>
      <form className="comentario-form" onSubmit={handleComentario}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Tu comentario"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}


function formatImg(img) {
    return img?.startsWith("http")
      ? img
      : `${import.meta.env.VITE_UPLOADS_URL}/${img}`;
  }