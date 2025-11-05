import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapOrdersSummaryBlock = (data: GetComponentQuery): CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsOrdersSummary':
            return {
                id: component.id,
                title: component.title,
                subtitle: component.subtitle,
                totalValue: {
                    title: component.totalValue.title,
                    icon: component.totalValue.icon,
                },
                averageValue: {
                    title: component.averageValue.title,
                    icon: component.averageValue.icon,
                },
                averageNumber: {
                    title: component.averageNumber.title,
                    icon: component.averageNumber.icon,
                },
                chart: {
                    title: component.chartTitle,
                    legend: {
                        prev: component.chartPreviousPeriodLabel,
                        current: component.chartCurrentPeriodLabel,
                    },
                    showChart: component.showChart,
                },
                ranges: component.ranges?.map((range) => ({
                    label: range.label,
                    value: range.value,
                    type: range.type,
                    isDefault: range.default,
                })),
                noResults: {
                    title: component.noResults.title,
                    description: component.noResults.description,
                },
            };
    }

    throw new NotFoundException();
};
