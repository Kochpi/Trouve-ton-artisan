Trouve ton artisan 

Plateforme web dédiée aux artisans de la région Auvergne-Rhône-Alpes.

Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- [Node.js]
- [MySQL]ou [XAMPP]
- [Git]

 Installation

1. Cloner le projet

```bash
git clone https://github.com/Kochpi/Trouve-ton-artisan.git
cd trouve-ton-artisan
```

2. Installer les dépendances du backend

```bash
cd backend
npm install
```

3. Configurer la base de données

- Créer une base de données MySQL nommée `trouve_ton_artisan`
- Exécuter le script de création : `database/create.sql`
- Exécuter le script de données : `database/seed.sql`

