import { Router } from 'express';
import { Blog } from '../models/index.js';

const router = Router();

// Obtener todos los posts del blog
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['fecha', 'DESC']] });
    res.json(blogs);
  } catch (error) {
    console.error("Error al obtener blogs:", error);
    res.status(500).json({ error: 'Error al cargar el blog' });
  }
});

// Obtener un post específico por ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({ error: 'Publicación no encontrada' });
    }
    res.json(blog);
  } catch (error) {
    console.error("Error al obtener publicación del blog:", error);
    res.status(500).json({ error: 'Error al cargar la publicación' });
  }
});

export default router;
