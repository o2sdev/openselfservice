import { VariantProps } from 'class-variance-authority';

import { Orders } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export const statusMap: {
    value: number;
    id: Orders.Model.OrderStatus;
    badge: VariantProps<typeof badgeVariants>['variant'];
}[] = [
    { value: 100, id: 'COMPLETED', badge: 'default' },
    { value: 100, id: 'ARCHIVED', badge: 'secondary' },
    { value: 100, id: 'CANCELLED', badge: 'destructive' },
    { value: 100, id: 'UNKNOWN', badge: 'outline' },
    { value: 75, id: 'PENDING', badge: 'default' },
    { value: 75, id: 'REQUIRES_ACTION', badge: 'secondary' },
    { value: 75, id: 'SHIPPED', badge: 'default' },
];
