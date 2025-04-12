import { DataTypes } from'sequelize';
import sequelize from '../config/db.js';

const Actor = sequelize.define('Actor', {
  nombre: DataTypes.STRING,
  apellidos: DataTypes.STRING,
  perfil: DataTypes.STRING,
  descripcion: DataTypes.TEXT,
  imgURL: DataTypes.STRING,
  instagram: DataTypes.STRING,
  facebook: DataTypes.STRING,
  tiktok: DataTypes.STRING,
}, {
  timestamps: false,
  tableName: 'actores'
});

export default Actor;
