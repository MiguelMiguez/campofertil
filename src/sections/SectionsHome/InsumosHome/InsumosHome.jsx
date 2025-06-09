import React from 'react';
import './InsumosHome.css';
import resumeData from '../../../data/main.json';

const InsumosHome = () => {
  return (
    <div className='InsumosHome'>
      <h2 className='tittle'>Insumos</h2>
      <div className="ContainerLogosInsumos">
        {resumeData.logosinsumos.map((logo, index) => (
          <div key={index} className="LogosInsumos">
            <img
              className='Logos'
              src={
                logo.imagen.startsWith('public/')
                  ? '/' + logo.imagen.replace('public/', '')
                  : logo.imagen
              }
              alt={`Logo ${index}`}
            />
          </div>
        ))}

      </div>
      <div className="BotonInsumos">
        <button className='VerTodos'>VER TODOS</button>
      </div>
    </div>
  );
};

export default InsumosHome;
