'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { Button } from '@o2s/ui/components/button';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { InfoCard } from '@/components/Cards/InfoCard/InfoCard';
import { DynamicIcon } from '@/components/DynamicIcon/DynamicIcon';
import { Price } from '@/components/Price/Price';
import { RichText } from '@/components/RichText/RichText';
import { TooltipHover } from '@/components/TooltipHover/TooltipHover';

import { PaymentsSummaryPureProps } from './PaymentsSummary.types';

export const PaymentsSummaryPure: React.FC<PaymentsSummaryPureProps> = ({ ...component }) => {
    const { overdue, toBePaid } = component;

    const t = useTranslations();

    return (
        <div className="w-full flex flex-col gap-6">
            <InfoCard
                title={overdue.title}
                value={
                    <Typography variant="highlightedBig" className={cn(overdue.isOverdue && 'text-destructive')}>
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
                    overdue.isOverdue
                        ? overdue.icon && <DynamicIcon name={overdue.icon} className="text-destructive" />
                        : overdue.icon
                }
                button={
                    overdue.link && (
                        <TooltipHover
                            trigger={(setIsOpen) => (
                                <Button
                                    variant={overdue.isOverdue ? 'destructive' : 'secondary'}
                                    size="sm"
                                    onClick={() => setIsOpen(true)}
                                    className="flex items-center gap-2 w-full"
                                >
                                    {overdue.link?.icon && <DynamicIcon name={overdue.link.icon} size={16} />}
                                    {overdue.link?.label}
                                </Button>
                            )}
                            content={<p>{t('general.comingSoon')}</p>}
                        />
                    )
                }
            />

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
                                    {toBePaid.link?.icon && <DynamicIcon name={toBePaid.link.icon} size={16} />}
                                    {toBePaid.link?.label}
                                </Button>
                            )}
                            content={<p>{t('general.comingSoon')}</p>}
                        />
                    )
                }
            />
        </div>
    );
};
