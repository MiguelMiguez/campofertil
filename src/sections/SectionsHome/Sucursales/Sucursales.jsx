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
        <h2 className="TituloSucursales">Sucursales</h2>
        <p className='TextoSucursales'>
          Campo Fértil S.R.L. cuenta con dos sucursales principales. La sede central está ubicada en Villaguay, Entre Ríos, donde se realizan actividades de venta de agroquímicos, acondicionamiento y acopio de cereales, y servicios de transporte. La otra sucursal se encuentra en Aldea Valle María, enfocándose en la venta de agroquímicos y cubriendo la zona de influencia del centro oeste provincial.
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
