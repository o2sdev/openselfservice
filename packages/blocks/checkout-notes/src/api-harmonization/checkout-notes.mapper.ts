import { CMS } from '@o2s/configs.integrations';

import { CheckoutNotesBlock } from './checkout-notes.model';

export const mapCheckoutNotes = (
    cms: CMS.Model.CheckoutNotesBlock.CheckoutNotesBlock,
    _locale: string,
): CheckoutNotesBlock => {
    return {
        __typename: 'CheckoutNotesBlock',
        id: cms.id,
    };
};
