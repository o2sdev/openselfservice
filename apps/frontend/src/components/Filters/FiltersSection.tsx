'use client';

import { FormikValues } from 'formik';
import React from 'react';

import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { Filters } from '@/components/Filters/Filters';
import FiltersContextProvider from '@/components/Filters/FiltersContext';

import { FiltersSectionProps } from './Filters.types';

export const FiltersSection = <T, S extends FormikValues>({
    title,
    filters,
    initialFilters,
    initialValues,
    onSubmit,
    onReset,
    labels,
}: Readonly<FiltersSectionProps<T, S>>) => {
    const hasLeadingItem = filters?.items.some((item) => item.isLeading === true);

    return (
        <div
            className={cn(
                'flex justify-between items-center gap-4 flex-wrap md:flex-nowrap',
                hasLeadingItem && 'flex-col items-start sm:gap-6',
            )}
        >
            {title && (
                <Typography variant="h2" asChild>
                    <h2>{title}</h2>
                </Typography>
            )}

            <FiltersContextProvider initialFilters={initialFilters}>
                <Filters
                    filters={filters}
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    onReset={onReset}
                    hasLeadingItem={hasLeadingItem}
                    labels={labels}
                />
            </FiltersContextProvider>
        </div>
    );
};
