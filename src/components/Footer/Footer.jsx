import React from 'react'
import './Footer.css'
import LogoVerde from '../../assets/logo/Brand Verde.svg'
import { Link } from 'react-router-dom'
import FacebookIcon from '../../assets/iconos/facebook.svg';
import InstagramIcon from '../../assets/iconos/instagram.svg';
import LinkedinIcon from '../../assets/iconos/linkedin.svg';

const currentYear = () => new Date().getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className="ContainerFooter">
                <div className="ContainerLogoFooter">
                    <img src={LogoVerde} alt="Logo Verde" />
                </div>
                <div className="ContainerNavbarFooter">
                    <ul>
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/insumos">INSUMOS</Link></li>
                        <li><Link to="/acopio">ACOPIO</Link></li>
                        <li><Link to="/logistica">LOGÍSTICA</Link></li>
                        <li><Link to="/produccion">PRODUCCIÓN</Link></li>
                        <li><Link to="/nosotros">NOSOTROS</Link></li>
                        <li><Link to="/contacto">CONTACTO</Link></li>
                    </ul>
                </div>
                <div className="ContainerSocialMedia">
                    <a href="https://www.facebook.com/campofertilok" target="_blank" rel="noopener noreferrer">
                        <img className='SocialIcon' src={FacebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/campofertilvillaguay" target="_blank" rel="noopener noreferrer">
                        <img className='SocialIcon' src={InstagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/company/campofertil" target="_blank" rel="noopener noreferrer">
                        <img className='SocialIcon' src={LinkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
            </div>
            <div className="ContainerCopy">
                <p>© {currentYear()} CampoFertil. Todos los derechos reservados.</p>
            </div>

            <div className="ContainerCopy developer">
                <p>
                    Developed & designed by{" "}
                    <a href="https://miguelmiguezportfolio.netlify.app/" target="_blank" rel="noopener noreferrer">
                        mm
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer
