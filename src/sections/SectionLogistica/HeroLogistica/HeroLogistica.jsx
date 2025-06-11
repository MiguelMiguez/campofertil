import React from "react";
import "./HeroLogistica.css";
import LogoBlanco from "../../../assets/logo/Brand blanco.svg";

export default function HeroLogistica() {
    return (
        <section className="hero-logistica">
            <div className="hero-logistica__container">
                <img className="hero-logistica__image" src={LogoBlanco} alt="Logo Campo Fértil" />
                <h1 className="hero-logistica__title">LOGÍSTICA</h1>
            </div>
        </section>
    );
}