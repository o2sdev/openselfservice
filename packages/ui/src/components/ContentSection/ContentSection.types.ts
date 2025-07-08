import { Models } from '@o2s/framework/modules';

export interface ContentSectionProps {
    title?: string;
    description?: string;
    categoryLink?: Models.Link.Link;
    children: React.ReactNode;
}
