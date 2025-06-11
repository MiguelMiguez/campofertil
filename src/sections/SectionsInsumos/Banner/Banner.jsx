import React, { useEffect, useState, useRef } from 'react';
import bannerDesktop1 from '../../../assets/banners/baner desktop 1.jpg';
import bannerDesktop2 from '../../../assets/banners/baner desktop 2.jpg';
import bannerDesktop3 from '../../../assets/banners/baner desktop 3.jpg';
import bannerMobile1 from '../../../assets/banners/baner mobile 1.jpg';
import bannerMobile2 from '../../../assets/banners/baner mobile 2.jpg';
import bannerMobile3 from '../../../assets/banners/baner mobile 3.jpg';
import './Banner.css';

const desktopBanners = [bannerDesktop1, bannerDesktop2, bannerDesktop3];
const mobileBanners = [bannerMobile1, bannerMobile2, bannerMobile3];

const Banner = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [current, setCurrent] = useState(0);
    const [prev, setPrev] = useState(0);
    const [direction, setDirection] = useState('right');
    const timeoutRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const banners = isMobile ? mobileBanners : desktopBanners;

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setPrev(current);
            setDirection('right');
            setCurrent((prevIdx) => (prevIdx + 1) % banners.length);
        }, 3000);
        return () => clearTimeout(timeoutRef.current);
    }, [current, banners.length]);


    useEffect(() => {
        setCurrent(0);
        setPrev(0);
    }, [isMobile]);

    return (
        <section className="banner-insumos">
            <div className="banner-slider">
                {banners.map((img, idx) => {
                    let className = 'banner-img';
                    if (idx === current) {
                        className += ` slide-in-${direction}`;
                    } else if (idx === prev) {
                        className += ` slide-out-${direction}`;
                    } else {
                        className += ' hidden';
                    }
                    return (
                        <img
                            key={img}
                            src={img}
                            alt={`Banner ${idx + 1}`}
                            className={className}
                            draggable={false}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Banner;