import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { LoggerModule, LoggerService } from '@o2s/utils.logger';

import {
    Articles,
    Auth,
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

import { configuration } from '@o2s/api-harmonization/config/configuration';

import { ArticleListBlockModule } from '@o2s/api-harmonization/blocks/article-list/article-list.module';
import { ArticleBlockModule } from '@o2s/api-harmonization/blocks/article/article.module';
import { CategoryListBlockModule } from '@o2s/api-harmonization/blocks/category-list/category-list.module';
import { CategoryBlockModule } from '@o2s/api-harmonization/blocks/category/category.module';
import { FaqBlockModule } from '@o2s/api-harmonization/blocks/faq/faq.module';
import { InvoiceListBlockModule } from '@o2s/api-harmonization/blocks/invoice-list/invoice-list.module';
import { NotificationDetailsBlockModule } from '@o2s/api-harmonization/blocks/notification-details/notification-details.module';
import { NotificationListBlockModule } from '@o2s/api-harmonization/blocks/notification-list/notification-list.module';
import { OrderDetailsBlockModule } from '@o2s/api-harmonization/blocks/order-details/order-details.module';
import { OrderListBlockModule } from '@o2s/api-harmonization/blocks/order-list/order-list.module';
import { OrdersSummaryBlockModule } from '@o2s/api-harmonization/blocks/orders-summary/orders-summary.module';
import { PaymentsHistoryBlockModule } from '@o2s/api-harmonization/blocks/payments-history/payments-history.module';
import { PaymentsSummaryBlockModule } from '@o2s/api-harmonization/blocks/payments-summary/payments-summary.module';
import { QuickLinksBlockModule } from '@o2s/api-harmonization/blocks/quick-links/quick-links.module';
import { ServiceDetailsBlockModule } from '@o2s/api-harmonization/blocks/service-details/service-details.module';
import { ServiceListBlockModule } from '@o2s/api-harmonization/blocks/service-list/service-list.module';
import { SurveyjsBlockModule } from '@o2s/api-harmonization/blocks/surveyjs/surveyjs.module';
import { TicketDetailsBlockModule } from '@o2s/api-harmonization/blocks/ticket-details/ticket-details.module';
import { TicketListBlockModule } from '@o2s/api-harmonization/blocks/ticket-list/ticket-list.module';
import { TicketRecentBlockModule } from '@o2s/api-harmonization/blocks/ticket-recent/ticket-recent.module';
import { UserAccountBlockModule } from '@o2s/api-harmonization/blocks/user-account/user-account.module';

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

        CMS.Module.register(AppConfig),
        Tickets.Module.register(AppConfig),
        Notifications.Module.register(AppConfig),
        Users.Module.register(AppConfig),
        Organizations.Module.register(AppConfig),
        Cache.Module.register(AppConfig),
        BillingAccounts.Module.register(AppConfig),
        Resources.Module.register(AppConfig),
        Invoices.Module.register(AppConfig),
        Articles.Module.register(AppConfig),
        Search.Module.register(AppConfig),
        Products.Module.register(AppConfig),
        Orders.Module.register(AppConfig),

        PageModule.register(AppConfig),
        RoutesModule.register(AppConfig),
        LoginPageModule.register(AppConfig),
        NotFoundPageModule.register(AppConfig),
        OrganizationsModule.register(AppConfig),
        SurveyjsModule.register(AppConfig),

        TicketListBlockModule.register(AppConfig),
        TicketDetailsBlockModule.register(AppConfig),
        NotificationListBlockModule.register(AppConfig),
        NotificationDetailsBlockModule.register(AppConfig),
        FaqBlockModule.register(AppConfig),
        InvoiceListBlockModule.register(AppConfig),
        PaymentsSummaryBlockModule.register(AppConfig),
        PaymentsHistoryBlockModule.register(AppConfig),
        UserAccountBlockModule.register(AppConfig),
        TicketRecentBlockModule.register(AppConfig),
        ServiceListBlockModule.register(AppConfig),
        ServiceDetailsBlockModule.register(AppConfig),
        SurveyjsBlockModule.register(AppConfig),
        OrderListBlockModule.register(AppConfig),
        OrdersSummaryBlockModule.register(AppConfig),
        OrderDetailsBlockModule.register(AppConfig),
        QuickLinksBlockModule.register(AppConfig),
        CategoryListBlockModule.register(AppConfig),
        ArticleListBlockModule.register(AppConfig),
        CategoryBlockModule.register(AppConfig),
        ArticleBlockModule.register(AppConfig),
        // BLOCK REGISTER
    ],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useFactory: (reflector: Reflector, logger: LoggerService) => new Auth.Guards.RolesGuard(reflector, logger),
            inject: [Reflector, LoggerService],
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ContextHeadersMiddleware).forRoutes('*');
    }
}
