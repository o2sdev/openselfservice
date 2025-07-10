'use client';

import { useLocale } from 'next-intl';
import React, { JSX } from 'react';

import { Models } from '@o2s/framework/modules';

import { cn } from '@o2s/ui/lib/utils';

import { Image } from '@o2s/ui/components/Image';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@o2s/ui/elements/accordion';
import { Link } from '@o2s/ui/elements/link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '@o2s/ui/elements/navigation-menu';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { Link as NextLink } from '@/i18n';

import { FooterProps } from './Footer.types';

export const Footer: React.FC<FooterProps> = ({ data }) => {
    const locale = useLocale();

    const navigationItemClass = cn(navigationMenuTriggerStyle());

    const mobileNavigationItemClass = cn(navigationMenuTriggerStyle(), navigationItemClass);

    const getUrl = (item: Models.Navigation.NavigationGroup) => {
        const lvl1Item = item.items?.[0];
        if (lvl1Item) {
            if (lvl1Item.__typename === 'NavigationItem') {
                return lvl1Item.url || '/';
            }
        }

        const lvl2Item = item.items?.[0];
        if (lvl2Item?.__typename === 'NavigationItem') {
            return lvl2Item.url || '/';
        }

        return '/';
    };

    const DesktopNavigationLink = ({
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
                <NextLink href={href} locale={locale} className={cn(navigationItemClass, className)}>
                    {children}
                </NextLink>
            </NavigationMenuLink>
        );
    };

    const DesktopNavigationItem = ({
        item,
        className,
        active,
    }: {
        item: Models.Navigation.NavigationItem;
        className?: string;
        active?: boolean;
    }) => {
        return (
            <NavigationMenuItem key={item.url}>
                <DesktopNavigationLink href={item.url ?? '/'} className={className} active={active}>
                    {item.label}
                </DesktopNavigationLink>
            </NavigationMenuItem>
        );
    };

    const AccordionItemTemplate = ({
        item,
        tag,
        children,
    }: {
        item: Models.Navigation.NavigationGroup;
        tag: keyof JSX.IntrinsicElements;
        children: React.ReactNode;
    }) => {
        return (
            <AccordionItem value={item.title} className="border-none">
                <AccordionTrigger className={mobileNavigationItemClass} tag={tag}>
                    {item.title}
                </AccordionTrigger>
                <AccordionContent className="p-0">{children}</AccordionContent>
            </AccordionItem>
        );
    };

    const MobileNavigationItem = ({ item }: { item: Models.Navigation.NavigationItem }) => {
        return (
            <li key={item.label} className="w-full list-none">
                <Link asChild>
                    <NextLink href={item.url ?? '/'} locale={locale} className={mobileNavigationItemClass}>
                        {item.label}
                    </NextLink>
                </Link>
            </li>
        );
    };

    const NavigationGroup = ({ item }: { item: Models.Navigation.NavigationGroup }) => {
        return (
            <AccordionItemTemplate item={item} tag="h3">
                <ul className="flex flex-col items-start gap-2 w-full pt-2 pl-3">
                    {item.items.map((item) => {
                        switch (item.__typename) {
                            case 'NavigationItem':
                                return <MobileNavigationItem item={item} key={item.label} />;
                            case 'NavigationGroup':
                                return (
                                    <li key={item.title} className="w-full list-none">
                                        <Accordion type="multiple" className="flex flex-col gap-2">
                                            <AccordionItemTemplate item={item} tag="h4">
                                                <ul className="flex flex-col items-start gap-2 w-full pt-2 pl-3">
                                                    {item.items.map((item) => {
                                                        if (item.__typename !== 'NavigationItem') {
                                                            return null;
                                                        }
                                                        return <MobileNavigationItem item={item} key={item.label} />;
                                                    })}
                                                </ul>
                                            </AccordionItemTemplate>
                                        </Accordion>
                                    </li>
                                );
                        }
                    })}
                </ul>
            </AccordionItemTemplate>
        );
    };

    return (
        <footer className="flex flex-col bg-footer-background">
            <Separator />
            <div className="w-full m-auto max-w-7xl flex flex-row justify-between px-4 md:px-6 py-4 md:py-6">
                <div className="flex gap-8 items-center justify-between w-full md:justify-start">
                    {/*TODO: get label from API*/}
                    <Link href="/" aria-label={'go to home'}>
                        {data.logo?.url && (
                            <Image
                                src={data.logo.url}
                                alt={data.logo.alt}
                                width={data.logo.width}
                                height={data.logo.height}
                            />
                        )}
                    </Link>
                    <Typography variant="body" className="text-footer-muted">
                        {data.copyright}
                    </Typography>
                </div>
                <div className="hidden md:block">
                    <NavigationMenu>
                        <NavigationMenuList className="flex gap-3">
                            {data.items.map((item) => {
                                switch (item.__typename) {
                                    case 'NavigationItem':
                                        return <DesktopNavigationItem item={item} key={item.label} />;
                                    case 'NavigationGroup':
                                        return (
                                            <DesktopNavigationItem
                                                item={{
                                                    label: item.title ?? '',
                                                    url: getUrl(item),
                                                    __typename: 'NavigationItem',
                                                }}
                                                key={item.title}
                                                active={false}
                                            />
                                        );
                                }
                            })}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>
            <Separator />
            <div className="w-full m-auto max-w-7xl flex flex-col md:hidden">
                <Accordion type="multiple" className="flex flex-col gap-2 p-2">
                    <AccordionItemTemplate item={data as unknown as Models.Navigation.NavigationGroup} tag="h2">
                        <Accordion type="multiple" className="flex flex-col gap-2 pt-2 pl-3">
                            {data.items.map((item) => {
                                switch (item.__typename) {
                                    case 'NavigationItem':
                                        return <MobileNavigationItem item={item} key={item.label} />;
                                    case 'NavigationGroup':
                                        return <NavigationGroup item={item} key={item.title} />;
                                }
                            })}
                        </Accordion>
                    </AccordionItemTemplate>
                </Accordion>
                <Separator />
            </div>
        </footer>
    );
};
