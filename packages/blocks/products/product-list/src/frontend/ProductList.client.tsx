'use client';

import { ArrowRight, ShoppingCart } from 'lucide-react';
import { createNavigation } from 'next-intl/navigation';
import React, { useCallback, useState, useTransition } from 'react';

import { Utils } from '@o2s/utils.frontend';

import type { Models } from '@o2s/framework/modules';

import { toast } from '@o2s/ui/hooks/use-toast';

import { ProductCard, ProductCardBadge } from '@o2s/ui/components/Cards/ProductCard';
import { DataList } from '@o2s/ui/components/Data/DataList';
import type { DataListColumnConfig } from '@o2s/ui/components/Data/DataList';
import { NoResults } from '@o2s/ui/components/Feedback/NoResults';
import { FiltersSection } from '@o2s/ui/components/Forms/Filters';
import { Pagination } from '@o2s/ui/components/Navigation/Pagination';

import { Button } from '@o2s/ui/elements/button';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';
import { ToastAction } from '@o2s/ui/elements/toast';

import type { Model } from '../api-harmonization/product-list.client';
import { sdk } from '../sdk';

import { ProductListPureProps } from './ProductList.types';

export const ProductListPure: React.FC<ProductListPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent, useRouter } = createNavigation(routing);
    const router = useRouter();
    const initialProducts = component.products?.data ?? [];
    const canRender = !!component.table?.columns && !!component.noResults && !!component.labels;

    const initialFilters = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 12,
    };

    const initialData = initialProducts;

    const initialViewMode =
        component.filters?.items.find((item) => item.__typename === 'FilterViewModeToggle')?.value || 'grid';

    const [data, setData] = useState(component);
    const [filters, setFilters] = useState(initialFilters);
    const [viewMode, setViewMode] = useState<'grid' | 'list'>(initialViewMode);
    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

    const [isPending, startTransition] = useTransition();
    const [isAddingToCart, startAddToCartTransition] = useTransition();

    const handleAddToCart = useCallback(
        (sku: string, currency: Models.Price.Currency, variantId?: string) => {
            const productName = data.products.data.find((p) => p.sku === sku)?.name ?? sku;
            startAddToCartTransition(async () => {
                try {
                    const cartId = localStorage.getItem('cartId');
                    const result = await sdk.cart.addCartItem(
                        {
                            cartId: cartId || undefined,
                            sku,
                            variantId,
                            quantity: 1,
                            currency,
                        },
                        { 'x-locale': locale },
                        accessToken,
                    );
                    if (!cartId && result?.id) {
                        localStorage.setItem('cartId', result.id);
                    }
                    toast({
                        description: Utils.StringReplace.reactStringReplace(data.labels.addToCartSuccess ?? '', {
                            productName,
                        }),
                        action:
                            data.labels.viewCartLabel && data.cartPath ? (
                                <ToastAction
                                    altText={data.labels.viewCartLabel}
                                    onClick={() => router.push(data.cartPath!)}
                                >
                                    {data.labels.viewCartLabel}
                                </ToastAction>
                            ) : undefined,
                    });
                } catch {
                    toast({ variant: 'destructive', description: data.labels.addToCartError });
                }
            });
        },
        [
            locale,
            accessToken,
            data.labels.addToCartSuccess,
            data.labels.addToCartError,
            data.labels.viewCartLabel,
            data.cartPath,
            data.products.data,
            router,
        ],
    );

    const handleFilter = (data: Partial<typeof initialFilters>) => {
        startTransition(async () => {
            const newFilters = { ...filters, ...data };
            const newData = await sdk.blocks.getProductList(newFilters, { 'x-locale': locale }, accessToken);
            setFilters(newFilters);
            setData(newData);
            setSelectedRows(new Set());
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            const newData = await sdk.blocks.getProductList(initialFilters, { 'x-locale': locale }, accessToken);
            setFilters(initialFilters);
            setData(newData);
            setSelectedRows(new Set());
        });
    };

    // Define table columns configuration
    const columns = (data.table?.columns ?? []).map((column) => {
        switch (column.id) {
            case 'name':
                return {
                    ...column,
                    type: 'text',
                    cellClassName: 'max-w-[200px] lg:max-w-md font-medium',
                };
            case 'price':
                return {
                    ...column,
                    type: 'price',
                };
            default:
                return {
                    ...column,
                    type: 'text',
                };
        }
    }) as DataListColumnConfig<Model.Product>[];

    const tableActions = data.table?.actions;

    const actions = tableActions
        ? {
              ...tableActions,
              render: (product: Model.Product) => (
                  <Button asChild variant="link">
                      <LinkComponent href={product.link} className="flex items-center justify-end gap-2">
                          <ArrowRight className="h-4 w-4" />
                          {data.detailsLabel || tableActions.label}
                      </LinkComponent>
                  </Button>
              ),
          }
        : undefined;

    if (!canRender) {
        return null;
    }

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    <FiltersSection
                        title={data.subtitle}
                        initialFilters={initialFilters}
                        filters={
                            data.filters
                                ? {
                                      ...data.filters,
                                      items: data.filters.items.map((item) => {
                                          if (item.__typename === 'FilterViewModeToggle') {
                                              return {
                                                  ...item,
                                                  value: viewMode,
                                                  onChange: setViewMode,
                                              };
                                          }
                                          return item;
                                      }),
                                  }
                                : undefined
                        }
                        initialValues={filters}
                        onSubmit={handleFilter}
                        onReset={handleReset}
                        variant="inline"
                        labels={{
                            clickToSelect: data.labels.clickToSelect,
                            showMoreFilters: data.labels.showMoreFilters,
                            hideMoreFilters: data.labels.hideMoreFilters,
                            noActiveFilters: data.labels.noActiveFilters,
                        }}
                    />

                    <LoadingOverlay isActive={isPending}>
                        {data.products?.data?.length ? (
                            <div className="flex flex-col gap-6">
                                {viewMode === 'list' ? (
                                    <div className="w-full overflow-x-auto">
                                        <DataList
                                            data={data.products?.data ?? []}
                                            columns={columns}
                                            actions={actions}
                                            getRowKey={(item) => item.id}
                                            enableRowSelection={component.enableRowSelection}
                                            selectedRows={selectedRows}
                                            onSelectionChange={setSelectedRows}
                                        />
                                    </div>
                                ) : (
                                    <ul className="grid gap-6 w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                        {(data.products?.data ?? []).map((product) => (
                                            <li key={product.id}>
                                                <ProductCard
                                                    key={product.id}
                                                    title={product.name}
                                                    tags={product.tags as ProductCardBadge[]}
                                                    description={product.shortDescription || product.description}
                                                    image={product.image}
                                                    price={product.price}
                                                    link={product.detailsUrl}
                                                    action={
                                                        data.labels.addToCartLabel ? (
                                                            <Button
                                                                variant="secondary"
                                                                size="sm"
                                                                disabled={isAddingToCart}
                                                                onClick={() =>
                                                                    handleAddToCart(
                                                                        product.sku,
                                                                        product.price.currency,
                                                                        product.variantId,
                                                                    )
                                                                }
                                                            >
                                                                <ShoppingCart className="h-4 w-4 mr-2" />
                                                                {data.labels.addToCartLabel}
                                                            </Button>
                                                        ) : undefined
                                                    }
                                                    LinkComponent={LinkComponent}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {data.pagination && (
                                    <Pagination
                                        disabled={isPending}
                                        total={data.products?.total ?? 0}
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
