import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  getObras,
  getObraById,
  createObra,
  updateObra,
  deleteObra,
  getElencoByObra
} from '../controllers/obraController.js';

import { Obra, Actor } from '../models/index.js'; // 🔥 Importa los modelos para el elenco

const router = Router();

// Configuración de multer
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}${ext}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// Rutas
router.get('/', getObras);
router.get('/:id', getObraById);

// 🔹 Nuevo endpoint: obtener elenco completo de una obra
router.get('/:id/elenco', async (req, res) => {
  try {
    const obra = await Obra.findByPk(req.params.id, {
      include: {
        model: Actor,
        as: 'elenco',
        through: { attributes: ['personaje'] }
      }
    });

    if (!obra) {
      return res.status(404).json({ error: 'Obra no encontrada' });
    }

    res.json(obra.elenco);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el elenco' });
  }
});

// Crear obra con carga de imagen
router.post('/', upload.single('imagen'), (req, res) => {
  const { titulo, sinopsis, tipo } = req.body;
  const imgURL = req.file?.filename || null;

  createObra({ titulo, sinopsis, tipo, imgURL })
    .then((obra) => res.status(201).json(obra))
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la obra' });
    });
});

router.put('/:id', updateObra);
router.delete('/:id', deleteObra);
router.get('/:id/elenco', getElencoByObra);

export default router;
