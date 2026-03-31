'use client';

import { type O2SEventMap, useEventBus } from '@o2s/ui/event-bus';
import { ShoppingCart } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import React, { useCallback, useEffect, useState } from 'react';

import { Utils } from '@o2s/utils.frontend';

import { Badge } from '@o2s/ui/elements/badge';
import { Button } from '@o2s/ui/elements/button';

import { sdk } from '@/api/sdk';

import { Link as NextLink } from '@/i18n';

import { CartInfoProps } from './CartInfo.types';

/** Last known line-item count for this browser session; survives header remounts on navigation (avoids badge flicker). */
let lastKnownCartItemCount = 0;

export const CartInfo = ({ data }: CartInfoProps) => {
    const session = useSession();
    const locale = useLocale();
    const [itemCount, setItemCount] = useState(() => lastKnownCartItemCount);

    useEffect(() => {
        const token = session.data?.accessToken;
        let cancelled = false;

        void (async () => {
            const cartId = Utils.CartStorage.getCartId();
            if (!cartId) {
                if (!cancelled) {
                    lastKnownCartItemCount = 0;
                    setItemCount(0);
                }
                return;
            }

            try {
                const cart = await sdk.cart.getCart(cartId, { 'x-locale': locale }, token);
                if (!cancelled) {
                    const next = cart.items.data.length;
                    lastKnownCartItemCount = next;
                    setItemCount(next);
                }
            } catch {
                // Do not reset to 0 — avoids flicker on client navigations or transient API errors.
            }
        })();

        return () => {
            cancelled = true;
        };
    }, [session.data?.accessToken, locale]);

    const onCartChanged = useCallback((payload: O2SEventMap['cart:changed']) => {
        const next = payload.cart.items.data.length;
        lastKnownCartItemCount = next;
        setItemCount(next);
    }, []);

    useEventBus('cart:changed', onCartChanged);

    return (
        <Button asChild variant="tertiary" className="h-10 w-10 shrink-0" aria-label={data.label}>
            <NextLink href={data.url} className="flex size-full items-center justify-center">
                <span className="relative inline-flex size-4 shrink-0">
                    <ShoppingCart className="size-4 shrink-0" aria-hidden />
                    {itemCount > 0 ? (
                        <Badge
                            variant="default"
                            className="pointer-events-none absolute right-0 top-0 z-10 h-5 min-w-5 translate-x-full -translate-y-full justify-center border-0 p-0 px-1 text-[10px] font-medium leading-none shadow-none focus:ring-0 focus:ring-offset-0"
                        >
                            {itemCount}
                        </Badge>
                    ) : null}
                </span>
            </NextLink>
        </Button>
    );
};
