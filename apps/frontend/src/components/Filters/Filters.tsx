import { Field, FieldProps, Form, Formik, FormikValues } from 'formik';
import { ListFilter, X } from 'lucide-react';
import React, { useState } from 'react';
import reactStringReplace from 'react-string-replace';

import { Button } from '@o2s/ui/components/button';
import { Label } from '@o2s/ui/components/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/components/select';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from '@o2s/ui/components/sheet';

import { FiltersProps } from './Filters.types';
import { useFiltersContext } from './FiltersContext';

export const Filters = <T, S extends FormikValues>({
    filters,
    initialValues,
    onSubmit,
    onReset,
}: FiltersProps<T, S>) => {
    const [filtersOpen, setFiltersOpen] = useState(false);
    const { activeFilters, countActiveFilters, initialFilters } = useFiltersContext();

    if (!filters) {
        return null;
    }

    const { label, title, description, submit, reset, items, removeFilters } = filters;

    return (
        <div className="w-full sm:w-auto">
            <div className="flex gap-4 flex-col sm:flex-row">
                {activeFilters > 0 && (
                    <Button
                        variant="secondary"
                        onClick={() => {
                            countActiveFilters(initialFilters);
                            onReset();
                        }}
                        className="gap-0"
                    >
                        <X className="h-4 w-4 mr-2" />
                        {reactStringReplace(removeFilters, /{active}/g, (match, i) => (
                            <span key={i}>
                                <span className="mx-0.5">{activeFilters}</span>
                                {match}
                            </span>
                        ))}
                    </Button>
                )}
                <Button onClick={() => setFiltersOpen(!filtersOpen)}>
                    <ListFilter />
                    {label}
                </Button>
            </div>
            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
                <SheetContent closeLabel={filters.close}>
                    <SheetHeader>
                        <SheetTitle>{title}</SheetTitle>
                        {description && <SheetDescription>{description}</SheetDescription>}
                    </SheetHeader>
                    <Formik<S>
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            setFiltersOpen(false);
                            countActiveFilters(values);
                            onSubmit(values);
                        }}
                    >
                        <Form>
                            <div className="grid gap-4 py-4">
                                {items.map((item) => {
                                    switch (item.__typename) {
                                        case 'FilterSelect':
                                            return (
                                                <Field key={item.id} name={item.id}>
                                                    {({ field, form }: FieldProps<string>) => {
                                                        return (
                                                            <>
                                                                <Label htmlFor={field.name}>{item.label}</Label>
                                                                <Select
                                                                    value={field.value}
                                                                    onValueChange={async (value) => {
                                                                        await form.setFieldValue(field.name, value);
                                                                    }}
                                                                >
                                                                    <SelectTrigger>
                                                                        <SelectValue placeholder={item.label} />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        <SelectGroup>
                                                                            {item.options.map((option) => (
                                                                                <SelectItem
                                                                                    key={option.value}
                                                                                    value={option.value}
                                                                                >
                                                                                    {option.label}
                                                                                </SelectItem>
                                                                            ))}
                                                                        </SelectGroup>
                                                                    </SelectContent>
                                                                </Select>
                                                            </>
                                                        );
                                                    }}
                                                </Field>
                                            );
                                    }
                                    return null;
                                })}
                            </div>
                            <SheetFooter>
                                <Button
                                    type="button"
                                    variant="secondary"
                                    onClick={() => {
                                        setFiltersOpen(false);
                                        countActiveFilters(initialFilters);
                                        onReset();
                                    }}
                                >
                                    {reset}
                                </Button>
                                <Button type="submit">{submit}</Button>
                            </SheetFooter>
                        </Form>
                    </Formik>
                </SheetContent>
            </Sheet>
        </div>
    );
};
