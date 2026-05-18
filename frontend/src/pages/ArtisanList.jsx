import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getArtisansByCategory } from '../services/api';

function ArtisanList() {

  // On stocke la liste des artisans
  const [artisans, setArtisans] = useState([]);

  // useParams récupère le "id" dans l'URL ex: /artisans/category/2 → id = 2
  const { id } = useParams();

  // useNavigate permet de changer de page
  const navigate = useNavigate();

  // Au chargement, on appelle l'API pour récupérer les artisans de cette catégorie
  useEffect(() => {
    getArtisansByCategory(id)
      .then(response => setArtisans(response.data))
      .catch(err => console.error('Erreur :', err));
  }, [id]);
  document.title = 'Trouve ton artisan - Liste des artisans';
  return (
    <main>
      <section className="py-5">
        <div className="container">

          {/* Liste des artisans */}
          <div className="row g-3">
            {artisans.map(artisan => (
              <div key={artisan.id} className="col-12 col-md-6 col-lg-4">
                <div
                  className="card-artisan p-3 bg-white"
                  onClick={() => navigate(`/artisans/${artisan.id}`)}
                >
                  <h2 style={{ color: '#00497c', fontSize: '16px' }}>{artisan.nom}</h2>
                  <div className="etoiles">{'★'.repeat(Math.round(artisan.note))}</div>
                  <p style={{ color: '#384050' }}>{artisan.Specialite?.nom}</p>
                  <p style={{ color: '#0074c7' }}>📍 {artisan.ville}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}

export default ArtisanList;