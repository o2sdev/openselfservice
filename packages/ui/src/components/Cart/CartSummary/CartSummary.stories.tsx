import type { Meta, StoryObj } from '@storybook/react';

import { CartSummary } from './CartSummary';

const meta: Meta<typeof CartSummary> = {
    title: 'Components/Cart/CartSummary',
    component: CartSummary,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CartSummary>;

const defaultArgs = {
    subtotal: { value: 204.97, currency: 'PLN' as const },
    tax: { value: 47.14, currency: 'PLN' as const },
    total: { value: 252.11, currency: 'PLN' as const },
    labels: {
        title: 'Podsumowanie',
        subtotalLabel: 'Suma netto',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Suma brutto',
    },
};

export const Default: Story = {
    args: {
        ...defaultArgs,
        checkoutButton: {
            url: '/checkout',
            label: 'Przejdź do kasy',
            icon: 'ShoppingCart',
        },
        continueShopping: {
            url: '/shop',
            label: 'Kontynuuj zakupy',
        },
    },
};

export const WithLoadingState: Story = {
    args: {
        ...defaultArgs,
        checkoutButton: {
            url: '/checkout',
            label: 'Przejdź do kasy',
        },
        isCheckoutLoading: true,
        loadingLabel: 'Przetwarzanie...',
    },
};

export const WithPreviewButton: Story = {
    args: {
        ...defaultArgs,
        previewButton: {
            label: 'Zobacz PDF',
            icon: 'FileText',
            onClick: () => {},
        },
    },
};

export const TotalsOnly: Story = {
    args: defaultArgs,
};
