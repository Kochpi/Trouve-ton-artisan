import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
    const [recherche, setRecherche] = useState('');
    const navigate = useNavigate();
  return (
    <header className="header py-2">
      <nav className="navbar navbar-expand-lg" style={{ height: "50px" }}>
        <div className="container-fluid px-4">

          {/* Logo */}
          <Link to="/" className='d-flex align-items-center h-100'>
            <img src="/Logo.png" alt="Logo" className="logo" />
          </Link>

          {/* Burger menu mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-label="Ouvrir le menu"
          >
            <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav mx-auto gap-3">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/artisans/category/1">Bâtiment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/artisans/category/2">Alimentation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/artisans/category/3">Fabrication</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/artisans/category/4">Services</Link>
              </li>
            </ul>

            {/* Barre de recherche */}
            <input
              type="search"
              className="form-control form-control-sm"
              placeholder="Rechercher..."
              style={{ width: '180px' }}
              value={recherche}
              onChange={(e) => setRecherche(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  navigate(`/search?nom=${recherche}`);
                }
              }}
            />
          </div>

        </div>
      </nav>
    </header>
  );
}

export default Header;