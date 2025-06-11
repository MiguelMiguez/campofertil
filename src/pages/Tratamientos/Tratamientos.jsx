import React from 'react';
import { useParams } from 'react-router-dom';
import './Tratamientos.css';
import Insumos from '../../data/insumos.json';
import Contacto from '../../sections/SectionsHome/Contacto/Contacto';

export default function Tratamientos() {
    const { id } = useParams();
    const insumo = Insumos.find((item) => item.id === parseInt(id));

    if (!insumo) {
        return (
            <div className="container">
                <div className="tratamientos">
                    <h2>Insumo no encontrado</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="tratamientos">
                <h2 className='tratamiento-titulo'>{insumo.name}</h2>
                <p className='tratamiento-descripcion'>{insumo.description}</p>
            </div>
            {insumo.productos && (
                <div className="tratamientos-productos">
                    {insumo.productos.map((producto, idx) => (
                        <div
                            key={idx}
                            className={`tratamientos-producto-item${idx % 2 === 1 ? ' reverse' : ''}`}
                        >
                            <div className="tratamientos-producto-info">
                                <h3>{producto.nombre}</h3>
                                <p className='tratamientos-producto-texto'>
                                    {producto.detalles}
                                </p>
                            </div>
                            {producto.imagen && (
                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    className="tratamientos-producto-imagen"
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}
            <div className="tratamientos-contacto">
                <Contacto />
            </div>
        </div>
    );
}

