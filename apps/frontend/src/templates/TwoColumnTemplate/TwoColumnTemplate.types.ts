import { CMS, Models } from '@o2s/framework/modules';

export interface TwoColumnTemplateProps {
    slug: string[];
    data: CMS.Model.Page.TwoColumnTemplate;
    searchParams?: Models.BlockProps.BlockSearchParams;
}
