'use client';

import { useTranslations } from 'next-intl';
import dynamic from 'next/dynamic';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { InfoCard } from '@o2s/ui/components/Cards/InfoCard';
import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';
import { RichText } from '@o2s/ui/components/RichText';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Button } from '@o2s/ui/elements/button';
import { Card } from '@o2s/ui/elements/card';
import { Typography } from '@o2s/ui/elements/typography';

import { PaymentsSummaryPureProps } from './PaymentsSummary.types';

const StackedBarChart = dynamic(() =>
    import('@o2s/ui/components/Chart/StackedBarChart').then((module) => module.StackedBarChart),
);

export const PaymentsSummaryPure: React.FC<PaymentsSummaryPureProps> = ({ routing, ...component }) => {
    const { overdue, toBePaid, layout, chart } = component;

    const t = useTranslations();

    // If navigation is needed, use createNavigation(routing) as in other blocks
    // const { Link: LinkComponent } = createNavigation(routing);

    if (!overdue && !toBePaid && !chart?.showChart) {
        return null;
    }

    const showChart = chart?.showChart ?? false;
    const cardsLayout = layout === 'horizontal' ? 'flex-col md:flex-row' : 'flex-col';

    return (
        <div className={cn('w-full flex gap-6', showChart ? 'flex-col lg:flex-row' : cardsLayout)}>
            {showChart ? (
                <>
                    <div className={cn('w-full flex gap-6', cardsLayout)}>
                        {overdue && (
                            <InfoCard
                                title={overdue.title}
                                value={
                                    <Typography
                                        variant="highlightedBig"
                                        className={cn(overdue.isOverdue && 'text-destructive')}
                                    >
                                        <Price price={overdue.value} />
                                    </Typography>
                                }
                                description={
                                    <div className="line-clamp-3">
                                        <RichText
                                            content={overdue.description}
                                            className={cn(
                                                overdue.isOverdue ? 'text-destructive' : 'text-muted-foreground',
                                            )}
                                        />
                                    </div>
                                }
                                icon={
                                    overdue.isOverdue ? (
                                        <DynamicIcon name="CircleAlert" className="text-destructive" />
                                    ) : (
                                        overdue.icon
                                    )
                                }
                                button={
                                    overdue.isOverdue &&
                                    overdue.link && (
                                        <TooltipHover
                                            trigger={(setIsOpen) => (
                                                <Button
                                                    variant={overdue.isOverdue ? 'destructive' : 'secondary'}
                                                    size="sm"
                                                    onClick={() => setIsOpen(true)}
                                                    className="flex items-center gap-2 w-full"
                                                >
                                                    {overdue.link?.icon && (
                                                        <DynamicIcon name={overdue.link.icon} size={16} />
                                                    )}
                                                    {overdue.link?.label}
                                                </Button>
                                            )}
                                            content={<p>{t('general.comingSoon')}</p>}
                                        />
                                    )
                                }
                            />
                        )}
                        {toBePaid && (
                            <InfoCard
                                title={toBePaid.title}
                                value={
                                    <Typography variant="highlightedBig">
                                        <Price price={toBePaid.value} />
                                    </Typography>
                                }
                                description={toBePaid.description}
                                icon={toBePaid.icon}
                                button={
                                    toBePaid.value.value > 0 &&
                                    toBePaid.link && (
                                        <TooltipHover
                                            trigger={(setIsOpen) => (
                                                <Button
                                                    variant={'secondary'}
                                                    size="sm"
                                                    onClick={() => setIsOpen(true)}
                                                    className="flex items-center gap-2 w-full"
                                                >
                                                    {toBePaid.link?.icon && (
                                                        <DynamicIcon name={toBePaid.link.icon} size={16} />
                                                    )}
                                                    {toBePaid.link?.label}
                                                </Button>
                                            )}
                                            content={<p>{t('general.comingSoon')}</p>}
                                        />
                                    )
                                }
                            />
                        )}
                    </div>
                    {chart && (
                        <Card className="h-full w-full">
                            <div className="p-6 flex flex-col gap-6">
                                {chart.title && <Typography variant="subtitle">{chart.title}</Typography>}
                                <StackedBarChart
                                    chartData={chart.chartData}
                                    labels={chart.labels}
                                    unit={component.currency}
                                />
                            </div>
                        </Card>
                    )}
                </>
            ) : (
                <>
                    {overdue && (
                        <InfoCard
                            title={overdue.title}
                            value={
                                <Typography
                                    variant="highlightedBig"
                                    className={cn(overdue.isOverdue && 'text-destructive')}
                                >
                                    <Price price={overdue.value} />
                                </Typography>
                            }
                            description={
                                <div className="line-clamp-3">
                                    <RichText
                                        content={overdue.description}
                                        className={cn(overdue.isOverdue ? 'text-destructive' : 'text-muted-foreground')}
                                    />
                                </div>
                            }
                            icon={
                                overdue.isOverdue ? (
                                    <DynamicIcon name="CircleAlert" className="text-destructive" />
                                ) : (
                                    overdue.icon
                                )
                            }
                            button={
                                overdue.isOverdue &&
                                overdue.link && (
                                    <TooltipHover
                                        trigger={(setIsOpen) => (
                                            <Button
                                                variant={overdue.isOverdue ? 'destructive' : 'secondary'}
                                                size="sm"
                                                onClick={() => setIsOpen(true)}
                                                className="flex items-center gap-2 w-full"
                                            >
                                                {overdue.link?.icon && (
                                                    <DynamicIcon name={overdue.link.icon} size={16} />
                                                )}
                                                {overdue.link?.label}
                                            </Button>
                                        )}
                                        content={<p>{t('general.comingSoon')}</p>}
                                    />
                                )
                            }
                        />
                    )}
                    {toBePaid && (
                        <InfoCard
                            title={toBePaid.title}
                            value={
                                <Typography variant="highlightedBig">
                                    <Price price={toBePaid.value} />
                                </Typography>
                            }
                            description={toBePaid.description}
                            icon={toBePaid.icon}
                            button={
                                toBePaid.value.value > 0 &&
                                toBePaid.link && (
                                    <TooltipHover
                                        trigger={(setIsOpen) => (
                                            <Button
                                                variant={'secondary'}
                                                size="sm"
                                                onClick={() => setIsOpen(true)}
                                                className="flex items-center gap-2 w-full"
                                            >
                                                {toBePaid.link?.icon && (
                                                    <DynamicIcon name={toBePaid.link.icon} size={16} />
                                                )}
                                                {toBePaid.link?.label}
                                            </Button>
                                        )}
                                        content={<p>{t('general.comingSoon')}</p>}
                                    />
                                )
                            }
                        />
                    )}
                </>
            )}
        </div>
    );
};
