import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const ObraActor = sequelize.define('ObraActor', {
  obra_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  actor_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  personaje: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'obra_actor',
  timestamps: false
});

export default ObraActor;
