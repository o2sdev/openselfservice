'use client';

import { Download, Link as LinkIcon } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@o2s/ui/components/avatar';
import { Badge } from '@o2s/ui/components/badge';
import { Button } from '@o2s/ui/components/button';
import { Separator } from '@o2s/ui/components/separator';
import { TextItem } from '@o2s/ui/components/text-item';
import { Typography } from '@o2s/ui/components/typography';

import { ticketBadgeVariants } from '@/utils/mappings/ticket-badge';

import { Container } from '@/components/Container/Container';
import { RichText } from '@/components/RichText/RichText';

import { TicketDetailsPureProps } from './TicketDetails.types';

export const TicketDetailsPure: React.FC<TicketDetailsPureProps> = ({ ...component }) => {
    const { data: ticket } = component;

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row flex-wrap">
                    <Typography variant="h1" asChild>
                        <h1>{ticket.topic.label}</h1>
                    </Typography>

                    <div>
                        <Badge variant={ticketBadgeVariants[ticket.status.value]}>{ticket.status.label}</Badge>
                    </div>
                </div>

                <Separator />

                <div className="flex flex-col gap-4">
                    <Container variant="narrow">
                        <Typography variant="h2" asChild>
                            <h2>{ticket.properties.title}</h2>
                        </Typography>

                        <Separator className="mt-6" />

                        <ul className="flex flex-col">
                            <TextItem title={ticket.type.title} tag="li">
                                <RichText
                                    content={ticket.type.label}
                                    baseFontSize="small"
                                    className="text-muted-foreground"
                                />
                            </TextItem>

                            <TextItem title={ticket.id.title} tag="li">
                                <RichText
                                    content={ticket.id.label}
                                    baseFontSize="small"
                                    className="text-muted-foreground"
                                />
                            </TextItem>

                            {ticket.properties.items.map((property) => (
                                <TextItem key={property.id} title={property.label} tag="li">
                                    <RichText
                                        content={property.value}
                                        baseFontSize="small"
                                        className="text-muted-foreground"
                                    />
                                </TextItem>
                            ))}
                        </ul>
                    </Container>

                    <Separator />
                </div>

                {ticket.comments?.items?.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <Container variant="narrow">
                            <div className="flex flex-col gap-6">
                                <Typography variant="h2" asChild>
                                    <h2>{ticket.comments.title}</h2>
                                </Typography>

                                <div className="flex flex-col gap-12">
                                    {ticket.comments.items.map((comment, index) => (
                                        <div key={index} className="flex flex-col gap-4">
                                            <Separator />
                                            <div className="flex items-center gap-2">
                                                <Avatar>
                                                    <AvatarImage src={comment.author.avatar} />
                                                    <AvatarFallback>{comment.author.initials}</AvatarFallback>
                                                </Avatar>

                                                <div className="flex flex-col gap-1">
                                                    <Typography variant="subtitle">{comment.author.name}</Typography>
                                                    <Typography variant="small" className="text-muted-foreground">
                                                        {comment.date}
                                                    </Typography>
                                                </div>
                                            </div>

                                            <div>
                                                <RichText
                                                    content={comment.content}
                                                    baseFontSize="small"
                                                    className="text-muted-foreground"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>

                        <Separator />
                    </div>
                )}

                {ticket.attachments?.items?.length > 0 && (
                    <div className="flex flex-col gap-4">
                        <Container variant="narrow">
                            <div className="flex flex-col gap-6">
                                <Typography variant="h2" asChild>
                                    <h2>{ticket.attachments.title}</h2>
                                </Typography>

                                <div className="flex flex-col gap-12">
                                    {ticket.attachments.items.map((attachment, index) => (
                                        <div key={index} className="flex flex-col gap-4">
                                            <Separator />
                                            <div className="flex flex-col gap-2">
                                                <div className="flex items-center gap-2">
                                                    <Avatar>
                                                        <AvatarImage src={attachment.author.avatar} />
                                                        <AvatarFallback>{attachment.author.initials}</AvatarFallback>
                                                    </Avatar>

                                                    <div className="flex flex-col gap-1">
                                                        <Typography variant="subtitle">
                                                            {attachment.author.name}
                                                        </Typography>
                                                        <Typography variant="small" className="text-muted-foreground">
                                                            {attachment.date}
                                                        </Typography>
                                                    </div>
                                                </div>

                                                <div className="flex items-center py-2 px-4 gap-2 border rounded-lg shadow-sm">
                                                    <LinkIcon className="w-4 h-4" />

                                                    <div className="flex flex-col gap-1 flex-1">
                                                        <Typography variant="small" className="font-semibold">
                                                            {attachment.name}
                                                        </Typography>
                                                        <Typography variant="small" className="text-muted-foreground">
                                                            {attachment.size / 1024} mb
                                                        </Typography>
                                                    </div>
                                                    <Button
                                                        variant="outline"
                                                        size="icon"
                                                        className="shrink-0"
                                                        onClick={() => window.open(attachment.url, '_blank')}
                                                        aria-label={attachment.ariaLabel}
                                                    >
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Container>

                        <Separator />
                    </div>
                )}
            </div>
        </div>
    );
};
