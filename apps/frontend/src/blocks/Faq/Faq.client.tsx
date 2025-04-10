'use client';

import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@o2s/ui/components/accordion';
import { Button } from '@o2s/ui/components/button';
import { TooltipContent, TooltipTrigger } from '@o2s/ui/components/tooltip';
import { Tooltip } from '@o2s/ui/components/tooltip';
import { Typography } from '@o2s/ui/components/typography';

import { Container } from '@/components/Container/Container';
import { RichText } from '@/components/RichText/RichText';

import { FaqPureProps } from './Faq.types';

export const FaqPure: React.FC<FaqPureProps> = ({ ...component }) => {
    const { title, subtitle, items, banner } = component;

    const t = useTranslations();
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    return (
        <Container variant="narrow">
            <div className="w-full flex flex-col gap-6">
                {title && (
                    <div className="w-full flex flex-col gap-4">
                        <Typography variant="h2" asChild>
                            <h2>{title}</h2>
                        </Typography>

                        {subtitle && (
                            <Typography variant="body" className="text-muted-foreground">
                                {subtitle}
                            </Typography>
                        )}

                        {items && items?.length > 0 && (
                            <Accordion type="multiple">
                                {items.map((item, index) => (
                                    <AccordionItem key={index} value={`${index}`}>
                                        <AccordionTrigger>{item.title}</AccordionTrigger>
                                        <AccordionContent>
                                            <RichText content={item.content} className="text-muted-foreground" />
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        )}
                    </div>
                )}

                {banner?.title && (
                    <div className="flex flex-col p-6 bg-muted/60 rounded-lg gap-6 items-center">
                        <div className="flex flex-col gap-2 items-center">
                            <Typography variant="h2" asChild>
                                <h2 className="text-foreground">{banner?.title}</h2>
                            </Typography>
                            <RichText content={banner?.description} className="text-muted-foreground" />
                        </div>
                        {banner?.button && (
                            <Tooltip open={isTooltipOpen} onOpenChange={setIsTooltipOpen}>
                                <TooltipTrigger asChild>
                                    <Button key={banner?.button?.label} onClick={() => setIsTooltipOpen(true)}>
                                        {banner?.button?.label}
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{t('general.comingSoon')}</p>
                                </TooltipContent>
                            </Tooltip>
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
};
