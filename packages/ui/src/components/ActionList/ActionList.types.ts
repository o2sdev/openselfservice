import { VariantProps } from 'class-variance-authority';

import { baseVariant } from '@o2s/ui/lib/utils';

export type ActionListProps = {
    visibleActions: React.ReactNode[];
    dropdownActions: React.ReactNode[];
    showMoreLabel: string;
    className?: string;
    triggerVariant?: VariantProps<typeof baseVariant>['variant'];
};
