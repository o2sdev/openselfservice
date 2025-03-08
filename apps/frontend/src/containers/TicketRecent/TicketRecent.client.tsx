import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@o2s/ui/components/avatar';
import { Card, CardContent, CardHeader } from '@o2s/ui/components/card';
import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { RichText } from '@/components/RichText/RichText';

import { TicketRecentPureProps } from './TicketRecent.types';

export const TicketRecentPure: React.FC<TicketRecentPureProps> = ({ ...component }) => {
    const { title, tickets, noResults, details } = component;

    function extractFirst(content: string) {
        const match = content.match(/<p>(.*?)<\/p>/);
        const extractedContent = match ? match[1] : content;
        return extractedContent?.slice(0, 90) + '...';
    }

    return (
        <div className="w-full flex flex-col gap-4">
            <Card>
                <CardHeader>
                    <Typography variant="subtitle">{title}</Typography>
                </CardHeader>
                <CardContent>
                    {tickets?.data.length ? (
                        <ul className="flex flex-col">
                            {tickets.data.map((ticket) => {
                                const comment = ticket.comments?.items?.[0];

                                return (
                                    <li key={ticket.id.value} className="p-2 border-t">
                                        {!!ticket.comments?.items?.length && (
                                            <div className="flex flex-col gap-6">
                                                {comment && (
                                                    <div className="flex flex-row gap-6 items-center">
                                                        <div className="basis-1/3">
                                                            <div className="flex items-center gap-2">
                                                                <Avatar>
                                                                    <AvatarImage src={comment.author.avatar} />
                                                                    <AvatarFallback>
                                                                        {comment.author.initials}
                                                                    </AvatarFallback>
                                                                </Avatar>
                                                                <div className="flex flex-col gap-1">
                                                                    <Typography variant="small">
                                                                        {comment.author.name}
                                                                    </Typography>
                                                                    <Typography
                                                                        variant="small"
                                                                        className="text-muted-foreground"
                                                                    >
                                                                        {comment.date}
                                                                    </Typography>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="basis-2/3">
                                                            <RichText
                                                                content={extractFirst(comment.content)}
                                                                baseFontSize="small"
                                                            />

                                                            <Link asChild>
                                                                <NextLink
                                                                    href={ticket.detailsUrl}
                                                                    className="flex items-center justify-end gap-2"
                                                                >
                                                                    {details}
                                                                    <ArrowRight className="h-4 w-4" />
                                                                </NextLink>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    ) : (
                        <Typography variant="highlightedSmall">{noResults}</Typography>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};
