import type { Meta, StoryObj } from '@storybook/react';
import { Form, Formik } from 'formik';
import React from 'react';

import { AddressFields } from './AddressFields';
import type { AddressFieldsProps } from './AddressFields.types';

const mockFields: AddressFieldsProps['fields'] = {
    street: {
        label: 'Street and number',
        placeholder: 'e.g. 123 Main St',
        required: true,
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
};

const meta: Meta<typeof AddressFields> = {
    title: 'Components/Checkout/AddressFields',
    component: AddressFields,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Formik initialValues={{ street: '', city: '', postalCode: '', country: '' }} onSubmit={() => {}}>
                <Form>
                    <Story />
                </Form>
            </Formik>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof AddressFields>;

export const Default: Story = {
    args: {
        fields: mockFields,
    },
};

export const WithIdPrefix: Story = {
    args: {
        fields: mockFields,
        idPrefix: 'billing',
    },
};
