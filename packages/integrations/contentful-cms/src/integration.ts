import { ApiConfig, Cache } from '@o2s/framework/modules';

import { Service as CmsService } from './modules/cms';
import { ContentfulModule } from './modules/contentful/contentful.module';

export * as Integration from './modules/index';

export const Config: Partial<ApiConfig['integrations']> = {
    cms: {
        service: CmsService,
        imports: [ContentfulModule, Cache.Module],
    },
};
