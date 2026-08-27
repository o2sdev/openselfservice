'use client';

import { ArrowRight } from 'lucide-react';
import { createNavigation } from 'next-intl/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useCallback, useMemo, useState, useTransition } from 'react';

import { Mappings } from '@o2s/utils.frontend';

import { cn } from '@o2s/ui/lib/utils';

import { toast } from '@o2s/ui/hooks/use-toast';
import { replaceUrlParams, useUrlFilters } from '@o2s/ui/hooks/use-url-filters';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import type { DataListColumnConfig } from '@o2s/ui/components/Data/DataList';
import { DataView } from '@o2s/ui/components/Data/DataView';
import { NoResults } from '@o2s/ui/components/Feedback/NoResults';
import { FiltersSection } from '@o2s/ui/components/Forms/Filters';
import { Pagination } from '@o2s/ui/components/Navigation/Pagination';

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
    const { labels } = useGlobalContext();

    const initialFilters: Request.GetNotificationListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    // Extract initial viewMode from filters if available
    const initialViewMode =
        component.filters?.items?.find((item) => item.__typename === 'FilterViewModeToggle')?.value || 'list';

    const [data, setData] = useState<Model.NotificationListBlock>(component);
    const [selectedRows, setSelectedRows] = useState<Set<string | number>>(new Set());
    const [isPending, startTransition] = useTransition();

    const pathname = usePathname();
    const searchParams = useSearchParams();
    const searchParamsString = searchParams.toString();
    const urlSearchParams = useMemo(() => new URLSearchParams(searchParamsString), [searchParamsString]);

    // Written with the History API, not `router.replace`: the block fetches its own data, so a
    // filter change must not trigger an RSC navigation that re-renders the whole page.
    const handleUrlChange = useCallback(
        (params: string) => {
            replaceUrlParams(pathname, params);
        },
        [pathname],
    );

    // Toggle groups must be restored from the URL as arrays: they iterate the value, and a string
    // would be walked character by character. A select is single-value whatever the CMS config says
    // (it writes one string back), so handing it an array only trips React's <select> check.
    const multiValueKeys = useMemo(
        () =>
            (component.filters?.items ?? [])
                .filter((item) => item.__typename === 'FilterToggleGroup' && item.allowMultiple)
                .map((item) => String(item.id)),
        [component.filters?.items],
    );

    const { filters, setFilters, resetFilters, viewMode, setViewMode } = useUrlFilters({
        initialFilters,
        namespace: 'notification',
        multiValueKeys,
        defaultViewMode: initialViewMode,
        searchParams: urlSearchParams,
        onUrlChange: handleUrlChange,
    });

    const fetchNotifications = useCallback(
        (query: Request.GetNotificationListBlockQuery) => {
            startTransition(async () => {
                try {
                    const newData = await sdk.blocks.getNotificationList(query, { 'x-locale': locale }, accessToken);

                    setData(newData);
                    setSelectedRows(new Set());
                } catch (_error) {
                    toast({
                        variant: 'destructive',
                        title: labels.errors.requestError.title,
                        description: labels.errors.requestError.content,
                    });
                }
            });
        },
        [accessToken, labels.errors.requestError.content, labels.errors.requestError.title, locale],
    );

    // A filter change means a different result set, so the current page no longer applies and the list
    // goes back to the first one. `data` carries the whole form state (including the current
    // `offset`), which is why the reset has to come after the spread. Paging keeps its own handler.
    const handleFilter = (data: Partial<Request.GetNotificationListBlockQuery>) => {
        const newFilters = { ...filters, ...data, offset: 0 };

        setFilters(newFilters);
        fetchNotifications(newFilters);
    };

    const handlePageChange = (page: number) => {
        const newFilters = { ...filters, offset: (data.pagination?.limit ?? 0) * (page - 1) };

        setFilters(newFilters);
        fetchNotifications(newFilters);
    };

    const handleReset = () => {
        resetFilters();
        fetchNotifications(initialFilters);
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
                                enableRowSelection={component.enableRowSelection}
                                selectedRows={selectedRows}
                                onSelectionChange={setSelectedRows}
                                getRowKey={(item) => item.id}
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
        </div>
    );
};
