import React from "react";
import "./InfoProduccion.css";
import data from "../../../data/produccion.json";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function InfoProduccion() {
    return (
        <section className="info-produccion">
            <div className="info-produccion__block">
                <div className="info-produccion__text">
                    <h2 className="info-produccion__title">{data.agricultura.titulo}</h2>
                    <p className="info-produccion__desc">{data.agricultura.descripcion}</p>
                    <ul className="info-produccion__list">
                        {data.agricultura.detalle.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="info-produccion__image">
                    <DotLottieReact
                        src="https://lottie.host/daa71f99-0f49-47e1-bd7c-27e1153050a5/YHxQSyiMcg.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>

            <div className="info-produccion__block reverse">
                <div className="info-produccion__text">
                    <h2 className="info-produccion__title">{data.ganaderia.titulo}</h2>
                    <p className="info-produccion__desc">{data.ganaderia.descripcion}</p>
                    <ul className="info-produccion__list">
                        {data.ganaderia.detalle.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="info-produccion__image">
                    <DotLottieReact
                        src="https://lottie.host/f02747ab-ba95-4d9a-91e6-41079cd07730/CvdMroXjLY.lottie"
                        loop
                        autoplay
                    />
                </div>
            </div>

        </section>
    );
}