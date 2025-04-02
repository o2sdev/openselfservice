import { ApiConfig, Cache } from '@o2s/framework/modules';

import { Service as CmsService } from './modules/cms/index.js';
import { ContentfulModule } from './modules/contentful/contentful.module.js';

export * as Integration from './modules/index.js';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        service: CmsService,
        imports: [ContentfulModule, Cache.Module],
    },
};
