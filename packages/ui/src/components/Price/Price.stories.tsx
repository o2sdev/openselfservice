import { Models } from '@o2s/framework/modules';
import type { Meta, StoryObj } from '@storybook/nextjs';

// Create a mock version of the Price component that doesn't rely on hooks
const Price = ({ price }: { price?: Models.Price.Price }) => {
    if (!price) {
        return null;
    }

    const { value, currency, period } = price;

    // Format the price based on currency
    const formatter = new Intl.NumberFormat('en', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const formattedValue = formatter.format(value);
    let formattedPrice = '';

    switch (currency) {
        case 'USD':
            formattedPrice = `$ ${formattedValue}`;
            break;
        case 'EUR':
            formattedPrice = `€ ${formattedValue}`;
            break;
        case 'GBP':
            formattedPrice = `£ ${formattedValue}`;
            break;
        case 'PLN':
            formattedPrice = `${formattedValue} zł`;
            break;
        default:
            formattedPrice = formattedValue;
    }

    // Add period if present
    if (period) {
        return `${formattedPrice} / ${period}`;
    }

    return formattedPrice;
};

const meta = {
    title: 'Components/Price',
    component: Price,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Price>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        price: {
            value: 19.99,
            currency: 'USD',
        },
    },
};

export const WithPeriod: Story = {
    args: {
        price: {
            value: 19.99,
            currency: 'USD',
            period: 'month',
        },
    },
};

export const EuroCurrency: Story = {
    args: {
        price: {
            value: 19.99,
            currency: 'EUR',
        },
    },
};

export const BritishPoundCurrency: Story = {
    args: {
        price: {
            value: 19.99,
            currency: 'GBP',
        },
    },
};

export const PolishZlotyCurrency: Story = {
    args: {
        price: {
            value: 19.99,
            currency: 'PLN',
        },
    },
};

export const WithYearlyPeriod: Story = {
    args: {
        price: {
            value: 199.99,
            currency: 'USD',
            period: 'year',
        },
    },
};

export const LargeValue: Story = {
    args: {
        price: {
            value: 9999.99,
            currency: 'USD',
        },
    },
};

export const ZeroValue: Story = {
    args: {
        price: {
            value: 0,
            currency: 'USD',
        },
    },
};

export const NullPrice: Story = {
    args: {
        price: undefined,
    },
};
