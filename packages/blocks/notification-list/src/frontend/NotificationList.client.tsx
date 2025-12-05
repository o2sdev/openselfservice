'use client';

import { ArrowRight } from 'lucide-react';
import { createNavigation } from 'next-intl/navigation';
import React, { useState, useTransition } from 'react';

import { Mappings } from '@o2s/utils.frontend';

import { cn } from '@o2s/ui/lib/utils';

import type { DataListColumnConfig } from '@o2s/ui/components/DataList';
import { DataView } from '@o2s/ui/components/DataView';
import { FiltersSection } from '@o2s/ui/components/Filters';
import { NoResults } from '@o2s/ui/components/NoResults';
import { Pagination } from '@o2s/ui/components/Pagination';

import { BadgeStatus } from '@o2s/ui/elements/badge-status';
import { Button } from '@o2s/ui/elements/button';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';

import { Model, Request } from '../api-harmonization/notification-list.client';
import { sdk } from '../sdk';

import { NotificationListPureProps } from './NotificationList.types';

export const NotificationListPure: React.FC<NotificationListPureProps> = ({
    locale,
    accessToken,
    routing,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const initialFilters: Request.GetNotificationListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.notifications.data;

    // Extract initial viewMode from filters if available
    const initialViewMode =
        component.filters?.items?.find((item) => item.__typename === 'FilterViewModeToggle')?.value || 'list';

    const [data, setData] = useState<Model.NotificationListBlock>(component);
    const [filters, setFilters] = useState(initialFilters);
    const [viewMode, setViewMode] = useState<'list' | 'grid'>(initialViewMode);
    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<Request.GetNotificationListBlockQuery>) => {
        startTransition(async () => {
            const newFilters = { ...filters, ...data };
            const newData = await sdk.blocks.getNotificationList(newFilters, { 'x-locale': locale }, accessToken);

            setFilters(newFilters);
            setData(newData);
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            const newData = await sdk.blocks.getNotificationList(initialFilters, { 'x-locale': locale }, accessToken);

            setFilters(initialFilters);
            setData(newData);
        });
    };

    // Define columns configuration outside JSX for better readability
    const columns = data.table.columns.map((column) => {
        switch (column.id) {
            case 'status':
                return {
                    ...column,
                    type: 'custom',
                    title: '',
                    cellClassName: 'text-center',
                    render: (_value: unknown, notification: Model.Notification) => {
                        const isUnViewed = notification.status.value === 'UNVIEWED';
                        return isUnViewed ? <BadgeStatus variant="default" /> : null;
                    },
                };
            case 'title':
                return {
                    ...column,
                    type: 'custom',
                    cellClassName: 'max-w-[200px] lg:max-w-md',
                    render: (_value: unknown, notification: Model.Notification) => (
                        <Button asChild variant="link" size="none" className="truncate block text-left">
                            <LinkComponent href={notification.detailsUrl}>{notification.title}</LinkComponent>
                        </Button>
                    ),
                };
            case 'type':
                return {
                    ...column,
                    type: 'text',
                    cellClassName: (notification: Model.Notification) =>
                        cn(notification.status.value === 'UNVIEWED' && 'font-semibold'),
                };
            case 'priority':
                return {
                    ...column,
                    type: 'badge',
                    variant: (value: string) =>
                        Mappings.NotificationBadge.notificationBadgePriorityVariants[
                            value as keyof typeof Mappings.NotificationBadge.notificationBadgePriorityVariants
                        ],
                };
            case 'createdAt':
            case 'updatedAt':
                return {
                    ...column,
                    type: 'date',
                    cellClassName: (notification: Model.Notification) =>
                        cn(notification.status.value === 'UNVIEWED' && 'font-semibold'),
                };
            default:
                return {
                    ...column,
                    type: 'text',
                };
        }
    }) as DataListColumnConfig<Model.Notification>[];
    const actions = data.table.actions
        ? {
              ...data.table.actions,
              render: (notification: Model.Notification) => (
                  <LinkComponent href={notification.detailsUrl}>
                      <Button variant="link" className="flex items-center justify-end gap-2">
                          {data.table.actions!.label}
                          <ArrowRight className="h-4 w-4" />
                      </Button>
                  </LinkComponent>
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
                        {data.notifications.data.length ? (
                            <div className="flex flex-col gap-6">
                                <DataView
                                    viewMode={viewMode}
                                    data={data.notifications.data}
                                    columns={columns}
                                    actions={actions}
                                    cardHeaderSlots={data.cardHeaderSlots}
                                />

                                {data.pagination && (
                                    <Pagination
                                        disabled={isPending}
                                        total={data.notifications.total}
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
