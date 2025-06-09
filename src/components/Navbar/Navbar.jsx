import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo/Brand CampoFertil.svg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo CampoFertil" />
        </Link>
      </div>
      <div className="navbar__hamburger" onClick={handleMenu}>
        <span />
        <span />
        <span />
      </div>
      <div className={`navbar__menu ${open ? 'open' : ''}`}>
        <button className="navbar__close" onClick={closeMenu}>&#10005;</button>
        <ul>
          <li><Link to="/" onClick={closeMenu}>INICIO</Link></li>
          <li><Link to="/insumos" onClick={closeMenu}>INSUMOS</Link></li>
          <li><Link to="/acopio" onClick={closeMenu}>ACOPIO</Link></li>
          <li><Link to="/logistica" onClick={closeMenu}>LOGISTICA</Link></li>
          <li><Link to="/produccion" onClick={closeMenu}>PRODUCCIÓN</Link></li>
          <li><Link to="/nosotros" onClick={closeMenu}>NOSOTROS</Link></li>
          <li><Link to="/contacto" onClick={closeMenu}>CONTACTO</Link></li>
        </ul>
      </div>
      <div className={`navbar__overlay ${open ? 'show' : ''}`} onClick={closeMenu}></div>
    </nav>
  );
};

export default Navbar;