'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { ProductCard } from '@o2s/ui/components/Cards/ProductCard';
import { ProductCardBadge } from '@o2s/ui/components/Cards/ProductCard';
import { NoResults } from '@o2s/ui/components/NoResults';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Separator } from '@o2s/ui/elements/separator';
import { SwitchWithLabel } from '@o2s/ui/elements/switch';
import { Typography } from '@o2s/ui/elements/typography';

import { Link } from '@/i18n';

import { FeaturedServiceListPureProps } from './FeaturedServiceList.types';

export const FeaturedServiceListPure: React.FC<FeaturedServiceListPureProps> = ({ ...component }) => {
    const t = useTranslations();

    return (
        <div className="w-full flex flex-col gap-6">
            {component.title && (
                <Typography variant="h2" asChild>
                    <h2>{component.title}</h2>
                </Typography>
            )}
            {component.services.total ? (
                <div className="flex flex-col gap-6">
                    <ul className="grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {component.services.data.map((service) => (
                            <li key={service.id}>
                                <ProductCard
                                    key={service.id}
                                    title={service.name}
                                    tags={service.tags as ProductCardBadge[]}
                                    description={service.shortDescription}
                                    image={service.image}
                                    price={service.price}
                                    link={{
                                        label: component.detailsLabel,
                                        url: service.link,
                                    }}
                                    action={
                                        <TooltipHover
                                            trigger={(setIsOpen) => (
                                                <div className="relative">
                                                    <SwitchWithLabel
                                                        label={component.labels.off.toUpperCase()}
                                                        disabled={true}
                                                        onCheckedChange={() => setIsOpen(true)}
                                                    />
                                                </div>
                                            )}
                                            content={<p>{t('general.comingSoon')}</p>}
                                        />
                                    }
                                    LinkComponent={Link}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="w-full flex flex-col gap-12 mt-6">
                    <NoResults title={component.noResults.title} description={component.noResults.description} />

                    <Separator />
                </div>
            )}
        </div>
    );
};
