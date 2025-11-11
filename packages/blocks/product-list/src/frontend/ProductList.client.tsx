'use client';

import { ArrowRight, Grid3X3, Table as TableIcon, Star } from 'lucide-react';
import { createNavigation } from 'next-intl/navigation';
import React, { useMemo, useState, useTransition } from 'react';

import { DataList, DataListColumnConfig } from '@o2s/ui/components/DataList';
import { ProductCard } from '@o2s/ui/components/Cards/ProductCard';
import { FiltersSection } from '@o2s/ui/components/Filters';
import { NoResults } from '@o2s/ui/components/NoResults';
import { Pagination } from '@o2s/ui/components/Pagination';

import { Button } from '@o2s/ui/elements/button';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';
import { Toggle } from '@o2s/ui/elements/toggle';
import { Typography } from '@o2s/ui/elements/typography';

import { Model, Request } from '../api-harmonization/product-list.client';
import { sdk } from '../sdk';

import { ProductListPureProps } from './ProductList.types';

type FilterState = Request.GetProductListBlockQuery & {
    availability: string[];
    tags: string[];
};

const availabilityVariantMap: Record<string, 'default' | 'secondary' | 'outline' | 'destructive'> = {
    IN_STOCK: 'secondary',
    LOW_STOCK: 'outline',
    OUT_OF_STOCK: 'destructive',
    PREORDER: 'default',
};

const sanitizeMultiValue = (values: string[] | undefined) =>
    (values || []).filter((value) => value && value !== 'ALL');

export const ProductListPure: React.FC<ProductListPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const initialFilters = useMemo<FilterState>(
        () => ({
            id: component.id,
            limit: component.pagination?.limit ?? 9,
            offset: 0,
            category: '',
            priceRange: '',
            availability: [],
            tags: [],
            sort: '',
        }),
        [component.id, component.pagination?.limit],
    );

    const [data, setData] = useState<Model.ProductListBlock>(component);
    const [filters, setFilters] = useState<FilterState>(initialFilters);
    const [view, setView] = useState<'grid' | 'table'>(component.viewToggle?.defaultView ?? 'grid');
    const [isPending, startTransition] = useTransition();

    const sanitizeFilters = (nextFilters: FilterState): FilterState => ({
        ...nextFilters,
        availability: sanitizeMultiValue(nextFilters.availability),
        tags: sanitizeMultiValue(nextFilters.tags),
    });

    const fetchBlock = async (nextFilters: FilterState) => {
        const sanitized = sanitizeFilters(nextFilters);
        const nextData = await sdk.blocks.getProductList(sanitized, { 'x-locale': locale }, accessToken);
        setData(nextData);
        setFilters(sanitized);
    };

    const handleFilter = (changes: Partial<FilterState>) => {
        startTransition(async () => {
            await fetchBlock({ ...filters, ...changes });
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            await fetchBlock(initialFilters);
        });
    };

    const columns = useMemo(() => {
        return data.table.columns.map((column) => {
            if (column.id === 'price') {
                return {
                    ...column,
                    type: 'price',
                };
            }

            if (column.id === 'availability') {
                return {
                    ...column,
                    type: 'badge',
                    labelField: 'label',
                    valueField: 'value',
                    variant: (value: string) => availabilityVariantMap[value] ?? 'default',
                };
            }

            return {
                ...column,
                type: 'text',
                cellClassName: column.id === 'name' ? 'max-w-xs truncate' : undefined,
            };
        }) as DataListColumnConfig<Model.ProductListItem>[];
    }, [data.table.columns]);

    const actions = data.table.actions
        ? {
              ...data.table.actions,
              render: (product: Model.ProductListItem) => (
                  <Button asChild variant="link" className="gap-2">
                      <LinkComponent href={product.detailsUrl}>
                          {data.table.actions?.label}
                          <ArrowRight className="h-4 w-4" />
                      </LinkComponent>
                  </Button>
              ),
          }
        : undefined;

    const renderViewToggle = () => {
        if (!data.viewToggle) {
            return null;
        }

        return (
            <div className="flex items-center gap-2" role="group" aria-label={data.viewToggle.ariaLabel}>
                <Toggle
                    aria-label={data.viewToggle.gridLabel}
                    pressed={view === 'grid'}
                    onPressedChange={(pressed) => pressed && setView('grid')}
                    variant="solid"
                >
                    <Grid3X3 className="h-4 w-4" />
                    {data.viewToggle.gridLabel}
                </Toggle>
                <Toggle
                    aria-label={data.viewToggle.tableLabel}
                    pressed={view === 'table'}
                    onPressedChange={(pressed) => pressed && setView('table')}
                    variant="solid"
                >
                    <TableIcon className="h-4 w-4" />
                    {data.viewToggle.tableLabel}
                </Toggle>
            </div>
        );
    };

    const renderGrid = () => (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {data.products.data.map((product) => (
                <li key={product.id}>
                    <ProductCard
                        title={product.name}
                        description={product.shortDescription || product.description}
                        price={product.price}
                        image={product.image}
                        tags={product.tags}
                        status={{
                            label: product.availability.label,
                            variant: product.availability.variant,
                        }}
                        action={
                            product.rating ? (
                                <div
                                    className="flex items-center gap-1 text-sm text-muted-foreground"
                                    aria-label={`${data.grid.ratingLabel}: ${product.rating.value.toFixed(1)}`}
                                >
                                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                                    <span>{product.rating.value.toFixed(1)}</span>
                                    {typeof product.rating.count === 'number' && (
                                        <span className="text-xs text-muted-foreground">
                                            ({product.rating.count})
                                        </span>
                                    )}
                                </div>
                            ) : undefined
                        }
                        link={{
                            url: product.detailsUrl,
                            label: data.detailsLabel,
                        }}
                        LinkComponent={LinkComponent}
                    />
                    {typeof product.stock === 'number' && (
                        <p className="mt-2 text-sm text-muted-foreground">
                            {data.grid.stockLabel}: {product.stock}
                        </p>
                    )}
                </li>
            ))}
        </ul>
    );

    const renderTable = () => (
        <DataList data={data.products.data} columns={columns} actions={actions} className="min-w-full" />
    );

    const hasResults = data.products.data.length > 0;

    return (
        <div className="flex w-full flex-col gap-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-2">
                    {data.title && (
                        <Typography variant="h1" asChild>
                            <h1>{data.title}</h1>
                        </Typography>
                    )}
                    {data.subtitle && (
                        <Typography variant="muted">
                            <span>{data.subtitle}</span>
                        </Typography>
                    )}
                </div>
                {renderViewToggle()}
            </div>

            <Separator />

            <FiltersSection
                title={data.description}
                filters={data.filters}
                initialFilters={initialFilters}
                initialValues={filters}
                onSubmit={handleFilter}
                onReset={handleReset}
                labels={{
                    clickToSelect: data.labels.clickToSelect,
                }}
            />

            <LoadingOverlay isActive={isPending}>
                {hasResults ? (
                    <div className="flex flex-col gap-6">
                        {view === 'grid' ? renderGrid() : renderTable()}

                        {data.pagination && (
                            <Pagination
                                disabled={isPending}
                                total={data.products.total}
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
                    <div className="flex flex-col gap-4">
                        <NoResults title={data.noResults.title} description={data.noResults.description} />
                        <Separator />
                    </div>
                )}
            </LoadingOverlay>
        </div>
    );
};
