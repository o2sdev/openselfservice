'use server';

import { Modules } from '@o2s/api-harmonization';
import * as ArticleList from '@o2s/blocks.article-list/frontend';
import * as ArticleSearch from '@o2s/blocks.article-search/frontend';
import * as Article from '@o2s/blocks.article/frontend';
import * as BentoGrid from '@o2s/blocks.bento-grid/frontend';
import * as Cart from '@o2s/blocks.cart/frontend';
import * as CategoryList from '@o2s/blocks.category-list/frontend';
import * as Category from '@o2s/blocks.category/frontend';
import * as CheckoutBillingPayment from '@o2s/blocks.checkout-billing-payment/frontend';
import * as CheckoutCompanyData from '@o2s/blocks.checkout-company-data/frontend';
import * as CheckoutShippingAddress from '@o2s/blocks.checkout-shipping-address/frontend';
import * as CheckoutSummary from '@o2s/blocks.checkout-summary/frontend';
import * as CtaSection from '@o2s/blocks.cta-section/frontend';
import * as Faq from '@o2s/blocks.faq/frontend';
import * as FeatureSectionGrid from '@o2s/blocks.feature-section-grid/frontend';
import * as FeatureSection from '@o2s/blocks.feature-section/frontend';
import * as FeaturedServiceList from '@o2s/blocks.featured-service-list/frontend';
import * as HeroSection from '@o2s/blocks.hero-section/frontend';
import * as InvoiceList from '@o2s/blocks.invoice-list/frontend';
import * as MediaSection from '@o2s/blocks.media-section/frontend';
import * as NotificationDetails from '@o2s/blocks.notification-details/frontend';
import * as NotificationList from '@o2s/blocks.notification-list/frontend';
import * as NotificationSummary from '@o2s/blocks.notification-summary/frontend';
import * as OrderConfirmation from '@o2s/blocks.order-confirmation/frontend';
import * as OrderDetails from '@o2s/blocks.order-details/frontend';
import * as OrderList from '@o2s/blocks.order-list/frontend';
import * as OrdersSummary from '@o2s/blocks.orders-summary/frontend';
import * as PaymentsHistory from '@o2s/blocks.payments-history/frontend';
import * as PaymentsSummary from '@o2s/blocks.payments-summary/frontend';
import * as PricingSection from '@o2s/blocks.pricing-section/frontend';
import * as ProductDetails from '@o2s/blocks.product-details/frontend';
import * as ProductList from '@o2s/blocks.product-list/frontend';
import * as QuickLinks from '@o2s/blocks.quick-links/frontend';
import * as RecommendedProducts from '@o2s/blocks.recommended-products/frontend';
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

import { CMS, Models } from '@o2s/framework/modules';

import { Container } from '@o2s/ui/components/Container';

import { auth } from '@/auth';

import { routing } from '@/i18n';

import { onSignOut } from '../actions/signOut';

type BlockProps = Models.BlockProps.FullBlockProps<typeof routing> & {
    routing: typeof routing;
};

type BlockRenderer = (blockProps: BlockProps) => React.ReactNode;

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

const BLOCK_REGISTRY = {
    TicketListBlock: (blockProps) => <TicketList.Renderer {...blockProps} />,
    TicketRecentBlock: (blockProps) => <TickeRecent.Renderer {...blockProps} />,
    TicketDetailsBlock: (blockProps) => <TicketDetails.Renderer {...blockProps} />,
    NotificationListBlock: (blockProps) => <NotificationList.Renderer {...blockProps} />,
    NotificationDetailsBlock: (blockProps) => <NotificationDetails.Renderer {...blockProps} />,
    FaqBlock: (blockProps) => <Faq.Renderer {...blockProps} />,
    InvoiceListBlock: (blockProps) => <InvoiceList.Renderer {...blockProps} />,
    PaymentsSummaryBlock: (blockProps) => <PaymentsSummary.Renderer {...blockProps} />,
    PaymentsHistoryBlock: (blockProps) => <PaymentsHistory.Renderer {...blockProps} />,
    UserAccountBlock: (blockProps) => <UserAccount.Renderer {...blockProps} onSignOut={onSignOut} />,
    ServiceListBlock: (blockProps) => <ServiceList.Renderer {...blockProps} />,
    ServiceDetailsBlock: (blockProps) => <ServiceDetails.Renderer {...blockProps} />,
    SurveyJsBlock: (blockProps) => <SurveyJsForm.Renderer {...blockProps} />,
    OrderListBlock: (blockProps) => <OrderList.Renderer {...blockProps} />,
    OrdersSummaryBlock: (blockProps) => <OrdersSummary.Renderer {...blockProps} />,
    OrderDetailsBlock: (blockProps) => <OrderDetails.Renderer {...blockProps} />,
    QuickLinksBlock: (blockProps) => <QuickLinks.Renderer {...blockProps} />,
    CategoryListBlock: (blockProps) => <CategoryList.Renderer {...blockProps} />,
    ArticleListBlock: (blockProps) => <ArticleList.Renderer {...blockProps} />,
    CategoryBlock: (blockProps) => <Category.Renderer {...blockProps} renderBlocks={renderBlocks} />,
    ArticleBlock: (blockProps) => <Article.Renderer {...blockProps} />,
    ArticleSearchBlock: (blockProps) => <ArticleSearch.Renderer {...blockProps} />,
    FeaturedServiceListBlock: (blockProps) => <FeaturedServiceList.Renderer {...blockProps} />,
    ProductListBlock: (blockProps) => <ProductList.Renderer {...blockProps} />,
    NotificationSummaryBlock: (blockProps) => <NotificationSummary.Renderer {...blockProps} />,
    TicketSummaryBlock: (blockProps) => <TicketSummary.Renderer {...blockProps} />,
    ProductDetailsBlock: (blockProps) => <ProductDetails.Renderer {...blockProps} />,
    RecommendedProductsBlock: (blockProps) => <RecommendedProducts.Renderer {...blockProps} />,
    OrderConfirmationBlock: (blockProps) => <OrderConfirmation.Renderer {...blockProps} />,
    CheckoutBillingPaymentBlock: (blockProps) => <CheckoutBillingPayment.Renderer {...blockProps} />,
    CheckoutCompanyDataBlock: (blockProps) => <CheckoutCompanyData.Renderer {...blockProps} />,
    CheckoutShippingAddressBlock: (blockProps) => <CheckoutShippingAddress.Renderer {...blockProps} />,
    CheckoutSummaryBlock: (blockProps) => <CheckoutSummary.Renderer {...blockProps} />,
    CartBlock: (blockProps) => <Cart.Renderer {...blockProps} />,
    HeroSectionBlock: (blockProps) => <HeroSection.Renderer {...blockProps} />,
    BentoGridBlock: (blockProps) => <BentoGrid.Renderer {...blockProps} />,
    FeatureSectionBlock: (blockProps) => <FeatureSection.Renderer {...blockProps} />,
    CtaSectionBlock: (blockProps) => <CtaSection.Renderer {...blockProps} />,
    MediaSectionBlock: (blockProps) => <MediaSection.Renderer {...blockProps} />,
    PricingSectionBlock: (blockProps) => <PricingSection.Renderer {...blockProps} />,
    FeatureSectionGridBlock: (blockProps) => <FeatureSectionGrid.Renderer {...blockProps} />,
    // BLOCK REGISTER
} satisfies Record<Modules.Page.Model.Blocks, BlockRenderer>;

const isRegisteredBlock = (typename: string): typename is keyof typeof BLOCK_REGISTRY => {
    return typename in BLOCK_REGISTRY;
};

const renderBlock = (typename: string, blockProps: BlockProps) => {
    if (!isRegisteredBlock(typename)) {
        console.warn(`[O2S] Unknown block type: "${typename}". Register it in renderBlocks.tsx`);
        return null;
    }

    return BLOCK_REGISTRY[typename](blockProps);
};
