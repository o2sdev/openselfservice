import { Blocks } from '@o2s/api-harmonization';

export interface OrderListProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type OrderListPureProps = OrderListProps & Blocks.OrderList.Model.OrderListBlock;
