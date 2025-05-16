import { Session } from 'next-auth';

import { CMS } from '@o2s/framework/modules';

export interface TwoColumnTemplateProps {
    slug: string[];
    data: CMS.Model.Page.TwoColumnTemplate;
    session: Session | null;
}
