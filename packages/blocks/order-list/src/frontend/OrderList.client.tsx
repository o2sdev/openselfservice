'use client';

import { ArrowRight, IterationCw, MoreVertical } from 'lucide-react';
import { createNavigation } from 'next-intl/navigation';
import React, { useState, useTransition } from 'react';

import { Mappings } from '@o2s/utils.frontend';

import { toast } from '@o2s/ui/hooks/use-toast';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import type { DataListColumnConfig } from '@o2s/ui/components/DataList';
import { DataView } from '@o2s/ui/components/DataView';
import { FiltersSection } from '@o2s/ui/components/Filters';
import { NoResults } from '@o2s/ui/components/NoResults';
import { Pagination } from '@o2s/ui/components/Pagination';

import { Button } from '@o2s/ui/elements/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@o2s/ui/elements/dropdown-menu';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { Model, Request } from '../api-harmonization/order-list.client';
import { sdk } from '../sdk';

import { OrderListPureProps } from './OrderList.types';

export const OrderListPure: React.FC<OrderListPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const { labels } = useGlobalContext();

    const initialFilters: Request.GetOrderListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.orders.data;

    const initialViewMode: 'list' | 'grid' = (() => {
        const value = component.filters?.items?.find((item) => item.__typename === 'FilterViewModeToggle')?.value;
        return value === 'grid' ? 'grid' : 'list';
    })();

    const [data, setData] = useState<Model.OrderListBlock>(component);
    const [filters, setFilters] = useState(initialFilters);
    const [viewMode, setViewMode] = useState<'list' | 'grid'>(initialViewMode);

    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<Request.GetOrderListBlockQuery>) => {
        startTransition(async () => {
            try {
                const newFilters = { ...filters, ...data };
                const newData = await sdk.blocks.getOrderList(newFilters, { 'x-locale': locale }, accessToken);
                setFilters(newFilters);
                setData(newData);
            } catch (_error) {
                toast({
                    variant: 'destructive',
                    title: labels.errors.requestError.title,
                    description: labels.errors.requestError.content,
                });
            }
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            try {
                const newData = await sdk.blocks.getOrderList(initialFilters, { 'x-locale': locale }, accessToken);
                setFilters(initialFilters);
                setData(newData);
            } catch (_error) {
                toast({
                    variant: 'destructive',
                    title: labels.errors.requestError.title,
                    description: labels.errors.requestError.content,
                });
            }
        });
    };

    // Define columns configuration outside JSX for better readability
    const columns = data.table.columns.map((column) => {
        switch (column.id) {
            case 'id':
                return {
                    ...column,
                    type: 'custom',
                    cellClassName: 'py-0',
                    render: (value: unknown, order: Model.Order) => {
                        const idValue = value as { label: string };
                        if (viewMode === 'grid') {
                            return idValue.label;
                        }
                        return (
                            <Button asChild variant="link">
                                <LinkComponent href={order.detailsUrl}>{idValue.label}</LinkComponent>
                            </Button>
                        );
                    },
                };
            case 'createdAt':
            case 'paymentDueDate':
                return {
                    ...column,
                    type: 'date',
                };
            case 'status':
                return {
                    ...column,
                    type: 'badge',
                    variant: (value: string) =>
                        Mappings.OrderBadge.orderBadgeVariants[
                            value as keyof typeof Mappings.OrderBadge.orderBadgeVariants
                        ],
                };
            case 'subtotal':
                return {
                    ...column,
                    type: 'price',
                    headerClassName: 'text-right',
                    cellClassName: 'text-right',
                };
            default:
                return {
                    ...column,
                    type: 'text',
                };
        }
    }) as DataListColumnConfig<Model.Order>[];
    const actions = data.table.actions
        ? {
              ...data.table.actions,
              cellClassName: viewMode === 'list' ? 'py-0 w-[180px]' : undefined,
              render: (order: Model.Order) => (
                  <div className="flex items-center">
                      <Button asChild variant="link">
                          <LinkComponent href={order.detailsUrl} className="flex items-center justify-end gap-2">
                              <ArrowRight className="h-4 w-4" />
                              {data.table.actions!.label}
                          </LinkComponent>
                      </Button>
                      <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" aria-label={data.labels.showMore}>
                                  <MoreVertical className="h-4 w-4" />
                              </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="min-w-50">
                              <DropdownMenuItem asChild disabled>
                                  <Typography variant="small" className="text-muted-foreground">
                                      <IterationCw className="h-4 w-4" />
                                      {data.reorderLabel}
                                  </Typography>
                              </DropdownMenuItem>
                          </DropdownMenuContent>
                      </DropdownMenu>
                  </div>
              ),
          }
        : undefined;

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
                    />

                    <LoadingOverlay isActive={isPending}>
                        {data.orders.data.length ? (
                            <div className="flex flex-col gap-6">
                                <DataView
                                    viewMode={viewMode}
                                    data={data.orders.data}
                                    columns={columns}
                                    actions={actions}
                                    cardHeaderSlots={data.cardHeaderSlots}
                                    getRowKey={(item) => item.id.value}
                                />

                                {data.pagination && (
                                    <Pagination
                                        disabled={isPending}
                                        total={data.orders.total}
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
