import { Field, FieldProps, FormikValues } from 'formik';
import React, { useRef } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';

import { cn } from '@o2s/ui/lib/utils';

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
                                                if (option.value === 'ALL') {
                                                    allWasClickedRef.current = true;
                                                } else {
                                                    allWasClickedRef.current = false;
                                                }
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
                            <>
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
                            </>
                        );
                    }}
                </Field>
            );
        default:
            return null;
    }
};
