import React from 'react';
import './AcopioHero.css';
import LogoBlanco from '../../../assets/logo/Brand blanco.svg';




export default function AcopioHero() {
    return (
        <section className="acopio-hero">
            <img className='acopio-hero-image' src={LogoBlanco} alt="Logo Blanco" />
            <h1 className="acopio-hero-title">ACOPIO</h1>
        </section>
    );
}
