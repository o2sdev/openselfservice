import { CMS, Models } from '@o2s/framework/modules';

import {
    Faq,
    InvoiceList,
    NotificationDetails,
    NotificationList,
    PaymentsHistory,
    PaymentsSummary,
    ServiceList,
    TicketDetails,
    TicketList,
    TicketRecent,
    UserAccount,
} from '@o2s/api-harmonization/blocks';

export class Init {
    locales!: {
        value: string;
        label: string;
    }[];
    common!: PageCommon;
}

export class Page {
    data?: PageData;
    meta!: Metadata;
}

export class NotFound {
    common!: PageCommon;
}

export class Metadata {
    seo!: Models.SEO.Page;
    parent?: {
        slug: string;
    };
    locales!: string[];
}

export class PageCommon {
    header!: CMS.Model.Header.Header;
    footer!: CMS.Model.Footer.Footer;
}

export class PageData {
    alternativeUrls!: {
        [key: string]: string;
    };
    template!: CMS.Model.Page.PageTemplate;
    hasOwnTitle!: boolean;
}

export type Blocks =
    | TicketList.Model.TicketListBlock['__typename']
    | TicketDetails.Model.TicketDetailsBlock['__typename']
    | NotificationList.Model.NotificationListBlock['__typename']
    | NotificationDetails.Model.NotificationDetailsBlock['__typename']
    | Faq.Model.FaqBlock['__typename']
    | InvoiceList.Model.InvoiceListBlock['__typename']
    | PaymentsSummary.Model.PaymentsSummaryBlock['__typename']
    | PaymentsHistory.Model.PaymentsHistoryBlock['__typename']
    | UserAccount.Model.UserAccountBlock['__typename']
    | TicketRecent.Model.TicketRecentBlock['__typename']
    | ServiceList.Model.ServiceListBlock['__typename'];
