import { Actor } from '../models/index.js';

export const getActores = async (req, res) => {
  try {
    const actores = await Actor.findAll();
    res.json(actores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener actores' });
  }
};

export const createActor = async (req, res) => {
  try {
    const nuevo = await Actor.create(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear actor' });
  }
};
