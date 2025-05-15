'use client';

import { Blocks } from '@o2s/api-harmonization';
import { ArrowRight } from 'lucide-react';
import React, { useState, useTransition } from 'react';

import { Badge } from '@o2s/ui/components/badge';
import { Button } from '@o2s/ui/components/button';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Separator } from '@o2s/ui/components/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@o2s/ui/components/table';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { ticketBadgeVariants } from '@/utils/mappings/ticket-badge';

import { Link as NextLink } from '@/i18n';

import { ActionLinks } from '@/components/ActionLinks/ActionLinks';
import { InitialFilters } from '@/components/Filters/FiltersContext';
import { FiltersSection } from '@/components/Filters/FiltersSection';
import { NoResults } from '@/components/NoResults/NoResults';
import { Pagination } from '@/components/Pagination/Pagination';

import { TicketListPureProps } from './TicketList.types';

export const TicketListPure: React.FC<TicketListPureProps> = ({ locale, accessToken, ...component }) => {
    const initialFilters: Blocks.TicketList.Request.GetTicketListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.tickets.data;

    const [data, setData] = useState<Blocks.TicketList.Model.TicketListBlock>(component);
    const [filters, setFilters] = useState(initialFilters);

    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<Blocks.TicketList.Request.GetTicketListBlockQuery>) => {
        startTransition(async () => {
            const newFilters = { ...filters, ...data };
            const newData = await sdk.blocks.getTicketList(newFilters, { 'x-locale': locale }, accessToken);
            setFilters(newFilters);
            setData(newData);
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            const newData = await sdk.blocks.getTicketList(initialFilters, { 'x-locale': locale }, accessToken);
            setFilters(initialFilters);
            setData(newData);
        });
    };

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    <div className="w-full flex gap-4 flex-col md:flex-row justify-between">
                        <Typography variant="h1" asChild>
                            <h1>{data.title}</h1>
                        </Typography>

                        {data.actionLinks && (
                            <ActionLinks actionLinks={data.actionLinks} showMoreLabel={data.labels.showMore} />
                        )}
                    </div>

                    <Separator />

                    <FiltersSection
                        title={data.subtitle}
                        initialFilters={initialFilters as unknown as InitialFilters}
                        filters={data.filters}
                        initialValues={filters}
                        onSubmit={handleFilter}
                        onReset={handleReset}
                        labels={{
                            clickToSelect: data.labels.clickToSelect,
                        }}
                    />

                    <LoadingOverlay isActive={isPending}>
                        {data.tickets.data.length ? (
                            <div className="flex flex-col gap-6">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            {data.table.columns.map((column) => (
                                                <TableHead
                                                    key={column.id}
                                                    className="py-3 px-4 text-sm font-medium text-muted-foreground"
                                                >
                                                    {column.title}
                                                </TableHead>
                                            ))}
                                            {data.table.actions && (
                                                <TableHead className="py-3 px-4 text-sm font-medium text-muted-foreground">
                                                    {data.table.actions.title}
                                                </TableHead>
                                            )}
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {data.tickets.data.map((ticket) => (
                                            <TableRow key={ticket.id}>
                                                {data.table.columns.map((column) => {
                                                    switch (column.id) {
                                                        case 'topic':
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    className="truncate whitespace-nowrap flex-initial max-w-[200px] lg:max-w-md"
                                                                >
                                                                    {ticket[column.id].label}
                                                                </TableCell>
                                                            );
                                                        case 'type':
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    className="flex-initial whitespace-nowrap"
                                                                >
                                                                    {ticket[column.id].label}
                                                                </TableCell>
                                                            );
                                                        case 'status':
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    className="flex-initial whitespace-nowrap"
                                                                >
                                                                    <Badge
                                                                        variant={
                                                                            ticketBadgeVariants[ticket[column.id].value]
                                                                        }
                                                                    >
                                                                        {ticket[column.id].label}
                                                                    </Badge>
                                                                </TableCell>
                                                            );
                                                        case 'updatedAt':
                                                            return (
                                                                <TableCell
                                                                    key={column.id}
                                                                    className="flex-initial whitespace-nowrap"
                                                                >
                                                                    {ticket[column.id]}
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
                                                                href={ticket.detailsUrl}
                                                                className="flex items-center justify-end gap-2"
                                                            >
                                                                <ArrowRight className="h-4 w-4" />
                                                                {data.table.actions.label}
                                                            </NextLink>
                                                        </Button>
                                                    </TableCell>
                                                )}
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                                {data.pagination && (
                                    <Pagination
                                        disabled={isPending}
                                        total={data.tickets.total}
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
