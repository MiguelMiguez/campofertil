import React from 'react';
import './Herbicidas.css';
import CardInsumos from '../../../components/CardInsumos/CardInsumos';

export default function Herbicidas() {
    return (
        <div className="herbicidas-container">
            <CardInsumos />
            <div className="mision-section-wave">
                <svg viewBox="0 0 1920 180" width="100%" height="100%" preserveAspectRatio="none">
                    <path d="M0,80 C400,180 1500,0 1920,120 L1920,180 L0,180 Z" fill="#e3f4e8" />
                </svg>
            </div>
        </div>
    );
}