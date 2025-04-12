import { Sequelize } from "sequelize";

const sequelize = new Sequelize("nombre_bd", "usuario_mysql", "password_mysql", {
  host: "localhost",
  dialect: "mysql"
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Obra = await import("./Obra.js").then(m => m.default(sequelize, Sequelize.DataTypes));

export default db;
