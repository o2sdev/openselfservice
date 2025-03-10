'use client';

import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';

import { Models } from '@o2s/framework/modules';

import { Link } from '@o2s/ui/components/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@o2s/ui/components/navigation-menu';
import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { Link as NextLink, usePathname } from '@/i18n';

import { DesktopNavigationProps } from './DesktopNavigation.types';

export function DesktopNavigation({
    logoSlot,
    contextSlot,
    localeSlot,
    notificationSlot,
    userSlot,
    items,
}: DesktopNavigationProps) {
    const session = useSession();
    const isSignedIn = session?.status === 'authenticated';

    const pathname = usePathname();
    const locale = useLocale();

    const activeNavigationGroup =
        items.find((item) => {
            if (item.__typename === 'NavigationGroup') {
                return item.items
                    .filter((item) => item.__typename === 'NavigationItem')
                    .some((item) => item.url === pathname);
            }

            return item.url === pathname;
        }) || (isSignedIn ? items[0] : undefined);

    const navigationItemClass = cn(
        navigationMenuTriggerStyle(),
        'no-underline hover:no-underline text-base !text-[hsl(var(--navbar-primary))] hover:!text-[hsl(var(--accent-foreground))] focus-visible:outline-[hsl(var(--ring))] hover:bg-accent',
    );

    const getUrl = (item: Models.Navigation.NavigationGroup) => {
        if (item.items[0]?.__typename === 'NavigationItem') {
            return item.items[0].url;
        } else if (item.items[0]?.items[0]?.__typename === 'NavigationItem') {
            return item.items[0]?.items[0]?.url;
        }

        return '/';
    };

    const NavigationLink = ({
        href,
        children,
        className,
        active,
    }: {
        href: string;
        children: React.ReactNode;
        className?: string;
        active?: boolean;
    }) => {
        return (
            <NavigationMenuLink asChild active={active}>
                <Link asChild>
                    <NextLink href={href} locale={locale} className={cn(navigationItemClass, className)}>
                        {children}
                    </NextLink>
                </Link>
            </NavigationMenuLink>
        );
    };

    const NavigationItem = ({
        item,
        className,
        active,
    }: {
        item: Models.Navigation.NavigationItem;
        className?: string;
        active?: boolean;
    }) => {
        return (
            <NavigationMenuItem key={item.label}>
                <NavigationLink href={item.url || '/'} className={className} active={active}>
                    {item.label}
                </NavigationLink>
            </NavigationMenuItem>
        );
    };

    const NavigationGroup = ({ item }: { item: Models.Navigation.NavigationGroup; className?: string }) => {
        return (
            <NavigationMenuItem key={item.title}>
                <NavigationMenuTrigger className={navigationItemClass}>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[375px] flex-col gap-3 p-4">
                        {item.items.map((item) => {
                            if (item.__typename !== 'NavigationItem') {
                                return null;
                            }

                            return (
                                <li key={item.label}>
                                    <NavigationLink
                                        href={item.url || '/'}
                                        className="px-4 py-2 h-16 w-full !justify-start"
                                    >
                                        <div className="flex flex-col gap-1">
                                            <Typography variant="body" className="text-[hsl(var(--navbar-primary))]">
                                                {item.label}
                                            </Typography>
                                            {item.description && (
                                                <Typography variant="small" className="text-muted-foreground">
                                                    {item.description}
                                                </Typography>
                                            )}
                                        </div>
                                    </NavigationLink>
                                </li>
                            );
                        })}
                    </ul>
                </NavigationMenuContent>
            </NavigationMenuItem>
        );
    };

    return (
        <nav className="w-full">
            {/* Top Navigation Bar */}
            <div className="w-full m-auto max-w-7xl flex justify-between py-6 px-6">
                {/* Left Section */}
                <div className="flex gap-6">
                    {logoSlot}

                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-3">
                            {items.map((item) => {
                                switch (item.__typename) {
                                    case 'NavigationItem':
                                        return (
                                            <NavigationItem
                                                item={item}
                                                key={item.label}
                                                active={false}
                                                className={'!text-[hsl(var(--navbar-muted))]'}
                                            />
                                        );
                                    case 'NavigationGroup':
                                        return (
                                            <NavigationItem
                                                item={{
                                                    label: item.title,
                                                    url: getUrl(item),
                                                    __typename: 'NavigationItem',
                                                }}
                                                key={item.title}
                                                active={false}
                                                className={'!text-[hsl(var(--navbar-muted))]'}
                                            />
                                        );
                                }
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Right Section */}
                <div className="flex gap-4">
                    {/* Company Selector */}
                    {contextSlot}

                    {/* Language Selector */}
                    {localeSlot}

                    {/* Notification Button */}
                    {notificationSlot}

                    {/* User Avatar */}
                    {userSlot}
                </div>
            </div>

            <Separator />

            {/* Bottom Navigation Bar */}
            {activeNavigationGroup?.__typename === 'NavigationGroup' && (
                <>
                    <div className="w-full m-auto max-w-7xl py-2 px-6">
                        <NavigationMenu className="">
                            <NavigationMenuList className="flex gap-3">
                                {activeNavigationGroup?.items.map((item) => {
                                    switch (item.__typename) {
                                        case 'NavigationItem':
                                            return (
                                                <NavigationItem
                                                    item={item}
                                                    key={item.label}
                                                    active={pathname === item.url}
                                                    className="!text-base"
                                                />
                                            );
                                        case 'NavigationGroup':
                                            return <NavigationGroup item={item} key={item.title} />;
                                    }
                                })}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <Separator />
                </>
            )}
        </nav>
    );
}
