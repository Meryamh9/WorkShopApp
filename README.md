# Firmitudo – Site vitrine professionnel + Backoffice

Projet réalisé dans le cadre du workshop client – MBA Développeur Full Stack  
Étudiante : **Mariyem Hidass**  
Client : **Firmitudo**

## Présentation

Ce projet a pour objectif de fournir à l'entreprise Firmitudo :

- Un **site vitrine professionnel, responsive et moderne**
- Un **formulaire de contact fonctionnel** avec envoi d'email
- Une **sauvegarde des messages dans Google Sheets** via SheetDB
- Un **backoffice sécurisé** pour consulter les messages reçus

---

## Stack technique

| Côté | Technologies |
|------|--------------|
| Frontend | Angular 19 (standalone components), Tailwind CSS |
| Backend | Node.js, Express.js |
| Stockage | Google Sheets (via SheetDB API) |
| Email | SMTP Gmail avec Nodemailer |
| Auth | Login + token localStorage + AuthGuard |
| Tests | Jest (backend) + tests composants Angular |
| CI/CD | GitHub Actions |
| Déploiement | Vercel (frontend) + Render (backend) |
| Conteneurisation | Docker (frontend & backend) |

---

## Lancer le projet en local

### 1. Clone du dépôt

```bash
git clone https://github.com/Meryamh9/WorkShopApp.git
cd WorkShopApp
```

---

### 2. Configuration des variables d’environnement

Crée un fichier `.env` dans le dossier `/backend/` avec le contenu suivant :

```ini
PORT=3000
MAIL_USER=tonemail@gmail.com
MAIL_PASS=tonMdpApp
ADMIN_USER=admin
ADMIN_PASS=123456
```

---

### 3. Lancer le projet avec Docker (frontend + backend)

```bash
docker-compose up --build
```

L’application sera disponible aux adresses suivantes :

- **Frontend (Angular)** : http://localhost:4200  
- **Backend (Express API)** : http://localhost:3000/api/contact

---

### 4. Accès au backoffice

- **URL** : `/admin`  
- **Identifiants par défaut** :
  - Utilisateur : `admin`
  - Mot de passe : `123456`

---

### 5. Tests

- **Frontend** : tests unitaires des composants Angular  
- **Backend** : tests avec **Jest** + **Supertest** pour les routes :
  - `/api/contact`
  - `/api/admin/login`

---

### 6. Déploiement

- **Frontend** : hébergé sur **Vercel**  
- **Backend** : hébergé sur **Render**  
- **CI/CD** : automatisé via **GitHub Actions**
```
