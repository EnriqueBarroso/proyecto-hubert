import { Router } from 'express';
import { Blog } from '../models/index.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.findAll({ order: [['fecha', 'DESC']] });
    res.json(blogs);
  } catch (error) {
    console.error("Error al obtener blogs:", error);
    res.status(500).json({ error: 'Error al cargar el blog' });
  }
});

export default router;
