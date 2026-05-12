-- Données SQL

-- Les catégories 
INSERT INTO categories (nom) VALUES
('Alimentation'),
('Batiment'),
('Fabrication'),
('Services');

-- Les spécialités
INSERT INTO specialites (nom, id_categorie) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Electricien', 2),
('Menuisier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);

-- Artisans
INSERT INTO artisans (nom, note, ville, a_propos, email, site_web, top, id_specialite) VALUES
('Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet...', 'boucherie.dumond@gmail.com', NULL, FALSE, 1),
('Au pain chaud', 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet...', 'aupainchaud@hotmail.com', NULL, TRUE, 2),
('Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet...', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', TRUE, 3),
('Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet...', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', FALSE, 4),
('Orville Salmons', 5.0, 'Evian', 'Lorem ipsum dolor sit amet...', 'o-salmons@live.com', NULL, TRUE, 5),
('Mont Blanc Eléctricité', 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet...', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', FALSE, 6),
('Boutot & fils', 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet...', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', FALSE, 7),
('Vallis Bellemare', 4.0, 'Vienne', 'Lorem ipsum dolor sit amet...', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', FALSE, 8),
('Claude Quinn', 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet...', 'claude.quinn@gmail.com', NULL, FALSE, 9),
('Amitee Lécuyer', 4.5, 'Annecy', 'Lorem ipsum dolor sit amet...', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', FALSE, 10),
('Ernest Carignan', 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet...', 'e-carigan@hotmail.com', NULL, FALSE, 11),
('Royden Charbonneau', 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet...', 'r.charbonneau@gmail.com', NULL, FALSE, 12),
('Leala Dennis', 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet...', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', FALSE, 12),
('C''est sup''hair', 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet...', 'sup-hair@gmail.com', 'https://sup-hair.fr', FALSE, 12),
('Le monde des fleurs', 4.6, 'Annonay', 'Lorem ipsum dolor sit amet...', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', FALSE, 13),
('Valérie Laderoute', 4.5, 'Valence', 'Lorem ipsum dolor sit amet...', 'v-laredoute@gmail.com', NULL, FALSE, 14),
('CM Graphisme', 4.4, 'Valence', 'Lorem ipsum dolor sit amet...', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', FALSE, 15);