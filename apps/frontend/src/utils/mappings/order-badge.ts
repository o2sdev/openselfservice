import type { VariantProps } from 'class-variance-authority';

import { Orders } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export const orderBadgeVariants: Record<Orders.Model.OrderStatus, VariantProps<typeof badgeVariants>['variant']> = {
    PENDING: 'default',
    COMPLETED: 'outline',
    SHIPPED: 'secondary',
    CANCELLED: 'destructive',
    ARCHIVED: 'outline',
    REQUIRES_ACTION: 'secondary',
    UNKNOWN: 'outline',
};
