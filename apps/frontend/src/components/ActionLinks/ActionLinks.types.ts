import { VariantProps } from 'class-variance-authority';

import { Models } from '@o2s/framework/modules';

import { buttonVariants } from '@o2s/ui/components/button';

export type ActionLinksProps = {
    actionLinks: Models.ActionLink.ActionLink[];
    showMoreLabel: string;
    className?: string;
    triggerVariant?: VariantProps<typeof buttonVariants>['variant'];
    alert?: boolean;
    hideAll?: boolean;
};

export type ActionLinkProps = {
    actionLink: Models.ActionLink.ActionLink;
    variant: VariantProps<typeof buttonVariants>['variant'];
};
