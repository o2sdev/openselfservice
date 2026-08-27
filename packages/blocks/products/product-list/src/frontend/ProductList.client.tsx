'use client';

import { eventBus } from '@o2s/ui/event-bus';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { createNavigation } from 'next-intl/navigation';
import NextLink from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useCallback, useState, useTransition } from 'react';

import { Hooks, Utils } from '@o2s/utils.frontend';

import type { Models } from '@o2s/framework/modules';

import { toast } from '@o2s/ui/hooks/use-toast';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

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
import { Typography } from '@o2s/ui/elements/typography';

import type { Model } from '../api-harmonization/product-list.client';
import { sdk } from '../sdk';

import { ProductListPureProps } from './ProductList.types';

/**
 * Filters whose single-value URL is worth crawling and indexing, and which therefore get real links
 * rather than only a form control — a bot follows `<a href>`, it does not operate a select. Kept in
 * step with the indexable filters the page metadata canonicalises to.
 */
const SEO_FACETS = ['category'];

export const ProductListPure: React.FC<ProductListPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent, useRouter } = createNavigation(routing);
    const router = useRouter();
    const { labels: globalLabels } = useGlobalContext();
    const canRender = !!component.table?.columns && !!component.noResults && !!component.labels;

    const initialFilters = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 12,
    };

    const [data, setData] = useState(component);
    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());

    const [isPending, startTransition] = useTransition();
    const [isAddingToCart, startAddToCartTransition] = useTransition();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { filters, setFilters, resetFilters, viewMode, setViewMode } = Hooks.useListFilters({
        initialFilters,
        filterConfig: component.filters,
        defaultViewMode: 'grid',
        pathname,
        searchParams,
    });

    const handleAddToCart = useCallback(
        (sku: string, currency: Models.Price.Currency, variantId?: string) => {
            const productName = data.products.data.find((p) => p.sku === sku)?.name ?? sku;
            startAddToCartTransition(async () => {
                try {
                    const cartId = Utils.CartStorage.getCartId();
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
                        Utils.CartStorage.setCartId(result.id);
                    }
                    eventBus.emit('cart:changed', { cart: result });
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

    const fetchProducts = useCallback(
        (query: typeof initialFilters) => {
            startTransition(async () => {
                try {
                    const newData = await sdk.blocks.getProductList(query, { 'x-locale': locale }, accessToken);
                    setData(newData);
                    setSelectedRows(new Set());
                } catch (_error) {
                    toast({
                        variant: 'destructive',
                        title: globalLabels.errors.requestError.title,
                        description: globalLabels.errors.requestError.content,
                    });
                }
            });
        },
        [accessToken, globalLabels.errors.requestError.content, globalLabels.errors.requestError.title, locale],
    );

    // A filter change means a different result set, so the current page no longer applies and the list
    // goes back to the first one. `data` carries the whole form state (including the current
    // `offset`), which is why the reset has to come after the spread. Paging keeps its own handler.
    const handleFilter = (data: Partial<typeof initialFilters>) => {
        const newFilters = { ...filters, ...data, offset: 0 };

        setFilters(newFilters);
        fetchProducts(newFilters);
    };

    const handlePageChange = (page: number) => {
        const newFilters = { ...filters, offset: (data.pagination?.limit ?? 0) * (page - 1) };

        setFilters(newFilters);
        fetchProducts(newFilters);
    };

    const handleReset = () => {
        resetFilters();
        fetchProducts(initialFilters);
    };

    // Rendered on the server too, so the facet URLs are in the initial HTML for a crawler to follow.
    const seoFacets = (data.filters?.items ?? []).filter(
        (item): item is Extract<typeof item, { options: { value: string; label: string }[] }> =>
            SEO_FACETS.includes(String(item.id)) && 'options' in item,
    );

    const facetHref = (key: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());

        params.delete('page');
        params.set(key, value);

        return `${pathname}?${params.toString()}`;
    };

    const isFacetActive = (key: string, value: string) => searchParams.getAll(key).includes(value);

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
                                    onChange={handlePageChange}
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

            {seoFacets.map((facet) => (
                <nav key={String(facet.id)} aria-label={facet.label} className="mt-8 flex flex-col gap-2">
                    <Typography variant="small" className="text-muted-foreground">
                        {facet.label}
                    </Typography>

                    <ul className="flex flex-wrap gap-x-4 gap-y-2">
                        {facet.options.map((option) => (
                            <li key={option.value}>
                                <Button asChild variant="link" size="none" className="h-auto p-0">
                                    <NextLink
                                        href={facetHref(String(facet.id), option.value)}
                                        aria-current={
                                            isFacetActive(String(facet.id), option.value) ? 'page' : undefined
                                        }
                                    >
                                        {option.label}
                                    </NextLink>
                                </Button>
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    );
};
