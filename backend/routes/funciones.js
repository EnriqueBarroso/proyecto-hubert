import { Router } from 'express';
import { Funcion, Obra } from '../models/index.js';

const router = Router();

router.get('/cartelera', async (req, res) => {
    try {
      const funciones = await Funcion.findAll({
        include: {
          model: Obra,
          attributes: ['id', 'titulo', 'imgURL']
        },
        where: { tipo: 'cartelera' },
        order: [['fecha', 'ASC']]
      });
  
      res.json(funciones);
    } catch (error) {
      console.error('Error en /cartelera:', error);
      res.status(500).json({ error: 'Error al cargar la cartelera' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const funciones = await Funcion.findAll({
        include: {
          model: Obra,
          attributes: ['id', 'titulo', 'imgURL']
        },
        order: [['fecha', 'ASC']]
      });
  
      res.json(funciones);
    } catch (error) {
      console.error("Error al cargar funciones:", error);
      res.status(500).json({ error: 'Error al cargar funciones' });
    }
  });
  

  
router.get('/:id', async (req, res) => {
    try {
      const funcion = await Funcion.findByPk(req.params.id, {
        include: {
          model: Obra,
          attributes: ['id', 'titulo', 'imgURL', 'sinopsis']
        }
      });
  
      if (!funcion) {
        return res.status(404).json({ error: 'Función no encontrada' });
      }
  
      res.json(funcion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la función' });
    }
  });
  

export default router;
