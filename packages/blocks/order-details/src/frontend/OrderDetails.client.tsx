'use client';

import { useTranslations } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import Image from 'next/image';
import React, { useState, useTransition } from 'react';

import { Mappings } from '@o2s/utils.frontend';

import { Orders } from '@o2s/framework/modules';

import { cn } from '@o2s/ui/lib/utils';

import { ActionList } from '@o2s/ui/components/ActionList';
import { InfoCard } from '@o2s/ui/components/Cards/InfoCard';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { FiltersSection } from '@o2s/ui/components/Filters';
import { NoResults } from '@o2s/ui/components/NoResults';
import { Pagination } from '@o2s/ui/components/Pagination';
import { Price } from '@o2s/ui/components/Price';
import { RichText } from '@o2s/ui/components/RichText';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Badge } from '@o2s/ui/elements/badge';
import { Button } from '@o2s/ui/elements/button';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { Progress } from '@o2s/ui/elements/progress';
import { Separator } from '@o2s/ui/elements/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@o2s/ui/elements/sheet';
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from '@o2s/ui/elements/table';
import { Table } from '@o2s/ui/elements/table';
import { Typography } from '@o2s/ui/elements/typography';

import { Model, Request } from '../api-harmonization/order-details.client';
import { sdk } from '../sdk';

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
    const value = Mappings.StatusOrder.statusMap.find((item) => item.id === currentStatus.value)?.value || 0;
    const badge = Mappings.StatusOrder.statusMap.find((item) => item.id === currentStatus.value)?.badge || 'outline';
    const previousStatuses = statusLadder?.slice(0, -1);
    const lastStatus = statusLadder?.slice(-1);

    return (
        <div className="w-full flex flex-row sm:flex-col gap-4">
            <Progress value={value} orientation="vertical" className="w-2 sm:hidden" />
            <Progress value={value} orientation="horizontal" className="h-2 hidden sm:block" />
            <ul className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                {previousStatuses?.map((status) => (
                    <li key={status}>
                        <Badge variant="outline" className="line-through text-center">
                            {status}
                        </Badge>
                    </li>
                ))}
                {value === 75 && (
                    <li>
                        <Badge variant={badge} className="text-center">
                            {currentStatus.label}
                        </Badge>
                    </li>
                )}
                {value === 100 ? (
                    <li>
                        <Badge
                            variant={Mappings.OrderBadge.orderBadgeVariants[currentStatus.value]}
                            className="text-center"
                        >
                            {currentStatus.label}
                        </Badge>
                    </li>
                ) : (
                    <li>
                        <Badge variant="outline" className="text-center">
                            {lastStatus}
                        </Badge>
                    </li>
                )}
            </ul>
        </div>
    );
};

export const OrderDetailsPure: React.FC<Readonly<OrderDetailsPureProps>> = ({
    locale,
    accessToken,
    orderId,
    routing,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const initialFilters: Request.GetOrderDetailsBlockQuery = {
        id: component.id,
        offset: 0,
        limit: 5,
    };

    const initialData = component.productList.products.data;
    const data = component;

    const [items, setItems] = useState<Model.OrderDetailsBlock['productList']['products']['data']>(initialData);
    const [filters, setFilters] = useState(initialFilters);

    const [isPending, startTransition] = useTransition();

    const handleFilter = (data: Partial<any>) => {
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

    const buttons = [
        {
            label: data.payOnlineLabel,
            icon: 'ArrowUpRight',
        },
        {
            label: data.reorderLabel,
            icon: 'IterationCw',
        },
        {
            label: data.trackOrderLabel,
            icon: 'Truck',
        },
    ];

    const actions = data.order.overdue.isOverdue ? buttons : buttons.slice(1);

    const t = useTranslations();

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 lg:gap-16 flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                        <Typography variant="h1" asChild>
                            <div className="flex flex-row gap-2">
                                <h1>{data.order.id.value}</h1>
                            </div>
                        </Typography>

                        {data.order.status.value && (
                            <Badge
                                variant={Mappings.OrderBadge.orderBadgeVariants[data.order.status.value]}
                                className="w-fit"
                            >
                                {data.order.status.label}
                            </Badge>
                        )}
                    </div>
                    <div className="flex flex-row justify-end">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center w-full sm:w-auto">
                            <ActionList
                                visibleActions={[
                                    <TooltipHover
                                        key={actions[0]?.label}
                                        trigger={(setIsOpen) => (
                                            <Button
                                                variant={data.order.overdue.isOverdue ? 'destructive' : 'default'}
                                                onClick={() => setIsOpen(true)}
                                            >
                                                {actions[0]?.icon && <DynamicIcon name={actions[0].icon} size={16} />}
                                                {actions[0]?.label}
                                            </Button>
                                        )}
                                        content={<p>{t('general.comingSoon')}</p>}
                                    />,
                                    <TooltipHover
                                        key={actions[1]?.label}
                                        trigger={(setIsOpen) => (
                                            <Button variant={'secondary'} onClick={() => setIsOpen(true)}>
                                                {actions[1]?.icon && <DynamicIcon name={actions[1].icon} size={16} />}
                                                {actions[1]?.label}
                                            </Button>
                                        )}
                                        content={<p>{t('general.comingSoon')}</p>}
                                    />,
                                ]}
                                dropdownActions={actions.slice(2).map((action) => (
                                    <TooltipHover
                                        key={action.label}
                                        trigger={(setIsOpen) => (
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                disabled
                                                className="w-full justify-start h-8"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                {action.icon && <DynamicIcon name={action.icon} size={16} />}
                                                {action.label}
                                            </Button>
                                        )}
                                        content={<p>{t('general.comingSoon')}</p>}
                                    />
                                ))}
                                showMoreLabel={data.labels.showMore}
                            />
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-6 mb-6">
                    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-6">
                        <div className="w-full flex flex-col md:flex-row gap-6">
                            <InfoCard
                                title={data.order.subtotal.title}
                                icon={data.order.subtotal.icon}
                                value={
                                    <Typography variant="highlightedBig">
                                        <Price price={data.order.subtotal.value} />
                                    </Typography>
                                }
                                description={data.order.subtotal.description}
                            />

                            <InfoCard
                                title={data.order.createdAt.title}
                                icon={data.order.createdAt.icon}
                                value={data.order.createdAt.label}
                                description={data.order.createdAt.description}
                            />
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-6">
                            <InfoCard
                                title={data.order.paymentDueDate.title}
                                icon={data.order.paymentDueDate.icon}
                                value={data.order.paymentDueDate.label}
                                description={data.order.paymentDueDate.description}
                            />

                            <InfoCard
                                title={data.order.overdue.title}
                                icon={
                                    data.order.overdue.isOverdue ? (
                                        <DynamicIcon name="CircleAlert" className="text-destructive" />
                                    ) : (
                                        data.order.overdue.icon
                                    )
                                }
                                value={
                                    <Typography
                                        className={cn(data.order.overdue.isOverdue && 'text-destructive')}
                                        variant="highlightedBig"
                                    >
                                        <Price price={data.order.overdue.value} />
                                    </Typography>
                                }
                                description={
                                    <div className="line-clamp-3">
                                        <RichText
                                            content={data.order.overdue.description}
                                            className={cn(
                                                data.order.overdue.isOverdue
                                                    ? 'text-destructive'
                                                    : 'text-muted-foreground',
                                            )}
                                        />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <InfoCard
                            title={data.order.status.title}
                            icon={data.order.status.icon}
                            description={
                                <ProgressBar
                                    currentStatus={data.order.status}
                                    statusLadder={data.order.status.statusLadder}
                                />
                            }
                        />
                        <InfoCard
                            title={data.order.customerComment.title}
                            icon={data.order.customerComment.icon}
                            description={data.order.customerComment.value}
                            button={
                                data.order.customerComment.value && (
                                    <Sheet>
                                        <SheetTrigger asChild>
                                            <Button variant="secondary">
                                                {data.order.customerComment.link.icon && (
                                                    <DynamicIcon
                                                        name={data.order.customerComment.link.icon}
                                                        size={16}
                                                    />
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
                                )
                            }
                        />
                    </div>
                </div>

                {initialData.length > 0 ? (
                    <div className="flex flex-col gap-6">
                        <FiltersSection
                            title={data.productList.title}
                            initialFilters={initialFilters}
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
                                                        case 'subtotal':
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
                                                                                    orderItem.product?.image?.alt && (
                                                                                        <Image
                                                                                            src={
                                                                                                orderItem.product?.image
                                                                                                    ?.url
                                                                                            }
                                                                                            alt={
                                                                                                orderItem.product?.image
                                                                                                    ?.alt
                                                                                            }
                                                                                            fill
                                                                                            sizes="40px"
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
                                                                            <LinkComponent
                                                                                href={orderItem.product?.link || ''}
                                                                            >
                                                                                {orderItem.product?.name}
                                                                            </LinkComponent>
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
                                                                        {orderItem.subtotal?.value
                                                                            ? (orderItem.discountTotal?.value || 0) /
                                                                              orderItem.subtotal?.value
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
                                                            case 'subtotal':
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
