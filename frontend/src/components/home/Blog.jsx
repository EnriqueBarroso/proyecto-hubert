import React, { useEffect, useState } from "react";
import "../../scss/layout/_blog.scss";
import { getBlogPosts } from "../../api";
import BlogCard from "../card/BlogCard";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  // Cargar publicaciones del blog al montar el componente
  
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
         <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
