-- supprime au cas ou 
DROP TABLE IF EXISTS artisans;
DROP TABLE IF EXISTS specialites;
DROP TABLE IF EXISTS categories;

-- Table catégories 
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL
);

-- Table spécialités 
CREATE TABLE specialites (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    id_categorie INT NOT NULL,
    FOREIGN KEY (id_categorie) REFERENCES categories(id)
);

-- Table artisans
CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(150) NOT NULL,
    note DECIMAL(2,1) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    a_propos TEXT,
    email VARCHAR(150) NOT NULL,
    site_web VARCHAR(250),
    top BOOLEAN DEFAULT FALSE,
    id_specialite INT NOT NULL,
    FOREIGN KEY (id_specialite) REFERENCES specialites(id)
);




