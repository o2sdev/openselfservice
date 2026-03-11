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
} from '@o2s/framework/modules';
import { filterModules, registerIf, validateApiConfig } from '@o2s/framework/modules';

import * as ArticleList from '@o2s/blocks.article-list/api-harmonization';
import * as ArticleSearch from '@o2s/blocks.article-search/api-harmonization';
import * as Article from '@o2s/blocks.article/api-harmonization';
import * as BentoGrid from '@o2s/blocks.bento-grid/api-harmonization';
import * as CategoryList from '@o2s/blocks.category-list/api-harmonization';
import * as Category from '@o2s/blocks.category/api-harmonization';
import * as CtaSection from '@o2s/blocks.cta-section/api-harmonization';
import * as Faq from '@o2s/blocks.faq/api-harmonization';
import * as FeatureSectionGrid from '@o2s/blocks.feature-section-grid/api-harmonization';
import * as FeatureSection from '@o2s/blocks.feature-section/api-harmonization';
import * as FeaturedServiceList from '@o2s/blocks.featured-service-list/api-harmonization';
import * as HeroSection from '@o2s/blocks.hero-section/api-harmonization';
import * as InvoiceList from '@o2s/blocks.invoice-list/api-harmonization';
import * as MediaSection from '@o2s/blocks.media-section/api-harmonization';
import * as NotificationDetails from '@o2s/blocks.notification-details/api-harmonization';
import * as NotificationList from '@o2s/blocks.notification-list/api-harmonization';
import * as NotificationSummary from '@o2s/blocks.notification-summary/api-harmonization';
import * as OrderDetails from '@o2s/blocks.order-details/api-harmonization';
import * as OrderList from '@o2s/blocks.order-list/api-harmonization';
import * as OrdersSummary from '@o2s/blocks.orders-summary/api-harmonization';
import * as PaymentsHistory from '@o2s/blocks.payments-history/api-harmonization';
import * as PaymentsSummary from '@o2s/blocks.payments-summary/api-harmonization';
import * as PricingSection from '@o2s/blocks.pricing-section/api-harmonization';
import * as ProductDetails from '@o2s/blocks.product-details/api-harmonization';
import * as ProductList from '@o2s/blocks.product-list/api-harmonization';
import * as QuickLinks from '@o2s/blocks.quick-links/api-harmonization';
import * as RecommendedProducts from '@o2s/blocks.recommended-products/api-harmonization';
import * as ServiceDetails from '@o2s/blocks.service-details/api-harmonization';
import * as ServiceList from '@o2s/blocks.service-list/api-harmonization';
import * as SurveyJsForm from '@o2s/blocks.surveyjs-form/api-harmonization';
import * as TicketDetails from '@o2s/blocks.ticket-details/api-harmonization';
import * as TicketList from '@o2s/blocks.ticket-list/api-harmonization';
import * as TicketRecent from '@o2s/blocks.ticket-recent/api-harmonization';
import * as TicketSummary from '@o2s/blocks.ticket-summary/api-harmonization';
import * as UserAccount from '@o2s/blocks.user-account/api-harmonization';

// BLOCK IMPORT

import { AppConfig } from './app.config';
import { AppService } from './app.service';
import { configuration } from './config/configuration';
import { ContextHeadersMiddleware } from './middleware/context-headers.middleware';
import { HealthModule } from './modules/health/health.module';
import { LoginPageModule } from './modules/login-page/login-page.module';
import { NotFoundPageModule } from './modules/not-found-page/not-found-page.module';
import { OrganizationsModule } from './modules/organizations/organizations.module';
import { PageModule } from './modules/page/page.module';
import { RoutesModule } from './modules/routes/routes.module';

validateApiConfig(AppConfig);

// Core modules (always registered)
const coreModules = [CMS.Module.register(AppConfig), AuthModule.Module.register(AppConfig)];

// Optional base modules (registered only when their slot is configured)
const optionalBaseModules = filterModules([
    registerIf(AppConfig, 'tickets', (c) => Tickets.Module.register(c)),
    registerIf(AppConfig, 'notifications', (c) => Notifications.Module.register(c)),
    registerIf(AppConfig, 'users', (c) => Users.Module.register(c)),
    registerIf(AppConfig, 'organizations', (c) => Organizations.Module.register(c)),
    registerIf(AppConfig, 'cache', (c) => Cache.Module.register(c)),
    registerIf(AppConfig, 'billingAccounts', (c) => BillingAccounts.Module.register(c)),
    registerIf(AppConfig, ['resources', 'products'], (c) => Resources.Module.register(c)),
    registerIf(AppConfig, 'invoices', (c) => Invoices.Module.register(c)),
    registerIf(AppConfig, 'articles', (c) => Articles.Module.register(c)),
    registerIf(AppConfig, 'search', (c) => Search.Module.register(c)),
    registerIf(AppConfig, 'products', (c) => Products.Module.register(c)),
    registerIf(AppConfig, 'orders', (c) => Orders.Module.register(c)),
    registerIf(AppConfig, 'carts', (c) => Carts.Module.register(c)),
    registerIf(AppConfig, 'customers', (c) => Customers.Module.register(c)),
    registerIf(AppConfig, 'payments', (c) => Payments.Module.register(c)),
    registerIf(AppConfig, 'checkout', (c) => Checkout.Module.register(c)),
]);

// Optional block modules (registered only when their integration dependencies are configured)
const blockModules = filterModules([
    registerIf(AppConfig, 'tickets', (c) => TicketList.Module.register(c)),
    registerIf(AppConfig, 'tickets', (c) => TicketDetails.Module.register(c)),
    registerIf(AppConfig, 'tickets', (c) => TicketRecent.Module.register(c)),
    registerIf(AppConfig, 'tickets', (c) => TicketSummary.Module.register(c)),
    registerIf(AppConfig, 'tickets', (c) => SurveyJs.Module.register(c)),
    registerIf(AppConfig, 'tickets', (c) => SurveyJsForm.Module.register(c)),
    registerIf(AppConfig, 'notifications', (c) => NotificationList.Module.register(c)),
    registerIf(AppConfig, 'notifications', (c) => NotificationDetails.Module.register(c)),
    registerIf(AppConfig, 'notifications', (c) => NotificationSummary.Module.register(c)),
    registerIf(AppConfig, 'invoices', (c) => InvoiceList.Module.register(c)),
    registerIf(AppConfig, 'invoices', (c) => PaymentsSummary.Module.register(c)),
    registerIf(AppConfig, 'invoices', (c) => PaymentsHistory.Module.register(c)),
    registerIf(AppConfig, 'users', (c) => UserAccount.Module.register(c)),
    registerIf(AppConfig, 'resources', (c) => ServiceList.Module.register(c)),
    registerIf(AppConfig, 'resources', (c) => ServiceDetails.Module.register(c)),
    registerIf(AppConfig, 'resources', (c) => FeaturedServiceList.Module.register(c)),
    registerIf(AppConfig, 'orders', (c) => OrderList.Module.register(c)),
    registerIf(AppConfig, 'orders', (c) => OrdersSummary.Module.register(c)),
    registerIf(AppConfig, 'orders', (c) => OrderDetails.Module.register(c)),
    registerIf(AppConfig, 'products', (c) => ProductList.Module.register(c)),
    registerIf(AppConfig, 'products', (c) => ProductDetails.Module.register(c)),
    registerIf(AppConfig, 'products', (c) => RecommendedProducts.Module.register(c)),
    registerIf(AppConfig, 'articles', (c) => Article.Module.register(c)),
    registerIf(AppConfig, 'articles', (c) => ArticleSearch.Module.register(c)),
    registerIf(AppConfig, 'articles', (c) => ArticleList.Module.register(c)),
    registerIf(AppConfig, 'articles', (c) => Category.Module.register(c)),
    registerIf(AppConfig, 'articles', (c) => CategoryList.Module.register(c)),
    registerIf(AppConfig, 'organizations', (c) => OrganizationsModule.register(c)),
]);

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

        ...coreModules,
        ...optionalBaseModules,

        PageModule.register(AppConfig),
        RoutesModule.register(AppConfig),
        LoginPageModule.register(AppConfig),
        NotFoundPageModule.register(AppConfig),

        // CMS-only blocks (always available)
        Faq.Module.register(AppConfig),
        QuickLinks.Module.register(AppConfig),
        HeroSection.Module.register(AppConfig),
        BentoGrid.Module.register(AppConfig),
        FeatureSection.Module.register(AppConfig),
        CtaSection.Module.register(AppConfig),
        MediaSection.Module.register(AppConfig),
        PricingSection.Module.register(AppConfig),
        FeatureSectionGrid.Module.register(AppConfig),

        // Optional block modules
        ...blockModules,
        // BLOCK REGISTER
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
        consumer.apply(ContextHeadersMiddleware).forRoutes('*');
    }
}
