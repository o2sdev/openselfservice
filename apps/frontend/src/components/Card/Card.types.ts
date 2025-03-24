import { Models } from '@o2s/framework/modules';

export interface CardProps {
    title: string;
    description?: string;
    price?: {
        value: string;
        period: string;
    };
    tags?: Badge[];
    status?: Badge;
    buttonLabel: string;
    image: Models.Media.Media;
    onButtonClick?: () => void;
}

export interface Badge {
    label: string;
    variant: 'default' | 'secondary' | 'destructive' | 'outline' | null | undefined;
}
