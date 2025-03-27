import { Modules } from '@o2s/api-harmonization';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { FaqRenderer } from '@/blocks/Faq/Faq.renderer';
import { InvoiceListRenderer } from '@/blocks/InvoiceList/InvoiceList.renderer';
import { NotificationDetailsRenderer } from '@/blocks/NotificationDetails/NotificationDetails.renderer';
import { NotificationListRenderer } from '@/blocks/NotificationList/NotificationList.renderer';
import { PaymentsHistoryRenderer } from '@/blocks/PaymentsHistory/PaymentsHistory.renderer';
import { PaymentsSummaryRenderer } from '@/blocks/PaymentsSummary/PaymentsSummary.renderer';
import { ServiceDetailsRenderer } from '@/blocks/ServiceDetails/ServiceDetails.renderer';
import { ServiceListRenderer } from '@/blocks/ServiceList/ServiceList.renderer';
import { TicketDetailsRenderer } from '@/blocks/TicketDetails/TicketDetails.renderer';
import { TicketListRenderer } from '@/blocks/TicketList/TicketList.renderer';
import { TicketRecentRenderer } from '@/blocks/TicketRecent/TicketRecent.renderer';
import { UserAccountRenderer } from '@/blocks/UserAccount/UserAccount.renderer';

export const renderBlocks = (blocks: CMS.Model.Page.SlotBlock[], slug: string[], accessToken: string) => {
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
        }
    });
};
