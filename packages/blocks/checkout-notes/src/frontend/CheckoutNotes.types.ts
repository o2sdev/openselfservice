import { defineRouting } from 'next-intl/routing';

import type { Model } from '../api-harmonization/checkout-notes.client';

export interface CheckoutNotesProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}

export type CheckoutNotesPureProps = CheckoutNotesProps & Model.CheckoutNotesBlock;

export type CheckoutNotesRendererProps = Omit<CheckoutNotesProps, ''> & {
    slug: string[];
};
