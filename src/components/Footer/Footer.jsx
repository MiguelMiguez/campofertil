import React from 'react'
import './Footer.css'
import LogoVerde from '../../assets/logo/Brand Verde.svg'

const Footer = () => {
    return (
        <footer>
            <div className="ContainerFooter">
                <div className="ContainerLogoFooter">
                    <img src={LogoVerde} alt="Logo Verde" />
                </div>
                <div className="ContainerNavbarFooter">
                    <ul>
                        <li>CONTACTO</li>
                        <li>NOSOTROS</li>
                        <li>LOGISTICA</li>
                    </ul>
                </div>
                <div className="ContainerSocialMedia">
                    <img src="/Iconos/facebook.svg" alt="Facebook" />
                    <img src="/Iconos/instagram.svg" alt="Instagram" />
                    <img src="/Iconos/linkedin.svg" alt="LinkedIn" />
                </div>
            </div>
            <div className="ContainerCopy">
                <p>© 2024 CampoFertil. Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer