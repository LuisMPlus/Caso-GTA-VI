
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import IndexPage from './pages/IndexPage';
import DerechoPersonaPage from './pages/DerechoPersonaPage';
import MarcoJuridicoPage from './pages/MarcoJuridicoPage';
import CierrePage from './pages/CierrePage';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-blue">
        <Header />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/derecho-persona" element={<DerechoPersonaPage />} />
          <Route path="/marco-juridico" element={<MarcoJuridicoPage />} />
          <Route path="/cierre" element={<CierrePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
