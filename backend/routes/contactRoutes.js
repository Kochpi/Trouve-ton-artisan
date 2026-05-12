const express = require("express");
const router = express.Router();
const { sendContact } = require("../controllers/contactController");

router.post("/", sendContact); // POST /api/contact

module.exports = router;
