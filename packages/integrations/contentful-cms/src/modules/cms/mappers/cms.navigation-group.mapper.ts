import { NotFoundException } from '@nestjs/common';

import { Models } from '@o2s/framework/modules';

import { NavigationGroupFragment } from '@/generated/contentful';

import { mapNavigationItem } from './cms.navigation-item.mapper';

export const mapNavigationGroup = (group: NavigationGroupFragment): Models.Navigation.NavigationGroup => {
    if (!group) {
        throw new NotFoundException();
    }

    return {
        __typename: 'NavigationGroup',
        title: group.title!,
        url: group.url || group.page?.slug || undefined,
        items:
            group.itemsCollection?.items?.filter((item) => item !== null).map((item) => mapNavigationItem(item)) || [],
    };
};
