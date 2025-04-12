import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const ComentarioBlog = sequelize.define("ComentarioBlog", {
  blog_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  creado_en: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: "comentarios_blog",
  timestamps: false
});

export default ComentarioBlog;
