import type { VariantProps } from 'class-variance-authority';

import { Tickets } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export const ticketBadgeVariants: Record<Tickets.Model.TicketStatus, VariantProps<typeof badgeVariants>['variant']> = {
    OPEN: 'default',
    CLOSED: 'outline',
    IN_PROGRESS: 'secondary',
};
