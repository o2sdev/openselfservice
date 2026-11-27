import { Modules } from '@o2s/api-harmonization';

import { Models } from '@o2s/framework/modules';

export interface PageTemplateProps {
    slug: string[];
    data: Modules.Page.Model.PageData;
    searchParams?: Models.BlockProps.BlockSearchParams;
}
