import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

import { mapInfoCard } from '../cms.information-card.mapper';

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
                layout: component.layout || undefined,
                toBePaid: mapInfoCard(component.toBePaid),
                overdue: mapInfoCard(component.overdue),
                chart: component.chart
                    ? {
                          title: component.chart.title!,
                          topSegment: component.chart.topSegment!,
                          middleSegment: component.chart.middleSegment!,
                          bottomSegment: component.chart.bottomSegment!,
                          total: component.chart.total!,
                          showChart: component.chart.showChart!,
                          monthsToShow: component.chart.monthsToShow!,
                      }
                    : undefined,
            };
    }

    throw new NotFoundException();
};
