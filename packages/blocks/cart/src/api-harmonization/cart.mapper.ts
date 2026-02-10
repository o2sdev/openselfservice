import { CMS } from '@o2s/configs.integrations';

import { CartBlock } from './cart.model';

export const mapCart = (
    cms: CMS.Model.CartBlock.CartBlock,
    _locale: string,
): CartBlock => {
    return {
        __typename: 'CartBlock',
        id: cms.id,
    };
};
