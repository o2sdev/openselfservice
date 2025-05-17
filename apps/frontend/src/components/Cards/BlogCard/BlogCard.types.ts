import { Models } from '@o2s/framework/modules';

import { AuthorProps } from '@/components/Author/Author.types';

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
}
