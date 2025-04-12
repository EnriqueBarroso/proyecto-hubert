import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Imagen = sequelize.define('Imagen', {
  obra_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imgURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  orden: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'imagenes',
  timestamps: true
});

export default Imagen;
