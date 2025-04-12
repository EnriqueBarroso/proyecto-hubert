export default (sequelize, DataTypes) =>
    sequelize.define("Obra", {
      titulo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      sinopsis: {
        type: DataTypes.TEXT,
      },
      anio: {
        type: DataTypes.INTEGER
      }
    });
  