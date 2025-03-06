import { Components } from '@o2s/api-harmonization';

export interface PaymentsSummaryProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type PaymentsSummaryPureProps = PaymentsSummaryProps & Components.PaymentsSummary.Model.PaymentsSummaryComponent;
