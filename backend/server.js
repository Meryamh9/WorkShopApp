const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS complet
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

// Logger
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

// Route de contact
app.post("/api/contact", async (req, res) => {
  const { nom, email, message } = req.body;

  if (!nom || !email || !message) {
    return res.status(400).json({ message: "Champs obligatoires manquants." });
  }

  try {
    console.log("Données reçues :", nom, email, message);

    // Google Sheets
    const sheetdbURL = "https://sheetdb.io/api/v1/i8mq9v6y09lu0";
    await axios.post(sheetdbURL, {
      data: {
        nom,
        email,
        message,
        date: new Date().toISOString(),
      },
    });

    // Email
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
    console.error("Erreur :", error);
    res.status(500).json({ message: "Erreur serveur." });
  }
});

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    return res.status(200).json({ token: "fake-admin-token" });
  }
  return res.status(401).json({ message: "Identifiants invalides" });
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
