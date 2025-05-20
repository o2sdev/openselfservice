export interface BannerProps extends BannerContentProps {
    mobileLayout?: boolean;
    button?: {
        label: string;
        url?: string;
        onClick?: () => void;
    };
}

export interface BannerContentProps {
    title?: string;
    description?: string;
    showIcon?: boolean;
    variant?: 'default' | 'destructive' | 'positive';
}
