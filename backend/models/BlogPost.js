import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const BlogPost = sequelize.define('BlogPost', {
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
    type: DataTypes.STRING,
  },
}, {
  tableName: 'Blogs',
  timestamps: false,
});

export default BlogPost;
