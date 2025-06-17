// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Route test
app.get('/', (req, res) => {
  res.send('Backend opérationnel 🎉');
});

// Route pour formulaire contact
app.post('/api/contact', (req, res) => {
  const { nom, email, message } = req.body;
  console.log('📩 Nouveau message reçu :', { nom, email, message });

  res.status(200).json({ message: 'Message reçu avec succès !' });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
