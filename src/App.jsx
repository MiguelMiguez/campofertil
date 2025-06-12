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
import Contacto from './pages/Contacto/Contacto';
import ButtonScrollUp from './components/ButtonScrollUp/ButtonScrollUp';
import ScrollTop from './components/ScrollTop/ScrollTop';



function App() {

  return (
    <Router>
      <ScrollTop />
      <ButtonScrollUp />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insumos" element={<Insumos />} />
        <Route path="/tratamientos/:id" element={<Tratamientos />} />
        <Route path="/acopio" element={<Acopio />} />
        <Route path="/logistica" element={<Logistica />} />
        <Route path="/produccion" element={<Produccion />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <ButtonScrollUp />
      <Footer />
    </Router>
  );
}

export default App;
