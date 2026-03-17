import type { Models } from '@o2s/framework/modules';

import type { Model } from '../api-harmonization/payments-history.client';

export type PaymentsHistoryProps = Models.BlockProps.BaseBlockProps;

export type PaymentsHistoryPureProps = PaymentsHistoryProps & Model.PaymentsHistoryBlock;
