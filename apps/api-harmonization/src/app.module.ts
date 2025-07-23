import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { Auth } from '@o2s/configs.integrations';

import { LoggerModule, LoggerService } from '@o2s/utils.logger';

import {
    Articles,
    Auth as AuthModule,
    BillingAccounts,
    CMS,
    Cache,
    Invoices,
    Notifications,
    Orders,
    Organizations,
    Products,
    Resources,
    Search,
    Tickets,
    Users,
} from '@o2s/framework/modules';

import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as InvoiceList from '@o2s/blocks.invoice-list/api-harmonization';
import * as NotificationList from '@o2s/blocks.notification-list/api-harmonization';
import * as QuickLinks from '@o2s/blocks.quick-links/api-harmonization';
import * as TicketDetails from '@o2s/blocks.ticket-details/api-harmonization';
import * as TicketList from '@o2s/blocks.ticket-list/api-harmonization';
import * as TicketRecent from '@o2s/blocks.ticket-recent/api-harmonization';
import * as UserAccount from '@o2s/blocks.user-account/api-harmonization';

import { configuration } from '@o2s/api-harmonization/config/configuration';

import { ArticleListBlockModule } from '@o2s/api-harmonization/blocks/article-list/article-list.module';
import { ArticleSearchBlockModule } from '@o2s/api-harmonization/blocks/article-search/article-search.module';
import { ArticleBlockModule } from '@o2s/api-harmonization/blocks/article/article.module';
import { CategoryListBlockModule } from '@o2s/api-harmonization/blocks/category-list/category-list.module';
import { CategoryBlockModule } from '@o2s/api-harmonization/blocks/category/category.module';
import { FeaturedServiceListBlockModule } from '@o2s/api-harmonization/blocks/featured-service-list/featured-service-list.module';
import { NotificationDetailsBlockModule } from '@o2s/api-harmonization/blocks/notification-details/notification-details.module';
import { OrderDetailsBlockModule } from '@o2s/api-harmonization/blocks/order-details/order-details.module';
import { OrderListBlockModule } from '@o2s/api-harmonization/blocks/order-list/order-list.module';
import { OrdersSummaryBlockModule } from '@o2s/api-harmonization/blocks/orders-summary/orders-summary.module';
import { PaymentsHistoryBlockModule } from '@o2s/api-harmonization/blocks/payments-history/payments-history.module';
import { PaymentsSummaryBlockModule } from '@o2s/api-harmonization/blocks/payments-summary/payments-summary.module';
import { ServiceDetailsBlockModule } from '@o2s/api-harmonization/blocks/service-details/service-details.module';
import { ServiceListBlockModule } from '@o2s/api-harmonization/blocks/service-list/service-list.module';
import { SurveyjsBlockModule } from '@o2s/api-harmonization/blocks/surveyjs/surveyjs.module';

// BLOCK IMPORT
import { AppConfig } from './app.config';
import { AppService } from './app.service';
import { ContextHeadersMiddleware } from './middleware/context-headers.middleware';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { NotFoundPageModule } from './modules/not-found-page/not-found-page.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { PageModule } from './modules/page/page.module';
import { RoutesModule } from './modules/routes/routes.module';
import { SurveyjsModule } from './modules/surveyjs-forms/surveyjs.module';

export const CMSBaseModule = CMS.Module.register(AppConfig);
export const TicketsBaseModule = Tickets.Module.register(AppConfig);
export const NotificationsBaseModule = Notifications.Module.register(AppConfig);
export const UsersBaseModule = Users.Module.register(AppConfig);
export const OrganizationsBaseModule = Organizations.Module.register(AppConfig);
export const CacheBaseModule = Cache.Module.register(AppConfig);
export const BillingAccountsBaseModule = BillingAccounts.Module.register(AppConfig);
export const ResourcesBaseModule = Resources.Module.register(AppConfig);
export const InvoicesBaseModule = Invoices.Module.register(AppConfig);
export const ArticlesBaseModule = Articles.Module.register(AppConfig);
export const SearchBaseModule = Search.Module.register(AppConfig);
export const ProductsBaseModule = Products.Module.register(AppConfig);
export const OrdersBaseModule = Orders.Module.register(AppConfig);
export const AuthModuleBaseModule = AuthModule.Module.register(AppConfig);

@Module({
    imports: [
        HttpModule,
        LoggerModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            ignoreEnvFile: process.env.NODE_ENV !== 'development',
            envFilePath: `.env.local`,
        }),

        CMSBaseModule,
        TicketsBaseModule,
        NotificationsBaseModule,
        UsersBaseModule,
        OrganizationsBaseModule,
        CacheBaseModule,
        BillingAccountsBaseModule,
        ResourcesBaseModule,
        InvoicesBaseModule,
        ArticlesBaseModule,
        SearchBaseModule,
        ProductsBaseModule,
        OrdersBaseModule,
        AuthModuleBaseModule,

        PageModule.register(AppConfig),
        RoutesModule.register(AppConfig),
        LoginPageModule.register(AppConfig),
        NotFoundPageModule.register(AppConfig),
        OrganizationsModule.register(AppConfig),
        SurveyjsModule.register(AppConfig),

        TicketList.Module.register(AppConfig),
        TicketDetails.Module.register(AppConfig),
        NotificationList.Module.register(AppConfig),
        NotificationDetailsBlockModule.register(AppConfig),
        Faq.Module.register(AppConfig),
        InvoiceList.Module.register(AppConfig),
        PaymentsSummaryBlockModule.register(AppConfig),
        PaymentsHistoryBlockModule.register(AppConfig),
        UserAccount.Module.register(AppConfig),
        TicketRecent.Module.register(AppConfig),
        ServiceListBlockModule.register(AppConfig),
        ServiceDetailsBlockModule.register(AppConfig),
        SurveyjsBlockModule.register(AppConfig),
        OrderListBlockModule.register(AppConfig),
        OrdersSummaryBlockModule.register(AppConfig),
        OrderDetailsBlockModule.register(AppConfig),
        QuickLinks.Module.register(AppConfig),
        CategoryListBlockModule.register(AppConfig),
        ArticleListBlockModule.register(AppConfig),
        CategoryBlockModule.register(AppConfig),
        ArticleBlockModule.register(AppConfig),
        ArticleSearchBlockModule.register(AppConfig),
        FeaturedServiceListBlockModule.register(AppConfig),
        // BLOCK REGISTER
    ],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useFactory: (reflector: Reflector, logger: LoggerService) => new Auth.Guard(reflector, logger),
            inject: [Reflector, LoggerService],
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ContextHeadersMiddleware).forRoutes('*');
    }
}
