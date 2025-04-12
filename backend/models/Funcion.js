import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Funcion = sequelize.define('Funcion', {
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  tipo: {
    type: DataTypes.STRING, // ejemplo: 'cartelera', 'especial', etc.
    allowNull: false
  },
  obra_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'funciones',
  timestamps: false
});

export default Funcion;
