'use server';

import { Modules } from '@o2s/api-harmonization';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { ArticleRenderer } from '@/blocks/Article/Article.renderer';
import { ArticleListRenderer } from '@/blocks/ArticleList/ArticleList.renderer';
import { ArticleSearchRenderer } from '@/blocks/ArticleSearch/ArticleSearch.renderer';
import { CategoryRenderer } from '@/blocks/Category/Category.renderer';
import { CategoryListRenderer } from '@/blocks/CategoryList/CategoryList.renderer';
import { FaqRenderer } from '@/blocks/Faq/Faq.renderer';
import { FeaturedServiceListRenderer } from '@/blocks/FeaturedServiceList/FeaturedServiceList.renderer';
import { InvoiceListRenderer } from '@/blocks/InvoiceList/InvoiceList.renderer';
import { NotificationDetailsRenderer } from '@/blocks/NotificationDetails/NotificationDetails.renderer';
import { NotificationListRenderer } from '@/blocks/NotificationList/NotificationList.renderer';
import { OrderDetailsRenderer } from '@/blocks/OrderDetails/OrderDetails.renderer';
import { OrderListRenderer } from '@/blocks/OrderList/OrderList.renderer';
import { OrdersSummaryRenderer } from '@/blocks/OrdersSummary/OrdersSummary.renderer';
import { PaymentsHistoryRenderer } from '@/blocks/PaymentsHistory/PaymentsHistory.renderer';
import { PaymentsSummaryRenderer } from '@/blocks/PaymentsSummary/PaymentsSummary.renderer';
import { QuickLinksRenderer } from '@/blocks/QuickLinks/QuickLinks.renderer';
import { ServiceDetailsRenderer } from '@/blocks/ServiceDetails/ServiceDetails.renderer';
import { ServiceListRenderer } from '@/blocks/ServiceList/ServiceList.renderer';
import { SurveyJsRenderer } from '@/blocks/SurveyJs/SurveyJs.renderer';
import { TicketDetailsRenderer } from '@/blocks/TicketDetails/TicketDetails.renderer';
import { TicketListRenderer } from '@/blocks/TicketList/TicketList.renderer';
import { TicketRecentRenderer } from '@/blocks/TicketRecent/TicketRecent.renderer';
import { UserAccountRenderer } from '@/blocks/UserAccount/UserAccount.renderer';

// BLOCK IMPORT

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[], slug: string[], accessToken?: string) => {
    return blocks.map((block) => {
        switch (block.__typename as Modules.Page.Model.Blocks) {
            case 'TicketListBlock':
                return <TicketListRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'TicketRecentBlock':
                return <TicketRecentRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'TicketDetailsBlock':
                return <TicketDetailsRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'NotificationListBlock':
                return <NotificationListRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'NotificationDetailsBlock':
                return (
                    <NotificationDetailsRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />
                );
            case 'FaqBlock':
                return <FaqRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'InvoiceListBlock':
                return <InvoiceListRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'PaymentsSummaryBlock':
                return <PaymentsSummaryRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'PaymentsHistoryBlock':
                return <PaymentsHistoryRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'UserAccountBlock':
                return <UserAccountRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'ServiceListBlock':
                return <ServiceListRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'ServiceDetailsBlock':
                return <ServiceDetailsRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'SurveyJsBlock':
                return <SurveyJsRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'OrderListBlock':
                return <OrderListRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'OrdersSummaryBlock':
                return <OrdersSummaryRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'OrderDetailsBlock':
                return <OrderDetailsRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'QuickLinksBlock':
                return <QuickLinksRenderer key={block.id} slug={slug} id={block.id} accessToken={accessToken} />;
            case 'CategoryListBlock':
                return <CategoryListRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'ArticleListBlock':
                return <ArticleListRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'CategoryBlock':
                return <CategoryRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'ArticleBlock':
                return <ArticleRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'ArticleSearchBlock':
                return <ArticleSearchRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'FeaturedServiceListBlock':
                return (
                    <FeaturedServiceListRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />
                );
            // BLOCK REGISTER
        }
    });
};
