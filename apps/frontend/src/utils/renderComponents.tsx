import { Modules } from '@o2s/api-harmonization';
import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { FaqRenderer } from '@/containers/Faq/Faq.renderer';
import { InvoiceListRenderer } from '@/containers/InvoiceList/InvoiceList.renderer';
import { NotificationDetailsRenderer } from '@/containers/NotificationDetails/NotificationDetails.renderer';
import { NotificationListRenderer } from '@/containers/NotificationList/NotificationList.renderer';
import { PaymentsHistoryRenderer } from '@/containers/PaymentsHistory/PaymentsHistory.renderer';
import { PaymentsSummaryRenderer } from '@/containers/PaymentsSummary/PaymentsSummary.renderer';
import { TicketDetailsRenderer } from '@/containers/TicketDetails/TicketDetails.renderer';
import { TicketListRenderer } from '@/containers/TicketList/TicketList.renderer';
import { TicketRecentRenderer } from '@/containers/TicketRecent/TicketRecent.renderer';
import { UserAccountRenderer } from '@/containers/UserAccount/UserAccount.renderer';

export const renderComponents = (components: CMS.Model.Page.SlotComponent[], slug: string[], accessToken: string) => {
    return components.map((component) => {
        switch (component.__typename as Modules.Page.Model.Components) {
            case 'TicketListComponent':
                return <TicketListRenderer key={component.id} id={component.id} accessToken={accessToken} />;
            case 'TicketRecentComponent':
                return <TicketRecentRenderer key={component.id} id={component.id} accessToken={accessToken} />;
            case 'TicketDetailsComponent':
                return (
                    <TicketDetailsRenderer slug={slug} key={component.id} id={component.id} accessToken={accessToken} />
                );
            case 'NotificationListComponent':
                return <NotificationListRenderer key={component.id} id={component.id} accessToken={accessToken} />;
            case 'NotificationDetailsComponent':
                return (
                    <NotificationDetailsRenderer
                        slug={slug}
                        key={component.id}
                        id={component.id}
                        accessToken={accessToken}
                    />
                );
            case 'FaqComponent':
                return <FaqRenderer key={component.id} id={component.id} accessToken={accessToken} />;
            case 'InvoiceListComponent':
                return <InvoiceListRenderer key={component.id} id={component.id} accessToken={accessToken} />;
            case 'PaymentsSummaryComponent':
                return <PaymentsSummaryRenderer key={component.id} id={component.id} accessToken={accessToken} />;
            case 'PaymentsHistoryComponent':
                return <PaymentsHistoryRenderer key={component.id} id={component.id} accessToken={accessToken} />;
            case 'UserAccountComponent':
                return <UserAccountRenderer key={component.id} id={component.id} accessToken={accessToken} />;
        }
    });
};
