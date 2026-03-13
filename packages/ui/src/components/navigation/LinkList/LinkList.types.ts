import { Models } from '@o2s/framework/modules';

import { Models as FrontendModels } from '@o2s/utils.frontend';

export type LinkListProps = {
    children?: React.ReactNode;
    links?: Models.Link.Link[];
    LinkComponent: FrontendModels.Link.LinkComponent;
    className?: string;
};
