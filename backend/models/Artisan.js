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
