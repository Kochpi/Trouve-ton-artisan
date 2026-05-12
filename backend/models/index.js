const Category = require("./Category");
const Specialite = require("./Specialite");
const Artisan = require("./Artisan");

// Une catégorie a plusieurs spécialités
Category.hasMany(Specialite, { foreignKey: "id_categorie" });
Specialite.belongsTo(Category, { foreignKey: "id_categorie" });

// Une spécialité a plusieurs artisans
Specialite.hasMany(Artisan, { foreignKey: "id_specialite" });
Artisan.belongsTo(Specialite, { foreignKey: "id_specialite" });

module.exports = { Category, Specialite, Artisan };
