import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import DocumentList from '../components/DocumentList';
import Benefits from '../components/Benefits';
import ContactSection from '../components/ContactSection';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { documents } from '../data/documents';

const HomePage: React.FC = () => {
    return (
        <>
            <Head>
                <title>RentaFacil - Directorio de condominios en Lima | Sin comisiones fantasma</title>
                <meta name="description" content="Centralizamos todas las opciones de alquiler y venta de condominios en Lima. Publica tu vivienda sin comisiones ocultas. Solo con tu suscripción." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="app">
                <Header />
                <main>
                    <Hero />
                    <DocumentList documents={documents} />
                    <Benefits />
                    <FAQ />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;