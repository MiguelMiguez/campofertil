import React from 'react';
import './InsumosHome.css';


const InsumosHome = () => {
  const resumeData = useMyContext();

  return (
    <div className='InsumosHome'>
      <h2 className='TituloSucursales'>INSUMOS</h2>
      <div className="ContainerLogosInsumos">
        <div className="ContainerLogosInsumos">
          {resumeData.logosinsumos.map((logo, index) => (
            <div key={index} className="LogosInsumos">
              <img className='Logos' src={logo.imagen} alt={`Logo ${index}`} />
            </div>
          ))}
        </div>
        <div className="BotonInsumos">
          <button className='VerTodos'>VER TODOS</button>
        </div>
      </div>

    </div>
  );
};

export default InsumosHome;
