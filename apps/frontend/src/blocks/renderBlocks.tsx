import { Modules } from '@o2s/api-harmonization';
import * as Faq from '@o2s/blocks.faq/frontend';
import * as InvoiceList from '@o2s/blocks.invoice-list/frontend';
import * as NotificationDetails from '@o2s/blocks.notification-details/frontend';
import * as NotificationList from '@o2s/blocks.notification-list/frontend';
import * as OrderDetails from '@o2s/blocks.order-details/frontend';
import * as OrderList from '@o2s/blocks.order-list/frontend';
import * as OrdersSummary from '@o2s/blocks.orders-summary/frontend';
import * as PaymentsHistory from '@o2s/blocks.payments-history/frontend';
import * as PaymentsSummary from '@o2s/blocks.payments-summary/frontend';
import * as QuickLinks from '@o2s/blocks.quick-links/frontend';
import * as ServiceDetails from '@o2s/blocks.service-details/frontend';
import * as TicketDetails from '@o2s/blocks.ticket-details/frontend';
import * as TicketList from '@o2s/blocks.ticket-list/frontend';
import * as TickeRecent from '@o2s/blocks.ticket-recent/frontend';
import * as UserAccount from '@o2s/blocks.user-account/frontend';
import { getLocale } from 'next-intl/server';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { auth } from '@/auth';

// BLOCK IMPORT
import { routing } from '@/i18n';

import { ArticleRenderer } from '@/blocks/Article/Article.renderer';
import { ArticleListRenderer } from '@/blocks/ArticleList/ArticleList.renderer';
import { ArticleSearchRenderer } from '@/blocks/ArticleSearch/ArticleSearch.renderer';
import { CategoryRenderer } from '@/blocks/Category/Category.renderer';
import { CategoryListRenderer } from '@/blocks/CategoryList/CategoryList.renderer';
import { FeaturedServiceListRenderer } from '@/blocks/FeaturedServiceList/FeaturedServiceList.renderer';
import { ServiceListRenderer } from '@/blocks/ServiceList/ServiceList.renderer';
import { SurveyJsRenderer } from '@/blocks/SurveyJs/SurveyJs.renderer';

import { onSignOut } from '../actions/signOut';

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[], slug: string[]) => {
    const session = await auth();
    const locale = await getLocale();

    return blocks.map((block) => {
        const blockProps = {
            id: block.id,
            slug: slug,
            locale: locale,
            accessToken: session?.accessToken,
            routing: routing,
        };

        switch (block.__typename as Modules.Page.Model.Blocks) {
            case 'TicketListBlock':
                return <TicketList.Renderer key={block.id} {...blockProps} />;
            case 'TicketRecentBlock':
                return <TickeRecent.Renderer key={block.id} {...blockProps} />;
            case 'TicketDetailsBlock':
                return <TicketDetails.Renderer key={block.id} {...blockProps} />;
            case 'NotificationListBlock':
                return <NotificationList.Renderer key={block.id} {...blockProps} />;
            case 'NotificationDetailsBlock':
                return <NotificationDetails.Renderer key={block.id} {...blockProps} />;
            case 'FaqBlock':
                return <Faq.Renderer key={block.id} {...blockProps} />;
            case 'InvoiceListBlock':
                return <InvoiceList.Renderer key={block.id} {...blockProps} />;
            case 'PaymentsSummaryBlock':
                return <PaymentsSummary.Renderer key={block.id} {...blockProps} />;
            case 'PaymentsHistoryBlock':
                return <PaymentsHistory.Renderer key={block.id} {...blockProps} />;
            case 'UserAccountBlock':
                return (
                    <UserAccount.Renderer
                        key={block.id}
                        {...blockProps}
                        userId={session?.user?.id}
                        onSignOut={onSignOut}
                    />
                );
            case 'ServiceListBlock':
                return <ServiceListRenderer key={block.id} id={block.id} accessToken={session?.accessToken} />;
            case 'ServiceDetailsBlock':
                return <ServiceDetails.Renderer key={block.id} {...blockProps} />;
            case 'SurveyJsBlock':
                return <SurveyJsRenderer key={block.id} id={block.id} accessToken={session?.accessToken} />;
            case 'OrderListBlock':
                return <OrderList.Renderer key={block.id} {...blockProps} />;
            case 'OrdersSummaryBlock':
                return <OrdersSummary.Renderer key={block.id} {...blockProps} />;
            case 'OrderDetailsBlock':
                return <OrderDetails.Renderer key={block.id} {...blockProps} />;
            case 'QuickLinksBlock':
                return <QuickLinks.Renderer key={block.id} {...blockProps} />;
            case 'CategoryListBlock':
                return (
                    <CategoryListRenderer slug={slug} key={block.id} id={block.id} accessToken={session?.accessToken} />
                );
            case 'ArticleListBlock':
                return (
                    <ArticleListRenderer slug={slug} key={block.id} id={block.id} accessToken={session?.accessToken} />
                );
            case 'CategoryBlock':
                return <CategoryRenderer slug={slug} key={block.id} id={block.id} accessToken={session?.accessToken} />;
            case 'ArticleBlock':
                return <ArticleRenderer slug={slug} key={block.id} id={block.id} accessToken={session?.accessToken} />;
            case 'ArticleSearchBlock':
                return (
                    <ArticleSearchRenderer
                        slug={slug}
                        key={block.id}
                        id={block.id}
                        accessToken={session?.accessToken}
                    />
                );
            case 'FeaturedServiceListBlock':
                return (
                    <FeaturedServiceListRenderer
                        slug={slug}
                        key={block.id}
                        id={block.id}
                        accessToken={session?.accessToken}
                    />
                );
            // BLOCK REGISTER
        }
    });
};
