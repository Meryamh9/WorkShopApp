# backend/Dockerfile
FROM node:22

# Créer le répertoire de l'app
WORKDIR /app

# Copier les fichiers package.json + lock et installer
COPY package*.json ./
RUN npm install

# Copier le reste de l'app
COPY . .

# Exposer le port
EXPOSE 3000

# Lancer le serveur
CMD ["node", "server.js"]
