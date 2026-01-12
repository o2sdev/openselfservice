import { VariantProps } from 'class-variance-authority';
import { defineRouting } from 'next-intl/routing';

import { baseVariant } from '@o2s/ui/lib/utils';

import { Model } from '../api-harmonization/ticket-list.client';

export interface TicketListProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
    hasPriority?: boolean;
    isDraftModeEnabled?: boolean;
    enableRowSelection?: boolean;
}

export type TicketListPureProps = TicketListProps & Model.TicketListBlock;

export type TicketListRendererProps = Omit<TicketListProps, ''> & {
    slug: string[];
};

export type Action = {
    label?: string;
    icon?: string;
    url: string;
    variant: VariantProps<typeof baseVariant>['variant'];
    className?: string;
};
