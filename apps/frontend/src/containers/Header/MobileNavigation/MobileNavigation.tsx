'use client';

import { Menu, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';

import { Models } from '@o2s/framework/modules';

import { cn } from '@o2s/ui/lib/utils';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@o2s/ui/elements/accordion';
import { Button } from '@o2s/ui/elements/button';
import { Link } from '@o2s/ui/elements/link';
import { navigationMenuTriggerStyle } from '@o2s/ui/elements/navigation-menu';
import { Separator } from '@o2s/ui/elements/separator';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@o2s/ui/elements/sheet';
import { Typography } from '@o2s/ui/elements/typography';

import { Link as NextLink, usePathname } from '@/i18n';

import { MobileNavigationProps } from './MobileNavigation.types';

export function MobileNavigation({
    logoSlot,
    contextSlot,
    localeSlot,
    notificationSlot,
    userSlot,
    items,
    title,
    mobileMenuLabel,
}: MobileNavigationProps) {
    const pathname = usePathname();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const navigationMobileItemClass = cn(
        navigationMenuTriggerStyle(),
        'w-full !justify-between h-10 p-2 !text-navbar-primary hover:!text-navbar-primary hover:!bg-navbar-accent-background',
    );

    const NavigationItem = ({ item }: { item: Models.Navigation.NavigationItem }) => {
        return (
            <li key={item.label} className="w-full">
                <Link className={navigationMobileItemClass} asChild>
                    <NextLink href={item.url || '/'}>{item.label}</NextLink>
                </Link>
            </li>
        );
    };

    const NavigationGroup = ({ item }: { item: Models.Navigation.NavigationGroup }) => {
        return (
            <AccordionItemTemplate item={item}>
                <ul className="flex flex-col items-start gap-2 w-full pt-2 pl-3">
                    {item.items.map((item) => {
                        switch (item.__typename) {
                            case 'NavigationItem':
                                return <NavigationItem item={item} key={item.label} />;
                            case 'NavigationGroup':
                                return (
                                    <li key={item.title} className="w-full">
                                        <Accordion type="multiple" className="flex flex-col gap-2">
                                            <AccordionItemTemplate item={item}>
                                                <ul className="flex flex-col items-start gap-2 w-full pt-2 pl-3">
                                                    {item.items.map((item) => {
                                                        if (item.__typename !== 'NavigationItem') {
                                                            return null;
                                                        }
                                                        return <NavigationItem item={item} key={item.label} />;
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

    const AccordionItemTemplate = ({
        item,
        children,
    }: {
        item: Models.Navigation.NavigationGroup;
        children: React.ReactNode;
    }) => {
        return (
            <AccordionItem value={item.title} className="border-none">
                <AccordionTrigger className={navigationMobileItemClass}>{item.title}</AccordionTrigger>
                <AccordionContent className="p-0">{children}</AccordionContent>
            </AccordionItem>
        );
    };

    return (
        <nav className="w-full bg-navbar-background">
            {/* Top Navigation Bar */}
            <div className="flex justify-between py-4 px-4">
                {/* Left Section */}
                {logoSlot}

                {/* Right Section */}
                <div className="flex gap-4">
                    {/* Notification Button */}
                    {notificationSlot}

                    {/* User Avatar */}
                    {userSlot}

                    {/* Menu Layer with Trigger Button */}
                    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-10 w-10"
                                onClick={() => setIsMenuOpen((prev) => !prev)}
                                aria-label={mobileMenuLabel.open}
                            >
                                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            className="max-w-full w-full md:max-w-sm sm:max-w-full bg-navbar-background"
                            closeLabel={mobileMenuLabel.close}
                        >
                            <SheetHeader className="mt-2">
                                <SheetTitle className="text-center sr-only" asChild>
                                    <Typography variant="h2" asChild>
                                        <h2>{title}</h2>
                                    </Typography>
                                </SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-4">
                                <div className="flex flex-col gap-4">
                                    {/* Company Selector */}
                                    {contextSlot}
                                    {/* Language Selector */}
                                    {localeSlot}
                                </div>

                                <Separator />

                                <div className="flex flex-col gap-4">
                                    <Accordion type="multiple" className="flex flex-col gap-2">
                                        {items.map((item) => {
                                            switch (item.__typename) {
                                                case 'NavigationGroup':
                                                    return <NavigationGroup key={item.title} item={item} />;
                                                case 'NavigationItem':
                                                    return <NavigationItem key={item.label} item={item} />;
                                            }
                                        })}
                                    </Accordion>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>

            <Separator />
        </nav>
    );
}
