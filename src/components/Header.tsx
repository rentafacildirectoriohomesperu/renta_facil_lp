import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Image 
                        src="/logo_sin_fondo.png" 
                        alt="RentaFacil" 
                        width={150} 
                        height={50}
                        style={{ objectFit: 'contain' }}
                    />
                </div>
                <nav>
                    <ul>
                        <li><a href="#hero">Inicio</a></li>
                        <li><a href="#como-funciona">Cómo Funciona</a></li>
                        <li><a href="#beneficios">Beneficios</a></li>
                        <li><a href="#faq">Preguntas</a></li>
                        <li><a href="#contacto">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;