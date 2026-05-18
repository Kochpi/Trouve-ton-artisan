import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
    document.title = 'Trouve ton artisan - Page non trouvée';
  return (
    <main>
      <div className="container py-5 text-center">

        <div style={{ fontSize: '80px' }}>🚛</div>

        <h1 style={{ fontSize: '72px', color: '#00497c', fontWeight: 'bold' }}>
          404
        </h1>

        <h2 style={{ color: '#384050' }}>
          Page non trouvée
        </h2>

        <p style={{ color: '#384050' }}>
          La page que vous avez demandée n'existe pas ou a été déplacée.
        </p>

        <button
          className="btn-principal btn mt-3"
          onClick={() => navigate('/')}
        >
          Retour à l'accueil
        </button>

      </div>
    </main>
  );
}

export default NotFound;