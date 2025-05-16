import { Blocks } from '@o2s/api-harmonization';

export interface QuickLinksProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type QuickLinksPureProps = QuickLinksProps & Blocks.QuickLinks.Model.QuickLinksBlock;
