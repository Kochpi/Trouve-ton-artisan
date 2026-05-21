require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const verifierCle = require("./middleware/auth");

const artisanRoutes = require("./routes/artisanRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

// Middlewares
// pour railway
app.use(
  cors({
    origin: "https://alluring-nourishment-production-2499.up.railway.app",
    allowedHeaders: ["Content-Type", "x-api-key"],
  }),
);
app.use(express.json());
app.use("/api", verifierCle);

// Routes
app.use("/api/artisans", artisanRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Serveur démarré sur le port 3000");
});
