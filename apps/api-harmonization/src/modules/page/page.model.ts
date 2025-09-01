import { CMS, Models } from '@o2s/framework/modules';

import * as ArticleList from '@o2s/blocks.article-list/api-harmonization';
import * as ArticleSearch from '@o2s/blocks.article-search/api-harmonization';
import * as Article from '@o2s/blocks.article/api-harmonization';
import * as CategoryList from '@o2s/blocks.category-list/api-harmonization';
import * as Category from '@o2s/blocks.category/api-harmonization';
import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as FeaturedServiceList from '@o2s/blocks.featured-service-list/api-harmonization';
import * as BlockInvoiceList from '@o2s/blocks.invoice-list/api-harmonization';
import * as NotificationDetails from '@o2s/blocks.notification-details/api-harmonization';
import * as NotificationList from '@o2s/blocks.notification-list/api-harmonization';
import * as OrderDetails from '@o2s/blocks.order-details/api-harmonization';
import * as OrderList from '@o2s/blocks.order-list/api-harmonization';
import * as OrdersSummary from '@o2s/blocks.orders-summary/api-harmonization';
import * as PaymentsHistory from '@o2s/blocks.payments-history/api-harmonization';
import * as PaymentsSummary from '@o2s/blocks.payments-summary/api-harmonization';
import * as QuickLinks from '@o2s/blocks.quick-links/api-harmonization';
import * as ServiceDetails from '@o2s/blocks.service-details/api-harmonization';
import * as ServiceList from '@o2s/blocks.service-list/api-harmonization';
import * as Surveyjs from '@o2s/blocks.surveyjs-form/api-harmonization';
import * as TicketDetails from '@o2s/blocks.ticket-details/api-harmonization';
import * as TicketList from '@o2s/blocks.ticket-list/api-harmonization';
import * as TicketRecent from '@o2s/blocks.ticket-recent/api-harmonization';
import * as UserAccount from '@o2s/blocks.user-account/api-harmonization';

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
    // BLOCK REGISTER
    | ArticleList.Model.ArticleListBlock['__typename']
    | Category.Model.CategoryBlock['__typename']
    | Article.Model.ArticleBlock['__typename']
    | ArticleSearch.Model.ArticleSearchBlock['__typename']
    | TicketList.Model.TicketListBlock['__typename']
    | TicketDetails.Model.TicketDetailsBlock['__typename']
    | NotificationList.Model.NotificationListBlock['__typename']
    | NotificationDetails.Model.NotificationDetailsBlock['__typename']
    | Faq.Model.FaqBlock['__typename']
    | BlockInvoiceList.Model.InvoiceListBlock['__typename']
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
    | CategoryList.Model.CategoryListBlock['__typename']
    | FeaturedServiceList.Model.FeaturedServiceListBlock['__typename'];
