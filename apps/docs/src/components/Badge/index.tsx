import React from 'react';

interface BadgeProps {
    title: string;
    icon?: string | null;
}

const Badge: React.FC<BadgeProps> = ({ title, icon }) => (
    <div className="flex items-center justify-center gap-2.5 px-2.5 py-0.5 rounded-full bg-violet text-white">
        {icon && <img src={icon} alt={title + ' logo'} className="w-4 h-4" />}
        <span className="text-sm">{title}</span>
    </div>
);

export default Badge;
