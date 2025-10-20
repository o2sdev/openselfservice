import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

type SeparatorProps = React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & {
    ref?: React.Ref<React.ComponentRef<typeof SeparatorPrimitive.Root>>;
};
const Separator = ({ className, orientation = 'horizontal', decorative = true, ref, ...props }: SeparatorProps) => (
    <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
            'shrink-0 bg-border',
            orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]',
            className,
        )}
        {...props}
    />
);

export { Separator };
