import React from 'react';

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "¿Qué es RentaFacil?",
            answer: "RentaFacil es un directorio que centraliza todas las opciones de alquiler y venta de condominios en Lima. Nuestra meta es eliminar las comisiones fantasma y hacer el proceso más transparente."
        },
        {
            question: "¿Cómo funciona?",
            answer: "Los propietarios registran su vivienda pagando una suscripción. Los interesados pueden navegar el directorio y contactar directamente sin intermediarios ni comisiones ocultas."
        },
        {
            question: "¿Quién puede publicar?",
            answer: "Cualquier persona puede registrar su vivienda. No necesitas ser inmobiliaria ni agente. RentaFacil está diseñado para el usuario común."
        },
        {
            question: "¿Cuánto cuesta?",
            answer: "Funciona con un modelo de suscripción simple y transparente. Pagas tu suscripción y accedes a todas las funcionalidades sin cargos adicionales ni comisiones."
        },
        {
            question: "¿Por qué sin comisiones?",
            answer: "Creemos que las comisiones tradicionales del mercado inmobiliario son injustas. Nuestro modelo de suscripción permite ofrecer el servicio sin cobros ocultos."
        },
        {
            question: "¿En qué zonas operan?",
            answer: "Actualmente nos enfocamos en Lima Metropolitana, cubriendo los principales distritos y condominios de la ciudad."
        }
    ];

    return (
        <section id="faq" className="faq-section">
            <h2>Preguntas Frecuentes</h2>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className="faq-item">
                        <h3>{faq.question}</h3>
                        <p>{faq.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;