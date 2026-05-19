import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTopArtisans } from '../services/api';

function Home() {
  const [artisans, setArtisans] = useState([]);
  const navigate = useNavigate();

  // Récupère les artisans du mois au chargement
  useEffect(() => {
    getTopArtisans()
      .then(response => setArtisans(response.data))
      .catch(err => console.error('Erreur :', err));
  }, []);
  document.title = 'Trouve ton artisan - Accueil';
  return (
    <main>

      {/* Section Comment trouver mon artisan */}
      <section className="py-5 bg-white">
        <div className="container">
          <h1 className="text-center mb-4" style={{ color: '#00497c' }}>
            Comment trouver mon artisan ?
          </h1>
          <div className="row g-3">

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card-artisan p-3 text-center bg-white h-100">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '40px', height: '40px' }}>1</div>
                <p style={{ color: '#384050' }}>Choisir la catégorie d'artisanat dans le menu</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card-artisan p-3 text-center bg-white h-100">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '40px', height: '40px' }}>2</div>
                <p style={{ color: '#384050' }}>Choisir un artisan</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card-artisan p-3 text-center bg-white h-100">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '40px', height: '40px' }}>3</div>
                <p style={{ color: '#384050' }}>Le contacter via le formulaire de contact</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card-artisan p-3 text-center bg-white h-100">
                <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '40px', height: '40px' }}>4</div>
                <p style={{ color: '#384050' }}>Une réponse sera apportée sous 48h</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section Artisans du mois */}
      <section className="py-5" style={{ background: '#f1f8fc' }}>
        <div className="container">
          <h2 className="text-center mb-4" style={{ color: '#00497c' }}>
            Les artisans du mois
          </h2>
          <div className="row g-3">
            {artisans.map(artisan => (
              <div key={artisan.id} className="col-12 col-md-4">
                <div
                  className="card-artisan p-3 bg-white"
                  onClick={() => navigate(`/artisans/${artisan.id}`)}
                >
                  <h3 style={{ color: '#00497c', fontSize: '16px' }}>{artisan.nom}</h3>
                  <div className="etoiles">{'★'.repeat(Math.round(artisan.note))}</div>
                  <p className="mb-1" style={{ color: '#384050' }}>{artisan.Specialite?.nom}</p>
                  <p className="mb-0" style={{ color: '#0074c7' }}>📍 {artisan.ville}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;