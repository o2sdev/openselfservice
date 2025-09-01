import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { Auth } from '@o2s/configs.integrations';
import * as SurveyJs from '@o2s/modules.surveyjs/api-harmonization';

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

import * as ArticleList from '@o2s/blocks.article-list/api-harmonization';
import * as ArticleSearch from '@o2s/blocks.article-search/api-harmonization';
import * as Article from '@o2s/blocks.article/api-harmonization';
import * as CategoryList from '@o2s/blocks.category-list/api-harmonization';
import * as Category from '@o2s/blocks.category/api-harmonization';
import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as FeaturedServiceList from '@o2s/blocks.featured-service-list/api-harmonization';
import * as InvoiceList from '@o2s/blocks.invoice-list/api-harmonization';
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
import * as SurveyJsForm from '@o2s/blocks.surveyjs-form/api-harmonization';
import * as TicketDetails from '@o2s/blocks.ticket-details/api-harmonization';
import * as TicketList from '@o2s/blocks.ticket-list/api-harmonization';
import * as TicketRecent from '@o2s/blocks.ticket-recent/api-harmonization';
import * as UserAccount from '@o2s/blocks.user-account/api-harmonization';

import { configuration } from '@o2s/api-harmonization/config/configuration';

// BLOCK IMPORT
import { AppConfig } from './app.config';
import { AppService } from './app.service';
import { ContextHeadersMiddleware } from './middleware/context-headers.middleware';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { NotFoundPageModule } from './modules/not-found-page/not-found-page.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { PageModule } from './modules/page/page.module';
import { RoutesModule } from './modules/routes/routes.module';

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
        SurveyJs.Module.register(AppConfig),

        TicketList.Module.register(AppConfig),
        TicketDetails.Module.register(AppConfig),
        NotificationList.Module.register(AppConfig),
        NotificationDetails.Module.register(AppConfig),
        Faq.Module.register(AppConfig),
        InvoiceList.Module.register(AppConfig),
        PaymentsSummary.Module.register(AppConfig),
        PaymentsHistory.Module.register(AppConfig),
        UserAccount.Module.register(AppConfig),
        TicketRecent.Module.register(AppConfig),
        ServiceList.Module.register(AppConfig),
        ServiceDetails.Module.register(AppConfig),
        SurveyJsForm.Module.register(AppConfig),
        OrderList.Module.register(AppConfig),
        OrdersSummary.Module.register(AppConfig),
        OrderDetails.Module.register(AppConfig),
        QuickLinks.Module.register(AppConfig),
        Category.Module.register(AppConfig),
        CategoryList.Module.register(AppConfig),
        Article.Module.register(AppConfig),
        ArticleSearch.Module.register(AppConfig),
        FeaturedServiceList.Module.register(AppConfig),
        ArticleList.Module.register(AppConfig),
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
