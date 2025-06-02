import { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@o2s/ui/components/button';

export type ActionListProps = {
    visibleActions: React.ReactNode[];
    dropdownActions: React.ReactNode[];
    showMoreLabel: string;
    className?: string;
    triggerVariant?: VariantProps<typeof buttonVariants>['variant'];
};
