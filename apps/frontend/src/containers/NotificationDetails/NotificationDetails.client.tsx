'use client';

import React, { useEffect } from 'react';

import { Badge } from '@o2s/ui/components/badge';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { sdk } from '@/api/sdk';

import { notificationBadgePriorityVariants } from '@/utils/mappings/notification-badge';

import { Container } from '@/components/Container/Container';
import { RichText } from '@/components/RichText/RichText';

import { NotificationDetailsPureProps } from './NotificationDetails.types';

export const NotificationDetailsPure: React.FC<NotificationDetailsPureProps> = ({ locale, ...component }) => {
    const { data: notification } = component;

    useEffect(() => {
        const markAsViewed = async () => {
            await sdk.components.markNotificationAs(
                {
                    id: component.id,
                    status: 'VIEWED',
                },
                { 'x-locale': locale },
                component.accessToken,
            );
        };

        if (notification.status.value === 'UNVIEWED') {
            markAsViewed();
        }
    }, [component.accessToken, component.id, locale, notification.status.value]);

    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 flex-wrap">
                        <Typography variant="h1" asChild>
                            <h1>{notification.title.value}</h1>
                        </Typography>

                        <div>
                            <Badge variant={notificationBadgePriorityVariants[notification.priority.value]}>
                                {notification.priority.label}
                            </Badge>
                        </div>
                    </div>
                    <Typography variant="body" className="text-muted-foreground">
                        {notification.createdAt}
                    </Typography>
                </div>

                <Separator />

                <div className="flex flex-col gap-6">
                    <Container variant="narrow">
                        <RichText content={notification.content.value} />
                    </Container>

                    <Separator />
                </div>
            </div>
        </div>
    );
};
