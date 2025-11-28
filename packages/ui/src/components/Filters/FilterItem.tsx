import { Field, FieldProps, FormikValues } from 'formik';
import { LayoutGrid, List, Search } from 'lucide-react';
import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { debounce } from 'throttle-debounce';

import { cn } from '@o2s/ui/lib/utils';

import { InputWithLabel } from '@o2s/ui/elements/input';
import { Label } from '@o2s/ui/elements/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { ToggleGroup, ToggleGroupItem } from '@o2s/ui/elements/toggle-group';

import { FilterItemProps } from './Filters.types';

export const FilterItem = <T, S extends FormikValues>({
    item,
    submitForm,
    setFieldValue,
    isLeading,
    labels,
}: Readonly<FilterItemProps<T, S>>) => {
    const allWasClickedRef = useRef(false);

    const onTextFilterChange = debounce(500, async () => {
        await submitForm();
    });

    switch (item.__typename) {
        case 'FilterToggleGroup':
            return item.allowMultiple ? (
                <Field name={item.id}>
                    {({ field }: FieldProps<string[]>) => {
                        const currentValue =
                            (!field.value || field.value.length === 0) &&
                            item.options.some((option) => option.value === 'ALL')
                                ? ['ALL']
                                : field.value;

                        const toggleGroup = (
                            <ToggleGroup
                                type="multiple"
                                variant="solid"
                                value={currentValue}
                                onValueChange={async (value: string[]) => {
                                    let newValue: string[];

                                    if (allWasClickedRef.current) {
                                        newValue = [];
                                        allWasClickedRef.current = false;
                                    } else {
                                        newValue = value.filter((v) => v !== 'ALL');
                                    }

                                    await setFieldValue(field.name, newValue);
                                    if (isLeading) {
                                        await submitForm();
                                    }
                                }}
                            >
                                {item.options.map((option, index) => {
                                    const isSelected = currentValue.includes(option.value);
                                    const prevOption = item.options[index - 1];
                                    const nextOption = item.options[index + 1];
                                    const isPrevSelected = prevOption ? currentValue.includes(prevOption.value) : false;
                                    const isNextSelected = nextOption ? currentValue.includes(nextOption.value) : false;

                                    return (
                                        <ToggleGroupItem
                                            key={option.value}
                                            value={option.value}
                                            className={cn(
                                                'min-w-[98px]',
                                                isSelected && isPrevSelected ? 'rounded-l-none' : '',
                                                isSelected && isNextSelected ? 'rounded-r-none' : '',
                                            )}
                                            onClick={() => {
                                                allWasClickedRef.current = option.value === 'ALL';
                                            }}
                                        >
                                            {option.label}
                                        </ToggleGroupItem>
                                    );
                                })}
                            </ToggleGroup>
                        );

                        return isLeading ? (
                            toggleGroup
                        ) : (
                            <ScrollContainer className="scroll-container flex whitespace-nowrap w-full">
                                {toggleGroup}
                            </ScrollContainer>
                        );
                    }}
                </Field>
            ) : (
                <Field name={item.id}>
                    {({ field }: FieldProps<string>) => {
                        const toggleGroup = (
                            <ToggleGroup
                                type="single"
                                variant="solid"
                                value={
                                    !field.value && item.options.some((option) => option.value === 'ALL')
                                        ? 'ALL'
                                        : field.value
                                }
                                onValueChange={async (value: string) => {
                                    const newValue = value === 'ALL' ? '' : value;
                                    await setFieldValue(field.name, newValue);
                                    if (isLeading) {
                                        await submitForm();
                                    }
                                }}
                            >
                                {item.options.map((option) => (
                                    <ToggleGroupItem key={option.value} value={option.value} className="min-w-[98px]">
                                        {option.label}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        );

                        return isLeading ? (
                            toggleGroup
                        ) : (
                            <ScrollContainer className="scroll-container flex whitespace-nowrap w-full">
                                {toggleGroup}
                            </ScrollContainer>
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
                                        if (isLeading) {
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
                                        const newValue = e.target.value;
                                        await setFieldValue(field.name, newValue);
                                        if (isLeading) {
                                            onTextFilterChange();
                                        }
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
