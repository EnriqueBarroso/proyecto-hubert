import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Blog = sequelize.define('Blog', {
  titulo: DataTypes.STRING,
  resumen: DataTypes.TEXT,
  contenido: DataTypes.TEXT,
  fecha: DataTypes.DATE,
  imagen: DataTypes.STRING,
}, {
  timestamps: false
});

export default Blog;
