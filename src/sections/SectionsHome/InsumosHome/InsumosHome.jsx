import React from 'react';
import './InsumosHome.css';
import resumeData from '../../../data/main.json';
import { useNavigate } from 'react-router-dom';

const InsumosHome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/insumos');
  };

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
        <button onClick={handleClick} className='VerTodos'>VER TODOS</button>
      </div>
    </div>
  );
};

export default InsumosHome;
