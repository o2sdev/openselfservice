import { NotFoundException } from '@nestjs/common';

import { Models } from '@o2s/framework/modules';

import { NavigationItemFragment } from '@/generated/contentful';

export const mapNavigationItem = (item: NavigationItemFragment): Models.Navigation.NavigationItem => {
    if (!item) {
        throw new NotFoundException();
    }

    return {
        __typename: 'NavigationItem',
        label: item.label!,
        url: item.url || item.page?.slug || '/',
        description: item.description,
    };
};
