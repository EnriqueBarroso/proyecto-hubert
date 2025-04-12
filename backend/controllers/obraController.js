import { Obra, Actor, ObraActor } from '../models/index.js';

// GET /api/obras?tipo=repertorio
export const getObras = async (req, res) => {
  try {
    const { tipo } = req.query;

    const obras = await Obra.findAll({
      where: tipo ? { tipo } : {},
    });

    res.json(obras);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las obras' });
  }
};


// GET /api/obras/:id
export const getObraById = async (req, res) => {
  try {
    const obra = await Obra.findByPk(req.params.id);
    if (!obra) return res.status(404).json({ error: 'Obra no encontrada' });
    res.json(obra);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la obra' });
  }
};

// POST /api/obras (desde route con multer)
export const createObra = async ({ titulo, sinopsis, tipo, imgURL }) => {
  try {
    const nueva = await Obra.create({ titulo, sinopsis, tipo, imgURL });
    return nueva;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// PUT /api/obras/:id
export const updateObra = async (req, res) => {
  try {
    const { id } = req.params;
    const [actualizados] = await Obra.update(req.body, { where: { id } });
    if (!actualizados) return res.status(404).json({ error: 'Obra no encontrada' });
    const obraActualizada = await Obra.findByPk(id);
    res.json(obraActualizada);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la obra' });
  }
};

// DELETE /api/obras/:id
export const deleteObra = async (req, res) => {
  try {
    const eliminada = await Obra.destroy({ where: { id: req.params.id } });
    if (!eliminada) return res.status(404).json({ error: 'Obra no encontrada' });
    res.json({ mensaje: 'Obra eliminada correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la obra' });
  }
};

// GET /api/obras/:id/elenco
export const getElencoByObra = async (req, res) => {
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
};
