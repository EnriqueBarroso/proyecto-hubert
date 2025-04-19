import axios from 'axios';

// Base API configurada con variable de entorno de Vite
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

console.log("🌐 VITE_API_URL:", import.meta.env.VITE_API_URL);


// 🎭 OBRAS
export const getObras = () => api.get('/obras');
export const getObraById = (id) => api.get(`/obras/${id}`);
export const createObra = (data) => api.post('/obras', data);
export const updateObra = (id, data) => api.put(`/obras/${id}`, data);
export const deleteObra = (id) => api.delete(`/obras/${id}`);
export const getObrasProduccion = () =>
  api.get("/obras").then(res => res.data.filter(obra => obra.tipo === "produccion"));



// FUNCIONES
export const getFuncionesCartelera = () => api.get('/funciones/cartelera');

// 📰 BLOG
export const getBlogPosts = () => api.get('/blog');
export const createBlogPost = (data) => api.post('/blog', data);
export const getPostById = (id) => api.get(`/blog/${id}`);

// 👥 ACTORES
export const getActores = () => api.get('/actores');
export const createActor = (data) => api.post('/actores', data);

// 🎫 COMPRAS
export const postCompra = (data) => api.post('/compras', data);

// 📚 REPERTORIO
export const getObrasRepertorio = () =>
  api.get("/obras").then(res => res.data.filter(obra => obra.tipo === "repertorio"));


export default api;
