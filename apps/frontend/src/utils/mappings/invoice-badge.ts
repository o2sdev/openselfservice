import type { VariantProps } from 'class-variance-authority';

import { Invoices } from '@o2s/framework/modules';

import { badgeVariants } from '@o2s/ui/components/badge';

export const invoiceBadgePaymentStatusVariants: Record<
    Invoices.Model.PaymentStatusType,
    VariantProps<typeof badgeVariants>['variant']
> = {
    PAYMENT_COMPLETE: 'secondary',
    PAYMENT_DECLINED: 'destructive',
    PAYMENT_DUE: 'default',
    PAYMENT_PAST_DUE: 'destructive',
};
