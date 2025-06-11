import React from 'react';
import './CardInsumos.css';

export default function CardInsumos() {
    const insumos = [
        { id: 1, name: 'Coadyuvantes' },
        { id: 2, name: 'Herbicida' },
        { id: 3, name: 'Insecticidas' },
        { id: 4, name: 'Fertilizantes' },
        { id: 5, name: 'Fungicidas' },
        { id: 6, name: 'Terapeuticos de semillas' },
        { id: 7, name: 'Semillas de maíz' },
        { id: 8, name: 'Tratamientos foliares' }
    ];

    return (
        <div className="card-insumos-container">
            {insumos.map((insumo) => (
                <button key={insumo.id} className="card-insumos">
                    <p>{insumo.name}</p>
                </button>
            ))}
        </div>
    );
}