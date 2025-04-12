import sequelize from '../config/db.js';
import Actor from './Actor.js';
import Blog from './Blog.js';
import Compra from './Compra.js';
import Obra from './Obra.js';
import Imagen from './Imagen.js'; // 👈 nuevo modelo
import ObraActor from './ObraActor.js';
import Funcion from './Funcion.js';
import ComentarioBlog from './ComentarioBlog.js';


// Relaciones existentes
Compra.belongsTo(Obra, { foreignKey: 'obra_id' });
Funcion.hasMany(Compra, { foreignKey: 'funcion_id' });

// Relación entre Funcion y Obra
Funcion.belongsTo(Obra, { foreignKey: 'obra_id' });
Obra.hasMany(Funcion, { foreignKey: 'obra_id' });

// ✅ Relación nueva: Obra tiene muchas Imágenes
Obra.hasMany(Imagen, { foreignKey: 'obra_id', as: 'imagenes' });
Imagen.belongsTo(Obra, { foreignKey: 'obra_id' });

Obra.hasMany(Funcion, { foreignKey: 'obra_id' });
Funcion.belongsTo(Obra, { foreignKey: 'obra_id' });


Obra.belongsToMany(Actor, {
  through: ObraActor,
  foreignKey: 'obra_id',
  as: 'elenco'
});

Actor.belongsToMany(Obra, {
  through: ObraActor,
  foreignKey: 'actor_id',
  as: 'obras'
});

export {
  sequelize,
  Actor,
  Blog,
  ComentarioBlog,
  Compra,
  Obra,
  Funcion,
  ObraActor,
  Imagen // 👈 exportamos el nuevo modelo
};
