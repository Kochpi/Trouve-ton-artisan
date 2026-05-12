const { Artisan, Specialite, Category } = require("../models");
const { Op } = require("sequelize");

// Tous les artisans
const getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        include: Category,
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Un artisan par son id
const getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: {
        model: Specialite,
        include: Category,
      },
    });
    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé" });
    }
    res.json(artisan);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Les artisans du mois
const getTopArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: {
        model: Specialite,
        include: Category,
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Recherche par nom
const searchArtisans = async (req, res) => {
  try {
    const nom = req.query.nom;
    const artisans = await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${nom}%` },
      },
      include: {
        model: Specialite,
        include: Category,
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// recher par catégorie
const getArtisansByCategory = async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      include: {
        model: Specialite,
        where: { id_categorie: req.params.id },
        include: Category,
      },
    });
    res.json(artisans);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur" });
  }
};

module.exports = {
  getAllArtisans,
  getArtisanById,
  getTopArtisans,
  searchArtisans,
  getArtisansByCategory,
};
