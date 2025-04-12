import { Router } from "express";
import { ComentarioBlog } from "../models/index.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { blog_id, nombre, mensaje } = req.body;

    if (!blog_id || !nombre || !mensaje) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const nuevo = await ComentarioBlog.create({ blog_id, nombre, mensaje });
    res.status(201).json(nuevo);
  } catch (error) {
    console.error("Error al guardar comentario:", error);
    res.status(500).json({ error: "Error al guardar el comentario" });
  }
});

export default router;
