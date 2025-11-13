import { Models } from '@o2s/framework/modules';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { FormikValues } from 'formik';
import React, { useState } from 'react';

import { Filters } from './Filters';
import FiltersContextProvider from './FiltersContext';
import { FiltersSection } from './FiltersSection';

// Create a wrapper component to provide context and handle state
const FiltersWrapper = <T, S extends FormikValues>({
    filters,
    initialValues,
    hasLeadingItem = false,
}: {
    filters: Models.Filters.Filters<T>;
    initialValues: S;
    hasLeadingItem?: boolean;
}) => {
    const [currentFilters, setCurrentFilters] = useState<S>(initialValues);

    const handleSubmit = (values: Partial<S>) => {
        console.log('Filters submitted:', values);
        setCurrentFilters({
            ...currentFilters,
            ...values,
        });
    };

    const handleReset = () => {
        console.log('Filters reset');
        setCurrentFilters(initialValues);
    };

    return (
        <FiltersContextProvider initialFilters={initialValues}>
            <div className="p-4 border rounded-md mb-4">
                <h3 className="text-sm font-semibold mb-2">Current Filters:</h3>
                <pre className="text-xs bg-gray-100 p-2 rounded">{JSON.stringify(currentFilters, null, 2)}</pre>
            </div>

            <Filters
                filters={filters}
                initialValues={initialValues}
                onSubmit={handleSubmit}
                onReset={handleReset}
                hasLeadingItem={hasLeadingItem}
                labels={{ clickToSelect: 'Select an option' }}
            />
        </FiltersContextProvider>
    );
};

// Define the specific types for our stories
type FilterType = { category: string; price: string; rating: string[]; sort: string; search: string };
type FilterValues = { category: string; price: string; rating: string[]; sort: string; search: string };

const meta = {
    title: 'Components/Filters',
    component: FiltersWrapper as typeof FiltersWrapper<FilterType, FilterValues>,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof FiltersWrapper<FilterType, FilterValues>>;

export default meta;

type Story = StoryObj<
    typeof meta & {
        args: { filters: Models.Filters.Filters<FilterType>; initialValues: FilterValues; hasLeadingItem?: boolean };
    }
>;

// Sample filter data
const categoryFilterItem: Models.Filters.FilterToggleGroup<FilterType> = {
    __typename: 'FilterToggleGroup',
    id: 'category',
    label: 'Category',
    allowMultiple: true,
    options: [
        { value: 'ALL', label: 'All' },
        { value: 'electronics', label: 'Electronics' },
        { value: 'clothing', label: 'Clothing' },
        { value: 'books', label: 'Books' },
        { value: 'home', label: 'Home' },
    ],
};

const priceFilterItem: Models.Filters.FilterSelect<FilterType> = {
    __typename: 'FilterSelect',
    id: 'price',
    label: 'Price Range',
    allowMultiple: false,
    options: [
        { value: 'any', label: 'Any Price' },
        { value: '0-50', label: '$0 - $50' },
        { value: '50-100', label: '$50 - $100' },
        { value: '100-200', label: '$100 - $200' },
        { value: '200+', label: '$200+' },
    ],
};

const ratingFilterItem: Models.Filters.FilterToggleGroup<FilterType> = {
    __typename: 'FilterToggleGroup',
    id: 'rating',
    label: 'Rating',
    allowMultiple: false,
    options: [
        { value: 'ALL', label: 'All Ratings' },
        { value: '5', label: '5 Stars' },
        { value: '4', label: '4 Stars' },
        { value: '3', label: '3 Stars' },
    ],
};

const sortFilterItem: Models.Filters.FilterSelect<FilterType> = {
    __typename: 'FilterSelect',
    id: 'sort',
    label: 'Sort By',
    allowMultiple: false,
    options: [
        { value: 'relevance', label: 'Relevance' },
        { value: 'price_asc', label: 'Price: Low to High' },
        { value: 'price_desc', label: 'Price: High to Low' },
        { value: 'newest', label: 'Newest First' },
    ],
};

const searchFilterItem: Models.Filters.FilterText<FilterType> = {
    __typename: 'FilterText',
    id: 'search',
    label: 'Search',
    placeholder: 'Search products...',
};

const basicFilters: Models.Filters.Filters<FilterType> = {
    label: 'Filters',
    title: 'Filter Products',
    description: 'Select options to filter the products',
    submit: 'Apply Filters',
    reset: 'Reset',
    removeFilters: 'Remove {active} filters',
    close: 'Close',
    items: [categoryFilterItem, priceFilterItem, ratingFilterItem, sortFilterItem],
};

const filtersWithLeadingItem: Models.Filters.Filters<FilterType> = {
    ...basicFilters,
    items: [{ ...categoryFilterItem, isLeading: true }, priceFilterItem, ratingFilterItem, sortFilterItem],
};

export const Default: Story = {
    args: {
        filters: basicFilters,
        initialValues: {
            category: '',
            price: '',
            rating: [],
            sort: 'relevance',
            search: '',
        },
        hasLeadingItem: false,
    },
};

export const WithLeadingItem: Story = {
    args: {
        filters: filtersWithLeadingItem,
        initialValues: {
            category: '',
            price: '',
            rating: [],
            sort: 'relevance',
            search: '',
        },
        hasLeadingItem: true,
    },
};

export const WithPreselectedValues: Story = {
    args: {
        filters: basicFilters,
        initialValues: {
            category: 'electronics',
            price: '50-100',
            rating: ['5', '4'],
            sort: 'price_asc',
            search: '',
        },
        hasLeadingItem: false,
    },
};

export const WithSection: Story = {
    args: {
        filters: basicFilters,
        initialValues: {
            category: '',
            price: '',
            rating: [],
            sort: 'relevance',
            search: '',
        },
        hasLeadingItem: false,
    },
    render: ({ filters, initialValues }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [currentFilters, setCurrentFilters] = useState<typeof initialValues>(initialValues);

        const handleSubmit = (values: Partial<typeof initialValues>) => {
            console.log('Filters submitted:', values);
            setCurrentFilters({
                ...currentFilters,
                ...values,
            });
        };

        const handleReset = () => {
            console.log('Filters reset');
            setCurrentFilters(initialValues);
        };

        return (
            <div className="space-y-4">
                <FiltersSection
                    title="Filter Products"
                    initialFilters={initialValues}
                    filters={filters}
                    initialValues={initialValues}
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                />
                <div className="p-4 border rounded-md mb-4">
                    <h3 className="text-sm font-semibold mb-2">Current Filters:</h3>
                    <pre className="text-xs bg-gray-100 p-2 rounded">{JSON.stringify(currentFilters, null, 2)}</pre>
                </div>
            </div>
        );
    },
};

export const WithSearch: Story = {
    args: {
        filters: {
            ...basicFilters,
            items: [searchFilterItem, categoryFilterItem, priceFilterItem, ratingFilterItem, sortFilterItem],
        },
        initialValues: {
            category: '',
            price: '',
            rating: [],
            sort: 'relevance',
            search: '',
        },
        hasLeadingItem: false,
    },
};

export const WithSearchLeading: Story = {
    args: {
        filters: {
            ...basicFilters,
            items: [
                { ...searchFilterItem, isLeading: true, isLabelHidden: true },
                categoryFilterItem,
                priceFilterItem,
                ratingFilterItem,
                sortFilterItem,
            ],
        },
        initialValues: {
            category: '',
            price: '',
            rating: [],
            sort: 'relevance',
            search: '',
        },
        hasLeadingItem: true,
    },
};
