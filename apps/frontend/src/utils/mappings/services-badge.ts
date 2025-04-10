import type { VariantProps } from 'class-variance-authority';

import { Resources } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export const statusBadgeVariants: Record<
    Resources.Model.ContractStatus,
    VariantProps<typeof badgeVariants>['variant']
> = {
    ACTIVE: 'default',
    INACTIVE: 'outline',
    EXPIRED: 'destructive',
};
