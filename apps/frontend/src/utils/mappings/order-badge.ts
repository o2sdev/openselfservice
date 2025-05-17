import type { VariantProps } from 'class-variance-authority';

import { Orders } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export const orderBadgeVariants: Record<Orders.Model.OrderStatus, VariantProps<typeof badgeVariants>['variant']> = {
    PENDING: 'default',
    COMPLETED: 'default',
    SHIPPED: 'outline',
    ARCHIVED: 'secondary',
    REQUIRES_ACTION: 'secondary',
    UNKNOWN: 'outline',
    CANCELLED: 'destructive',
};
