// de ce que j'ai compris sequelize est un "traducteur sql-JS, pour l'utiliser il faut "réécrire
// les tables sql en "modèles" réutilisable ensuite

const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false,
    },
    ville: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    a_propos: {
      type: DataTypes.TEXT,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site_web: {
      type: DataTypes.STRING,
    },
    top: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    id_specialite: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "artisans",
    timestamps: false,
  },
);

module.exports = Artisan;
