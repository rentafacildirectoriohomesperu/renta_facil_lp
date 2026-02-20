import React from 'react';
import { Document } from '../types';

interface DocumentCardProps {
    document: Document;
}

const DocumentCard: React.FC<DocumentCardProps> = ({ document }) => {
    return (
        <div className="document-card">
            {document.icon && <span className="card-icon">{document.icon}</span>}
            <h3>{document.title}</h3>
            <p>{document.description}</p>
        </div>
    );
};

export default DocumentCard;