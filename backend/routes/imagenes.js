import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { Imagen } from '../models/index.js';

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración de Multer
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueName = `${Date.now()}${ext}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

// GET /obras/:id/imagenes → obtener imágenes por obra
router.get('/obras/:id/imagenes', async (req, res) => {
  try {
    const { id } = req.params;
    const imagenes = await Imagen.findAll({
      where: { obra_id: id },
      order: [['orden', 'ASC']]
    });
    res.json(imagenes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener imágenes' });
  }
});

// POST /imagenes → subir archivo o registrar URL
router.post('/imagenes', upload.single('imagen'), async (req, res) => {
  try {
    const { obra_id, descripcion, orden, url_externa } = req.body;

    // Si vino archivo, usamos req.file.filename; si no, usamos url externa
    const imgURL = req.file?.filename || url_externa;

    if (!imgURL || !obra_id) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    const nueva = await Imagen.create({
      obra_id,
      imgURL,
      descripcion,
      orden: orden || null
    });

    res.status(201).json(nueva);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al subir imagen' });
  }
});

export default router;
