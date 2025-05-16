import { Blocks } from '@o2s/api-harmonization';

export interface ServiceDetailsProps {
    id: string;
    serviceId: string;
    accessToken?: string;
    locale: string;
}

export type ServiceDetailsPureProps = ServiceDetailsProps & Blocks.ServiceDetails.Model.ServiceDetailsBlock;
