import { Components } from '@o2s/api-harmonization';

export interface FaqProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type FaqPureProps = FaqProps & Components.Faq.Model.FaqComponent;
