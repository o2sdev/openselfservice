import { Models } from '@o2s/framework/modules';
import { Form, Formik, FormikValues } from 'formik';
import { ListFilter, X } from 'lucide-react';
import React, { useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import reactStringReplace from 'react-string-replace';

import { cn } from '@o2s/ui/lib/utils';

import { Button } from '@o2s/ui/elements/button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@o2s/ui/elements/sheet';

import { FilterItem } from './FilterItem';
import { FiltersProps } from './Filters.types';
import { useFiltersContext } from './FiltersContext';

function separateLeadingItem<T>(items: Models.Filters.FilterItem<T>[]) {
    let leadingItem: Models.Filters.FilterItem<T> | undefined;
    let viewModeToggle: Models.Filters.FilterViewModeToggle | undefined;
    const filteredItems: Models.Filters.FilterItem<T>[] = [];

    for (const item of items) {
        if (item.__typename === 'FilterViewModeToggle') {
            viewModeToggle = item;
        } else if (item.isLeading === true && leadingItem === undefined) {
            leadingItem = item;
        } else {
            filteredItems.push(item);
        }
    }

    return { leadingItem, viewModeToggle, filteredItems };
}

export const Filters = <T, S extends FormikValues>({
    filters,
    initialValues,
    onSubmit,
    onReset,
    labels,
}: Readonly<FiltersProps<T, S>>) => {
    const [filtersOpen, setFiltersOpen] = useState(false);
    const { activeFilters, countActiveFilters, initialFilters } = useFiltersContext();

    if (!filters) {
        return null;
    }

    const { label, title, description, submit, reset, items, removeFilters } = filters;

    const { leadingItem, viewModeToggle, filteredItems } = separateLeadingItem(items);

    const handleReset = (e: React.MouseEvent) => {
        e.preventDefault();
        countActiveFilters(initialFilters);
        onReset();
    };

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
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                {leadingItem && (
                                    <div className="overflow-hidden rounded-md">
                                        <ScrollContainer className="scroll-container flex whitespace-nowrap items-center gap-4">
                                            <FilterItem
                                                key={String(leadingItem.id)}
                                                item={leadingItem}
                                                submitForm={submitForm}
                                                setFieldValue={setFieldValue}
                                                isLeading={true}
                                                labels={labels}
                                            />
                                        </ScrollContainer>
                                    </div>
                                )}
                                {viewModeToggle && (
                                    <FilterItem
                                        item={viewModeToggle}
                                        submitForm={submitForm}
                                        setFieldValue={setFieldValue}
                                        labels={labels}
                                    />
                                )}
                            </div>
                            <div className="flex gap-4 flex-col-reverse w-full sm:flex-row md:w-auto">
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
