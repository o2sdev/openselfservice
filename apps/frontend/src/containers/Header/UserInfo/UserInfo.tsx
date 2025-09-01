import { Avatar, AvatarFallback, AvatarImage } from '@o2s/ui/elements/avatar';
import { Link } from '@o2s/ui/elements/link';

import { Link as NextLink } from '@/i18n';

import { UserInfoProps } from './UserInfo.types';

export const UserInfo = ({ user, userInfo }: UserInfoProps) => {
    if (!user) {
        return null;
    }

    return (
        <Link className="no-underline hover:no-underline" aria-label={userInfo.label} asChild>
            <NextLink href={userInfo.url}>
                <Avatar>
                    <AvatarImage src={user.image || ''} />
                    <AvatarFallback name={user.name!} variant="secondary" />
                </Avatar>
            </NextLink>
        </Link>
    );
};
