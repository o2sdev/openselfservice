import { Bell } from 'lucide-react';

import { BadgeStatus } from '@o2s/ui/components/badge-status';
import { Link } from '@o2s/ui/components/link';

import { Link as NextLink } from '@/i18n';

import { NotificationInfoProps } from './NotificationInfo.types';

export const NotificationInfo = ({ data }: NotificationInfoProps) => {
    return (
        <div className="relative">
            <Link asChild>
                <NextLink
                    href={data.url}
                    aria-label={data.label}
                    className="no-underline hover:no-underline w-10 h-10 bg-[hsl(var(--navbar-primary))] !text-[hsl(var(--navbar-primary-foreground))] hover:bg-[hsl(var(--navbar-primary))]/90"
                >
                    <Bell className="w-4 h-4" />
                </NextLink>
            </Link>
            <BadgeStatus variant="default" className="absolute -top-1 -right-1" />
        </div>
    );
};
