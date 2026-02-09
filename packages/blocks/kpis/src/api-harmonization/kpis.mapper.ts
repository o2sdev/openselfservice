import { CMS } from '@o2s/configs.integrations';

import { KpisBlock } from './kpis.model';

export const mapKpis = (cms: CMS.Model.KpisBlock.KpisBlock, _locale: string): KpisBlock => {
    return {
        __typename: 'KpisBlock',
        id: cms.id,
    };
};
