import { Session } from 'next-auth';

import { CMS } from '@o2s/framework/modules';

export interface OneColumnTemplateProps {
    slug: string[];
    data: CMS.Model.Page.OneColumnTemplate;
    session: Session | null;
}
