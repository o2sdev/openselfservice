import { Models } from '@o2s/framework/modules';

import { Models as FrontendModels } from '@o2s/utils.frontend';

export type FeatureCardProps = {
    title: string;
    description?: string;
    image?: Models.Media.Media;
    link?: Models.Link.Link;
    LinkComponent: FrontendModels.Link.LinkComponent;
};
