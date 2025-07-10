import React from 'react';

import { Container } from '@o2s/ui/components/Container';
import { RichText } from '@o2s/ui/components/RichText';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@o2s/ui/elements/accordion';
import { Button } from '@o2s/ui/elements/button';
import { Typography } from '@o2s/ui/elements/typography';

import { FaqPureProps } from './Faq.types';

export const FaqPure: React.FC<FaqPureProps> = ({ sdk, LinkComponent, ...component }) => {
    const { title, subtitle, items, banner } = component;

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
                            <Button asChild aria-label={banner.button.label}>
                                <LinkComponent href={banner?.button?.url}>{banner.button.label}</LinkComponent>
                            </Button>
                        )}
                    </div>
                )}
            </div>
        </Container>
    );
};
