const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

//Route d'envoi de message
app.post("/api/contact", async (req, res) => {
  const { nom, email, message } = req.body;

  if (!nom || !email || !message) {
    return res.status(400).json({ message: "Champs obligatoires manquants." });
  }

  //Enregistrement Google Sheets via SheetDB
  try {
    console.log("Données reçues :", nom, email, message);

    const sheetdbURL = "https://sheetdb.io/api/v1/i8mq9v6y09lu0";
    await axios.post(sheetdbURL, {
      data: {
        nom,
        email,
        message,
        date: new Date().toISOString(),
      },
    });
    console.log("Données enregistrées dans Google Sheets !");
  } catch (err) {
    console.error("Erreur Google Sheets :", err);
  }

  //Configuration et envoi d'email
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      replyTo: email,
      subject: `Nouveau message de ${nom}`,
      text: message,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email envoyé !");
    res.status(200).json({ message: "Message envoyé avec succès !" });

  } catch (error) {
    console.error("Erreur email :", error);
    res.status(500).json({ message: "Erreur lors de l'envoi du message." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend opérationnel sur http://localhost:${PORT}`);
});
