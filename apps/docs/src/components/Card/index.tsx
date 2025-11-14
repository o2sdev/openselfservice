import React from 'react';

interface CardProps {
    children: React.ReactNode;
    borderColor?: 'gradient' | 'blue' | 'green' | 'light' | 'transparent';
    className?: string;
    gap?: string;
}

const Card: React.FC<CardProps> = ({ children, borderColor = 'blue', className = '', gap = 'gap-[30px]' }) => {
    const getBorderClass = () => {
        if (borderColor === 'gradient') return 'card-gradient-border';
        if (borderColor === 'blue') return 'card-base card-solid-border card-border-blue';
        if (borderColor === 'green') return 'card-base card-solid-border card-border-green';
        if (borderColor === 'light') return 'card-base card-solid-border card-border-light';
        if (borderColor === 'transparent') return 'card-base';

        return 'card-base card-solid-border card-border-blue';
    };

    return (
        <div className={`rounded-lg relative flex-1 min-w-0 ${className} ${getBorderClass()}`}>
            <div className={`flex flex-col ${gap} items-start p-6 w-full h-full`}>{children}</div>
        </div>
    );
};

export default Card;
