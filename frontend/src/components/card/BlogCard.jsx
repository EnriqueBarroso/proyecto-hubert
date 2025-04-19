import React from "react";
import { useNavigate } from "react-router-dom";

export default function BlogCard({ post }) {
    const navigate = useNavigate();

    const formatImg = (img) => {
        return img?.startsWith("http")
          ? img
          : `${import.meta.env.VITE_UPLOADS_URL}/${img}`;
      };
  
    return (
       <div className="blog-post">
      <img src={formatImg(post.imagen)} alt={post.titulo} className="blog-img" />
      <div className="blog-info">
        <h3>{post.titulo}</h3>
        <span className="blog-fecha">{post.fecha}</span>
        <p>{post.resumen}</p>
        <button className="btn-info" onClick={() => navigate(`/blog/${post.id}`)}>
          + INFO <span className="arrow">↗</span>
        </button>
      </div>
    </div>
    );
  }
  