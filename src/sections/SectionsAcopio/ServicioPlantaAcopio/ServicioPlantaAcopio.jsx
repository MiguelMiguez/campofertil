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

                    <p>Recepción y acondicionamiento de cereales y oleaginosas.</p>
                    <p>Almacenaje seguro y controlado.</p>
                    <p>Despacho eficiente de mercadería.</p>
                    <p>Asesoramiento técnico para productores.</p>
                    <p>Gestión de logística y transporte.</p>
                    <p>Control de calidad y trazabilidad.</p>

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