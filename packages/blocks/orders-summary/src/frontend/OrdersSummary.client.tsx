'use client';

import dayjs from 'dayjs';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import React, { useState, useTransition } from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { InfoCard } from '@o2s/ui/components/Cards/InfoCard';
import { Price } from '@o2s/ui/components/Price';

import { Card } from '@o2s/ui/elements/card';
import { LoadingOverlay } from '@o2s/ui/elements/loading-overlay';
import { ToggleGroup, ToggleGroupItem } from '@o2s/ui/elements/toggle-group';
import { Typography } from '@o2s/ui/elements/typography';

import { Model, Request } from '../api-harmonization/orders-summary.client';
import { sdk } from '../sdk';

import { OrdersSummaryPureProps } from './OrdersSummary.types';

const DoubleLineChart = dynamic(
    () => import('@o2s/ui/components/Chart/DoubleLineChart').then((module) => module.DoubleLineChart),
    {},
);

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

export const OrdersSummaryPure: React.FC<Readonly<OrdersSummaryPureProps>> = ({
    locale,
    accessToken,
    ...component
}) => {
    const initialFilters: Request.GetOrdersSummaryBlockQuery = {
        id: component.id,
        dateFrom: dayjs().subtract(6, 'months').toISOString(),
        dateTo: dayjs().toISOString(),
        range: 'month',
    };

    const [data, setData] = useState<Model.OrdersSummaryBlock>(component);
    const [range, setRange] = useState(component.ranges?.find((range) => range.isDefault));
    const [filters, setFilters] = useState(initialFilters);

    const [isPending, startTransition] = useTransition();

    const cardsLayout = component.layout === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col';

    const handleFilter = (value: string) => {
        startTransition(async () => {
            let dateFrom: string;
            const dateTo = dayjs().toISOString();

            const parts = value.split('-');
            const range = Number(parts[0]!);
            const type = parts[1]! as Request.GetOrdersSummaryBlockQuery['range'];

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
                                        <ToggleGroupItem
                                            key={range.value}
                                            value={`${range.value}-${range.type}`}
                                            activeIcon={<Check className="h-4 w-4" />}
                                        >
                                            {range.label}
                                        </ToggleGroupItem>
                                    ))}
                                </ToggleGroup>
                            </div>
                        )}
                    </div>

                    <div
                        className={cn('w-full flex gap-6', data.chart.showChart ? 'flex-col lg:flex-row' : 'flex-col')}
                    >
                        {data.chart.showChart ? (
                            <>
                                <div className={cn('w-full flex gap-6', cardsLayout)}>
                                    <InfoCard
                                        title={data.totalValue.title}
                                        value={
                                            <Typography variant="highlightedBig">
                                                <Price price={data.totalValue.value} />
                                            </Typography>
                                        }
                                        description={<Trend value={data.totalValue.trend} />}
                                        icon={data.totalValue.icon}
                                    />

                                    <div className="w-full flex flex-col sm:flex-row gap-6">
                                        <InfoCard
                                            title={data.averageValue.title}
                                            value={
                                                <Typography variant="highlightedBig">
                                                    <Price price={data.averageValue.value} />
                                                </Typography>
                                            }
                                            description={<Trend value={data.averageValue.trend} />}
                                            icon={data.averageValue.icon}
                                        />
                                        <InfoCard
                                            title={data.averageNumber.title}
                                            value={
                                                <Typography variant="highlightedBig">
                                                    {data.averageNumber.value}
                                                </Typography>
                                            }
                                            description={<Trend value={data.averageNumber.trend} />}
                                            icon={data.averageNumber.icon}
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
                            </>
                        ) : (
                            <div className={cn('w-full flex gap-6', cardsLayout)}>
                                <InfoCard
                                    title={data.totalValue.title}
                                    value={
                                        <Typography variant="highlightedBig">
                                            <Price price={data.totalValue.value} />
                                        </Typography>
                                    }
                                    description={<Trend value={data.totalValue.trend} />}
                                    icon={data.totalValue.icon}
                                />
                                <InfoCard
                                    title={data.averageValue.title}
                                    value={
                                        <Typography variant="highlightedBig">
                                            <Price price={data.averageValue.value} />
                                        </Typography>
                                    }
                                    description={<Trend value={data.averageValue.trend} />}
                                    icon={data.averageValue.icon}
                                />
                                <InfoCard
                                    title={data.averageNumber.title}
                                    value={<Typography variant="highlightedBig">{data.averageNumber.value}</Typography>}
                                    description={<Trend value={data.averageNumber.trend} />}
                                    icon={data.averageNumber.icon}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </LoadingOverlay>
        </div>
    );
};
