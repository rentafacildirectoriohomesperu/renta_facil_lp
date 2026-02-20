import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-content">
                <h1>Todas las opciones de alquiler y venta <span className="highlight">en un solo lugar</span></h1>
                <p className="hero-subtitle">Centralizamos el mercado de condominios en Lima. Registra tu vivienda sin comisiones fantasma. Solo necesitas tu suscripción.</p>
                <div className="hero-features">
                    <div className="feature">
                        <span className="feature-icon">✓</span>
                        <span>Sin comisiones ocultas</span>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">✓</span>
                        <span>Directorio centralizado</span>
                    </div>
                    <div className="feature">
                        <span className="feature-icon">✓</span>
                        <span>Solo con suscripción</span>
                    </div>
                </div>
                <div className="hero-mission">
                    <p>Nuestra misión es democratizar el acceso al mercado inmobiliario, eliminando las comisiones abusivas y conectando directamente a propietarios con inquilinos o compradores.</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;