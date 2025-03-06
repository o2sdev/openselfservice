import { CMS } from '../../models';

import { FaqComponent } from './faq.model';

export const mapFaq = (cms: CMS.Model.FaqComponent.FaqComponent): FaqComponent => {
    return {
        __typename: 'FaqComponent',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        items: cms.items,
        banner: cms.banner,
    };
};
