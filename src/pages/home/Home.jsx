import React from 'react';

// Importa aquí las secciones cuando las crees
import Hero from '../../sections/SectionsHome/Hero/Hero';
import Mision from '../../sections/SectionsHome/Mision/Mision';
import ButtonScroll from '../../components/ButtonScroll/ButtonScroll';
import Sucursales from '../../sections/SectionsHome/Sucursales/Sucursales';
import Footer from '../../components/Footer/Footer';
import InsumosHome from '../../sections/SectionsHome/InsumosHome/InsumosHome';

const Home = () => {
    return (
        <main>
            <Hero />
            <ButtonScroll />
            <Mision />
            <Sucursales />
            <InsumosHome />
            <Footer />
        </main>
    );
};

export default Home;