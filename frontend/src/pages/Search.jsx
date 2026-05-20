// LA BARRE DE RECHERCHE 


import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchArtisans } from '../services/api';

// on charge tout ce dont ona besoin
function Search() {
  const [artisans, setArtisans] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const nom = searchParams.get('nom');

  // on renvoie ca 
  useEffect(() => {
    searchArtisans(nom)
      .then(response => setArtisans(response.data))
      .catch(err => console.error('Erreur :', err));
  }, [nom]);
  document.title = `Trouve ton artisan - Recherche : ${nom}`;
  return (
    <main>
      <div className="container py-5">
        <h1 className="text-center mb-4" style={{ color: '#00497c' }}>
          Résultats pour "{nom}"
        </h1>
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
    </main>
  );
}

export default Search;