'use client';

import { Download } from 'lucide-react';
import React, { useState, useTransition } from 'react';

import { Mappings, Utils } from '@o2s/utils.frontend';

import { toast } from '@o2s/ui/hooks/use-toast';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { DataList } from '@o2s/ui/components/DataList';
import type { DataListColumnConfig } from '@o2s/ui/components/DataList';
import { FiltersSection } from '@o2s/ui/components/Filters';
import { NoResults } from '@o2s/ui/components/NoResults';
import { Pagination } from '@o2s/ui/components/Pagination';

import { Button } from '@o2s/ui/elements/button';
import { Link } from '@o2s/ui/elements/link';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';

import { Model, Request } from '../api-harmonization/invoice-list.client';
import { sdk } from '../sdk';

import { InvoiceListPureProps } from './InvoiceList.types';

export const InvoiceListPure: React.FC<InvoiceListPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { labels } = useGlobalContext();

    const initialFilters: Request.GetInvoiceListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.invoices.data;
    const [data, setData] = useState(component);
    const [filters, setFilters] = useState(initialFilters);
    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<Request.GetInvoiceListBlockQuery>) => {
        startTransition(async () => {
            const newFilters = { ...filters, ...data };
            const newData = await sdk.blocks.getInvoiceList(newFilters, { 'x-locale': locale }, accessToken);

            setFilters(newFilters);
            setData(newData);
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            const newData = await sdk.blocks.getInvoiceList(initialFilters, { 'x-locale': locale }, accessToken);

            setFilters(initialFilters);
            setData(newData);
        });
    };

    const handleDownload = async (id: string) => {
        try {
            const response = await sdk.blocks.getInvoicePdf(id, { 'x-locale': locale }, accessToken);
            Utils.DownloadFile.downloadFile(response, data.downloadFileName?.replace('{id}', id) || 'invoice.pdf');
        } catch (_error) {
            toast({
                variant: 'destructive',
                title: labels.errors.requestError.title,
                description: labels.errors.requestError.content,
            });
        }
    };

    // Define columns configuration outside JSX for better readability
    const columns = data.table.data.columns.map((column) => {
        switch (column.id) {
            case 'type':
                return {
                    ...column,
                    type: 'text',
                    cellClassName: 'max-w-[100px] md:max-w-sm',
                };
            case 'paymentStatus':
                return {
                    ...column,
                    type: 'badge',
                    variant: (value: string) =>
                        Mappings.InvoiceBadge.invoiceBadgePaymentStatusVariants[
                            value as keyof typeof Mappings.InvoiceBadge.invoiceBadgePaymentStatusVariants
                        ],
                };
            case 'paymentDueDate':
                return {
                    ...column,
                    type: 'date',
                };
            case 'totalAmountDue':
            case 'totalNetAmountDue':
                return {
                    ...column,
                    type: 'price',
                    headerClassName: 'text-right',
                    cellClassName: 'text-right',
                    config: { currencyKey: 'currency' },
                };
            default:
                return {
                    ...column,
                    type: 'text',
                };
        }
    }) as DataListColumnConfig<Model.Invoice>[];

    const actions = data.table.data.actions
        ? {
              ...data.table.data.actions,
              render: (invoice: Model.Invoice) => (
                  <Link asChild>
                      <Button
                          variant="link"
                          className="flex items-center justify-end gap-2"
                          onClick={() => handleDownload(invoice.id)}
                          aria-description={data.downloadButtonAriaDescription?.replace('{id}', invoice.id)}
                      >
                          <Download className="h-4 w-4" />
                          {data.table.data.actions!.label}
                      </Button>
                  </Link>
              ),
          }
        : undefined;

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <FiltersSection
                            title={data.table.title}
                            initialFilters={initialFilters}
                            filters={data.filters}
                            initialValues={filters}
                            onSubmit={handleFilter}
                            onReset={handleReset}
                        />

                        <LoadingOverlay isActive={isPending}>
                            {data.invoices.data.length ? (
                                <div className="flex flex-col gap-6">
                                    <DataList
                                        data={data.invoices.data}
                                        getRowKey={(invoice) => invoice.id}
                                        columns={columns}
                                        actions={actions}
                                    />

                                    {data.pagination && (
                                        <Pagination
                                            disabled={isPending}
                                            total={data.invoices.total}
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
