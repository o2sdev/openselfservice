'use client';

import Image from 'next/image';

import { Link } from '@o2s/ui/components/link';

import { Link as NextLink } from '@/i18n';

import { LocaleSwitcher } from '../Auth/Toolbar/LocaleSwitcher';

import { ContextSwitcher } from './ContextSwitcher/ContextSwitcher';
import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { HeaderProps } from './Header.types';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { NotificationInfo } from './NotificationInfo/NotificationInfo';
import { UserInfo } from './UserInfo/UserInfo';

export const Header = ({ headerData, alternativeUrls, children, user }: HeaderProps) => {
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

    const UserSlot = () => headerData.userInfo && <UserInfo user={user} userInfo={headerData.userInfo} />;

    const NotificationSlot = () => {
        if (!headerData.notification?.url || !headerData.notification?.label) {
            return null;
        }

        return <NotificationInfo data={{ url: headerData.notification.url, label: headerData.notification.label }} />;
    };

    const LocaleSlot = () => (
        <LocaleSwitcher alternativeUrls={alternativeUrls} label={headerData.languageSwitcherLabel ?? 'Language'} />
    );

    const ContextSwitchSlot = () =>
        headerData.contextSwitcher && <ContextSwitcher context={headerData.contextSwitcher} />;

    return (
        <header className="flex flex-col gap-4 mb-6">
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
                    />
                </div>
            </>
            {children}
        </header>
    );
};
