import { Blocks } from '@o2s/api-harmonization';

export interface FeaturedServiceListProps {
    id: string;
    locale: string;
    accessToken?: string;
}

export type FeaturedServiceListPureProps = FeaturedServiceListProps &
    Blocks.FeaturedServiceList.Model.FeaturedServiceListBlock;
