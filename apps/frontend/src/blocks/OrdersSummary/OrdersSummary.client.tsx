'use client';

import { Blocks } from '@o2s/api-harmonization';
import dayjs from 'dayjs';
import { Coins, Package, ShoppingCart } from 'lucide-react';
import { useLocale } from 'next-intl';
import React, { useState, useTransition } from 'react';

import { Models } from '@o2s/framework/modules';

import { Card } from '@o2s/ui/components/card';
import { LoadingOverlay } from '@o2s/ui/components/loading-overlay';
import { ToggleGroup, ToggleGroupItem } from '@o2s/ui/components/toggle-group';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { sdk } from '@/api/sdk';

import { DoubleLineChart } from '@/components/Chart/DoubleLineChart/DoubleLineChart';
import { Price } from '@/components/Price/Price';

import { OrdersSummaryPureProps } from './OrdersSummary.types';

const Trend: React.FC<Readonly<{ value?: number }>> = ({ value }) => {
    const locale = useLocale();

    if (!value) {
        return null;
    }

    return (
        <div className="flex flex-row gap-2 items-center">
            <Typography
                className={cn({
                    'text-chart-1': value > 0,
                    'text-destructive': value < 0,
                })}
            >
                {value > 0 && '+'}
                {value < 0 && '-'}{' '}
                {Math.abs(value).toLocaleString(locale, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%
            </Typography>
        </div>
    );
};

const StatCard: React.FC<
    Readonly<{
        title: string;
        value?: number | Models.Price.Price;
        trend?: number;
        icon?: React.ReactNode;
    }>
> = ({ title, value, trend, icon }) => {
    return (
        <Card className="h-full w-full">
            <div className="p-6 flex flex-col gap-3">
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="subtitle">{title}</Typography>
                    {icon}
                </div>
                <Typography variant="highlightedBig">
                    {typeof value !== 'number' ? <Price price={value} /> : value}
                </Typography>
                <Trend value={trend} />
            </div>
        </Card>
    );
};

export const OrdersSummaryPure: React.FC<Readonly<OrdersSummaryPureProps>> = ({
    locale,
    accessToken,
    ...component
}) => {
    const initialFilters: Blocks.OrdersSummary.Request.GetOrdersSummaryBlockQuery = {
        id: component.id,
        dateFrom: dayjs().subtract(6, 'months').toISOString(),
        dateTo: dayjs().toISOString(),
        range: 'month',
    };

    const [data, setData] = useState<Blocks.OrdersSummary.Model.OrdersSummaryBlock>(component);
    const [range, setRange] = useState(component.ranges?.find((range) => range.isDefault));
    const [filters, setFilters] = useState(initialFilters);

    const [isPending, startTransition] = useTransition();

    const handleFilter = (value: string) => {
        startTransition(async () => {
            let dateFrom: string;
            const dateTo = dayjs().toISOString();

            const parts = value.split('-');
            const range = Number(parts[0]!);
            const type = parts[1]! as Blocks.OrdersSummary.Request.GetOrdersSummaryBlockQuery['range'];

            switch (type) {
                case 'day':
                    dateFrom = dayjs().subtract(range, 'days').toISOString();
                    break;
                case 'week':
                    dateFrom = dayjs().subtract(range, 'days').toISOString();
                    break;
                default:
                    dateFrom = dayjs().subtract(range, 'months').toISOString();
                    break;
            }

            const newFilters = { ...filters, dateFrom, dateTo, range: type };
            const newData = await sdk.blocks.getOrdersSummary(newFilters, { 'x-locale': locale }, accessToken);
            setFilters(newFilters);
            setData(newData);

            if (component.ranges) {
                setRange(component.ranges.find((item) => item.value === range && item.type === type)!);
            }
        });
    };

    return (
        <div className="w-full">
            <LoadingOverlay isActive={isPending}>
                <div className="w-full flex flex-col gap-8">
                    <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
                        <div className="flex flex-col gap-2">
                            {data.title && <Typography variant="h2">{data.title}</Typography>}
                            {data.subtitle && <Typography>{data.subtitle}</Typography>}
                        </div>
                        {component.ranges && range && (
                            <div className="flex gap-2 items-end">
                                <ToggleGroup
                                    type="single"
                                    value={`${range.value}-${range.type}`}
                                    variant="outline"
                                    onValueChange={handleFilter}
                                >
                                    {component.ranges.map((range) => (
                                        <ToggleGroupItem key={range.value} value={`${range.value}-${range.type}`}>
                                            {range.label}
                                        </ToggleGroupItem>
                                    ))}
                                </ToggleGroup>
                            </div>
                        )}
                    </div>

                    <div className="w-full flex flex-col lg:flex-row gap-6">
                        <div className="w-full flex flex-col gap-6">
                            <StatCard
                                title={data.totalValue.title}
                                value={data.totalValue.value}
                                trend={data.totalValue.trend}
                                icon={<Coins size={24} />}
                            />

                            <div className="w-full flex flex-col sm:flex-row gap-6">
                                <StatCard
                                    title={data.averageValue.title}
                                    value={data.averageValue.value}
                                    trend={data.averageValue.trend}
                                    icon={<ShoppingCart size={24} />}
                                />
                                <StatCard
                                    title={data.averageNumber.title}
                                    value={data.averageNumber.value}
                                    trend={data.averageNumber.trend}
                                    icon={<Package size={24} />}
                                />
                            </div>
                        </div>

                        <Card className="h-full w-full">
                            <div className="p-6 flex flex-col gap-6">
                                <Typography variant="subtitle">{data.chart.title}</Typography>

                                <DoubleLineChart
                                    chartData={data.chart.data}
                                    legend={data.chart.legend}
                                    tooltipType="number"
                                />
                            </div>
                        </Card>
                    </div>
                </div>
            </LoadingOverlay>
        </div>
    );
};
