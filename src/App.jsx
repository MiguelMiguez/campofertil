import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Insumos from './pages/Insumos/Insumos';
import Footer from './components/Footer/Footer';
import Tratamientos from './pages/Tratamientos/Tratamientos';
import Acopio from './pages/Acopio/Acopio';
import Logistica from './pages/Logistica/Logistica';
import Produccion from './pages/Produccion/Produccion';
import Nosotros from './pages/Nosotros/Nosotros';
import ButtonScrollUp from './components/ButtonScrollUp/ButtonScrollUp';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insumos" element={<Insumos />} />
        <Route path="/tratamientos/:id" element={<Tratamientos />} />
        <Route path="/acopio" element={<Acopio />} />
        <Route path="/logistica" element={<Logistica />} />
        <Route path="/produccion" element={<Produccion />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
      <ButtonScrollUp />
      <Footer />
    </Router>
  );
}

export default App;
