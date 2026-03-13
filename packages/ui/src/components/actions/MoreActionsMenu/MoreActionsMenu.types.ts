import { VariantProps } from 'class-variance-authority';

import { baseVariant } from '@o2s/ui/lib/utils';

export type MoreActionsMenuProps = {
    actions: React.ReactNode[];
    showMoreLabel: string;
    className?: string;
    triggerVariant?: VariantProps<typeof baseVariant>['variant'];
    triggerIcon?: string;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};
