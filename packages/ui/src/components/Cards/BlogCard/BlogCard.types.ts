import { Models } from '@o2s/framework/modules';

import { Models as FrontendModels } from '@o2s/utils.frontend';

import { AuthorProps } from '@o2s/ui/components/Author';

export interface BlogCardProps {
    title: string;
    lead: string;
    link?: {
        label: string;
        url: string;
    };
    image?: Models.Media.Media;
    url: string;
    date: string;
    author?: AuthorProps;
    categoryTitle?: string;
    LinkComponent: FrontendModels.Link.LinkComponent;
}
