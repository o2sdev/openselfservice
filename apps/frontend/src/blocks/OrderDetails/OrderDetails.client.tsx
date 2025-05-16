'use client';

import { Blocks } from '@o2s/api-harmonization';
import { VariantProps } from 'class-variance-authority';
import { ArrowUpRight, IterationCw, Truck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';

import { Orders } from '@o2s/framework/modules';

import { Badge, badgeVariants } from '@o2s/ui/components/badge';
import { Button } from '@o2s/ui/components/button';
import { Card } from '@o2s/ui/components/card';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { Progress } from '@o2s/ui/components/progress';
import { Separator } from '@o2s/ui/components/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@o2s/ui/components/sheet';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@o2s/ui/components/table';
import { Table } from '@o2s/ui/components/table';
import { Tooltip, TooltipContent, TooltipTrigger } from '@o2s/ui/components/tooltip';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { sdk } from '@/api/sdk';

import { orderBadgeVariants } from '@/utils/mappings/order-badge';

import { Link as NextLink } from '@/i18n';

import { DynamicIcon } from '@/components/DynamicIcon/DynamicIcon';
import { InitialFilters } from '@/components/Filters/FiltersContext';
import { FiltersSection } from '@/components/Filters/FiltersSection';
import { NoResults } from '@/components/NoResults/NoResults';
import { Pagination } from '@/components/Pagination/Pagination';
import { Price } from '@/components/Price/Price';
import { RichText } from '@/components/RichText/RichText';

import { OrderDetailsPureProps } from './OrderDetails.types';

const ProgressBar: React.FC<
    Readonly<{
        currentStatus: {
            title: string;
            label: string;
            value: Orders.Model.OrderStatus;
        };
        statusLadder?: string[];
    }>
> = ({ currentStatus, statusLadder }) => {
    const statusMap: {
        value: number;
        id: Orders.Model.OrderStatus;
        badge: VariantProps<typeof badgeVariants>['variant'];
    }[] = [
        { value: 100, id: 'COMPLETED', badge: 'default' },
        { value: 100, id: 'ARCHIVED', badge: 'secondary' },
        { value: 100, id: 'CANCELLED', badge: 'destructive' },
        { value: 100, id: 'UNKNOWN', badge: 'outline' },
        { value: 75, id: 'PENDING', badge: 'default' },
        { value: 75, id: 'REQUIRES_ACTION', badge: 'secondary' },
        { value: 75, id: 'SHIPPED', badge: 'default' },
    ];
    const value = statusMap.find((item) => item.id === currentStatus.value)?.value || 0;
    const badge = statusMap.find((item) => item.id === currentStatus.value)?.badge || 'outline';
    const previousStatuses = statusLadder?.slice(0, -1);
    const lastStatus = statusLadder?.slice(-1);

    return (
        <div className="w-full flex flex-col gap-4">
            <Progress value={value} className="w-full h-2" />
            <div className="flex flex-row justify-between items-center gap-2">
                {previousStatuses?.map((status) => (
                    <Badge key={status} variant="outline" className="line-through">
                        {status}
                    </Badge>
                ))}
                {value === 75 && <Badge variant={badge}>{currentStatus.label}</Badge>}
                {value === 100 ? (
                    <Badge variant={orderBadgeVariants[currentStatus.value]}>{currentStatus.label}</Badge>
                ) : (
                    <Badge variant="outline">{lastStatus}</Badge>
                )}
            </div>
        </div>
    );
};

const InfoCard: React.FC<
    Readonly<{
        title: string;
        value?: React.ReactNode | string;
        icon?: React.ReactNode;
        description?: React.ReactNode | string;
        button?: React.ReactNode;
        className?: string;
    }>
> = ({ title, value, description, icon, button, className }) => {
    return (
        <Card className={cn('h-full w-full', className)}>
            <div className="p-6 flex flex-col gap-2">
                <div className="flex flex-row justify-between items-center gap-2">
                    <Typography variant="subtitle">{title}</Typography>
                    {icon}
                </div>
                <div className="flex flex-row justify-between items-end gap-2">
                    <div className="flex flex-col gap-2 w-full">
                        {typeof value === 'string' ? <Typography variant="highlightedBig">{value}</Typography> : value}
                        {typeof description === 'string' ? (
                            <div className="line-clamp-3">
                                <RichText content={description} className="text-muted-foreground" />
                            </div>
                        ) : (
                            description
                        )}
                    </div>
                    {button}
                </div>
            </div>
        </Card>
    );
};

export const OrderDetailsPure: React.FC<Readonly<OrderDetailsPureProps>> = ({
    locale,
    accessToken,
    orderId,
    ...component
}) => {
    const initialFilters: Blocks.OrderDetails.Request.GetOrderDetailsBlockQuery = {
        id: component.id,
        offset: 0,
        limit: 5,
    };

    const initialData = component.productList.products.data;
    const data = component;
    const isOverdue = data.order.overdue.value.value > 0;

    const t = useTranslations();

    const [items, setItems] =
        useState<Blocks.OrderDetails.Model.OrderDetailsBlock['productList']['products']['data']>(initialData);
    const [filters, setFilters] = useState(initialFilters);

    const [isTooltipOpen, setIsTooltipOpen] = useState({
        trackOrder: false,
        reorder: false,
        payOnline: false,
    });

    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<Blocks.OrderList.Request.GetOrderListBlockQuery>) => {
        startTransition(async () => {
            const newFilters = { ...filters, ...data };
            const newData = await sdk.blocks.getOrderDetails(
                {
                    id: orderId,
                },
                newFilters,
                { 'x-locale': locale },
                accessToken,
            );
            setFilters(newFilters);
            setItems(newData.productList.products.data);
        });
    };

    const handleReset = () => {
        startTransition(async () => {
            const newData = await sdk.blocks.getOrderDetails(
                {
                    id: orderId,
                },
                initialFilters,
                { 'x-locale': locale },
                accessToken,
            );
            setFilters(initialFilters);
            setItems(newData.productList.products.data);
        });
    };

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 sm:gap-16 flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                        <Typography variant="h1" asChild>
                            <h1>{data.order.id.value}</h1>
                        </Typography>

                        <div>
                            <Badge variant={orderBadgeVariants[data.order.status.value]}>
                                {data.order.status.label}
                            </Badge>
                        </div>
                    </div>
                    <div className="flex flex-row sm:items-end">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center w-full sm:w-auto">
                            <Tooltip
                                open={isTooltipOpen.trackOrder}
                                onOpenChange={(open) => setIsTooltipOpen((prev) => ({ ...prev, trackOrder: open }))}
                            >
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setIsTooltipOpen((prev) => ({ ...prev, trackOrder: true }))}
                                    >
                                        <Truck className="w-4 h-4" />
                                        {data.labels.trackOrder}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t('general.comingSoon')}</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip
                                open={isTooltipOpen.reorder}
                                onOpenChange={(open) => setIsTooltipOpen((prev) => ({ ...prev, reorder: open }))}
                            >
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="secondary"
                                        onClick={() => setIsTooltipOpen((prev) => ({ ...prev, reorder: true }))}
                                    >
                                        <IterationCw className="w-4 h-4" />
                                        {data.labels.reorder}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t('general.comingSoon')}</p>
                                </TooltipContent>
                            </Tooltip>

                            <Tooltip
                                open={isTooltipOpen.payOnline}
                                onOpenChange={(open) => setIsTooltipOpen((prev) => ({ ...prev, payOnline: open }))}
                            >
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="destructive"
                                        onClick={() => setIsTooltipOpen((prev) => ({ ...prev, payOnline: true }))}
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                        {data.labels.payOnline}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t('general.comingSoon')}</p>
                                </TooltipContent>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-6 mb-6">
                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <div className="w-full flex flex-col md:flex-row gap-6">
                            <InfoCard
                                title={data.order.total.title}
                                icon={<DynamicIcon name={data.order.total.icon} />}
                                value={
                                    <Typography variant="highlightedBig">
                                        <Price price={data.order.total.value} />
                                    </Typography>
                                }
                                description={data.order.total.description}
                            />

                            <InfoCard
                                title={data.order.createdAt.title}
                                icon={<DynamicIcon name={data.order.createdAt.icon} />}
                                value={data.order.createdAt.label}
                                description={data.order.createdAt.description}
                            />
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-6">
                            <InfoCard
                                title={data.order.paymentDueDate.title}
                                icon={<DynamicIcon name={data.order.paymentDueDate.icon} />}
                                value={data.order.paymentDueDate.label}
                                description={data.order.paymentDueDate.description}
                            />

                            <InfoCard
                                title={data.order.overdue.title}
                                icon={
                                    <DynamicIcon
                                        name={data.order.overdue.icon}
                                        className={cn(isOverdue && 'text-destructive')}
                                    />
                                }
                                value={
                                    <Typography
                                        className={cn(isOverdue && 'text-destructive')}
                                        variant="highlightedBig"
                                    >
                                        <Price price={data.order.overdue.value} />
                                    </Typography>
                                }
                                description={
                                    <div className="line-clamp-3">
                                        <RichText
                                            content={data.order.overdue.description}
                                            className={cn(isOverdue ? 'text-destructive' : 'text-muted-foreground')}
                                        />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <InfoCard
                            title={data.order.status.title}
                            icon={<DynamicIcon name={data.order.status.icon} />}
                            description={
                                <ProgressBar
                                    currentStatus={data.order.status}
                                    statusLadder={data.order.status.statusLadder}
                                />
                            }
                        />
                        <InfoCard
                            title={data.order.customerComment.title}
                            icon={<DynamicIcon name={data.order.customerComment.icon} />}
                            description={data.order.customerComment.value}
                            button={
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="secondary">
                                            {data.order.customerComment.link.icon && (
                                                <DynamicIcon name={data.order.customerComment.link.icon} />
                                            )}
                                            {data.order.customerComment.link.label}
                                        </Button>
                                    </SheetTrigger>

                                    <SheetContent closeLabel={data.labels.close} className="flex flex-col gap-2">
                                        <SheetHeader>
                                            <SheetTitle>{data.order.customerComment.title}</SheetTitle>
                                        </SheetHeader>
                                        <RichText
                                            content={data.order.customerComment.value}
                                            className="text-muted-foreground"
                                        />
                                    </SheetContent>
                                </Sheet>
                            }
                        />
                    </div>
                </div>

                {initialData.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        <FiltersSection
                            title={data.productList.title}
                            initialFilters={initialFilters as unknown as InitialFilters}
                            filters={data.productList.filters}
                            initialValues={filters}
                            onSubmit={handleFilter}
                            onReset={handleReset}
                        />

                        <LoadingOverlay isActive={isPending}>
                            {items.length ? (
                                <div className="flex flex-col gap-6">
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                {data.productList.table.columns.map((column) => {
                                                    switch (column.id) {
                                                        case 'total':
                                                            return (
                                                                <TableHead
                                                                    key={column.id}
                                                                    className="py-3 px-4 text-sm font-medium text-muted-foreground text-right md:text-nowrap"
                                                                >
                                                                    {column.title}
                                                                </TableHead>
                                                            );
                                                        default:
                                                            return (
                                                                <TableHead
                                                                    key={column.id}
                                                                    className="py-3 px-4 text-sm font-medium text-muted-foreground md:text-nowrap"
                                                                >
                                                                    {column.title}
                                                                </TableHead>
                                                            );
                                                    }
                                                })}
                                                {data.productList.table.actions && (
                                                    <TableHead className="py-3 px-4 text-sm font-medium text-muted-foreground md:text-nowrap">
                                                        {data.productList.table.actions.title}
                                                    </TableHead>
                                                )}
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {items.map((orderItem) => (
                                                <TableRow key={orderItem.id}>
                                                    {data.productList.table.columns.map((column) => {
                                                        switch (column.id) {
                                                            case 'sku':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap"
                                                                    >
                                                                        {orderItem.product?.[column.id]}
                                                                    </TableCell>
                                                                );
                                                            case 'image':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap py-0"
                                                                    >
                                                                        {orderItem.product?.image?.url && (
                                                                            <div className="relative w-10 h-10 overflow-hidden flex-shrink-0 rounded-lg">
                                                                                {orderItem.product?.image?.url &&
                                                                                    orderItem.product?.image
                                                                                        ?.alternativeText && (
                                                                                        <Image
                                                                                            src={
                                                                                                orderItem.product?.image
                                                                                                    ?.url
                                                                                            }
                                                                                            alt={
                                                                                                orderItem.product?.image
                                                                                                    ?.alternativeText
                                                                                            }
                                                                                            fill
                                                                                            className="object-cover object-center"
                                                                                        />
                                                                                    )}
                                                                            </div>
                                                                        )}
                                                                    </TableCell>
                                                                );
                                                            case 'name':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap py-0"
                                                                    >
                                                                        <Button asChild variant="link">
                                                                            <NextLink
                                                                                href={orderItem.product?.link || ''}
                                                                            >
                                                                                {orderItem.product?.name}
                                                                            </NextLink>
                                                                        </Button>
                                                                    </TableCell>
                                                                );
                                                            case 'unit':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap"
                                                                    >
                                                                        {orderItem.unit}
                                                                    </TableCell>
                                                                );
                                                            case 'quantity':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap"
                                                                    >
                                                                        {orderItem[column.id]}
                                                                    </TableCell>
                                                                );
                                                            case 'discountTotal':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap"
                                                                    >
                                                                        {orderItem.total?.value
                                                                            ? (orderItem.discountTotal?.value || 0) /
                                                                              orderItem.total?.value
                                                                            : 0}
                                                                        %
                                                                    </TableCell>
                                                                );
                                                            case 'price':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap"
                                                                    >
                                                                        <Price price={orderItem[column.id]} />
                                                                    </TableCell>
                                                                );
                                                            case 'total':
                                                                return (
                                                                    <TableCell
                                                                        key={column.id}
                                                                        className="whitespace-nowrap text-right"
                                                                    >
                                                                        <Price price={orderItem[column.id]} />
                                                                    </TableCell>
                                                                );
                                                            default:
                                                                return null;
                                                        }
                                                    })}
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>

                                    {data.productList.pagination && (
                                        <Pagination
                                            disabled={isPending}
                                            total={data.productList.products.total}
                                            offset={filters.offset || 0}
                                            limit={data.productList.pagination.limit}
                                            legend={data.productList.pagination.legend}
                                            prev={data.productList.pagination.prev}
                                            next={data.productList.pagination.next}
                                            selectPage={data.productList.pagination.selectPage}
                                            onChange={(page) => {
                                                handleFilter({
                                                    ...filters,
                                                    offset: data.productList.pagination!.limit * (page - 1),
                                                });
                                            }}
                                        />
                                    )}
                                </div>
                            ) : (
                                <div className="w-full flex flex-col gap-12 mt-6">
                                    <NoResults
                                        title={data.productList.noResults?.title || ''}
                                        description={data.productList.noResults?.description}
                                    />

                                    <Separator />
                                </div>
                            )}
                        </LoadingOverlay>
                    </div>
                ) : (
                    <div className="w-full flex flex-col gap-12 mt-6">
                        <NoResults
                            title={data.productList.noResults?.title || ''}
                            description={data.productList.noResults?.description}
                        />

                        <Separator />
                    </div>
                )}
            </div>
        </div>
    );
};
