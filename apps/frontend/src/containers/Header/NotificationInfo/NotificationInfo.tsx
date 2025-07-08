import { Bell } from 'lucide-react';

import { BadgeStatus } from '@o2s/ui/elements/badge-status';
import { Button } from '@o2s/ui/elements/button';

import { Link as NextLink } from '@/i18n';

import { NotificationInfoProps } from './NotificationInfo.types';

export const NotificationInfo = ({ data }: NotificationInfoProps) => {
    return (
        <Button asChild variant="tertiary" className="w-10 h-10" aria-label={data.label}>
            <NextLink href={data.url}>
                <div className="relative">
                    <Bell className="w-4 h-4" />
                    <BadgeStatus variant="default" className="absolute -top-1 -right-1" />
                </div>
            </NextLink>
        </Button>
    );
};
