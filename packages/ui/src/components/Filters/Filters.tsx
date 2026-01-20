import { Models } from '@o2s/framework/modules';
import { Form, Formik, FormikProps, FormikValues } from 'formik';
import { ListFilter, X } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import reactStringReplace from 'react-string-replace';

import { cn } from '@o2s/ui/lib/utils';

import { Badge } from '@o2s/ui/elements/badge';
import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@o2s/ui/elements/sheet';
import { Typography } from '@o2s/ui/elements/typography';

import { FilterItem } from './FilterItem';
import { FilterLabels, FiltersProps } from './Filters.types';
import { useFiltersContext } from './FiltersContext';

const SUPPORTED_FILTER_TYPES = ['FilterToggleGroup', 'FilterSelect', 'FilterText', 'FilterViewModeToggle'] as const;
const SKIP_FILTER_KEYS = ['offset', 'limit', 'id', 'viewMode'] as const;

function separateLeadingItem<T>(items: Models.Filters.FilterItem<T>[]) {
    let leadingItem: Models.Filters.FilterItem<T> | undefined;
    const filteredItems: Models.Filters.FilterItem<T>[] = [];

    for (const item of items) {
        if ('isLeading' in item && item.isLeading === true && leadingItem === undefined) {
            leadingItem = item;
        } else {
            filteredItems.push(item);
        }
    }

    return { leadingItem, filteredItems };
}

function separateLeadingItems<T>(items: Models.Filters.FilterItem<T>[]) {
    const leadingItems: Models.Filters.FilterItem<T>[] = [];
    const otherItems: Models.Filters.FilterItem<T>[] = [];

    items.forEach((item) => {
        if (!(SUPPORTED_FILTER_TYPES as readonly string[]).includes(item.__typename)) {
            return;
        }

        if ('isLeading' in item && item.isLeading === true) {
            leadingItems.push(item);
        } else {
            otherItems.push(item);
        }
    });

    return { leadingItems, otherItems };
}

interface ActiveFilterBadge {
    id: string;
    label: string;
    value: string | string[];
    displayValue: string;
}

function arraysEqual<T>(a: T[], b: T[]): boolean {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, index) => val === sortedB[index]);
}

function getFilterResetValue<T>(filterItem: Models.Filters.FilterItem<T> | undefined): string | string[] {
    if (!filterItem) return '';

    switch (filterItem.__typename) {
        case 'FilterToggleGroup':
            return filterItem.allowMultiple ? [] : '';
        case 'FilterSelect':
        case 'FilterText':
        default:
            return '';
    }
}

function getActiveFilterBadges<T, S extends FormikValues>(
    values: S,
    initialFilters: S,
    items: Models.Filters.FilterItem<T>[],
): ActiveFilterBadge[] {
    const badges: ActiveFilterBadge[] = [];

    for (const key in values) {
        if (SKIP_FILTER_KEYS.includes(key as (typeof SKIP_FILTER_KEYS)[number])) {
            continue;
        }

        const currentValue = values[key];
        const initialValue = initialFilters[key];

        if (currentValue === '' || currentValue === null || currentValue === undefined) {
            continue;
        }

        if (Array.isArray(currentValue) && currentValue.length === 0) {
            continue;
        }

        let hasChanged = false;
        if (Array.isArray(currentValue) && Array.isArray(initialValue)) {
            hasChanged = !arraysEqual(currentValue, initialValue);
        } else {
            hasChanged = currentValue !== initialValue;
        }

        if (hasChanged) {
            const item = items.find((i) => String(i.id) === key);
            if (!item) continue;

            let displayValue = '';

            if (item.__typename === 'FilterSelect' || item.__typename === 'FilterToggleGroup') {
                if (Array.isArray(currentValue)) {
                    const optionLabels = currentValue
                        .map((val: string) => {
                            const option = item.options.find((opt) => opt.value === val);
                            return option ? option.label : val;
                        })
                        .filter(Boolean);
                    displayValue = optionLabels.join(', ');
                } else {
                    const option = item.options.find((opt) => opt.value === String(currentValue));
                    displayValue = option ? option.label : String(currentValue);
                }
            } else if (item.__typename === 'FilterText') {
                displayValue = String(currentValue);
            } else {
                displayValue = String(currentValue);
            }

            const itemLabel = 'label' in item ? item.label : key;

            badges.push({
                id: key,
                label: itemLabel,
                value: currentValue,
                displayValue,
            });
        }
    }

    return badges;
}

interface InlineFiltersContentProps<T, S extends FormikValues> {
    submitForm: FormikProps<S>['submitForm'];
    setFieldValue: FormikProps<S>['setFieldValue'];
    values: FormikProps<S>['values'];
    items: Models.Filters.FilterItem<T>[];
    initialFilters: Record<string, unknown>;
    labels?: FilterLabels;
    isExpanded: boolean;
    setIsExpanded: (value: boolean) => void;
    onResetFilters: (e: React.MouseEvent) => void;
}

function InlineFiltersContent<T, S extends FormikValues>({
    submitForm,
    setFieldValue,
    values,
    items,
    initialFilters,
    labels,
    isExpanded,
    setIsExpanded,
    onResetFilters,
}: InlineFiltersContentProps<T, S>) {
    const { leadingItems, otherItems } = useMemo(() => separateLeadingItems(items), [items]);

    const activeFilterBadges = useMemo(
        () => getActiveFilterBadges(values, initialFilters as S, items),
        [values, initialFilters, items],
    );

    const handleRemoveFilter = async (filterId: string) => {
        const filterItem = items.find((i) => String(i.id) === filterId);
        const resetValue = initialFilters[filterId] ?? getFilterResetValue(filterItem);

        await setFieldValue(filterId, resetValue);
        await submitForm();
    };

    return (
        <Form>
            <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-4 items-end">
                    {leadingItems.map((item) => (
                        <div
                            key={String(item.id)}
                            className={cn('shrink-0', item.__typename === 'FilterSelect' && 'w-full sm:w-[250px]')}
                        >
                            <FilterItem
                                item={item}
                                setFieldValue={setFieldValue}
                                submitForm={submitForm}
                                isLeading={true}
                                labels={labels}
                                isInlineVariant={true}
                            />
                        </div>
                    ))}
                    {isExpanded &&
                        otherItems.map((item) => (
                            <div
                                key={String(item.id)}
                                className={cn(
                                    'flex-shrink-0',
                                    item.__typename === 'FilterSelect' && 'w-full sm:w-[250px]',
                                )}
                            >
                                <FilterItem
                                    item={item}
                                    setFieldValue={setFieldValue}
                                    submitForm={submitForm}
                                    isLeading={false}
                                    labels={labels}
                                    isInlineVariant={true}
                                />
                            </div>
                        ))}
                    {otherItems.length > 0 && (
                        <Button
                            type="button"
                            variant="link"
                            className="flex-shrink-0"
                            onClick={() => setIsExpanded(!isExpanded)}
                        >
                            {isExpanded
                                ? labels?.hideMoreFilters || 'Hide more filters'
                                : labels?.showMoreFilters || 'Show more filters'}
                        </Button>
                    )}
                </div>

                {activeFilterBadges.length > 0 && (
                    <>
                        <Separator />
                        <div className="flex flex-wrap gap-2 items-center">
                            {activeFilterBadges.map((badge) => (
                                <Badge
                                    key={badge.id}
                                    variant="outline"
                                    className="flex items-center gap-2 pr-0.5 py-0.5 font-normal"
                                >
                                    <Typography variant="small" className="truncate max-w-[200px]">
                                        {badge.label}: {badge.displayValue}
                                    </Typography>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        className="text-muted-foreground rounded-full hover:bg-muted/80 !w-6 !h-6 transition-colors"
                                        onClick={() => handleRemoveFilter(badge.id)}
                                        aria-label={
                                            labels?.removeFilterAriaLabel
                                                ? `${labels.removeFilterAriaLabel} ${badge.label}`
                                                : `Remove ${badge.label} filter`
                                        }
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>
                                </Badge>
                            ))}
                            {activeFilterBadges.length > 1 && (
                                <Button type="button" variant="link" onClick={onResetFilters}>
                                    {labels?.clearAllFilters || 'Clear all filters'}
                                </Button>
                            )}
                        </div>
                    </>
                )}
            </div>
        </Form>
    );
}

export const Filters = <T, S extends FormikValues>({
    filters,
    initialValues,
    onSubmit,
    onReset,
    hasLeadingItem,
    variant = 'drawer',
    labels,
}: Readonly<FiltersProps<T, S>>) => {
    const [filtersOpen, setFiltersOpen] = useState(false);
    const [isInlineExpanded, setIsInlineExpanded] = useState(false);
    const { activeFilters, countActiveFilters, initialFilters } = useFiltersContext();

    if (!filters) {
        return null;
    }

    const { label, title, description, submit, reset, items, removeFilters } = filters;

    const { leadingItem, filteredItems } = hasLeadingItem
        ? separateLeadingItem(items)
        : { leadingItem: undefined, filteredItems: items };

    const handleReset = (e: React.MouseEvent) => {
        e.preventDefault();
        countActiveFilters(initialFilters);
        onReset();
    };

    if (variant === 'inline') {
        return (
            <div className="w-full">
                <Formik<S>
                    initialValues={initialValues}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        countActiveFilters(values);
                        onSubmit(values);
                    }}
                >
                    {({ submitForm, setFieldValue, values }) => (
                        <InlineFiltersContent<T, S>
                            submitForm={submitForm}
                            setFieldValue={setFieldValue}
                            values={values}
                            items={items as Models.Filters.FilterItem<T>[]}
                            initialFilters={initialFilters}
                            labels={labels}
                            isExpanded={isInlineExpanded}
                            setIsExpanded={setIsInlineExpanded}
                            onResetFilters={handleReset}
                        />
                    )}
                </Formik>
            </div>
        );
    }

    return (
        <div className={cn(leadingItem ? 'w-full' : 'w-full sm:w-auto')}>
            <Formik<S>
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={(values) => {
                    setFiltersOpen(false);
                    countActiveFilters(values);
                    onSubmit(values);
                }}
            >
                {({ submitForm, setFieldValue }) => (
                    <>
                        <div className="flex flex-col justify-between items-center w-full gap-6 md:flex-row">
                            {leadingItem !== undefined && (
                                <div className="w-full md:w-auto overflow-hidden rounded-md">
                                    <ScrollContainer className="scroll-container flex whitespace-nowrap w-full items-center gap-4">
                                        <FilterItem
                                            item={leadingItem}
                                            submitForm={submitForm}
                                            setFieldValue={setFieldValue}
                                            isLeading={true}
                                            labels={labels}
                                            isInlineVariant={false}
                                        />
                                    </ScrollContainer>
                                </div>
                            )}
                            <div className="flex gap-4 flex-col w-full sm:flex-row md:w-auto">
                                {activeFilters > 0 && (
                                    <Button variant="outline" onClick={handleReset} className="gap-0">
                                        <X className="h-4 w-4 mr-2" />
                                        {reactStringReplace(removeFilters, /{active}/g, (match, i) => (
                                            <span key={i}>
                                                <span className="mx-0.5">{activeFilters}</span>
                                                {match}
                                            </span>
                                        ))}
                                    </Button>
                                )}
                                <Button
                                    variant="secondary"
                                    onClick={(e: React.MouseEvent) => {
                                        e.preventDefault();
                                        setFiltersOpen(!filtersOpen);
                                    }}
                                >
                                    <ListFilter />
                                    {label}
                                </Button>
                            </div>
                        </div>
                        <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                            <SheetContent closeLabel={filters.close}>
                                <SheetHeader>
                                    <SheetTitle>{title}</SheetTitle>
                                    {description && <SheetDescription>{description}</SheetDescription>}
                                </SheetHeader>
                                <Form>
                                    <div className="grid gap-4 py-4">
                                        {filteredItems.map((item) => (
                                            <FilterItem
                                                key={String(item.id)}
                                                item={item}
                                                setFieldValue={setFieldValue}
                                                submitForm={submitForm}
                                                labels={labels}
                                            />
                                        ))}
                                    </div>
                                    <SheetFooter>
                                        <Button
                                            type="button"
                                            variant="secondary"
                                            onClick={(e: React.MouseEvent) => {
                                                handleReset(e);
                                                setFiltersOpen(false);
                                            }}
                                        >
                                            {reset}
                                        </Button>
                                        <Button type="submit">{submit}</Button>
                                    </SheetFooter>
                                </Form>
                            </SheetContent>
                        </Sheet>
                    </>
                )}
            </Formik>
        </div>
    );
};
