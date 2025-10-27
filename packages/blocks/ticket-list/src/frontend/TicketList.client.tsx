'use client';

import { ArrowRight } from 'lucide-react';
import { createNavigation } from 'next-intl/navigation';
import React, { useState, useTransition } from 'react';

import { Mappings } from '@o2s/utils.frontend';

import { ActionList } from '@o2s/ui/components/ActionList';
import { DataList } from '@o2s/ui/components/DataList';
import type { DataListColumnConfig } from '@o2s/ui/components/DataList';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { FiltersSection } from '@o2s/ui/components/Filters';
import { NoResults } from '@o2s/ui/components/NoResults';
import { Pagination } from '@o2s/ui/components/Pagination';

import { Button } from '@o2s/ui/elements/button';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { Model, Request } from '../api-harmonization/ticket-list.client';
import { sdk } from '../sdk';

import { TicketListPureProps } from './TicketList.types';

export const TicketListPure: React.FC<TicketListPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const initialFilters: Request.GetTicketListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.tickets.data;

    const [data, setData] = useState<Model.TicketListBlock>(component);
    const [filters, setFilters] = useState(initialFilters);

    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<Request.GetTicketListBlockQuery>) => {
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

    // Define columns configuration outside JSX for better readability
    const columns = data.table.columns.map((column) => {
        switch (column.id) {
            case 'topic':
                return {
                    ...column,
                    type: 'text',
                    cellClassName: 'max-w-[200px] lg:max-w-md',
                };
            case 'status':
                return {
                    ...column,
                    type: 'badge',
                    variant: (value: string) =>
                        Mappings.TicketBadge.ticketBadgeVariants[
                            value as keyof typeof Mappings.TicketBadge.ticketBadgeVariants
                        ],
                };
            case 'updatedAt':
                return {
                    ...column,
                    type: 'date',
                };
            default:
                return {
                    ...column,
                    type: 'text',
                };
        }
    }) as DataListColumnConfig<Model.Ticket>[];
    const actions = data.table.actions
        ? {
              ...data.table.actions,
              render: (ticket: Model.Ticket) => (
                  <Button asChild variant="link">
                      <LinkComponent href={ticket.detailsUrl} className="flex items-center justify-end gap-2">
                          <ArrowRight className="h-4 w-4" />
                          {data.table.actions!.label}
                      </LinkComponent>
                  </Button>
              ),
          }
        : undefined;

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-6">
                    <div className="w-full flex gap-4 flex-col md:flex-row justify-between">
                        <Typography variant="h1" asChild>
                            <h1>{data.title}</h1>
                        </Typography>

                        {data.forms && (
                            <ActionList
                                visibleActions={data.forms.slice(0, 2).map((form, index) => (
                                    <Button
                                        asChild
                                        variant={index === 0 ? 'default' : 'secondary'}
                                        key={form.label}
                                        className="no-underline hover:no-underline"
                                    >
                                        <LinkComponent href={form.url}>
                                            {form.icon && <DynamicIcon name={form.icon} size={16} />}
                                            {form.label}
                                        </LinkComponent>
                                    </Button>
                                ))}
                                dropdownActions={data.forms.slice(2).map((form) => (
                                    <LinkComponent
                                        href={form.url}
                                        key={form.label}
                                        className="flex items-center gap-2 !no-underline hover:!no-underline cursor-pointer"
                                    >
                                        {form.icon && <DynamicIcon name={form.icon} size={16} />}
                                        {form.label}
                                    </LinkComponent>
                                ))}
                                showMoreLabel={data.labels.showMore}
                            />
                        )}
                    </div>

                    <Separator />

                    <FiltersSection
                        title={data.subtitle}
                        initialFilters={initialFilters}
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
                                <DataList data={data.tickets.data} columns={columns} actions={actions} />

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
