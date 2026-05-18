// sécurité

const verifierCle = (req, res, next) => {
  const cle = req.headers["x-api-key"];

  if (cle !== process.env.API_KEY) {
    return res.status(403).json({ message: "Accès refusé" });
  }

  next();
};

module.exports = verifierCle;
