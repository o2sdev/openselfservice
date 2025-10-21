'use client';

import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import React from 'react';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { Label } from '@o2s/ui/elements/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';

import { usePathname, useRouter } from '@/i18n';

import { ToolbarProps } from './Toolbar.types';

export const LocaleSwitcher: React.FC<ToolbarProps> = ({ label, alternativeUrls }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    const { config } = useGlobalContext();

    const currentLocale = useLocale();

    const handleLocaleChange = (locale: string) => {
        const alternative = alternativeUrls?.[locale];
        const url = alternative || pathname;

        router.push(
            {
                pathname: url,
                query: Object.fromEntries(searchParams),
            },
            { locale },
        );
    };

    return (
        <>
            <Label htmlFor="language-switch" className="sr-only">
                {label}
            </Label>
            <Select value={currentLocale} onValueChange={handleLocaleChange}>
                <SelectTrigger variant="secondary" className="md:w-[80px] w-full" id="language-switch">
                    <SelectValue placeholder={currentLocale}>{currentLocale.toUpperCase()}</SelectValue>
                </SelectTrigger>
                <SelectContent>
                    {config.locales.map((locale) => (
                        <SelectItem key={locale.value} value={locale.value}>
                            {locale.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </>
    );
};
