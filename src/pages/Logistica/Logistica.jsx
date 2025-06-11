import React from 'react';
import './Logistica.css';
import HeroLogistica from '../../sections/SectionLogistica/HeroLogistica/HeroLogistica.jsx';
import ServiciosLogistica from '../../sections/SectionLogistica/ServiciosLogistica/ServiciosLogistica.jsx';


export default function Logistica() {
    return (
        <main>
            <HeroLogistica />
            <ServiciosLogistica />
        </main>
    );
}