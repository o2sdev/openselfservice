import { CMS } from '@o2s/configs.integrations';

import { DocumentListBlock } from './document-list.model';

export const mapDocumentList = (
    cms: CMS.Model.DocumentListBlock.DocumentListBlock,
    _locale: string,
): DocumentListBlock => {
    return {
        __typename: 'DocumentListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        documents: cms.documents,
    };
};
