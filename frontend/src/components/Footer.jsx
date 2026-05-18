import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer py-4">
      <div className="container-fluid px-4">
        <div className="row">

          {/* Adresse */}
          <div className="col-12 col-md-4 text-white mb-3 mb-md-0">
            <p className="mb-1">101 cours Charlemagne</p>
            <p className="mb-1">CS 20033</p>
            <p className="mb-1">69269 LYON CEDEX 02</p>
            <p className="mb-1">France</p>
            <p className="mb-0">+33 (0)4 26 73 40 00</p>
          </div>

          {/* Séparateur vertical */}
          <div className="col-md-1 d-none d-md-flex justify-content-center">
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.3)' }}></div>
          </div>

          {/* Liens légaux */}
          <div className="col-12 col-md-7 d-flex flex-wrap align-items-center gap-3">
            <Link to="/mentions-legales" className="text-white text-decoration-underline">
              Mentions légales
            </Link>
            <Link to="/donnees-personnelles" className="text-white text-decoration-underline">
              Données personnelles
            </Link>
            <Link to="/accessibilite" className="text-white text-decoration-underline">
              Accessibilité
            </Link>
            <Link to="/cookies" className="text-white text-decoration-underline">
              Cookies
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;