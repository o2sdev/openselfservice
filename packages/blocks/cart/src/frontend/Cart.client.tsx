'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useMemo, useState } from 'react';

import type { Models } from '@o2s/framework/modules';

import { CartItem } from '@o2s/ui/components/Cart/CartItem';
import { CartSummary } from '@o2s/ui/components/Cart/CartSummary';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@o2s/ui/elements/dialog';
import { Typography } from '@o2s/ui/elements/typography';

import type { Model } from '../api-harmonization/cart.client';

import { CartPureProps } from './Cart.types';

function calculateCartTotals(
    items: Array<{ price: Model.CartBlockItem['price']; quantity: number }>,
    taxRate: number,
    defaultCurrency: Models.Price.Currency,
): Model.CartBlockTotals {
    const subtotal = items.reduce((sum, item) => sum + item.price.value * item.quantity, 0);
    const tax = subtotal * taxRate;
    const currency = items[0]?.price.currency ?? defaultCurrency;

    return {
        subtotal: { value: subtotal, currency },
        tax: { value: tax, currency },
        total: { value: subtotal + tax, currency },
    };
}

export const CartPure: React.FC<Readonly<CartPureProps>> = ({
    locale: _locale,
    accessToken: _accessToken,
    routing,
    title,
    subtitle,
    taxRate,
    defaultCurrency,
    labels,
    actions,
    summaryLabels,
    checkoutButton,
    continueShopping,
    previewButtons,
    empty,
    items: initialItems,
    totals: initialTotals,
    id,
    __typename,
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);

    const items = useMemo(() => initialItems ?? [], [initialItems]);

    const totals = useMemo((): Model.CartBlockTotals => {
        const currency = defaultCurrency ?? initialTotals?.subtotal?.currency;
        if (items.length === 0) {
            if (currency == null) {
                return {} as Model.CartBlockTotals;
            }
            const zero: Models.Price.Price = { value: 0, currency: currency as Models.Price.Currency };
            return { subtotal: zero, tax: zero, total: zero };
        }
        if (taxRate == null || currency == null) {
            return initialTotals ?? ({} as Model.CartBlockTotals);
        }
        const itemData = items.map((item) => ({
            price: item.price,
            quantity: item.quantity,
        }));
        return calculateCartTotals(itemData, taxRate, currency as Models.Price.Currency);
    }, [items, taxRate, defaultCurrency, initialTotals]);

    const updateQuantity = (itemId: string, newQuantity: number) => {
        console.log('[Cart] updateQuantity', { itemId, newQuantity });
    };

    const removeItem = (itemId: string) => {
        console.log('[Cart] removeItem', { itemId });
    };

    if (!title || taxRate == null || !defaultCurrency || !labels || !actions || !summaryLabels || !empty) {
        return (
            <div className="w-full flex flex-col gap-4">
                {__typename}: {id}
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="w-full flex flex-col gap-8 md:gap-12 items-center justify-center py-12">
                <DynamicIcon name="ShoppingCart" size={64} className="text-muted-foreground" />
                <Typography variant="h2">{empty.title}</Typography>
                <Typography variant="large" className="text-muted-foreground text-center max-w-md">
                    {empty.description}
                </Typography>
                {empty.continueShopping && (
                    <LinkComponent href={empty.continueShopping.path}>
                        <Button variant="default" size="lg">
                            {empty.continueShopping.label}
                        </Button>
                    </LinkComponent>
                )}
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            <div className="flex flex-col gap-2">
                <Typography variant="h1">{title}</Typography>
                {subtitle && (
                    <Typography variant="large" className="text-muted-foreground">
                        {subtitle}
                    </Typography>
                )}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 flex flex-col gap-4">
                    {items.map((item) => {
                        const quantity = item.quantity;
                        const itemTotal = item.total;
                        const product = item.product ?? {
                            name: labels.unknownProductName,
                            subtitle: undefined,
                            image: undefined,
                        };

                        return (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                productId={item.productId}
                                name={product.name}
                                subtitle={product.subtitle}
                                image={product.image}
                                quantity={quantity}
                                price={item.price}
                                total={itemTotal}
                                labels={{
                                    itemTotal: labels.itemTotal,
                                    ...actions,
                                }}
                                onRemove={removeItem}
                                onQuantityChange={updateQuantity}
                            />
                        );
                    })}
                </div>

                {/* Cart Summary */}
                <div className="lg:col-span-1">
                    <CartSummary
                        subtotal={totals.subtotal}
                        tax={totals.tax}
                        total={totals.total}
                        labels={summaryLabels}
                        LinkComponent={LinkComponent}
                        checkoutButton={
                            checkoutButton
                                ? {
                                      url: checkoutButton.path,
                                      label: checkoutButton.label,
                                      icon: checkoutButton.icon,
                                  }
                                : undefined
                        }
                        continueShopping={
                            continueShopping
                                ? {
                                      url: continueShopping.path,
                                      label: continueShopping.label,
                                  }
                                : undefined
                        }
                        previewButton={
                            previewButtons?.viewPDF
                                ? {
                                      label: previewButtons.viewPDF.label,
                                      icon: previewButtons.viewPDF.icon,
                                      onClick: () => setIsPdfModalOpen(true),
                                  }
                                : undefined
                        }
                    />
                </div>
            </div>

            {/* PDF Preview Dialog */}
            {previewButtons?.viewPDF?.dialog && (
                <Dialog open={isPdfModalOpen} onOpenChange={setIsPdfModalOpen}>
                    <DialogContent className="flex flex-col p-0 gap-0 w-full h-screen max-w-full rounded-none sm:max-w-full sm:rounded-none md:max-w-7xl md:w-[calc(100%-4rem)] md:h-[90vh] md:rounded-lg">
                        <div className="p-6 flex-shrink-0 border-b">
                            <DialogHeader>
                                <DialogTitle>{previewButtons.viewPDF.dialog.title}</DialogTitle>
                                <DialogDescription>{previewButtons.viewPDF.dialog.description}</DialogDescription>
                            </DialogHeader>
                        </div>
                        <div className="flex-1 overflow-hidden flex flex-col min-h-0">
                            <div className="w-full h-full bg-muted flex items-center justify-center border-x overflow-hidden">
                                {previewButtons.viewPDF.dialog.pdfUrl ? (
                                    <object
                                        data={previewButtons.viewPDF.dialog.pdfUrl}
                                        type="application/pdf"
                                        className="w-full h-full"
                                        aria-label={previewButtons.viewPDF.dialog.title}
                                    >
                                        <div className="flex flex-col items-center justify-center gap-4 p-6 text-center h-full">
                                            <Typography variant="p" className="text-muted-foreground">
                                                {previewButtons.viewPDF.dialog.fallbackMessage}
                                            </Typography>
                                            <Button
                                                variant="outline"
                                                onClick={() => {
                                                    window.open(previewButtons!.viewPDF!.dialog!.pdfUrl!, '_blank');
                                                }}
                                            >
                                                <DynamicIcon name="ExternalLink" className="mr-2" size={16} />
                                                {previewButtons.viewPDF.dialog.openInNewTabLabel}
                                            </Button>
                                        </div>
                                    </object>
                                ) : (
                                    <div className="flex flex-col items-center justify-center gap-4 p-6 text-center h-full">
                                        <Typography variant="p" className="text-muted-foreground">
                                            {previewButtons.viewPDF.dialog.fallbackMessage}
                                        </Typography>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="p-6 flex-shrink-0 border-t">
                            <DialogFooter>
                                <Button variant="outline" onClick={() => setIsPdfModalOpen(false)}>
                                    {previewButtons.viewPDF.dialog.closeLabel}
                                </Button>
                            </DialogFooter>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};
