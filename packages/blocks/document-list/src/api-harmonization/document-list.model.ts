import { CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class DocumentListBlock extends ApiModels.Block.Block {
    __typename!: 'DocumentListBlock';
    title!: CMS.Model.DocumentListBlock.DocumentListBlock['title'];
    description?: CMS.Model.DocumentListBlock.DocumentListBlock['description'];
    documents?: CMS.Model.DocumentListBlock.DocumentListBlock['documents'];
}
