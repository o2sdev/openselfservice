'use client';

import { useTranslations } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import React, { useCallback, useMemo } from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';
import { ProductGallery } from '@o2s/ui/components/ProductGallery';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { OptionGroupsSelector } from './components/OptionGroupsSelector';
import { PriceSection } from './components/PriceSection';
import { ProductInfo } from './components/ProductInfo';
import { ProductSpecs } from './components/ProductSpecs';
import { VariantSelector } from './components/VariantSelector';
import { ProductDetailsPureProps } from './ProductDetails.types';

function resolveVariant(
    variants: Array<{ id: string; title: string; slug: string; link?: string; options?: Record<string, string> }>,
    selectedOptions: Record<string, string>,
    changedOptionId: string,
): { id: string; title: string; slug: string; link?: string; options?: Record<string, string> } | null {
    const exact = variants.find(
        (variant) =>
            variant.options && Object.entries(selectedOptions).every(([optId, val]) => variant.options![optId] === val),
    );
    if (exact) return exact;

    const withChanged = variants.find(
        (variant) => variant.options && variant.options[changedOptionId] === selectedOptions[changedOptionId],
    );
    return withChanged ?? null;
}

/** Returns values available for a group given current selection (excluding this group). */
function getAvailableValuesForGroup(
    groupId: string,
    selectedOptions: Record<string, string>,
    variants: Array<{ id: string; title: string; slug: string; link?: string; options?: Record<string, string> }>,
): Set<string> {
    const available = new Set<string>();
    for (const v of variants) {
        if (!v.options) continue;
        const matchesOtherOptions = Object.entries(selectedOptions).every(
            ([optId, val]) => optId === groupId || v.options![optId] === val,
        );
        if (matchesOtherOptions && v.options[groupId]) {
            available.add(v.options[groupId]);
        }
    }
    return available;
}

export const ProductDetailsPure: React.FC<ProductDetailsPureProps> = ({
    locale,
    routing,
    hasPriority,
    productId,
    ...component
}) => {
    const { product, labels, actionButton } = component;
    const t = useTranslations();
    const { useRouter } = createNavigation(routing);
    const router = useRouter();

    const keySpecs = product && product.keySpecs ? product.keySpecs : [];

    const currentVariant = product.variants?.find((v) => v.id === product.variantId);
    const currentVariantSlug = currentVariant?.slug;

    const selectedOptions = useMemo(() => {
        const opts = currentVariant?.options ?? {};
        if (product.optionGroups?.length) {
            const merged = { ...opts };
            for (const group of product.optionGroups) {
                if (merged[group.id] == null) {
                    merged[group.id] = group.values[0] ?? '';
                }
            }
            return merged;
        }
        return opts;
    }, [currentVariant?.options, product.optionGroups]);

    const handleVariantChange = useCallback(
        (link: string) => {
            router.push(link);
        },
        [router],
    );

    const handleOptionChange = useCallback(
        (optionId: string, value: string) => {
            const variants = product.variants ?? [];
            const newOptions = { ...selectedOptions, [optionId]: value };
            const targetVariant = resolveVariant(variants, newOptions, optionId);
            if (targetVariant?.link) {
                router.push(targetVariant.link);
            }
        },
        [product.variants, selectedOptions, router],
    );

    const useOptionGroups =
        product.optionGroups && product.optionGroups.length > 0 && product.variants && product.variants.length > 1;

    const availableValuesPerGroup = useMemo(() => {
        const variants = product.variants ?? [];
        const map = new Map<string, Set<string>>();
        for (const group of product.optionGroups ?? []) {
            map.set(group.id, getAvailableValuesForGroup(group.id, selectedOptions, variants));
        }
        return map;
    }, [product.optionGroups, product.variants, selectedOptions]);

    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 flex flex-col gap-6">
                    <ProductGallery
                        images={product.images}
                        showNavigation={true}
                        showThumbnails={false}
                        shouldPreloadGallery={hasPriority}
                    />
                    <div className="flex flex-col gap-4 lg:hidden">
                        <ProductInfo name={product.name} subtitle={product.subtitle} badges={product.badges} />
                        {product.variants && product.variants.length > 1 && (
                            <>
                                {useOptionGroups ? (
                                    <OptionGroupsSelector
                                        optionGroups={product.optionGroups!}
                                        selectedOptions={selectedOptions}
                                        availableValuesPerGroup={availableValuesPerGroup}
                                        onOptionChange={handleOptionChange}
                                    />
                                ) : (
                                    <VariantSelector
                                        variants={product.variants}
                                        currentSlug={currentVariantSlug}
                                        label={labels.variant || 'Variant'}
                                        onVariantChange={handleVariantChange}
                                    />
                                )}
                            </>
                        )}
                    </div>

                    <Separator className="lg:hidden" />

                    <ProductSpecs
                        keySpecs={keySpecs}
                        detailedSpecs={product.detailedSpecs}
                        labels={labels}
                        description={product.description}
                        sku={product.sku}
                        location={product.location}
                        offer={labels.offer}
                    />
                </div>

                <div className="hidden lg:block lg:col-span-1">
                    <div className="sticky top-6 flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
                        <div className="hidden lg:flex flex-col gap-2">
                            <ProductInfo name={product.name} subtitle={product.subtitle} badges={product.badges} />
                        </div>

                        {product.variants && product.variants.length > 1 && (
                            <>
                                {useOptionGroups ? (
                                    <OptionGroupsSelector
                                        optionGroups={product.optionGroups!}
                                        selectedOptions={selectedOptions}
                                        availableValuesPerGroup={availableValuesPerGroup}
                                        onOptionChange={handleOptionChange}
                                    />
                                ) : (
                                    <VariantSelector
                                        variants={product.variants}
                                        currentSlug={currentVariantSlug}
                                        label={labels.variant || 'Variant'}
                                        onVariantChange={handleVariantChange}
                                    />
                                )}
                            </>
                        )}

                        <PriceSection
                            price={product.price}
                            priceLabel={labels.price}
                            actionButton={actionButton}
                        />
                    </div>
                </div>
            </div>

            {actionButton && (
                <>
                    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 shadow-lg z-100">
                        <div className="flex flex-col gap-2 max-w-7xl ml-auto mr-4">
                            <div className="flex items-center justify-end gap-2 mb-2">
                                <Typography className="text-muted-foreground">{labels.price}</Typography>
                                <Typography variant="large" className="font-bold text-primary">
                                    <Price price={product.price} />
                                </Typography>
                            </div>
                            <TooltipHover
                                trigger={(setIsOpen) => (
                                    <Button
                                        variant={actionButton.variant || 'default'}
                                        size="default"
                                        className="w-full"
                                        onClick={() => setIsOpen(true)}
                                    >
                                        {actionButton.label}
                                    </Button>
                                )}
                                content={<p>{t('general.comingSoon')}</p>}
                            />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
