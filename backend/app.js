import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { sequelize } from './models/index.js';

// Routes

import obrasRoutes from './routes/obras.js';
import actoresRoutes from './routes/actores.js';
import blogRoutes from './routes/blog.js';
import comprasRoutes from './routes/compras.js';
import imagenRoutes from './routes/imagenes.js';
import funcionesRoutes from './routes/funciones.js';
import comentariosBlogRoutes from './routes/comentariosBlog.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/obras', obrasRoutes);
app.use('/api/actores', actoresRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/compras', comprasRoutes);
app.use('/api', imagenRoutes);
app.use('/api/funciones', funcionesRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/comentarios-blog', comentariosBlogRoutes);

app.get("/", (req, res) => {
  res.send("✅ API funcionando desde Railway");
});


sequelize.sync({ alter: true }) 
  .then(() => {
    console.log("✅ Todas las tablas creadas correctamente");

    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log(`🚀 Servidor activo en http://localhost:${PORT}`));
  })
    
  .catch((err) => console.error("❌ Error al sincronizar la base de datos:", err));

  