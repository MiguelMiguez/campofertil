import React from "react";
import "./ServiciosLogistica.css";
import transportes from "../../../data/logistica.json";

export default function ServiciosLogistica() {
    return (
        <section className="servicios-logistica">
            <h2 className="servicios-logistica__titulo">
                Transporte
            </h2>
            <p className="servicios-logistica__intro">
                Brindamos un servicio seguro y eficiente de transporte de granos hacia planta de acopio, industrias o principales puertos del país.
            </p>
            <div className="servicios-logistica__items">
                {transportes.map((item, idx) => (
                    <div
                        key={item.nombre}
                        className={`servicios-logistica__item${idx % 2 === 1 ? " reverse" : ""}`}
                    >
                        <div className="servicios-logistica__img-container">
                            <img
                                src={item.imagen}
                                alt={item.nombre}
                                className="servicios-logistica__img"
                            />

                        </div>
                        <div className="servicios-logistica__info">
                            <h3>{item.nombre}</h3>
                            <p>{item.descripcion}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}