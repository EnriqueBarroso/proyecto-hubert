import { Compra } from '../models/index.js';

export const getCompras = async (req, res) => {
  try {
    const compras = await Compra.findAll();
    res.json(compras);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener compras' });
  }
};

export const createCompra = async (req, res) => {
  try {
    const nueva = await Compra.create({
      ...req.body,
      fecha_compra: new Date()
    });
    res.status(201).json(nueva);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar compra' });
  }
};
