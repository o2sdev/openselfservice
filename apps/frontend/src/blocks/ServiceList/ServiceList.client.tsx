'use client';

import { Blocks } from '@o2s/api-harmonization';
import React, { useState, useTransition } from 'react';

import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { useRouter } from '@/i18n';

import { useGlobalContext } from '@/providers/GlobalProvider';

import { Card } from '@/components/Card/Card';
import { Filters } from '@/components/Filters/Filters';
import FiltersContextProvider, { InitialFilters } from '@/components/Filters/FiltersContext';
import { NoResults } from '@/components/NoResults/NoResults';
import { Pagination } from '@/components/Pagination/Pagination';

import { ServiceListPureProps } from './ServiceList.types';

export const ServiceListPure: React.FC<ServiceListPureProps> = ({ locale, accessToken, ...component }) => {
    const initialFilters: Blocks.ServiceList.Request.GetServiceListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.services.data;
    const router = useRouter();
    const [data, setData] = useState<Blocks.ServiceList.Model.ServiceListBlock>(component);
    const [filters, setFilters] = useState(initialFilters);
    const [isPending, startTransition] = useTransition();
    const { priceService } = useGlobalContext();

    const handleFilter = (data: Partial<Blocks.ServiceList.Request.GetServiceListBlockQuery>) => {
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

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">
                        <Typography variant="h2" asChild>
                            <h2>{data.subtitle}</h2>
                        </Typography>
                        {data.filters && data.filters.items.length > 0 && (
                            <FiltersContextProvider initialFilters={initialFilters as unknown as InitialFilters}>
                                <Filters
                                    filters={data.filters}
                                    initialValues={filters}
                                    onSubmit={handleFilter}
                                    onReset={handleReset}
                                />
                            </FiltersContextProvider>
                        )}
                    </div>

                    <LoadingOverlay isActive={isPending}>
                        {data.services.data.length ? (
                            <div className="flex flex-col gap-6">
                                <div className="grid gap-6 w-full justify-items-center [grid-template-columns:repeat(auto-fill,minmax(350px,1fr))]">
                                    {data.services.data.map((service) => (
                                        <Card
                                            key={service.id}
                                            title={service.product.name}
                                            tags={[
                                                {
                                                    label: 'New',
                                                    variant: 'secondary',
                                                },
                                            ]}
                                            description={service.product.shortDescription}
                                            image={service.product.image}
                                            price={{
                                                value: priceService.formatPrice(
                                                    service.product.price,
                                                    service.product.price.currency,
                                                ).format,
                                                period: service.product.price.period,
                                            }}
                                            buttonLabel={data.detailsLabel}
                                            status={{
                                                label: service.contract.status.label,
                                                variant: 'default',
                                            }}
                                            onButtonClick={() => router.push(service.detailsUrl)}
                                        />
                                    ))}
                                </div>

                                {data.pagination && (
                                    <div className="flex flex-col gap-6">
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
                                        <Separator />
                                    </div>
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
