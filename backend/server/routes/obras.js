import express from "express";
const router = express.Router();
import db from "../models/index.js";

// Obtener todas las obras
router.get("/", async (req, res) => {
  const obras = await db.Obra.findAll();
  res.json(obras);
});

// Crear una nueva obra
router.post("/", async (req, res) => {
  const { titulo, sinopsis, anio } = req.body;
  const nueva = await db.Obra.create({ titulo, sinopsis, anio });
  res.json(nueva);
});

export default router;
