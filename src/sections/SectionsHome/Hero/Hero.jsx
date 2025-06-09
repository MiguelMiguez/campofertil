import React from 'react';
import './Hero.css';
import logo from '../../../assets/logo/Brand blanco.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <div className="hero__logo">
          <img className='hero__logo_image' src={logo} alt="Campo Fertil" />
          <button className='hero__button'> Contactanos</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;