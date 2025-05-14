'use client';

import { Blocks } from '@o2s/api-harmonization';
import { ArrowRight } from 'lucide-react';
import React, { useState, useTransition } from 'react';

import { Badge } from '@o2s/ui/components/badge';
import { BadgeStatus } from '@o2s/ui/components/badge-status';
import { Button } from '@o2s/ui/components/button';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Separator } from '@o2s/ui/components/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@o2s/ui/components/table';
import { cn } from '@o2s/ui/lib/utils';

import { sdk } from '@/api/sdk';

import { notificationBadgePriorityVariants } from '@/utils/mappings/notification-badge';

import { Link as NextLink } from '@/i18n';

import { InitialFilters } from '@/components/Filters/FiltersContext';
import { FiltersSection } from '@/components/Filters/FiltersSection';
import { NoResults } from '@/components/NoResults/NoResults';
import { Pagination } from '@/components/Pagination/Pagination';

import { NotificationListPureProps } from './NotificationList.types';

export const NotificationListPure: React.FC<NotificationListPureProps> = ({ locale, accessToken, ...component }) => {
    const initialFilters: Blocks.NotificationList.Request.GetNotificationListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.notifications.data;
    const [data, setData] = useState<Blocks.NotificationList.Model.NotificationListBlock>(component);
    const [filters, setFilters] = useState(initialFilters);
    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<Blocks.NotificationList.Request.GetNotificationListBlockQuery>) => {
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

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    <FiltersSection
                        title={data.subtitle}
                        initialFilters={initialFilters as unknown as InitialFilters}
                        filters={data.filters}
                        initialValues={filters}
                        onSubmit={handleFilter}
                        onReset={handleReset}
                    />

                    <LoadingOverlay isActive={isPending}>
                        {data.notifications.data.length ? (
                            <div className="flex flex-col gap-6">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            {data.table.columns.map((column) => (
                                                <TableHead
                                                    key={column.id}
                                                    className="py-3 px-4 text-sm text-muted-foreground md:text-nowrap"
                                                >
                                                    {column.id !== 'status' ? column.title : null}
                                                </TableHead>
                                            ))}
                                            {data.table.actions && (
                                                <TableHead className="py-3 px-4 text-sm text-muted-foreground md:text-nowrap">
                                                    {data.table.actions.title}
                                                </TableHead>
                                            )}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {data.notifications.data.map((notification) => {
                                            const isUnViewed = notification.status.value === 'UNVIEWED';
                                            return (
                                                <TableRow key={notification.id}>
                                                    {data.table.columns.map((column) => {
                                                        switch (column.id) {
                                                            case 'status':
                                                                return (
                                                                    <TableCell key={column.id} className="text-center">
                                                                        {isUnViewed && (
                                                                            <BadgeStatus variant="default"></BadgeStatus>
                                                                        )}
                                                                    </TableCell>
                                                                );
                                                            case 'title':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className={cn(
                                                                            'flex-initial max-w-[200px] lg:max-w-md truncate whitespace-nowrap',
                                                                            isUnViewed && 'font-semibold',
                                                                        )}
                                                                    >
                                                                        {notification.title}
                                                                    </TableCell>
                                                                );
                                                            case 'type':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className={cn(
                                                                            'flex-initial whitespace-nowrap',
                                                                            isUnViewed && 'font-semibold',
                                                                        )}
                                                                    >
                                                                        {notification[column.id].label}
                                                                    </TableCell>
                                                                );
                                                            case 'priority':
                                                                return (
                                                                    <TableCell key={column.id} className="flex-initial">
                                                                        <Badge
                                                                            variant={
                                                                                notificationBadgePriorityVariants[
                                                                                    notification.priority.value
                                                                                ]
                                                                            }
                                                                        >
                                                                            {notification[column.id].label}
                                                                        </Badge>
                                                                    </TableCell>
                                                                );
                                                            case 'createdAt':
                                                            case 'updatedAt':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className={cn(
                                                                            'whitespace-nowrap',
                                                                            isUnViewed && 'font-semibold',
                                                                        )}
                                                                    >
                                                                        {notification[column.id]}
                                                                    </TableCell>
                                                                );
                                                            default:
                                                                return null;
                                                        }
                                                    })}
                                                    {data.table.actions && (
                                                        <TableCell className="p-4">
                                                            <Button asChild variant="link">
                                                                <NextLink
                                                                    href={notification.detailsUrl}
                                                                    className="flex items-center justify-end gap-2"
                                                                >
                                                                    <ArrowRight className="h-4 w-4" />
                                                                    {data.table.actions.label}
                                                                </NextLink>
                                                            </Button>
                                                        </TableCell>
                                                    )}
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>

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
