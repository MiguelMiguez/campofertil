import React from 'react';
import './ProduccionHero.css';
import LogoBlanco from '../../../assets/logo/Brand blanco.svg';

export default function ProduccionHero() {
    return (
        <section className="produccion-hero">
            <img className='produccion-hero-image' src={LogoBlanco} alt="Logo Blanco" />
            <h1 className="produccion-hero-title">PRODUCCIÓN</h1>
        </section>
    );
}