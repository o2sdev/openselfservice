'use client';

import { useSession } from 'next-auth/react';
import React, { useMemo } from 'react';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { Image } from '@o2s/ui/components/Media/Image';

import { Link } from '@o2s/ui/elements/link';

import { Link as NextLink } from '@/i18n';

import { LocaleSwitcher } from '../Auth/Toolbar/LocaleSwitcher';
import { ContextSwitcher } from '../ContextSwitcher/ContextSwitcher';

import { CartInfo } from './CartInfo/CartInfo';
import { DesktopNavigation } from './DesktopNavigation/DesktopNavigation';
import { HeaderProps } from './Header.types';
import { MobileNavigation } from './MobileNavigation/MobileNavigation';
import { NotificationInfo } from './NotificationInfo/NotificationInfo';
import { UserInfo } from './UserInfo/UserInfo';

export const Header: React.FC<HeaderProps> = ({
    data,
    alternativeUrls,
    children,
    shouldIncludeSignInButton = true,
}) => {
    const session = useSession();
    const isSignedIn = !!session.data?.user;

    const { themes } = useGlobalContext();

    const logo = useMemo(() => {
        if (themes.current) {
            return themes.available[themes.current]?.logo;
        }
        return data.logo;
    }, [themes, data.logo]);

    const LogoSlot = useMemo(
        () => (
            <Link asChild>
                {/*TODO: get label from API*/}
                <NextLink href="/" aria-label={'go to home'}>
                    {logo?.url && <Image src={logo.url} alt={logo.alt} width={logo.width} height={logo.height} />}
                </NextLink>
            </Link>
        ),
        [logo],
    );

    const UserSlot = useMemo(() => {
        if (!isSignedIn || !data.userInfo) {
            return undefined;
        }

        return <UserInfo user={session?.data?.user} userInfo={data.userInfo} />;
    }, [isSignedIn, data.userInfo, session.data]);

    const NotificationSlot = useMemo(() => {
        if (!isSignedIn || !data.notification?.url || !data.notification?.label) {
            return null;
        }

        return <NotificationInfo data={{ url: data.notification.url, label: data.notification.label }} />;
    }, [isSignedIn, data.notification]);

    const CartSlot = useMemo(() => {
        if (!data.cart?.url || !data.cart?.label) {
            return null;
        }

        return <CartInfo data={{ url: data.cart.url, label: data.cart.label }} />;
    }, [data.cart]);

    const LocaleSlot = useMemo(
        () => <LocaleSwitcher label={data.languageSwitcherLabel} alternativeUrls={alternativeUrls} />,
        [data.languageSwitcherLabel, alternativeUrls],
    );

    const ContextSwitchSlot = useMemo(
        () => (isSignedIn ? <ContextSwitcher data={data.contextSwitcher} /> : null),
        [isSignedIn, data.contextSwitcher],
    );

    return (
        <header className="flex flex-col gap-4">
            <>
                <div className="lg:block hidden">
                    <DesktopNavigation
                        logoSlot={LogoSlot}
                        contextSlot={ContextSwitchSlot}
                        localeSlot={LocaleSlot}
                        cartSlot={CartSlot}
                        notificationSlot={NotificationSlot}
                        userSlot={UserSlot}
                        items={data.items}
                        signInLabel={data.signInLabel}
                        shouldIncludeSignInButton={shouldIncludeSignInButton}
                    />
                </div>
                <div className="lg:hidden">
                    <MobileNavigation
                        logoSlot={LogoSlot}
                        contextSlot={ContextSwitchSlot}
                        localeSlot={LocaleSlot}
                        cartSlot={CartSlot}
                        notificationSlot={NotificationSlot}
                        userSlot={UserSlot}
                        items={data.items}
                        title={data.title}
                        mobileMenuLabel={data.mobileMenuLabel}
                        signInLabel={data.signInLabel}
                        shouldIncludeSignInButton={shouldIncludeSignInButton}
                    />
                </div>
            </>
            {children}
        </header>
    );
};
