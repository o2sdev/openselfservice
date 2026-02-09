import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/checkout-notes.client';
import { sdk } from '../sdk';

import { CheckoutNotesProps } from './CheckoutNotes.types';

export const CheckoutNotesDynamic = dynamic(() =>
    import('./CheckoutNotes.client').then((module) => module.CheckoutNotesPure),
);

export const CheckoutNotes: React.FC<CheckoutNotesProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.CheckoutNotesBlock;
    try {
        data = await sdk.blocks.getCheckoutNotes(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching CheckoutNotes block', error);
        return null;
    }

    return <CheckoutNotesDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
