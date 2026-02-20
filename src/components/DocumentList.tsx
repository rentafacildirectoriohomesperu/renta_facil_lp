import React from 'react';
import DocumentCard from './DocumentCard';
import { Document } from '../types';

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <section id="como-funciona" className="como-funciona-section">
      <h2>¿Cómo funciona?</h2>
      <p className="section-subtitle">Publicar tu propiedad es simple. Solo 4 pasos:</p>
      <div className="document-list">
        {documents.map((doc, index) => (
          <div key={doc.id} className="step-wrapper">
            <span className="step-number">{index + 1}</span>
            <DocumentCard document={doc} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DocumentList;