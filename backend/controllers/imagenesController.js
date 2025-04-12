// controllers/imagenesController.js
import { Imagen } from '../models/index.js';

export const getImagenesByObra = async (req, res) => {
  const imagenes = await Imagen.findAll({ where: { obraId: req.params.obraId } });
  res.json(imagenes);
};
