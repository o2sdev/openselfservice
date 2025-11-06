import { CMS } from '@o2s/configs.integrations';

import { NotificationSummaryBlock } from './notification-summary.model';

export const mapNotificationSummary = (
    cms: CMS.Model.NotificationSummaryBlock.NotificationSummaryBlock,
    _locale: string,
): NotificationSummaryBlock => {
    return {
        __typename: 'NotificationSummaryBlock',
        id: cms.id,
    };
};
