import { Blog } from '../models/index.js';

export const getBlogPosts = async (req, res) => {
  try {
    const posts = await Blog.findAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener blog posts' });
  }
};

export const createBlogPost = async (req, res) => {
  try {
    const nuevo = await Blog.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear post' });
  }
};
