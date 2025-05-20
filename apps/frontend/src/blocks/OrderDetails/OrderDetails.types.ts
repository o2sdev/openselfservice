import { Blocks } from '@o2s/api-harmonization';

export interface OrderDetailsProps {
    id: string;
    orderId: string;
    accessToken?: string;
    locale: string;
}

export type OrderDetailsPureProps = OrderDetailsProps & Blocks.OrderDetails.Model.OrderDetailsBlock;
