import { Entry } from 'contentful';

import { Models } from '@o2s/framework/modules';

import { IComponentPaginationFields } from '@/generated/contentful';

export const mapPagination = (
    component?: Entry<IComponentPaginationFields>,
): Models.Pagination.Pagination | undefined => {
    if (!component) return undefined;

    return {
        limit: component.fields.perPage,
        legend: component.fields.description,
        prev: component.fields.previousLabel,
        next: component.fields.nextLabel,
        selectPage: component.fields.selectPageLabel,
    };
};
