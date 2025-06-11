import React from "react";
import "./NosotrosInfo.css";
import data from "../../../data/nosotros.json";

const historiaImg = "https://res.cloudinary.com/deamcrkgb/image/upload/v1749672796/Equipo_nddhmr.webp";
const visionImg = "https://res.cloudinary.com/deamcrkgb/image/upload/v1749673017/tractor_ucg0ez.jpg";

export default function NosotrosInfo() {
    return (
        <section className="nosotros-info">
            <div className="nosotros-info__block">
                <div className="nosotros-info__text">
                    <h2 className="nosotros-info__title">{data.nuestra_historia.titulo}</h2>
                    <p className="nosotros-info__desc">{data.nuestra_historia.contenido}</p>
                    <ul className="nosotros-info__list">
                        {data.nuestra_historia.hitos.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="nosotros-info__image">
                    <img src={historiaImg} alt="Historia Campo Fértil" />
                </div>
            </div>

            <div className="nosotros-info__block reverse">
                <div className="nosotros-info__text">
                    <h2 className="nosotros-info__title">{data.vision.titulo}</h2>
                    <p className="nosotros-info__desc">{data.vision.contenido}</p>
                </div>
                <div className="nosotros-info__image">
                    <img src={visionImg} alt="Visión Campo Fértil" />
                </div>
            </div>
        </section>
    );
}