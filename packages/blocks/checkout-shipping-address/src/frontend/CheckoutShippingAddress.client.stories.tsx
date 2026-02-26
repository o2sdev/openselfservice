import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { defineRouting } from 'next-intl/routing';

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
            placeholder: 'Select method',
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
};

const meta = {
    title: 'Blocks/CheckoutShippingAddress',
    component: CheckoutShippingAddressPure,
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
