import type { Meta, StoryObj } from '@storybook/react';
import { Form, Formik } from 'formik';
import React from 'react';

import { AddressFields } from './AddressFields';
import type { AddressFieldsProps } from './AddressFields.types';

const mockFields: AddressFieldsProps['fields'] = {
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
};

const meta: Meta<typeof AddressFields> = {
    title: 'Components/Checkout/AddressFields',
    component: AddressFields,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <Formik
                initialValues={{
                    streetName: '',
                    streetNumber: '',
                    apartment: '',
                    city: '',
                    postalCode: '',
                    country: '',
                }}
                onSubmit={() => {}}
            >
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
