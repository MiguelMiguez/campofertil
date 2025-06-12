import React, { useEffect, useState } from 'react';
import './ButtonScrollUp.css';


const ButtonScrollUp = () => {
    const [visible, setVisible] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const firstSection = document.querySelector('section, .hero, .primer-seccion');
        if (firstSection) {
            firstSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        visible && (
            <button
                className="button-scroll-up"
                onClick={scrollToTop}
                aria-label="Volver arriba"
                tabIndex={0}
            >
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#ff6600" />
                    <path d="M18 25V11M18 11L11 18M18 11L25 18" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        )
    );
};

export default ButtonScrollUp;