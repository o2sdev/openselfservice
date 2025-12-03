'use client';

import { createNavigation } from 'next-intl/navigation';
import React, { useState, useTransition } from 'react';

import { Mappings } from '@o2s/utils.frontend';

import { ProductCard, ProductCardBadge } from '@o2s/ui/components/Cards/ProductCard';
import { FiltersSection } from '@o2s/ui/components/Filters';
import { NoResults } from '@o2s/ui/components/NoResults';
import { Pagination } from '@o2s/ui/components/Pagination';

import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';

import { sdk } from '../sdk';

import { ServiceListPureProps } from './ServiceList.types';

export const ServiceListPure = ({ locale, accessToken, routing, ...component }: ServiceListPureProps) => {
    const initialFilters = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 6,
    };

    const initialData = component.services.data;
    const [data, setData] = useState(component);
    const [filters, setFilters] = useState(initialFilters);
    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<typeof initialFilters>) => {
        startTransition(async () => {
            const newFilters = { ...filters, ...data };
            const newData = await sdk.blocks.getServiceList(newFilters, { 'x-locale': locale }, accessToken);
            setFilters(newFilters);
            setData(newData);
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            const newData = await sdk.blocks.getServiceList(initialFilters, { 'x-locale': locale }, accessToken);
            setFilters(initialFilters);
            setData(newData);
        });
    };

    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    <FiltersSection
                        title={data.subtitle}
                        initialFilters={initialFilters}
                        filters={data.filters}
                        initialValues={filters}
                        onSubmit={handleFilter}
                        onReset={handleReset}
                    />

                    <LoadingOverlay isActive={isPending}>
                        {data.services.data.length ? (
                            <div className="flex flex-col gap-6">
                                <ul className="grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                    {data.services.data.map((service) => (
                                        <li key={service.id}>
                                            <ProductCard
                                                key={service.id}
                                                title={service.product.name}
                                                tags={service.product.tags as ProductCardBadge[]}
                                                description={service.product.shortDescription}
                                                image={service.product.image}
                                                price={service.contract.price}
                                                link={{
                                                    label: data.detailsLabel,
                                                    url: service.detailsUrl,
                                                }}
                                                status={{
                                                    label: service.contract.status.label,
                                                    variant:
                                                        Mappings.ServicesBadge.statusBadgeVariants[
                                                            service.contract.status.value
                                                        ],
                                                }}
                                                LinkComponent={LinkComponent}
                                            />
                                        </li>
                                    ))}
                                </ul>

                                {data.pagination && (
                                    <Pagination
                                        disabled={isPending}
                                        total={data.services.total}
                                        offset={filters.offset || 0}
                                        limit={data.pagination.limit}
                                        legend={data.pagination.legend}
                                        prev={data.pagination.prev}
                                        next={data.pagination.next}
                                        selectPage={data.pagination.selectPage}
                                        onChange={(page) => {
                                            handleFilter({
                                                ...filters,
                                                offset: data.pagination!.limit * (page - 1),
                                            });
                                        }}
                                    />
                                )}
                            </div>
                        ) : (
                            <div className="w-full flex flex-col gap-12 mt-6">
                                <NoResults title={data.noResults.title} description={data.noResults.description} />

                                <Separator />
                            </div>
                        )}
                    </LoadingOverlay>
                </div>
            ) : (
                <div className="w-full flex flex-col gap-12 mt-6">
                    <NoResults title={data.noResults.title} description={data.noResults.description} />

                    <Separator />
                </div>
            )}
        </div>
    );
};
