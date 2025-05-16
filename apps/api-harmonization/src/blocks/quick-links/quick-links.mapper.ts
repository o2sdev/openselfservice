import { CMS } from '../../models';

import { QuickLinksBlock } from './quick-links.model';

export const mapQuickLinks = (cms: CMS.Model.QuickLinksBlock.QuickLinksBlock, _locale: string): QuickLinksBlock => {
    return {
        __typename: 'QuickLinksBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        items: cms.items,
    };
};
