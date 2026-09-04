import { HttpModule } from '@nestjs/axios';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, Reflector } from '@nestjs/core';
import { Auth, Documents } from '@o2s/configs.integrations';
import * as SurveyJs from '@o2s/modules.surveyjs/api-harmonization';

import { LoggerModule, LoggerService } from '@o2s/utils.logger';

import {
    Articles,
    Auth as AuthModule,
    BillingAccounts,
    CMS,
    Cache,
    Carts,
    Checkout,
    Customers,
    Invoices,
    Notifications,
    Orders,
    Organizations,
    Payments,
    Products,
    Resources,
    Search,
    Tickets,
    Users,
    createModule,
} from '@o2s/framework/modules';

import { AppConfig } from './app.config';
import { AppService } from './app.service';
import { blocks } from './blocks.config';
import { configuration } from './config/configuration';
import { ContextHeadersMiddleware } from './middleware/context-headers.middleware';
import { HealthModule } from './modules/health/health.module';
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
export const CartsBaseModule = Carts.Module.register(AppConfig);
export const CustomersBaseModule = Customers.Module.register(AppConfig);
export const PaymentsBaseModule = Payments.Module.register(AppConfig);
export const CheckoutBaseModule = Checkout.Module.register(AppConfig);
export const AuthModuleBaseModule = AuthModule.Module.register(AppConfig);

const DocumentsModule = createModule('documents');
export const DocumentsBaseModule = DocumentsModule.register({
    name: 'documents',
    service: Documents.Service,
    serviceImpl: Documents.MockedService,
    controller: Documents.Controller,
});

@Module({
    imports: [
        HttpModule.register({ global: true }),
        LoggerModule,
        ConfigModule.forRoot({
            isGlobal: true,
            load: [configuration],
            ignoreEnvFile: process.env.NODE_ENV !== 'development',
            envFilePath: `.env.local`,
        }),
        HealthModule,

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
        CartsBaseModule,
        CustomersBaseModule,
        PaymentsBaseModule,
        CheckoutBaseModule,
        AuthModuleBaseModule,

        DocumentsBaseModule,

        PageModule.register(AppConfig),
        RoutesModule.register(AppConfig),
        LoginPageModule.register(AppConfig),
        NotFoundPageModule.register(AppConfig),
        OrganizationsModule.register(AppConfig),
        SurveyJs.Module.register(AppConfig),

        ...blocks.map((block) => block.Module.register(AppConfig)),
    ],
    providers: [
        AppService,
        {
            provide: APP_GUARD,
            useFactory: (reflector: Reflector, logger: LoggerService, authService: AuthModule.Service) =>
                new Auth.Guards.RolesGuard(reflector, logger, authService),
            inject: [Reflector, LoggerService, AuthModule.Service],
        },
        {
            provide: APP_GUARD,
            useFactory: (reflector: Reflector, logger: LoggerService, authService: AuthModule.Service) =>
                new Auth.Guards.PermissionsGuard(reflector, logger, authService),
            inject: [Reflector, LoggerService, AuthModule.Service],
        },
    ],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        // Express 5 / path-to-regexp 8 requires a named wildcard; '*' alone is rejected
        // (Nest's LegacyRouteConverter would rewrite it to this and log a warning).
        consumer.apply(ContextHeadersMiddleware).forRoutes('{*path}');
    }
}
