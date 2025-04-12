import React, { useEffect, useState } from "react";
import "../../scss/layout/_blog.scss";
import { getBlogPosts } from "../../api";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [postActivo, setPostActivo] = useState(null);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [mensajeUsuario, setMensajeUsuario] = useState("");

  useEffect(() => {
    getBlogPosts()
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error cargando posts del blog:", err));
  }, []);

  return (
    <section className="blog" id="blog">
      <h2 className="blog-titulo">BLOG</h2>

      <div className="blog-lista">
        {posts.map((post) => (
          <div className="blog-post" key={post.id}>
            <img src={formatImg(post.imagen)} alt={post.titulo} className="blog-img" />
            <div className="blog-info">
              <h3>{post.titulo}</h3>
              <span className="blog-fecha">{post.fecha}</span>
              <p>{post.resumen}</p>
              <button className="btn-info" onClick={() => setPostActivo(post)}>
                + INFO <span className="arrow">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal con cierre al hacer clic fuera */}
      {postActivo && (
        <div className="blog-modal" onClick={() => setPostActivo(null)}>
          <div className="blog-modal-contenido" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={() => setPostActivo(null)}>×</button>
            
            <img src={formatImg(postActivo.imagen)} alt={postActivo.titulo} />
            <h2>{postActivo.titulo}</h2>
            <span className="blog-fecha">{postActivo.fecha}</span>
            <p>{postActivo.contenido}</p>

            <hr />
            <h4>Deja tu comentario</h4>

            <form
              className="comentario-form"
              onSubmit={async (e) => {
                e.preventDefault();
                await fetch("http://localhost:4000/api/comentarios-blog", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    blog_id: postActivo.id,
                    nombre: nombreUsuario,
                    mensaje: mensajeUsuario,
                  }),
                });
                setNombreUsuario("");
                setMensajeUsuario("");
                setPostActivo(null);
              }}
            >
              <input
                type="text"
                placeholder="Tu nombre"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
                required
              />
              <textarea
                placeholder="Tu comentario o pregunta..."
                value={mensajeUsuario}
                onChange={(e) => setMensajeUsuario(e.target.value)}
                required
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

// Utilidad para cargar imagen desde URL externa o local
function formatImg(img) {
  return img?.startsWith("http")
    ? img
    : `${import.meta.env.VITE_UPLOADS_URL}/${img}`;
}
