import { Blocks } from '@o2s/api-harmonization';

export interface ServiceListProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type ServiceListPureProps = ServiceListProps & Blocks.ServiceList.Model.ServiceListBlock;
