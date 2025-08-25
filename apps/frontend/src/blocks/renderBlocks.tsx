'use server';

import { Modules } from '@o2s/api-harmonization';
import * as ArticleList from '@o2s/blocks.article-list/frontend';
import * as ArticleSearch from '@o2s/blocks.article-search/frontend';
import * as Article from '@o2s/blocks.article/frontend';
import * as CategoryList from '@o2s/blocks.category-list/frontend';
import * as Category from '@o2s/blocks.category/frontend';
import * as Faq from '@o2s/blocks.faq/frontend';
import * as FeaturedServiceList from '@o2s/blocks.featured-service-list/frontend';
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
import * as ServiceList from '@o2s/blocks.service-list/frontend';
import * as SurveyJsForm from '@o2s/blocks.surveyjs-form/frontend';
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
                return <ServiceList.Renderer key={block.id} {...blockProps} />;
            case 'ServiceDetailsBlock':
                return <ServiceDetails.Renderer key={block.id} {...blockProps} />;
            case 'SurveyJsBlock':
                return <SurveyJsForm.Renderer key={block.id} {...blockProps} />;
            case 'OrderListBlock':
                return <OrderList.Renderer key={block.id} {...blockProps} />;
            case 'OrdersSummaryBlock':
                return <OrdersSummary.Renderer key={block.id} {...blockProps} />;
            case 'OrderDetailsBlock':
                return <OrderDetails.Renderer key={block.id} {...blockProps} />;
            case 'QuickLinksBlock':
                return <QuickLinks.Renderer key={block.id} {...blockProps} />;
            case 'CategoryListBlock':
                return <CategoryList.Renderer key={block.id} {...blockProps} />;
            case 'ArticleListBlock':
                return <ArticleList.Renderer key={block.id} {...blockProps} />;
            case 'CategoryBlock':
                return <Category.Renderer key={block.id} {...blockProps} renderBlocks={renderBlocks} />;
            case 'ArticleBlock':
                return <Article.Renderer key={block.id} {...blockProps} />;
            case 'ArticleSearchBlock':
                return <ArticleSearch.Renderer key={block.id} {...blockProps} />;
            case 'FeaturedServiceListBlock':
                return <FeaturedServiceList.Renderer key={block.id} {...blockProps} />;
            // BLOCK REGISTER
        }
    });
};
