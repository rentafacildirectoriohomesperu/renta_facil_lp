import React from 'react';

const ContactSection: React.FC = () => {
    return (
        <section id="contacto" className="contact-section">
            <div className="contact-container">
                <div className="contact-info">
                    <h2>¿Tienes preguntas?</h2>
                    <p>Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible.</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <span className="contact-icon">📧</span>
                            <a href="mailto:rentafacildirectoriohomesperu@gmail.com">rentafacildirectoriohomesperu@gmail.com</a>
                        </div>
                        <div className="contact-item">
                            <span className="contact-icon">📍</span>
                            <span>Lima, Perú</span>
                        </div>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Tu nombre completo" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" id="email" name="email" placeholder="tu@email.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje</label>
                        <textarea id="message" name="message" placeholder="¿En qué podemos ayudarte?" required></textarea>
                    </div>
                    <button type="submit" className="submit-button">Enviar Mensaje</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;