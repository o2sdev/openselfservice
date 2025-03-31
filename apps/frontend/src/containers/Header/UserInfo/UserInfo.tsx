import { Avatar, AvatarFallback, AvatarImage } from '@o2s/ui/components/avatar';
import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { UserInfoProps } from './UserInfo.types';

export const UserInfo = ({ user, userInfo }: UserInfoProps) => {
    if (!user) {
        return null;
    }

    return (
        <Link asChild>
            <NextLink href={userInfo.url} className="no-underline hover:no-underline" aria-label={userInfo.label}>
                <Avatar>
                    <AvatarImage src={user.image || ''} />
                    <AvatarFallback variant="secondary">
                        <Typography variant="small">
                            {user.name
                                ?.split(' ')
                                .map((name) => name.charAt(0).toUpperCase())
                                .join('')}
                        </Typography>
                    </AvatarFallback>
                </Avatar>
            </NextLink>
        </Link>
    );
};
