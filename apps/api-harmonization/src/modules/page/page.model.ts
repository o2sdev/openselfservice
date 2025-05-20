import { CMS, Models } from '@o2s/framework/modules';

import {
    Article,
    ArticleList,
    Category,
    CategoryList,
    Faq,
    InvoiceList,
    NotificationDetails,
    NotificationList,
    OrderDetails,
    OrderList,
    OrdersSummary,
    PaymentsHistory,
    PaymentsSummary,
    QuickLinks,
    ServiceDetails,
    ServiceList,
    Surveyjs,
    TicketDetails,
    TicketList,
    TicketRecent,
    UserAccount,
    // BLOCK IMPORT
} from '@o2s/api-harmonization/blocks';

export class Init {
    locales!: {
        value: string;
        label: string;
    }[];
    common!: PageCommon;
    labels!: Labels;
}

export type Labels = CMS.Model.AppConfig.Labels;
export class Page {
    data?: PageData;
    meta!: Metadata;
}

export class NotFound {
    common!: PageCommon;
}

export class Metadata {
    seo!: Models.SEO.Page;
    locales!: string[];
    isProtected!: boolean;
}

export class Breadcrumb {
    slug!: string;
    label!: string;
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
    breadcrumbs!: Breadcrumb[];
}

export type Blocks =
    | ArticleList.Model.ArticleListBlock['__typename']
    | Category.Model.CategoryBlock['__typename']
    | Article.Model.ArticleBlock['__typename']
    // BLOCK REGISTER
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
    | ServiceList.Model.ServiceListBlock['__typename']
    | ServiceDetails.Model.ServiceDetailsBlock['__typename']
    | Surveyjs.Model.SurveyjsBlock['__typename']
    | OrderList.Model.OrderListBlock['__typename']
    | OrdersSummary.Model.OrdersSummaryBlock['__typename']
    | OrderDetails.Model.OrderDetailsBlock['__typename']
    | QuickLinks.Model.QuickLinksBlock['__typename']
    | CategoryList.Model.CategoryListBlock['__typename'];
