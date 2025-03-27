'use client';

import { Repeat2, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Badge } from '@o2s/ui/components/badge';
import { Button } from '@o2s/ui/components/button';
import { Separator } from '@o2s/ui/components/separator';
import { TextItem } from '@o2s/ui/components/text-item';
import { Tooltip, TooltipContent, TooltipTrigger } from '@o2s/ui/components/tooltip';
import { Typography } from '@o2s/ui/components/typography';

import { statusBadgeVariants } from '@/utils/mappings/services-badge';

import { Container } from '@/components/Container/Container';
import { Price } from '@/components/Price/Price';
import { RichText } from '@/components/RichText/RichText';

import { ServiceDetailsPureProps } from './ServiceDetails.types';

export const ServiceDetailsPure: React.FC<ServiceDetailsPureProps> = ({ ...component }) => {
    const { data: service } = component;

    const t = useTranslations();
    const [isSettingsTooltipOpen, setIsSettingsTooltipOpen] = useState(false);
    const [isRenewTooltipOpen, setIsRenewTooltipOpen] = useState(false);

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex gap-4 sm:gap-16 flex-col sm:flex-row flex-wrap sm:flex-nowrap justify-between">
                    <div className="flex flex-col sm:flex-row gap-4 sm:items-start">
                        <Typography variant="h1" asChild>
                            <h1>{service.name}</h1>
                        </Typography>

                        <div>
                            <Badge variant={statusBadgeVariants[service.status.value]}>{service.status.label}</Badge>
                        </div>
                    </div>
                    <div className="flex flex-row sm:items-end">
                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center w-full sm:w-auto">
                            <Typography variant="highlightedSmall" className="whitespace-nowrap">
                                <Price price={service.price.value} />
                            </Typography>

                            <Tooltip open={isSettingsTooltipOpen} onOpenChange={setIsSettingsTooltipOpen}>
                                <TooltipTrigger asChild>
                                    <Button onClick={() => setIsSettingsTooltipOpen(true)}>
                                        <Settings className="w-4 h-4" />
                                        {service.labels.settings}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t('general.comingSoon')}</p>
                                </TooltipContent>
                            </Tooltip>

                            {service.status.value === 'INACTIVE' ||
                                (service.status.value === 'EXPIRED' && (
                                    <Tooltip open={isRenewTooltipOpen} onOpenChange={setIsRenewTooltipOpen}>
                                        <TooltipTrigger asChild>
                                            <Button variant="destructive" onClick={() => setIsRenewTooltipOpen(true)}>
                                                <Repeat2 className="w-4 h-4" />
                                                {service.labels.renew}
                                            </Button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{t('general.comingSoon')}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-4">
                    <Container variant="narrow">
                        <Typography variant="h2" asChild>
                            <h2>{service.details}</h2>
                        </Typography>

                        <Separator className="mt-6" />

                        <ul className="flex flex-col">
                            <TextItem title={service.type.title} tag="li">
                                <RichText
                                    content={service.type.label}
                                    baseFontSize="small"
                                    className="text-muted-foreground"
                                />
                            </TextItem>

                            <TextItem title={service.category.title} tag="li">
                                <Typography variant="small" className="text-muted-foreground">
                                    {service.category.label}
                                </Typography>
                            </TextItem>

                            <TextItem title={service.startDate.title} tag="li">
                                <Typography variant="small" className="text-muted-foreground">
                                    {service.startDate.value}
                                </Typography>
                            </TextItem>

                            <TextItem title={service.endDate.title} tag="li">
                                <Typography variant="small" className="text-muted-foreground">
                                    {service.endDate.value}
                                </Typography>
                            </TextItem>
                        </ul>
                    </Container>

                    <Separator />
                </div>

                <div className="flex flex-col gap-6">
                    <Container variant="narrow">
                        <RichText content={service.description} />
                    </Container>

                    <Separator />
                </div>
            </div>
        </div>
    );
};
