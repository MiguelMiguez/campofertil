import React from 'react';
import './Hero.css';
import logo from '../../../assets/logo/Brand blanco.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <div className="hero__logo">
          <img className='hero__logo_image' src={logo} alt="Campo Fertil" />
          <a href="#contacto" className='hero__button'>Contactanos</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;