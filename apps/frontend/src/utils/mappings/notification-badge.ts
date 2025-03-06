import type { VariantProps } from 'class-variance-authority';

import { Notifications } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export const notificationBadgePriorityVariants: Record<
    Notifications.Model.NotificationPriority,
    VariantProps<typeof badgeVariants>['variant']
> = {
    LOW: 'outline',
    MEDIUM: 'secondary',
    HIGH: 'destructive',
    CRITICAL: 'destructive',
};
export const notificationBadgeStatusVariants: Record<
    Notifications.Model.NotificationStatus,
    VariantProps<typeof badgeVariants>['variant']
> = {
    UNVIEWED: 'default',
    VIEWED: 'secondary',
    READ: 'outline',
};
