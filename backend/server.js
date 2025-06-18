const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route d'envoi de message
app.post("/api/contact", async (req, res) => {
  const { nom, email, message } = req.body;

   if (!nom || !email || !message) {
    return res.status(400).json({ message: "Champs obligatoires manquants." });
  }
  // Configuration du transporteur SMTP avec .env
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.MAIL_USER,   // expéditeur
    to: process.env.MAIL_USER,     // destinataire
    replyTo: email,                // adresse de l'utilisateur
    subject: `Nouveau message de ${nom}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email envoyé :", mailOptions);
    res.status(200).json({ message: "Message envoyé avec succès !" });
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
    res.status(500).json({ message: "Erreur lors de l'envoi du message." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend opérationnel sur http://localhost:${PORT}`);
});
