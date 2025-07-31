import { Resources } from '@o2s/framework/modules';
import type { VariantProps } from 'class-variance-authority';

import { badgeVariants } from '@o2s/ui/elements/badge';

export const statusBadgeVariants: Record<
    Resources.Model.ContractStatus,
    VariantProps<typeof badgeVariants>['variant']
> = {
    ACTIVE: 'default',
    INACTIVE: 'outline',
    EXPIRED: 'destructive',
};
