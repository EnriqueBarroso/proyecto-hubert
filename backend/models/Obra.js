import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Obra = sequelize.define('Obra', {
  titulo: DataTypes.STRING,
  sinopsis: DataTypes.TEXT,
  fechas: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  imgURL: DataTypes.STRING,
  tipo: DataTypes.ENUM('cartelera', 'repertorio', 'produccion'),
  año: DataTypes.INTEGER,
  directorArtistico: DataTypes.STRING,
}, {
  timestamps: false
});

export default Obra;
