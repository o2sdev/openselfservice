import { defineRouting } from 'next-intl/routing';
import { Model } from '../api-harmonization/notification-summary.client';
export interface NotificationSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}
export type NotificationSummaryPureProps = NotificationSummaryProps & Model.NotificationSummaryBlock;
export type NotificationSummaryRendererProps = Omit<NotificationSummaryProps, ''> & {
    slug: string[];
};
//# sourceMappingURL=NotificationSummary.types.d.ts.map