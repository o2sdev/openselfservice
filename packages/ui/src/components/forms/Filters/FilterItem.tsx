import { Field, FieldProps, FormikValues } from 'formik';
import { LayoutGrid, List, Search } from 'lucide-react';
import React, { useEffect, useMemo } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { debounce } from 'throttle-debounce';

import { cn } from '@o2s/ui/lib/utils';

import { InputWithLabel } from '@o2s/ui/elements/input';
import { Label } from '@o2s/ui/elements/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { ToggleGroup, ToggleGroupItem, ToggleGroupWithLabel } from '@o2s/ui/elements/toggle-group';

import { FilterItemProps } from './Filters.types';

const TEXT_FILTER_DEBOUNCE_MS = 1000;

export const FilterItem = <T, S extends FormikValues>({
    item,
    submitForm,
    setFieldValue,
    isLeading,
    labels,
    isInlineVariant,
}: Readonly<FilterItemProps<T, S>>) => {
    const debouncedSubmit = useMemo(() => debounce(TEXT_FILTER_DEBOUNCE_MS, () => submitForm()), [submitForm]);

    useEffect(() => {
        return () => {
            debouncedSubmit.cancel();
        };
    }, [debouncedSubmit]);

    switch (item.__typename) {
        case 'FilterToggleGroup':
            return item.allowMultiple ? (
                <Field name={item.id}>
                    {({ field }: FieldProps<string[]>) => {
                        const currentValue =
                            (!field.value || field.value.length === 0) &&
                            item.options.some((option) => option.value === 'ALL')
                                ? ['ALL']
                                : field.value || [];

                        const toggleGroupItems = item.options.map((option) => {
                            return (
                                <ToggleGroupItem
                                    key={option.value}
                                    value={option.value}
                                    className="min-w-[98px] rounded-sm h-9"
                                >
                                    {option.label}
                                </ToggleGroupItem>
                            );
                        });

                        const handleValueChange = async (value: string[]) => {
                            let newValue: string[];

                            const hadSelections = (field.value?.length ?? 0) > 0;
                            const includesAll = value.includes('ALL');

                            if (includesAll && hadSelections) {
                                newValue = [];
                            } else {
                                newValue = value.filter((v) => v !== 'ALL');
                            }

                            await setFieldValue(field.name, newValue);
                            if (isLeading || isInlineVariant) {
                                await submitForm();
                            }
                        };

                        return (
                            <ToggleGroupWithLabel
                                type="multiple"
                                variant="solid"
                                value={currentValue}
                                onValueChange={handleValueChange}
                                label={item.label}
                            >
                                <ScrollContainer className="scroll-container flex whitespace-nowrap w-full">
                                    {toggleGroupItems}
                                </ScrollContainer>
                            </ToggleGroupWithLabel>
                        );
                    }}
                </Field>
            ) : (
                <Field name={item.id}>
                    {({ field }: FieldProps<string>) => {
                        const toggleGroupItems = item.options.map((option) => (
                            <ToggleGroupItem key={option.value} value={option.value} className="min-w-[98px]">
                                {option.label}
                            </ToggleGroupItem>
                        ));

                        const handleValueChange = async (value: string) => {
                            const newValue = value === 'ALL' ? '' : value;
                            await setFieldValue(field.name, newValue);
                            if (isLeading || isInlineVariant) {
                                await submitForm();
                            }
                        };

                        const currentValue =
                            !field.value && item.options.some((option) => option.value === 'ALL') ? 'ALL' : field.value;

                        return (
                            <ToggleGroupWithLabel
                                type="single"
                                variant="solid"
                                value={currentValue}
                                onValueChange={handleValueChange}
                                label={item.label}
                            >
                                <ScrollContainer className="scroll-container flex whitespace-nowrap w-full">
                                    {toggleGroupItems}
                                </ScrollContainer>
                            </ToggleGroupWithLabel>
                        );
                    }}
                </Field>
            );
        case 'FilterSelect':
            return (
                <Field name={item.id}>
                    {({ field }: FieldProps<string>) => {
                        return (
                            <div className="grid gap-2">
                                <Label htmlFor={field.name}>{item.label}</Label>
                                <Select
                                    value={field.value}
                                    onValueChange={async (value) => {
                                        const newValue = value === ' ' ? '' : value;
                                        await setFieldValue(field.name, newValue);
                                        if (isLeading || isInlineVariant) {
                                            await submitForm();
                                        }
                                    }}
                                >
                                    <SelectTrigger className={cn(isLeading ? 'my-1 mr-1' : '')}>
                                        <SelectValue placeholder={item.label} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {labels && labels.clickToSelect && (
                                                <SelectItem value=" ">{labels.clickToSelect}</SelectItem>
                                            )}
                                            {item.options.map((option) => (
                                                <SelectItem key={option.value} value={option.value}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                        );
                    }}
                </Field>
            );
        case 'FilterText':
            return (
                <Field name={item.id}>
                    {({ field }: FieldProps<string>) => {
                        return (
                            <>
                                <InputWithLabel
                                    id={field.name}
                                    type="text"
                                    value={field.value || ''}
                                    placeholder={item.placeholder}
                                    label={item.label}
                                    isLabelHidden={item.isLabelHidden}
                                    adornment={<Search className="h-4 w-4" />}
                                    adornmentProps={{
                                        behavior: 'prepend',
                                    }}
                                    onChange={async (e) => {
                                        await setFieldValue(field.name, e.target.value);
                                        debouncedSubmit();
                                    }}
                                />
                            </>
                        );
                    }}
                </Field>
            );
        case 'FilterViewModeToggle':
            return (
                <ToggleGroup
                    type="single"
                    variant="solid"
                    value={item.value}
                    onValueChange={(value) => {
                        if (value === 'list' || value === 'grid') {
                            item.onChange?.(value);
                        }
                    }}
                >
                    <ToggleGroupItem value="list" aria-label="List view">
                        <List className="h-4 w-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem value="grid" aria-label="Grid view">
                        <LayoutGrid className="h-4 w-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
            );

        default:
            return null;
    }
};
