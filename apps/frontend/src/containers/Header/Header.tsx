'use client';

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

import { Link } from '@o2s/ui/components/link';

import { Link as NextLink } from '@/i18n';

import { LocaleSwitcher } from '../Auth/Toolbar/LocaleSwitcher';

import { ContextSwitcher } from './ContextSwitcher/ContextSwitcher';
import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { HeaderProps } from './Header.types';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { NotificationInfo } from './NotificationInfo/NotificationInfo';
import { UserInfo } from './UserInfo/UserInfo';

export const Header: React.FC<HeaderProps> = ({ headerData, children }) => {
    const session = useSession();
    const isSignedIn = session?.status === 'authenticated';

    const LogoSlot = (
        <Link asChild>
            <NextLink href="/" aria-label={headerData.logo?.name}>
                {headerData.logo?.url && (
                    <Image
                        src={headerData.logo.url}
                        alt={headerData.logo.alternativeText ?? ''}
                        width={headerData.logo.width}
                        height={headerData.logo.height}
                    />
                )}
            </NextLink>
        </Link>
    );

    const UserSlot = () => {
        if (!isSignedIn || !headerData.userInfo) {
            return undefined;
        }

        return <UserInfo user={session?.data?.user} userInfo={headerData.userInfo} />;
    };

    const NotificationSlot = () => {
        if (!isSignedIn || !headerData.notification?.url || !headerData.notification?.label) {
            return null;
        }

        return <NotificationInfo data={{ url: headerData.notification.url, label: headerData.notification.label }} />;
    };

    const LocaleSlot = () => {
        return <LocaleSwitcher label={headerData.languageSwitcherLabel ?? 'Language'} />;
    };

    const ContextSwitchSlot = () =>
        isSignedIn && headerData.contextSwitcher && <ContextSwitcher context={headerData.contextSwitcher} />;

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
                        items={headerData.items}
                    />
                </div>
                <div className="md:hidden">
                    <MobileNavigation
                        logoSlot={LogoSlot}
                        contextSlot={<ContextSwitchSlot />}
                        localeSlot={<LocaleSlot />}
                        notificationSlot={<NotificationSlot />}
                        userSlot={<UserSlot />}
                        items={headerData.items}
                        title={headerData.title}
                        mobileMenuLabel={headerData.mobileMenuLabel}
                    />
                </div>
            </>
            {children}
        </header>
    );
};
