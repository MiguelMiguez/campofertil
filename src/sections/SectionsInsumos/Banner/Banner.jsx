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
    const [slide, setSlide] = useState(true);
    const intervalRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setSlide(false);
            setTimeout(() => {
                setPrev(current);
                setCurrent((prev) => (prev + 1) % 3);
                setSlide(true);
            }, 500); // tiempo de slide out
        }, 3000);
        return () => clearInterval(intervalRef.current);
    }, [current]);

    const banners = isMobile ? mobileBanners : desktopBanners;

    return (
        <section className="banner-insumos">
            <div className="banner-slider">
                <img
                    src={banners[prev]}
                    alt="Banner anterior"
                    className={`banner-img ${slide ? 'slide-out-left' : 'slide-in-left'}`}
                    style={{ zIndex: 1 }}
                    key={banners[prev] + '-prev'}
                />
                <img
                    src={banners[current]}
                    alt="Banner actual"
                    className={`banner-img ${slide ? 'slide-in-right' : 'slide-out-right'}`}
                    style={{ zIndex: 2 }}
                    key={banners[current] + '-current'}
                />
            </div>
        </section>
    );
};

export default Banner;