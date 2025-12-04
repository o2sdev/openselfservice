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
import * as NotificationSummary from '@o2s/blocks.notification-summary/frontend';
import * as OrderDetails from '@o2s/blocks.order-details/frontend';
import * as OrderList from '@o2s/blocks.order-list/frontend';
import * as OrdersSummary from '@o2s/blocks.orders-summary/frontend';
import * as PaymentsHistory from '@o2s/blocks.payments-history/frontend';
import * as PaymentsSummary from '@o2s/blocks.payments-summary/frontend';
import * as ProductList from '@o2s/blocks.product-list/frontend';
import * as QuickLinks from '@o2s/blocks.quick-links/frontend';
import * as ServiceDetails from '@o2s/blocks.service-details/frontend';
import * as ServiceList from '@o2s/blocks.service-list/frontend';
import * as SurveyJsForm from '@o2s/blocks.surveyjs-form/frontend';
import * as TicketDetails from '@o2s/blocks.ticket-details/frontend';
import * as TicketList from '@o2s/blocks.ticket-list/frontend';
import * as TickeRecent from '@o2s/blocks.ticket-recent/frontend';
import * as TicketSummary from '@o2s/blocks.ticket-summary/frontend';
import * as UserAccount from '@o2s/blocks.user-account/frontend';
// BLOCK IMPORT
import { getLocale } from 'next-intl/server';
import { draftMode } from 'next/headers';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { Container } from '@o2s/ui/components/Container';

import { auth } from '@/auth';

import { routing } from '@/i18n';

import { onSignOut } from '../actions/signOut';

interface BlockProps {
    id: string;
    slug: string[];
    locale: string;
    accessToken: string | undefined;
    userId: string | undefined;
    routing: typeof routing;
    hasPriority?: boolean;
    isDraftModeEnabled?: boolean;
}

export const renderBlocks = async (blocks: CMS.Model.Page.SlotBlock[], slug: string[]) => {
    const session = await auth();
    const locale = await getLocale();
    const { isEnabled: isDraftModeEnabled } = await draftMode();

    return blocks.map((block, index) => {
        // decides whether the block is above the fold,
        // e.g., to disable image lazy loading
        const hasPriority = index < 2;

        const blockProps: BlockProps = {
            id: block.id,
            slug: slug,
            locale: locale,
            accessToken: session?.accessToken,
            userId: session?.user?.id,
            routing: routing,
            hasPriority,
            isDraftModeEnabled: isDraftModeEnabled,
        };

        return (
            <Container
                variant={block.layout?.variant}
                spacing={block.layout?.spacing}
                background={block.layout?.background}
                theme={block.layout?.theme}
                key={block.id}
            >
                {renderBlock(block.__typename, blockProps)}
            </Container>
        );
    });
};

const renderBlock = (typename: string, blockProps: BlockProps) => {
    switch (typename as Modules.Page.Model.Blocks) {
        case 'TicketListBlock':
            return <TicketList.Renderer {...blockProps} />;
        case 'TicketRecentBlock':
            return <TickeRecent.Renderer {...blockProps} />;
        case 'TicketDetailsBlock':
            return <TicketDetails.Renderer {...blockProps} />;
        case 'NotificationListBlock':
            return <NotificationList.Renderer {...blockProps} />;
        case 'NotificationDetailsBlock':
            return <NotificationDetails.Renderer {...blockProps} />;
        case 'FaqBlock':
            return <Faq.Renderer {...blockProps} />;
        case 'InvoiceListBlock':
            return <InvoiceList.Renderer {...blockProps} />;
        case 'PaymentsSummaryBlock':
            return <PaymentsSummary.Renderer {...blockProps} />;
        case 'PaymentsHistoryBlock':
            return <PaymentsHistory.Renderer {...blockProps} />;
        case 'UserAccountBlock':
            return <UserAccount.Renderer {...blockProps} onSignOut={onSignOut} />;
        case 'ServiceListBlock':
            return <ServiceList.Renderer {...blockProps} />;
        case 'ServiceDetailsBlock':
            return <ServiceDetails.Renderer {...blockProps} />;
        case 'SurveyJsBlock':
            return <SurveyJsForm.Renderer {...blockProps} />;
        case 'OrderListBlock':
            return <OrderList.Renderer {...blockProps} />;
        case 'OrdersSummaryBlock':
            return <OrdersSummary.Renderer {...blockProps} />;
        case 'OrderDetailsBlock':
            return <OrderDetails.Renderer {...blockProps} />;
        case 'QuickLinksBlock':
            return <QuickLinks.Renderer {...blockProps} />;
        case 'CategoryListBlock':
            return <CategoryList.Renderer {...blockProps} />;
        case 'ArticleListBlock':
            return <ArticleList.Renderer {...blockProps} />;
        case 'CategoryBlock':
            return <Category.Renderer {...blockProps} renderBlocks={renderBlocks} />;
        case 'ArticleBlock':
            return <Article.Renderer {...blockProps} />;
        case 'ArticleSearchBlock':
            return <ArticleSearch.Renderer {...blockProps} />;
        case 'FeaturedServiceListBlock':
            return <FeaturedServiceList.Renderer {...blockProps} />;
        case 'ProductListBlock':
            return <ProductList.Renderer {...blockProps} />;
        case 'NotificationSummaryBlock':
            return <NotificationSummary.Renderer {...blockProps} />;
        case 'TicketSummaryBlock':
            return <TicketSummary.Renderer {...blockProps} />;
        // BLOCK REGISTER
        default:
            return null;
    }
};
