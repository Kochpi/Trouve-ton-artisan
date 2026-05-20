const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

// la table category en sql mais en sequelize
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
    tableName: "categories",
    timestamps: false,
  },
);

module.exports = Category;
