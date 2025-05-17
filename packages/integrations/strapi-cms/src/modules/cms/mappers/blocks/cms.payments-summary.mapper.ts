import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapPaymentsSummaryBlock = (
    data: GetComponentQuery,
): CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsPaymentsSummary':
            return {
                id: component.id,
                toBePaid: {
                    title: component.toBePaid.title,
                    message: component.toBePaid.message,
                    altMessage: component.toBePaid.altMessage,
                    link: component.toBePaid.link,
                    icon: component.toBePaid.icon,
                },
                overdue: {
                    title: component.overdue.title,
                    message: component.overdue.message,
                    altMessage: component.overdue.altMessage,
                    link: component.overdue.link,
                    icon: component.overdue.icon,
                },
            };
    }

    throw new NotFoundException();
};
