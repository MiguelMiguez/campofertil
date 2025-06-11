import React from 'react';
import './PlantaAcopio.css';

const PlantaAcopio = () => {
    return (
        <section className="planta-acopio">
            <h2 className="planta-acopio__titulo">Nuestra Planta</h2>
            <div className="planta-acopio__contenido">
                <img
                    className="planta-acopio__imagen"
                    src="https://res.cloudinary.com/deamcrkgb/image/upload/v1749658943/planta_dron_mpvwl4.webp"
                    alt="Planta de acopio"
                />
                <p className="planta-acopio__texto">
                    Con el fin de cubrir necesidades propias y de clientes contamos con una planta de acopio de cereales ubicada en Parque Industrial Villaguay sobre Ruta 18, KM 147.5
                </p>

            </div>
            <div className="planta-acopio__mapa">
                <a href="https://www.google.com.ar/maps/search/-31.810424,+-59.056793?entry=tts&g_ep=EgoyMDI0MDUyOC4wKgBIAVAD" className="planta-acopio__boton" target='_blank'>Mapa</a></div>
        </section>
    );
};

export default PlantaAcopio;