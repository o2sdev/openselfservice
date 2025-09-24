import clsx from 'clsx';
import React from 'react';

interface BadgeProps {
    title: string;
    icon?: string | null;
    variant?: 'primary' | 'secondary';
}

const Badge: React.FC<BadgeProps> = ({ title, icon, variant = 'primary' }) => (
    <div
        className={clsx(
            'flex items-center justify-center gap-2.5 px-2.5 py-0.5 rounded-full',
            variant === 'primary' ? 'bg-violet text-white!' : 'bg-secondary text-dark-text!',
        )}
    >
        {icon && <img src={icon} alt={title + ' logo'} className="w-4 h-4" />}
        <span className={clsx('text-sm', variant === 'primary' ? '' : 'font-semibold')}>{title}</span>
    </div>
);

export default Badge;
