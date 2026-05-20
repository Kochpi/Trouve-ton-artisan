// import des pages et création des routes /

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtisanList from './pages/ArtisanList';
import ArtisanDetail from './pages/ArtisanDetail';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import Legal from './pages/Legal';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artisans/category/:id" element={<ArtisanList />} />
        <Route path="/artisans/:id" element={<ArtisanDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mentions-legales" element={<Legal />} />
        <Route path="/donnees-personnelles" element={<Legal />} />
        <Route path="/accessibilite" element={<Legal />} />
        <Route path="/cookies" element={<Legal />} />
      </Routes>
      </main>    
      <Footer />
    </BrowserRouter>
  );
}

export default App;
