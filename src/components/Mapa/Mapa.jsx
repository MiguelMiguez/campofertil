import React from 'react';
import './Mapa.css'

const Mapa = ({ url }) => {
  return (
    <div className='Mapa'>
      <iframe 
        src={url}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Mapa"
      ></iframe>
    </div>
  );
}

export default Mapa;
