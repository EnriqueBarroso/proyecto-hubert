import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Blog = sequelize.define('Blog', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  resumen: {
    type: DataTypes.TEXT,
  },
  contenido: {
    type: DataTypes.TEXT,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  fecha: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'Blogs',
  timestamps: false
});

export default Blog;
