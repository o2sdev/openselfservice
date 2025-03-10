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
    Resources,
    Tickets,
    Users,
} from '@o2s/framework/modules';

// COMPONENT IMPORT
import { configuration } from '@o2s/api-harmonization/config/configuration';

import { ArticleDetailsComponentModule } from '@o2s/api-harmonization/components/article-details/article-details.module';
import { ArticleListComponentModule } from '@o2s/api-harmonization/components/article-list/article-list.module';
import { FaqComponentModule } from '@o2s/api-harmonization/components/faq/faq.module';
import { InvoiceListComponentModule } from '@o2s/api-harmonization/components/invoice-list/invoice-list.module';
import { NotificationDetailsComponentModule } from '@o2s/api-harmonization/components/notification-details/notification-details.module';
import { NotificationListComponentModule } from '@o2s/api-harmonization/components/notification-list/notification-list.module';
import { PaymentsHistoryComponentModule } from '@o2s/api-harmonization/components/payments-history/payments-history.module';
import { PaymentsSummaryComponentModule } from '@o2s/api-harmonization/components/payments-summary/payments-summary.module';
import { TicketDetailsComponentModule } from '@o2s/api-harmonization/components/ticket-details/ticket-details.module';
import { TicketListComponentModule } from '@o2s/api-harmonization/components/ticket-list/ticket-list.module';
import { TicketRecentComponentModule } from '@o2s/api-harmonization/components/ticket-recent/ticket-recent.module';
import { UserAccountComponentModule } from '@o2s/api-harmonization/components/user-account/user-account.module';

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

        PageModule.register(AppConfig),
        RoutesModule.register(AppConfig),
        LoginPageModule.register(AppConfig),
        NotFoundPageModule.register(AppConfig),

        TicketListComponentModule.register(AppConfig),
        TicketDetailsComponentModule.register(AppConfig),
        NotificationListComponentModule.register(AppConfig),
        NotificationDetailsComponentModule.register(AppConfig),
        FaqComponentModule.register(AppConfig),
        Articles.Module.register(AppConfig),
        ArticleDetailsComponentModule.register(AppConfig),
        ArticleListComponentModule.register(AppConfig),
        Resources.Module.register(AppConfig),
        Invoices.Module.register(AppConfig),
        InvoiceListComponentModule.register(AppConfig),
        PaymentsSummaryComponentModule.register(AppConfig),
        PaymentsHistoryComponentModule.register(AppConfig),
        UserAccountComponentModule.register(AppConfig),
        TicketRecentComponentModule.register(AppConfig),
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
