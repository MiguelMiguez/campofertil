import React from 'react';
import './Sucursales.css';
import ComponenteSucursal from '../../../components/ComponenteSucursal/ComponenteSucursal';
import data from '../../../data/main.json';

const sucursalesData = [
  {
    nombresucursal: data.nombresucursal[0].nombre,
    informacion: data.informacionvillaguay,
    mapUrl: data.mapa[1]?.villaguay
  },
  {
    nombresucursal: data.nombresucursal[1].nombre,
    informacion: data.informacionvallemaria,
    mapUrl: data.mapa[0]?.vallemaria
  }
];

const Sucursales = () => {
  return (
    <div className='Sucursales'>
      <div className="InfoSucursales">
        <h2 className="TituloSucursales">¿Dónde nos encontrás?</h2>
        <br />
        <p className='TextoSucursales'>
          <strong>Villaguay, Entre Ríos</strong>
          <br />
          Casa central. Desde aquí coordinamos la venta de
          agroquímicos, el acopio y acondicionamiento de
          granos, y nuestros servicios de transporte.
          <br />
          <br />
          <strong>Aldea Valle María, Entre Ríos</strong>
          <br />
          Sucursal enfocada en la venta de agroquímicos,
          brindando atención a toda la zona centro-oeste de la
          provincia.
        </p>
      </div>
      {sucursalesData.map((sucursal, idx) => (
        <div className="ComponenteSucursal" key={idx}>
          <ComponenteSucursal
            nombresucursal={sucursal.nombresucursal}
            informacion={sucursal.informacion}
            mapUrl={sucursal.mapUrl}
          />
        </div>
      ))}
    </div>
  );
}

export default Sucursales;
