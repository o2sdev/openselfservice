import { Orders } from '@o2s/framework/modules';
import type { VariantProps } from 'class-variance-authority';

import { badgeVariants } from '@o2s/ui/elements/badge';

export const orderBadgeVariants: Record<Orders.Model.OrderStatus, VariantProps<typeof badgeVariants>['variant']> = {
    PENDING: 'default',
    COMPLETED: 'default',
    SHIPPED: 'outline',
    ARCHIVED: 'secondary',
    REQUIRES_ACTION: 'secondary',
    UNKNOWN: 'outline',
    CANCELLED: 'destructive',
};
