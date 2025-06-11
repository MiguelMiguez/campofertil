import React from 'react';
import './ServicioPlantaAcopio.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './ServicioPlantaAcopio.css';

const ServicioPlantaAcopio = () => {
    return (
        <section className="servicio-planta-acopio">
            <h2 className="servicio-planta-acopio__titulo">Servicios de la planta de acopio</h2>
            <div className="servicio-planta-acopio__contenido">
                <div className="servicio-planta-acopio__info">
                    <ul>
                        <li>Recepción y acondicionamiento de cereales y oleaginosas.</li>
                        <li>Almacenaje seguro y controlado.</li>
                        <li>Despacho eficiente de mercadería.</li>
                        <li>Asesoramiento técnico para productores.</li>
                        <li>Gestión de logística y transporte.</li>
                        <li>Control de calidad y trazabilidad.</li>
                    </ul>
                </div>
                <div className="servicio-planta-acopio__lottie">
                    <DotLottieReact
                        src="https://lottie.host/5bb5cbd1-af32-44c2-bda6-6caba6ab3c3c/W2qnWKatj5.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicioPlantaAcopio;