import { Models } from '@o2s/framework/modules';

import { PaginationFragment } from '@/generated/contentful';

export const mapPagination = (component?: PaginationFragment): Models.Pagination.Pagination | undefined => {
    if (!component) return undefined;

    return {
        limit: component.perPage || 10,
        legend: component.description || '',
        prev: component.previousLabel || '',
        next: component.nextLabel || '',
        selectPage: component.selectPageLabel || '',
    };
};
