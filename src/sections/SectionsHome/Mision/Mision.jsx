import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Mision.css';

const Mision = () => {
  return (
    <section className="mision-section" id='mision'>

      <div className="mision-container">
        <h2 className="mision-title">Nuestra Misión</h2>
        <p className="mision-text">
          Orgullosos de ser una entidad agroindustrial comprometida con la excelencia en cada etapa de la cadena productiva. Nuestra misión es liderar el sector, cubriendo desde la producción de granos hasta la oferta integral de insumos y servicios para agricultores en nuestra comunidad. Creciendo con pasión, creyendo en nuestro potencial y confiando en la calidad de nuestro trabajo, buscamos ser referentes en sostenibilidad, innovación y servicio, contribuyendo al desarrollo agrícola y al bienestar de nuestra comunidad.
        </p>

      </div>
      <div className="mision-animation">
        <DotLottieReact
          src="https://lottie.host/4a492abc-39a1-4230-bb07-84921cd47dbc/xcoDiRv45V.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
};

export default Mision;