'use client';

import { Components } from '@o2s/api-harmonization';
import { Download } from 'lucide-react';
import React, { useState, useTransition } from 'react';

import { Badge } from '@o2s/ui/components/badge';
import { Button } from '@o2s/ui/components/button';
import { Link } from '@o2s/ui/components/link';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Separator } from '@o2s/ui/components/separator';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@o2s/ui/components/table';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { sdk } from '@/api/sdk';

import { downloadFile } from '@/utils/downloadFile';
import { invoiceBadgePaymentStatusVariants } from '@/utils/mappings/invoice-badge';

import { useGlobalContext } from '@/providers/GlobalProvider';

import { Filters } from '@/components/Filters/Filters';
import FiltersContextProvider, { InitialFilters } from '@/components/Filters/FiltersContext';
import { NoResults } from '@/components/NoResults/NoResults';
import { Pagination } from '@/components/Pagination/Pagination';

import { InvoiceListPureProps } from './InvoiceList.types';

export const InvoiceListPure: React.FC<InvoiceListPureProps> = ({ locale, accessToken, ...component }) => {
    const initialFilters: Components.InvoiceList.Request.GetInvoiceListComponentQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
    };

    const initialData = component.invoices.data;
    const [data, setData] = useState<Components.InvoiceList.Model.InvoiceListComponent>(component);
    const [filters, setFilters] = useState(initialFilters);
    const [isPending, startTransition] = useTransition();
    const { priceService } = useGlobalContext();

    const handleFilter = (data: Partial<Components.InvoiceList.Request.GetInvoiceListComponentQuery>) => {
        startTransition(async () => {
            const newFilters = { ...filters, ...data };
            const newData = await sdk.components.getInvoiceList(newFilters, { 'x-locale': locale }, accessToken);

            setFilters(newFilters);
            setData(newData);
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            const newData = await sdk.components.getInvoiceList(initialFilters, { 'x-locale': locale }, accessToken);

            setFilters(initialFilters);
            setData(newData);
        });
    };

    const handleDownload = async (id: string) => {
        try {
            const response = await sdk.components.getInvoicePdf(id, { 'x-locale': locale }, accessToken);
            downloadFile(response, data.downloadFileName?.replace('{id}', id) || 'invoice.pdf');
        } catch (error) {
            console.error('Error downloading invoice:', error);
        }
    };

    return (
        <div className="w-full">
            {initialData.length > 0 ? (
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between items-center gap-4 flex-wrap md:flex-nowrap">
                            {data.table.title && (
                                <Typography variant="h2" asChild>
                                    <h2>{data.table.title}</h2>
                                </Typography>
                            )}
                            <FiltersContextProvider initialFilters={initialFilters as unknown as InitialFilters}>
                                <Filters
                                    filters={data.filters}
                                    initialValues={filters}
                                    onSubmit={handleFilter}
                                    onReset={handleReset}
                                />
                            </FiltersContextProvider>
                        </div>

                        <LoadingOverlay isActive={isPending}>
                            {data.invoices.data.length ? (
                                <div className="flex flex-col gap-6">
                                    <Table className="border-b">
                                        <TableHeader>
                                            <TableRow>
                                                {data.table.data.columns.map((column) => (
                                                    <TableHead
                                                        key={column.id}
                                                        className={cn(
                                                            'py-3 px-4 text-sm text-muted-foreground',
                                                            column.id === 'totalAmountDue' && 'text-right',
                                                            column.id === 'amountToPay' && 'text-right',
                                                        )}
                                                    >
                                                        {column.title}
                                                    </TableHead>
                                                ))}
                                                {data.table.data.actions && (
                                                    <TableHead className="py-3 px-4 text-sm text-muted-foreground">
                                                        {data.table.data.actions.title}
                                                    </TableHead>
                                                )}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {data.invoices.data.map((invoice) => {
                                                return (
                                                    <TableRow key={invoice.id}>
                                                        {data.table.data.columns.map((column) => {
                                                            switch (column.id) {
                                                                case 'type':
                                                                    return (
                                                                        <TableCell
                                                                            key={column.id}
                                                                            className="max-w-[100px] md:max-w-sm truncate whitespace-nowrap"
                                                                        >
                                                                            {invoice[column.id].displayValue}
                                                                        </TableCell>
                                                                    );
                                                                case 'id':
                                                                    return (
                                                                        <TableCell
                                                                            key={column.id}
                                                                            className="truncate whitespace-nowrap"
                                                                        >
                                                                            {invoice[column.id]}
                                                                        </TableCell>
                                                                    );
                                                                case 'paymentStatus':
                                                                    return (
                                                                        <TableCell
                                                                            key={column.id}
                                                                            className="whitespace-nowrap"
                                                                        >
                                                                            <Badge
                                                                                variant={
                                                                                    invoiceBadgePaymentStatusVariants[
                                                                                        invoice.paymentStatus.value
                                                                                    ]
                                                                                }
                                                                            >
                                                                                {invoice[column.id].displayValue}
                                                                            </Badge>
                                                                        </TableCell>
                                                                    );
                                                                case 'paymentDueDate':
                                                                    return (
                                                                        <TableCell
                                                                            key={column.id}
                                                                            className="whitespace-nowrap truncate"
                                                                        >
                                                                            {invoice[column.id].displayValue}
                                                                        </TableCell>
                                                                    );
                                                                case 'totalAmountDue':
                                                                case 'amountToPay':
                                                                    return (
                                                                        <TableCell
                                                                            key={column.id}
                                                                            className="whitespace-nowrap text-right truncate"
                                                                        >
                                                                            {
                                                                                priceService.formatPrice(
                                                                                    invoice[column.id],
                                                                                    invoice.currency,
                                                                                ).format
                                                                            }
                                                                        </TableCell>
                                                                    );
                                                                default:
                                                                    return null;
                                                            }
                                                        })}
                                                        {data.table.data.actions && (
                                                            <TableCell>
                                                                <Link asChild>
                                                                    <Button
                                                                        variant="link"
                                                                        className="flex items-center justify-end gap-2"
                                                                        onClick={() => handleDownload(invoice.id)}
                                                                        aria-description={data.downloadButtonAriaDescription?.replace(
                                                                            '{id}',
                                                                            invoice.id,
                                                                        )}
                                                                    >
                                                                        <Download className="h-4 w-4" />
                                                                        {data.table.data.actions.label}
                                                                    </Button>
                                                                </Link>
                                                            </TableCell>
                                                        )}
                                                    </TableRow>
                                                );
                                            })}
                                        </TableBody>
                                    </Table>

                                    {data.pagination && (
                                        <div className="flex flex-col gap-6">
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
                                            <Separator />
                                        </div>
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
