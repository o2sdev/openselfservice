import { VariantProps } from 'class-variance-authority';
import { defineRouting } from 'next-intl/routing';

import type { Models } from '@o2s/framework/modules';

import { baseVariant } from '@o2s/ui/lib/utils';

import type { Model } from '../api-harmonization/ticket-list.client';

export interface TicketListProps extends Models.BlockProps.BaseBlockProps<ReturnType<typeof defineRouting>> {
    isDraftModeEnabled?: boolean;
    enableRowSelection?: boolean;
}

export type TicketListPureProps = TicketListProps & Model.TicketListBlock;

export type TicketListRendererProps = Omit<TicketListProps, ''> & {
    slug: string[];
};

export type Action = {
    url: string;
    variant: VariantProps<typeof baseVariant>['variant'];
    className?: string;
} & ({ label: string; icon?: string } | { label?: string; icon: string });
