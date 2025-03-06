import { CMS } from '@o2s/framework/modules';

import {
    Faq,
    InvoiceList,
    NotificationDetails,
    NotificationList,
    PaymentsHistory,
    PaymentsSummary,
    TicketDetails,
    TicketList,
    UserAccount,
} from '@o2s/api-harmonization/components';

export class Init {
    locales!: {
        value: string;
        label: string;
    }[];
}

export class Page {
    common!: PageCommon;
    data?: PageData;
    seo!: SEO;
}

export class SEO {
    noIndex!: boolean;
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
}

export type Components =
    | TicketList.Model.TicketListComponent['__typename']
    | TicketDetails.Model.TicketDetailsComponent['__typename']
    | NotificationList.Model.NotificationListComponent['__typename']
    | NotificationDetails.Model.NotificationDetailsComponent['__typename']
    | Faq.Model.FaqComponent['__typename']
    | InvoiceList.Model.InvoiceListComponent['__typename']
    | PaymentsSummary.Model.PaymentsSummaryComponent['__typename']
    | PaymentsHistory.Model.PaymentsHistoryComponent['__typename']
    | UserAccount.Model.UserAccountComponent['__typename'];
