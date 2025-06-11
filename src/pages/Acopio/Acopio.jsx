import React from 'react'
import AcopioHero from '../../sections/SectionsAcopio/AcopioHero/AcopioHero';
import PlantaAcopio from '../../sections/SectionsAcopio/PlantaAcopio/PlantaAcopio';
import ServicioPlantaAcopio from '../../sections/SectionsAcopio/ServicioPlantaAcopio/ServicioPlantaAcopio';

export default function Acopio() {
    return (
        <main>
            <AcopioHero />
            <PlantaAcopio />
            <ServicioPlantaAcopio />
        </main>
    );
}