import React from 'react';
import Form from '../../../components/Form/Form';
import './ContactoForm.css';
import LogoBlanco from '../../../assets/logo/Brand blanco.svg';

export default function ContactoForm() {
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
                <h2 className="contacto-titulo">contáctanos</h2>
                <p className="contacto-subtitulo">
                    Nosotros nos <span className="contacto-destacado">encargamos de todo!</span>
                </p>
                <Form />
            </div>
        </section>
    );
};

