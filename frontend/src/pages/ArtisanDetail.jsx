import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtisanById } from '../services/api';

function ArtisanDetail() {

  const [artisan, setArtisan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getArtisanById(id)
      .then(response => setArtisan(response.data))
      .catch(err => console.error('Erreur :', err));
  }, [id]);

  if (!artisan) return <p className="text-center py-5">Chargement...</p>;
  document.title = `Trouve ton artisan - ${artisan.nom}`;
  return (
    <main>
      <div className="container py-5">
        <div className="row">

          {/* Colonne gauche */}
          <div className="col-12 col-md-4 mb-4">
            <img
              src="https://placehold.co/400x300"
              alt={artisan.nom}
              className="img-fluid rounded mb-3"
            />
            <h1 style={{ color: '#00497c' }}>{artisan.nom}</h1>
            <div className="etoiles">{'★'.repeat(Math.round(artisan.note))}</div>
            <p style={{ color: '#384050' }}>{artisan.Specialite?.nom}</p>
            <p style={{ color: '#0074c7' }}>📍 {artisan.ville}</p>
          </div>

          {/* Colonne droite */}
          <div className="col-12 col-md-8">
            <h2 style={{ color: '#00497c' }}>À propos</h2>
            <p style={{ color: '#384050' }}>{artisan.a_propos}</p>

            <h2 style={{ color: '#00497c' }}>Contactez-moi</h2>
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Nom" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Objet" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" placeholder="Message" rows="4" />
              </div>
              <button className="btn-principal btn w-100">Envoyer</button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

export default ArtisanDetail;