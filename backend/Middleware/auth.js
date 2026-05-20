// sécurité

// on cherche la API_KEY
const verifierCle = (req, res, next) => {
  const cle = req.headers["x-api-key"];
  // SI LA CLE EST LA MEME ON PASSE A LA SUITE SINON 403
  if (cle !== process.env.API_KEY) {
    return res.status(403).json({ message: "Accès refusé" });
  }

  next();
};

module.exports = verifierCle;
