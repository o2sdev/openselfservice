import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

import readme from '../../README.md?raw';

import { CheckoutShippingAddressPure } from './CheckoutShippingAddress.client';

const routing = defineRouting({
    locales: ['en'],
    defaultLocale: 'en',
    pathnames: {},
});

const baseBlock = {
    __typename: 'CheckoutShippingAddressBlock' as const,
    id: 'checkout-shipping-address-1',
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 2,
    },
    title: 'Shipping address',
    subtitle: 'Select shipping method',
    fields: {
        sameAsBillingAddress: {
            label: 'Same as billing address',
        },
        firstName: {
            label: 'First name',
            placeholder: 'e.g. John',
            required: false,
        },
        lastName: {
            label: 'Last name',
            placeholder: 'e.g. Doe',
            required: false,
        },
        phone: {
            label: 'Phone',
            placeholder: 'e.g. +48 123 456 789',
            required: false,
        },
        address: {
            streetName: {
                label: 'Street name',
                placeholder: 'e.g. Main Street',
                required: true,
            },
            streetNumber: {
                label: 'Number',
                placeholder: 'e.g. 123',
                required: true,
            },
            apartment: {
                label: 'Apartment / suite',
                placeholder: 'e.g. 4B',
                required: false,
            },
            city: {
                label: 'City',
                placeholder: 'City',
                required: true,
            },
            postalCode: {
                label: 'Postal code',
                placeholder: 'XX-XXX',
                required: true,
            },
            country: {
                label: 'Country',
                placeholder: 'Country',
                required: true,
            },
        },
        shippingMethod: {
            label: 'Shipping method',
            required: true,
        },
    },
    buttons: {
        back: {
            label: 'Back',
            path: '#',
        },
        next: {
            label: 'Next',
            path: '#',
        },
    },
    errors: {
        required: 'This field is required',
        invalidPostalCode: 'Invalid postal code',
        cartNotFound: 'Cart not found',
        submitError: 'Something went wrong. Please try again.',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Total',
        discountLabel: 'Discount',
        shippingLabel: 'Shipping',
        freeLabel: 'Free',
    },
    cartPath: '/cart',
};

const meta = {
    title: 'Blocks/CheckoutShippingAddress',
    component: CheckoutShippingAddressPure,
    tags: ['autodocs'],
    parameters: { readme },
} satisfies Meta<typeof CheckoutShippingAddressPure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        ...baseBlock,
        id: 'checkout-shipping-address-1',
        locale: 'en',
        routing,
    },
};
