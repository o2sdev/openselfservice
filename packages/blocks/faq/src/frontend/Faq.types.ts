import { Models } from '@o2s/utils.frontend';

import { Sdk, extendSdk } from '@o2s/framework/sdk';

import { Model } from '../api-harmonization/faq.client';
import { faq } from '../sdk/faq';

export interface FaqProps {
    id: string;
    accessToken?: string;
    locale: string;
    sdk: Sdk;
    LinkComponent: Models.Link.LinkComponent;
}

export type FaqPureProps = Omit<FaqProps, 'sdk'> & {
    sdk: ReturnType<typeof extendSdk<ReturnType<typeof faq>>>;
} & Model.FaqBlock;
