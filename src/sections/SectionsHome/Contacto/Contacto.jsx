import React from 'react';
import Form from '../../../components/Form/Form';
import './Contacto.css';
import LogoBlanco from '../../../assets/logo/Brand blanco.svg';

const Contacto = () => {
    return (
        <section className="contacto-section" id="contacto">
            <div className="contacto-imagen">
                <img
                    src={LogoBlanco}
                    alt="Contacto"
                    className="contacto-img"
                />
            </div>
            <div>
                <h2 className="contacto-titulo">contactanos</h2>
                <p className="contacto-subtitulo">
                    Nosotros nos <span className="contacto-destacado">encargamos de todo!</span>
                </p>
                <Form />
            </div>
        </section>
    );
};

export default Contacto;