import { ShoppingCart } from 'lucide-react';

import { Button } from '@o2s/ui/elements/button';

import { Link as NextLink } from '@/i18n';

import { CartInfoProps } from './CartInfo.types';

export const CartInfo = ({ data }: CartInfoProps) => {
    return (
        <Button asChild variant="tertiary" className="w-10 h-10" aria-label={data.label}>
            <NextLink href={data.url}>
                <ShoppingCart className="w-4 h-4" />
            </NextLink>
        </Button>
    );
};
