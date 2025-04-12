import { Router } from 'express';
import { Compra, Funcion, Obra } from '../models/index.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { funcion_id, nombre, email, cantidad, tipo } = req.body;

    if (!funcion_id || !nombre || !email || !cantidad || !tipo) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    const compra = await Compra.create({ funcion_id, nombre, email, cantidad, tipo });
    res.status(201).json(compra);
  } catch (error) {
    console.error('Error al registrar la compra/reserva:', error);
    res.status(500).json({ error: 'Error al registrar la compra o reserva' });
  }
});

// Obtener todas las compras (con datos de la función y la obra)
router.get('/', async (req, res) => {
  try {
    const compras = await Compra.findAll({
      include: {
        model: Funcion,
        include: {
          model: Obra
        }
      },
      order: [['created_at', 'DESC']]
    });
    res.json(compras);
  } catch (error) {
    console.error('Error al obtener compras:', error);
    res.status(500).json({ error: 'Error al obtener compras' });
  }
});

export default router;
