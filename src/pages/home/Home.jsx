import React from 'react';
import Hero from '../../sections/SectionsHome/Hero/Hero';
import Mision from '../../sections/SectionsHome/Mision/Mision';
import ButtonScroll from '../../components/ButtonScroll/ButtonScroll';
import Sucursales from '../../sections/SectionsHome/Sucursales/Sucursales';
import InsumosHome from '../../sections/SectionsHome/InsumosHome/InsumosHome';
import ContactoForm from '../../sections/SectionsHome/ContactoForm/ContactoForm';
import ServicioPlantaAcopio from '../../sections/SectionsAcopio/ServicioPlantaAcopio/ServicioPlantaAcopio';

export default function Home() {
    return (
        <main>
            <Hero />
            <ButtonScroll />
            <Mision />
            <Sucursales />
            <ServicioPlantaAcopio />
            <InsumosHome />
            <ContactoForm />

        </main>
    );
};

