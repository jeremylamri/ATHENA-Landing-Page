import React from 'react';
import { LegalNotice } from '../components/documents/LegalNotice';

interface LegalProps {
    onBack: () => void;
}

export const Legal: React.FC<LegalProps> = ({ onBack }) => {
    return <LegalNotice onBack={onBack} />;
};
