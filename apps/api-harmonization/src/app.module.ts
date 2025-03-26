import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { LoggerModule } from '@o2s/utils.logger';

import {
    Articles,
    Auth,
    BillingAccounts,
    CMS,
    Cache,
    Invoices,
    Notifications,
    Organizations,
    Products,
    Resources,
    Search,
    Tickets,
    Users,
} from '@o2s/framework/modules';

// BLOCK IMPORT
import { configuration } from '@o2s/api-harmonization/config/configuration';

import { ArticleDetailsBlockModule } from '@o2s/api-harmonization/blocks/article-details/article-details.module';
import { ArticleListBlockModule } from '@o2s/api-harmonization/blocks/article-list/article-list.module';
import { FaqBlockModule } from '@o2s/api-harmonization/blocks/faq/faq.module';
import { InvoiceListBlockModule } from '@o2s/api-harmonization/blocks/invoice-list/invoice-list.module';
import { NotificationDetailsBlockModule } from '@o2s/api-harmonization/blocks/notification-details/notification-details.module';
import { NotificationListBlockModule } from '@o2s/api-harmonization/blocks/notification-list/notification-list.module';
import { PaymentsHistoryBlockModule } from '@o2s/api-harmonization/blocks/payments-history/payments-history.module';
import { PaymentsSummaryBlockModule } from '@o2s/api-harmonization/blocks/payments-summary/payments-summary.module';
import { ServiceDetailsBlockModule } from '@o2s/api-harmonization/blocks/service-details/service-details.module';
import { ServiceListBlockModule } from '@o2s/api-harmonization/blocks/service-list/service-list.module';
import { TicketDetailsBlockModule } from '@o2s/api-harmonization/blocks/ticket-details/ticket-details.module';
import { TicketListBlockModule } from '@o2s/api-harmonization/blocks/ticket-list/ticket-list.module';
import { TicketRecentBlockModule } from '@o2s/api-harmonization/blocks/ticket-recent/ticket-recent.module';
import { UserAccountBlockModule } from '@o2s/api-harmonization/blocks/user-account/user-account.module';

import { AppConfig } from './app.config';
import { AppService } from './app.service';
import { ContextHeadersMiddleware } from './middleware/context-headers.middleware';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { NotFoundPageModule } from './modules/not-found-page/not-found-page.module';
import { PageModule } from './modules/page/page.module';
import { RoutesModule } from './modules/routes/routes.module';

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

        PageModule.register(AppConfig),
        RoutesModule.register(AppConfig),
        LoginPageModule.register(AppConfig),
        NotFoundPageModule.register(AppConfig),

        TicketListBlockModule.register(AppConfig),
        TicketDetailsBlockModule.register(AppConfig),
        NotificationListBlockModule.register(AppConfig),
        NotificationDetailsBlockModule.register(AppConfig),
        FaqBlockModule.register(AppConfig),
        ArticleDetailsBlockModule.register(AppConfig),
        ArticleListBlockModule.register(AppConfig),
        InvoiceListBlockModule.register(AppConfig),
        PaymentsSummaryBlockModule.register(AppConfig),
        PaymentsHistoryBlockModule.register(AppConfig),
        UserAccountBlockModule.register(AppConfig),
        TicketRecentBlockModule.register(AppConfig),
        ServiceListBlockModule.register(AppConfig),
        ServiceDetailsBlockModule.register(AppConfig),
        // COMPONENT REGISTER
    ],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useClass: Auth.Guards.RolesGuard,
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ContextHeadersMiddleware).forRoutes('*');
    }
}
