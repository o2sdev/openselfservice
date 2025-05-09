import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetComponentQuery } from '@/generated/strapi';

export const mapPaymentsHistoryBlock = (
    data: GetComponentQuery,
): CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock => {
    const component = data.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsPaymentsHistory':
            return {
                id: component.id,
                title: component.title,
                topSegment: component.topSegment!,
                middleSegment: component.middleSegment!,
                bottomSegment: component.bottomSegment!,
                total: component.total!,
                monthsToShow: component.monthsToShow,
            };
    }

    throw new NotFoundException();
};
