import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Image 
                        src="/logo_sin_fondo.png" 
                        alt="RentaFacil" 
                        width={120} 
                        height={40}
                        style={{ objectFit: 'contain' }}
                    />
                    <p>Centralizamos el mercado de condominios en Lima. Sin comisiones fantasma.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4>Navegación</h4>
                        <a href="#hero">Inicio</a>
                        <a href="#como-funciona">Cómo funciona</a>
                        <a href="#beneficios">Beneficios</a>
                    </div>
                    <div className="footer-column">
                        <h4>Información</h4>
                        <a href="#faq">Preguntas frecuentes</a>
                        <a href="#contacto">Contacto</a>
                    </div>
                    <div className="footer-column">
                        <h4>Contacto</h4>
                        <a href="mailto:rentafacildirectoriohomesperu@gmail.com">rentafacildirectoriohomesperu@gmail.com</a>
                        <span className="footer-location">Lima, Perú</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} RentaFacil. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;