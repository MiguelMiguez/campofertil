import React from 'react';
import './Produccion.css';
import ProduccionHero from '../../sections/SectionsProduccion/ProduccionHero/ProduccionHero';
import ContainerInfoProduccion from '../../sections/SectionsProduccion/ContainerInfoProduccion/ContainerInfoProduccion';

export default function Produccion() {
    return (
        <main>
            <ProduccionHero />
            <ContainerInfoProduccion />
        </main>
    );
}
