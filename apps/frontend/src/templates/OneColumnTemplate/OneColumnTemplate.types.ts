import { CMS, Models } from '@o2s/framework/modules';

export interface OneColumnTemplateProps {
    slug: string[];
    data: CMS.Model.Page.OneColumnTemplate;
    searchParams?: Models.BlockProps.BlockSearchParams;
}
