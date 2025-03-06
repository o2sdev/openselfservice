import { Models } from '@o2s/framework/modules';

import { PaginationFragment } from '@/generated/strapi';

export const mapPagination = (component?: PaginationFragment): Models.Pagination.Pagination | undefined => {
    if (!component) return undefined;

    return {
        limit: component.perPage,
        legend: component.description,
        prev: component.previousLabel,
        next: component.nextLabel,
        selectPage: component.selectPageLabel,
    };
};
