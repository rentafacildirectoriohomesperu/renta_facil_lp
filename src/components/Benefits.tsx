import React from 'react';

const Benefits: React.FC = () => {
    const benefits = [
        {
            icon: "🏢",
            title: "Directorio centralizado",
            description: "Todas las opciones de alquiler y venta de condominios en Lima reunidas en una sola plataforma."
        },
        {
            icon: "🚫",
            title: "Sin comisiones fantasma",
            description: "Olvídate de los cobros ocultos. Aquí sabes exactamente cuánto pagas desde el inicio."
        },
        {
            icon: "💳",
            title: "Solo suscripción",
            description: "Un modelo simple y transparente. Paga tu suscripción y accede a todas las funcionalidades."
        },
        {
            icon: "👤",
            title: "Para el usuario común",
            description: "Cualquier persona puede registrar su vivienda. No necesitas ser inmobiliaria ni agente."
        },
        {
            icon: "📍",
            title: "Enfocados en Lima",
            description: "Conocemos el mercado limeño a profundidad. Condominios en los mejores distritos."
        },
        {
            icon: "✅",
            title: "Transparencia total",
            description: "Información clara y directa. Sin letras pequeñas ni sorpresas al final del proceso."
        }
    ];

    return (
        <section id="beneficios" className="benefits-section">
            <h2>¿Por qué RentaFacil?</h2>
            <p className="section-subtitle">Creemos en un mercado inmobiliario justo y accesible para todos</p>
            <div className="benefits-grid">
                {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                        <span className="benefit-icon">{benefit.icon}</span>
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Benefits;
