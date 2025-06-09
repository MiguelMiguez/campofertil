import React, { useEffect, useState, useRef } from 'react';
import bannerDesktop1 from '../../../assets/banners/baner desktop 1.jpg';
import bannerDesktop2 from '../../../assets/banners/baner desktop 2.jpg';
import bannerDesktop3 from '../../../assets/banners/baner desktop 3.jpg';
import bannerMobile1 from '../../../assets/banners/baner mobile 1.jpg';
import bannerMobile2 from '../../../assets/banners/baner mobile 2.jpg';
import bannerMobile3 from '../../../assets/banners/baner mobile 3.jpg';




const desktopBanners = [bannerDesktop1, bannerDesktop2, bannerDesktop3];
const mobileBanners = [bannerMobile1, bannerMobile2, bannerMobile3];

const Banner = () => {

    return (
        <section className="banner-insumos">
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={bannerDesktop1} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bannerDesktop2} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={bannerDesktop3} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;