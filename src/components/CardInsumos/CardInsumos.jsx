import React from 'react';
import './CardInsumos.css';

import fertilizanteIcon from '../../assets/insumos/fertilizante.svg';
import herbicidaIcon from '../../assets/insumos/herbicida.svg';
import coadyuvantesIcon from '../../assets/insumos/coadyuvante.svg';
import insecticidasIcon from '../../assets/insumos/insecticida.svg';
import terapeuticosIcon from '../../assets/insumos/terapeuticos de semillas.svg';
import semillasMaizIcon from '../../assets/insumos/semillas.svg';
import tratamientosFoliaresIcon from '../../assets/insumos/foliares.svg';
import fungicidasIcon from '../../assets/insumos/fungicida.svg';

export default function CardInsumos() {
    const insumos = [
        { id: 1, name: 'Coadyuvantes', icon: coadyuvantesIcon },
        { id: 2, name: 'Herbicida', icon: herbicidaIcon },
        { id: 3, name: 'Insecticidas', icon: insecticidasIcon },
        { id: 4, name: 'Fertilizantes', icon: fertilizanteIcon },
        { id: 5, name: 'Fungicidas', icon: fungicidasIcon },
        { id: 6, name: 'Terapeuticos de semillas', icon: terapeuticosIcon },
        { id: 7, name: 'Semillas de maíz', icon: semillasMaizIcon },
        { id: 8, name: 'Tratamientos foliares', icon: tratamientosFoliaresIcon }
    ];

    return (
        <div className="card-insumos-container">
            {insumos.map((insumo) => (
                <button key={insumo.id} className="card-insumos">
                    <img src={insumo.icon} alt={insumo.name} className="icono-insumo" />
                    <p>{insumo.name}</p>
                </button>
            ))}

        </div>
    );
}