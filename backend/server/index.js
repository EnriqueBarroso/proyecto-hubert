import express from "express";
import cors from "cors";
import obrasRoutes from "./routes/obras.js";
import db from "./models/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/obras", obrasRoutes);

// Conexión a la base de datos
db.sequelize.sync().then(() => {
  app.listen(4000, () => {
    console.log("✅ Servidor corriendo en http://localhost:4000");
  });
}).catch(err => {
  console.error("❌ Error al conectar a la base de datos:", err);
});
