'use client';

import { useTranslations } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import React, { useCallback, useMemo } from 'react';

import type { Products } from '@o2s/framework/modules';
import type { Models } from '@o2s/framework/modules';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';
import { ProductGallery } from '@o2s/ui/components/ProductGallery';
import { RichText } from '@o2s/ui/components/RichText';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Badge } from '@o2s/ui/elements/badge';
import { Button } from '@o2s/ui/elements/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { ProductDetailsPureProps } from './ProductDetails.types';

// Sub-component: Product Info (name, subtitle, badges)
interface ProductInfoProps {
    name: string;
    subtitle?: string;
    badges?: { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }[];
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, subtitle, badges }) => {
    return (
        <>
            <Typography variant="h1">{name}</Typography>
            {subtitle && (
                <Typography variant="large" className="text-muted-foreground">
                    {subtitle}
                </Typography>
            )}
            {badges && badges.length > 0 && (
                <ul className="flex flex-wrap gap-2 list-none">
                    {badges.map((badge, index) => (
                        <li key={index}>
                            <Badge variant={badge.variant}>{badge.label}</Badge>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

// Sub-component: Option Groups Selector
interface OptionGroupsSelectorProps {
    optionGroups: { id: string; title: string; values: string[] }[];
    selectedOptions: Record<string, string>;
    availableValuesPerGroup: Map<string, Set<string>>;
    onOptionChange: (optionId: string, value: string) => void;
}

const OptionGroupsSelector: React.FC<OptionGroupsSelectorProps> = ({
    optionGroups,
    selectedOptions,
    availableValuesPerGroup,
    onOptionChange,
}) => {
    return (
        <div className="flex flex-col gap-4">
            {optionGroups.map((group) => (
                <div key={group.id} className="flex flex-col gap-2">
                    <Typography className="text-sm text-muted-foreground">{group.title}</Typography>
                    <Select
                        value={selectedOptions[group.id] ?? ''}
                        onValueChange={(value: string) => onOptionChange(group.id, value)}
                    >
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                            {group.values.map((value) => {
                                const isAvailable = availableValuesPerGroup.get(group.id)?.has(value) ?? true;
                                return (
                                    <SelectItem
                                        key={value}
                                        value={value}
                                        className={!isAvailable ? 'opacity-50 text-muted-foreground' : undefined}
                                    >
                                        {value}
                                    </SelectItem>
                                );
                            })}
                        </SelectContent>
                    </Select>
                </div>
            ))}
        </div>
    );
};

// Sub-component: Simple Variant Selector
interface VariantSelectorProps {
    variants: { id: string; title: string; slug: string; link?: string; options?: Record<string, string> }[];
    currentSlug?: string;
    label: string;
    onVariantChange: (link: string) => void;
}

const VariantSelector: React.FC<VariantSelectorProps> = ({ variants, currentSlug, label, onVariantChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <Typography className="text-sm text-muted-foreground">{label}</Typography>
            <Select
                value={currentSlug}
                onValueChange={(slug) => {
                    const variant = variants.find((v) => v.slug === slug);
                    if (variant?.link) {
                        onVariantChange(variant.link);
                    }
                }}
            >
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {variants.map((variant) => (
                        <SelectItem key={variant.id} value={variant.slug}>
                            {variant.title}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};

// Sub-component: Price Section
interface PriceSectionProps {
    price: Models.Price.Price;
    priceLabel: string;
    actionButton?: {
        label: string;
        variant?: 'default' | 'secondary' | 'destructive' | 'outline';
        icon?: string;
    };
    className?: string;
}

const PriceSection: React.FC<PriceSectionProps> = ({ price, priceLabel, actionButton, className }) => {
    const t = useTranslations();

    return (
        <div className={className}>
            <div className="flex flex-col gap-1 items-end">
                <Typography className="text-muted-foreground">{priceLabel}</Typography>
                <Typography variant="h2" className="text-primary whitespace-nowrap">
                    <Price price={price} />
                </Typography>
            </div>
            {actionButton && (
                <>
                    <Separator />
                    <div className="flex flex-col gap-3">
                        <TooltipHover
                            trigger={(setIsOpen) => (
                                <Button
                                    variant={actionButton.variant || 'default'}
                                    size="lg"
                                    className="w-full"
                                    onClick={() => setIsOpen(true)}
                                >
                                    {actionButton.icon && (
                                        <DynamicIcon name={actionButton.icon} size={20} className="mr-2" />
                                    )}
                                    {actionButton.label}
                                </Button>
                            )}
                            content={<p>{t('general.comingSoon')}</p>}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

// Sub-component: Product Specs (keySpecs + detailedSpecs)
interface ProductSpecsProps {
    keySpecs?: { value?: string; icon?: string }[];
    detailedSpecs?: { label: string; value: string; category?: string }[];
    labels: {
        specificationsTitle: string;
        descriptionTitle: string;
    };
    description?: string;
    sku?: string;
    location?: string;
    offerLabel: string;
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({
    keySpecs,
    detailedSpecs,
    labels,
    description,
    sku,
    location,
    offerLabel,
}) => {
    return (
        <>
            {keySpecs && keySpecs.length > 0 && (
                <>
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 list-none">
                        {keySpecs.map((spec, index) => (
                            <li key={index} className="flex flex-col items-center gap-2 p-4 bg-muted/50 rounded-lg">
                                {spec.icon && <DynamicIcon name={spec.icon} size={32} className="text-primary" />}
                                {spec.value && (
                                    <Typography className="text-center font-medium">{spec.value}</Typography>
                                )}
                            </li>
                        ))}
                    </ul>
                    <Separator />
                </>
            )}

            {description && (
                <div className="flex flex-col gap-4">
                    <Typography variant="h2" asChild>
                        <h2>{labels.descriptionTitle}</h2>
                    </Typography>
                    <RichText content={description} />
                </div>
            )}

            <Separator />

            {detailedSpecs && detailedSpecs.length > 0 && (
                <div className="flex flex-col gap-4">
                    <Typography variant="h2" asChild>
                        <h2>{labels.specificationsTitle}</h2>
                    </Typography>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                        {detailedSpecs.map((spec, index) => (
                            <li
                                key={index}
                                className="flex justify-between items-center py-3 px-4 bg-muted/30 rounded-md"
                            >
                                <Typography className="text-muted-foreground">{spec.label}</Typography>
                                <Typography className="font-medium">{spec.value}</Typography>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {(sku || location) && (
                <>
                    <Separator />
                    <div className="flex items-center gap-6 flex-wrap">
                        {sku && (
                            <div className="flex items-center gap-2">
                                <DynamicIcon name="FileText" size={20} className="text-muted-foreground" />
                                <Typography>
                                    {offerLabel}: {sku}
                                </Typography>
                            </div>
                        )}
                        {location && (
                            <div className="flex items-center gap-2">
                                <DynamicIcon name="MapPin" size={20} className="text-muted-foreground" />
                                <Typography>{location}</Typography>
                            </div>
                        )}
                    </div>
                </>
            )}
        </>
    );
};

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
                                        label={labels.variantLabel || 'Variant'}
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
                        offerLabel={labels.offerLabel}
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
                                        label={labels.variantLabel || 'Variant'}
                                        onVariantChange={handleVariantChange}
                                    />
                                )}
                            </>
                        )}

                        <PriceSection
                            price={product.price}
                            priceLabel={labels.priceLabel}
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
                                <Typography className="text-muted-foreground">{labels.priceLabel}</Typography>
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
