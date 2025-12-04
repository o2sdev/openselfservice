import { Notification } from '@/modules/notifications/notifications.model';

import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export class NotificationListBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    table!: DataTable.DataTable<Notification>;
    fieldMapping!: Mapping.Mapping<Notification>;
    pagination?: Pagination.Pagination;
    filters?: Filters.Filters<Notification & { sort?: string; viewMode?: 'list' | 'grid' }>;
    noResults!: {
        title: string;
        description?: string;
    };
    labels!: {
        today: string;
        yesterday: string;
        clickToSelect: string;
    };
    detailsUrl!: string;
    initialFilters?: Partial<Notification & { sort?: string }>;
    cardHeaderSlots?: {
        top?: string;
        left?: string;
        right?: string;
        bottom?: string;
    };
}
