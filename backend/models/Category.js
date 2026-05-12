const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define(
  "Category",
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
  },
  {
    tableName: "categories", // Le nom exact de la table en BDD
    timestamps: false, // On ne veut pas de colonnes createdAt/updatedAt
  },
);

module.exports = Category;
