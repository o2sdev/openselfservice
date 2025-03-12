import { Modules } from '@o2s/api-harmonization';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { FaqRenderer } from '@/blocks/Faq/Faq.renderer';
import { InvoiceListRenderer } from '@/blocks/InvoiceList/InvoiceList.renderer';
import { NotificationDetailsRenderer } from '@/blocks/NotificationDetails/NotificationDetails.renderer';
import { NotificationListRenderer } from '@/blocks/NotificationList/NotificationList.renderer';
import { PaymentsHistoryRenderer } from '@/blocks/PaymentsHistory/PaymentsHistory.renderer';
import { PaymentsSummaryRenderer } from '@/blocks/PaymentsSummary/PaymentsSummary.renderer';
import { TicketDetailsRenderer } from '@/blocks/TicketDetails/TicketDetails.renderer';
import { TicketListRenderer } from '@/blocks/TicketList/TicketList.renderer';
import { TicketRecentRenderer } from '@/blocks/TicketRecent/TicketRecent.renderer';
import { UserAccountRenderer } from '@/blocks/UserAccount/UserAccount.renderer';

export const renderBlocks = (blocks: CMS.Model.Page.SlotComponent[], slug: string[], accessToken: string) => {
    return blocks.map((block) => {
        switch (block.__typename as Modules.Page.Model.Blocks) {
            case 'TicketListComponent':
                return <TicketListRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'TicketRecentComponent':
                return <TicketRecentRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'TicketDetailsComponent':
                return <TicketDetailsRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />;
            case 'NotificationListComponent':
                return <NotificationListRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'NotificationDetailsComponent':
                return (
                    <NotificationDetailsRenderer slug={slug} key={block.id} id={block.id} accessToken={accessToken} />
                );
            case 'FaqComponent':
                return <FaqRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'InvoiceListComponent':
                return <InvoiceListRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'PaymentsSummaryComponent':
                return <PaymentsSummaryRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'PaymentsHistoryComponent':
                return <PaymentsHistoryRenderer key={block.id} id={block.id} accessToken={accessToken} />;
            case 'UserAccountComponent':
                return <UserAccountRenderer key={block.id} id={block.id} accessToken={accessToken} />;
        }
    });
};
