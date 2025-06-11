import React, { useRef, useEffect } from 'react';
import logosData from '../../data/main.json';
import './Pasarela.css';

const Pasarela = () => {
    // Tomar los logos desde el JSON
    const logos = logosData.logosinsumos.map((item) =>
        item.imagen.replace(/^public\//, '/')
    );

    // Duplicar para efecto infinito
    const logosToShow = [...logos, ...logos];
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        let animation;
        let start = null;

        const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            // Ajusta la velocidad aquí (menor divisor = más rápido)
            const distance = (elapsed / 30) % (track.scrollWidth / 2);
            track.style.transform = `translateX(-${distance}px)`;
            animation = requestAnimationFrame(animate);
        };

        animation = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animation);
    }, []);

    return (
        <div className="pasarela-container">
            <div className="pasarela-track" ref={trackRef}>
                {logosToShow.map((logo, idx) => (
                    <div className="pasarela-logo" key={idx}>
                        <img src={logo} alt={`Logo ${idx + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pasarela;