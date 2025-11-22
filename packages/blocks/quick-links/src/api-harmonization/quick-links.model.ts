import { CMS } from '@o2s/configs.integrations';

import { Models } from '@o2s/utils.api-harmonization';

export class QuickLinksBlock extends Models.Block.Block {
    __typename!: 'QuickLinksBlock';
    title?: CMS.Model.QuickLinksBlock.QuickLinksBlock['title'];
    description?: CMS.Model.QuickLinksBlock.QuickLinksBlock['description'];
    items!: CMS.Model.QuickLinksBlock.QuickLinksBlock['items'];
    meta?: CMS.Model.QuickLinksBlock.QuickLinksBlock['meta'];
}
