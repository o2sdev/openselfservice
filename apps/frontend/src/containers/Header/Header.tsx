'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

import { Image } from '@o2s/ui/components/Image';

import { Link } from '@o2s/ui/elements/link';

import { Link as NextLink } from '@/i18n';

import { LocaleSwitcher } from '../Auth/Toolbar/LocaleSwitcher';
import { ContextSwitcher } from '../ContextSwitcher/ContextSwitcher';

import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { HeaderProps } from './Header.types';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { NotificationInfo } from './NotificationInfo/NotificationInfo';
import { UserInfo } from './UserInfo/UserInfo';

export const Header: React.FC<HeaderProps> = ({ data, alternativeUrls, children }) => {
    const session = useSession();
    const isSignedIn = !!session.data?.user;

    const LogoSlot = (
        <Link asChild>
            {/*TODO: get label from API*/}
            <NextLink href="/" aria-label={'go to home'}>
                {data.logo?.url && (
                    <Image src={data.logo.url} alt={data.logo.alt} width={data.logo.width} height={data.logo.height} />
                )}
            </NextLink>
        </Link>
    );

    const UserSlot = () => {
        if (!isSignedIn || !data.userInfo) {
            return undefined;
        }

        return <UserInfo user={session?.data?.user} userInfo={data.userInfo} />;
    };

    const NotificationSlot = () => {
        if (!isSignedIn || !data.notification?.url || !data.notification?.label) {
            return null;
        }

        return <NotificationInfo data={{ url: data.notification.url, label: data.notification.label }} />;
    };

    const LocaleSlot = () => {
        return <LocaleSwitcher label={data.languageSwitcherLabel} alternativeUrls={alternativeUrls} />;
    };

    const ContextSwitchSlot = () => isSignedIn && <ContextSwitcher data={data.contextSwitcher} />;

    return (
        <header className="flex flex-col gap-4">
            <>
                <div className="md:block hidden">
                    <DesktopNavigation
                        logoSlot={LogoSlot}
                        contextSlot={<ContextSwitchSlot />}
                        localeSlot={<LocaleSlot />}
                        notificationSlot={<NotificationSlot />}
                        userSlot={<UserSlot />}
                        items={data.items}
                    />
                </div>
                <div className="md:hidden">
                    <MobileNavigation
                        logoSlot={LogoSlot}
                        contextSlot={<ContextSwitchSlot />}
                        localeSlot={<LocaleSlot />}
                        notificationSlot={<NotificationSlot />}
                        userSlot={<UserSlot />}
                        items={data.items}
                        title={data.title}
                        mobileMenuLabel={data.mobileMenuLabel}
                    />
                </div>
            </>
            {children}
        </header>
    );
};
