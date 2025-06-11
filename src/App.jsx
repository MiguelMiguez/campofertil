import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Insumos from './pages/Insumos/Insumos';
import Footer from './components/Footer/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insumos" element={<Insumos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
