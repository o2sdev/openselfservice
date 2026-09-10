import { getSharedSdk } from '@o2s/utils.frontend/sdk';

import { type Sdk, extendSdk } from '@o2s/framework/sdk';

import { pricingSection } from './pricing-section';

const internalSdk = getSharedSdk();

// the type is spelled out because the emitted declaration cannot name the types that the
// methods of the factory pull in from other packages (TS2883)
export const sdk: Sdk & ReturnType<typeof pricingSection> = extendSdk(internalSdk, pricingSection(internalSdk));
