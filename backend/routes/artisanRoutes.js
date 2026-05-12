const express = require("express");
const router = express.Router();
const {
  getAllArtisans,
  getArtisanById,
  getTopArtisans,
  searchArtisans,
  getArtisansByCategory,
} = require("../controllers/artisanController");

router.get("/", getAllArtisans); // GET /api/artisans
router.get("/top", getTopArtisans); // GET /api/artisans/top
router.get("/search", searchArtisans); // GET /api/artisans/search?nom=...
router.get("/:id", getArtisanById); // GET /api/artisans/1
router.get("/category/:id", getArtisansByCategory);

module.exports = router;
