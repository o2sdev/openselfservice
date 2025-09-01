import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

const typographyVariants = cva('', {
    variants: {
        variant: {
            h1: 'scroll-m-20 text-2xl md:text-3xl font-bold tracking-tight',
            h2: 'scroll-m-20 text-lg md:text-2xl font-semibold tracking-tight',
            h3: 'scroll-m-20 text-base md:text-xl font-semibold tracking-tight',
            h4: 'scroll-m-20 text-base md:text-lg font-semibold tracking-tight',
            highlightedBig: 'text-3xl/12 md:text-4xl/[54px] font-semibold tracking-tight',
            highlightedSmall: 'text-base md:text-xl/8 font-semibold tracking-tight',
            subtitle: 'scroll-m-20 text-sm md:text-base font-semibold tracking-tight',
            small: 'text-sm',
            body: 'text-sm md:text-base',
            large: 'text-lg',
            p: 'text-sm md:text-base',
            blockquote: 'text-sm md:text-base border-l-2 pl-6 italic',
            inlineCode:
                'text-sm md:text-base relative rounded bg-foreground text-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
            lead: 'text-xl text-muted-foreground',
            code: 'relative rounded bg-foreground text-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
            table: 'w-full border-collapse border border-border',
            tableHeader: 'px-4 py-2 border-b border-border text-left font-bold border-r last:border-r-0',
            tableRow: 'border-b border-border transition-colors last:border-b-0',
            tableCell: 'px-4 py-2 align-middle border-r last:border-r-0',
            tableCellHighlighted: 'px-4 py-2 align-middle bg-muted/50 border-r last:border-r-0',
            image: 'relative overflow-hidden mx-auto',
            imageCaption: 'text-sm text-muted-foreground text-center mt-2',
            list: 'text-sm md:text-base mt-6 pl-7 md:pl-8 list-disc [&>li]:mt-2 md:[&>li]:mt-3 [&>li::marker]:text-foreground [&>li::marker]:size-1 md:[&>li::marker]:size-[5px]',
            listOrdered:
                'text-sm md:text-base mt-6 pl-7 md:pl-8 list-decimal [&>li]:mt-2 md:[&>li]:mt-3 [&>li::marker]:text-foreground',
        },
    },
    defaultVariants: {
        variant: 'p',
    },
});

export interface TypographyProps
    extends React.HTMLAttributes<HTMLParagraphElement>,
        VariantProps<typeof typographyVariants> {
    asChild?: boolean;
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'p';
        return <Comp className={cn(typographyVariants({ variant, className }))} ref={ref} {...props} />;
    },
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
