const nodemailer = require("nodemailer");

const sendContact = async (req, res) => {
  try {
    // On récupère les données du formulaire
    const { nom, email, objet, message, emailArtisan } = req.body;

    // Configuration du transporteur email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Contenu de l'email
    const mailOptions = {
      from: email,
      to: emailArtisan,
      subject: objet,
      text: `Message de ${nom} (${email}) :\n\n${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "Email envoyé avec succès !" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
  }
};

module.exports = { sendContact };
