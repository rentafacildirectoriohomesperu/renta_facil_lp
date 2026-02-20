export interface Document {
    id: number;
    title: string;
    description: string;
    icon?: string;
}

export interface DocumentCardProps {
    document: Document;
}

export interface DocumentListProps {
    documents: Document[];
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQProps {
    faqs: FAQItem[];
}

export interface ContactSectionProps {
    onSubmit: (formData: { name: string; email: string; message: string }) => void;
}