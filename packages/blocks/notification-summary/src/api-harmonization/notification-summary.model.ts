import { Models } from '@o2s/utils.api-harmonization';

export class NotificationSummaryBlock extends Models.Block.Block {
    __typename!: 'NotificationSummaryBlock';
    layout?: 'vertical' | 'horizontal';
    high?: {
        title: string;
        icon?: string;
        value: number;
        description?: string;
        color?: string;
    };
    medium?: {
        title: string;
        icon?: string;
        value: number;
        description?: string;
        color?: string;
    };
    low?: {
        title: string;
        icon?: string;
        value: number;
        description?: string;
        color?: string;
    };
    critical?: {
        title: string;
        icon?: string;
        value: number;
        description?: string;
        color?: string;
    };
}
