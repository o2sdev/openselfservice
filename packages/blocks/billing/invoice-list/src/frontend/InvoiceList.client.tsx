'use client';

import { IntlMessageFormat } from 'intl-messageformat';
import { Download } from 'lucide-react';
import { useLocale } from 'next-intl';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useCallback, useEffect, useMemo, useRef, useState, useTransition } from 'react';

import { Mappings, Utils } from '@o2s/utils.frontend';

import { toast } from '@o2s/ui/hooks/use-toast';
import { replaceUrlParams, useUrlFilters } from '@o2s/ui/hooks/use-url-filters';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import type { DataListColumnConfig } from '@o2s/ui/components/Data/DataList';
import { DataView } from '@o2s/ui/components/Data/DataView';
import { NoResults } from '@o2s/ui/components/Feedback/NoResults';
import { FiltersSection } from '@o2s/ui/components/Forms/Filters';
import { Pagination } from '@o2s/ui/components/Navigation/Pagination';

import { Button } from '@o2s/ui/elements/button';
import { Link } from '@o2s/ui/elements/link';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Separator } from '@o2s/ui/elements/separator';

import { Model, Request } from '../api-harmonization/invoice-list.client';
import { sdk } from '../sdk';

import { InvoiceListPureProps } from './InvoiceList.types';

export const InvoiceListPure: React.FC<InvoiceListPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { labels } = useGlobalContext();
    const currentLocale = useLocale();

    const initialFilters: Request.GetInvoiceListBlockQuery = {
        id: component.id,
        offset: 0,
        limit: component.pagination?.limit || 5,
        search: '',
    };

    const initialData = component.invoices.data;

    // Extract initial viewMode from filters if available
    const initialViewMode =
        component.filters?.items?.find((item) => item.__typename === 'FilterViewModeToggle')?.value || 'list';

    const [data, setData] = useState(component);
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

    // Multi-select filters must be restored from the URL as arrays, not strings.
    const multiValueKeys = useMemo(
        () =>
            (component.filters?.items ?? [])
                .filter((item) => 'allowMultiple' in item && item.allowMultiple)
                .map((item) => String(item.id)),
        [component.filters?.items],
    );

    const { filters, setFilters, resetFilters, viewMode, setViewMode, isRestoredFromUrl } = useUrlFilters({
        initialFilters,
        namespace: 'invoice',
        multiValueKeys,
        defaultViewMode: initialViewMode,
        searchParams: urlSearchParams,
        onUrlChange: handleUrlChange,
    });

    const fetchInvoices = useCallback(
        (query: Request.GetInvoiceListBlockQuery) => {
            startTransition(async () => {
                try {
                    const newData = await sdk.blocks.getInvoiceList(query, { 'x-locale': locale }, accessToken);

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

    // The block is rendered on the server with the default filters, so a URL carrying filters
    // (a shared link, or a status box linking to a pre-filtered list) needs one refetch on mount.
    const hasAppliedUrlFilters = useRef(false);

    useEffect(() => {
        if (!isRestoredFromUrl || hasAppliedUrlFilters.current) {
            return;
        }

        hasAppliedUrlFilters.current = true;
        fetchInvoices(filters);
    }, [fetchInvoices, filters, isRestoredFromUrl]);

    const handleFilter = (data: Partial<Request.GetInvoiceListBlockQuery>) => {
        const newFilters = { ...filters, ...data };

        setFilters(newFilters);
        fetchInvoices(newFilters);
    };

    const handleReset = () => {
        resetFilters();
        fetchInvoices(initialFilters);
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

    const handleBulkDownload = async (selectedInvoiceIds: string[]) => {
        if (selectedInvoiceIds.length === 0) return;

        startTransition(async () => {
            try {
                for (const invoiceId of selectedInvoiceIds) {
                    try {
                        const response = await sdk.blocks.getInvoicePdf(invoiceId, { 'x-locale': locale }, accessToken);
                        Utils.DownloadFile.downloadFile(
                            response,
                            data.downloadFileName?.replace('{id}', invoiceId) || `invoice-${invoiceId}.pdf`,
                        );
                        await new Promise((resolve) => setTimeout(resolve, 100));
                    } catch (error) {
                        console.error(`Failed to download invoice ${invoiceId}:`, error);
                    }
                }
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
    const columns = data.table.data.columns.map((column) => {
        switch (column.id) {
            case 'type':
                return {
                    ...column,
                    type: 'text',
                    displayField: 'displayValue',
                    cellClassName: 'max-w-[100px] md:max-w-sm',
                };
            case 'paymentStatus':
                return {
                    ...column,
                    type: 'badge',
                    labelField: 'displayValue',
                    variant: (value: string) =>
                        Mappings.InvoiceBadge.invoiceBadgePaymentStatusVariants[
                            value as keyof typeof Mappings.InvoiceBadge.invoiceBadgePaymentStatusVariants
                        ],
                };
            case 'paymentDueDate':
                return {
                    ...column,
                    type: 'date',
                    displayField: 'displayValue',
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

    const bulkActions = component.downloadAllButtonLabel
        ? (selectedRowKeys: Set<string | number>) => {
              const selectedIds = Array.from(selectedRowKeys).map(String);
              return (
                  <Button size="sm" onClick={() => handleBulkDownload(selectedIds)} disabled={isPending}>
                      <Download className="mr-2 h-4 w-4" />
                      {component.downloadAllButtonLabel}
                  </Button>
              );
          }
        : undefined;

    const bulkActionsLabel = component.bulkActionsLabel
        ? (count: number) => {
              const msg = new IntlMessageFormat(component.bulkActionsLabel!, currentLocale);
              return String(msg.format({ count }));
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
                            {data.invoices.data.length ? (
                                <div className="flex flex-col gap-6">
                                    <DataView
                                        viewMode={viewMode}
                                        data={data.invoices.data}
                                        columns={columns}
                                        actions={actions}
                                        cardHeaderSlots={data.cardHeaderSlots}
                                        enableRowSelection={component.enableRowSelection}
                                        selectedRows={selectedRows}
                                        onSelectionChange={setSelectedRows}
                                        getRowKey={(item) => item.id}
                                        bulkActions={bulkActions}
                                        bulkActionsLabel={bulkActionsLabel}
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
