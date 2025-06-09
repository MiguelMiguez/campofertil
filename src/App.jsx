import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/home/Home';
import Insumos from './pages/Insumos/Insumos';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insumos" element={<Insumos />} />
      </Routes>
    </Router>
  );
}

export default App;
