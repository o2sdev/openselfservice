import clsx from 'clsx';
import React from 'react';

interface BadgeProps {
    title: string;
    icon?: string | null | React.ReactNode;
    variant?: 'primary' | 'secondary' | 'light' | 'dark' | 'private';
}

const getVariantClasses = (variant: BadgeProps['variant']): string => {
    switch (variant) {
        case 'primary':
            return 'bg-violet text-white!';
        case 'secondary':
            return 'bg-secondary text-dark-text!';
        case 'light':
            return 'bg-white text-violet';
        case 'dark':
            return 'bg-white/10 text-white';
        case 'private':
            return 'bg-[#001360] text-white';
        default:
            return 'bg-violet text-white!';
    }
};

const Badge = ({ title, icon, variant = 'primary' }: BadgeProps) => (
    <div
        className={clsx(
            'flex items-center justify-center gap-2.5 px-2.5 py-0.5 rounded-full',
            getVariantClasses(variant),
        )}
    >
        {icon && typeof icon === 'string' ? <img src={icon} alt={title + ' logo'} className="w-4 h-4" /> : icon}
        <span className={clsx('text-sm', variant === 'primary' ? '' : 'font-semibold')}>{title}</span>
    </div>
);

export default Badge;
