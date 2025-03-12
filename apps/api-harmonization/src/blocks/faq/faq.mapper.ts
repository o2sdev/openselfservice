import { CMS } from '../../models';

import { FaqBlock } from './faq.model';

export const mapFaq = (cms: CMS.Model.FaqBlock.FaqBlock): FaqBlock => {
    return {
        __typename: 'FaqBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        items: cms.items,
        banner: cms.banner,
    };
};
