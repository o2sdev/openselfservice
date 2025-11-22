import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetFooterQuery } from '@/generated/contentful';

import { mapMedia } from './cms.media.mapper';
import { mapNavigationGroup } from './cms.navigation-group.mapper';
import { mapNavigationItem } from './cms.navigation-item.mapper';

export const mapFooter = (data: GetFooterQuery, baseURL?: string): CMS.Model.Footer.Footer => {
    const component = data.footerCollection?.items?.[0];

    if (!component) {
        throw new NotFoundException();
    }

    return {
        id: component.sys.id,
        title: component.title!,
        logo: mapMedia(component.logo, baseURL),
        items:
            component.itemsCollection?.items
                ?.filter((item) => item !== null)
                .map((item) => {
                    if (item.__typename === 'ComponentNavigationGroup') {
                        return mapNavigationGroup(item);
                    } else if (item.__typename === 'ComponentNavigationItem') {
                        return mapNavigationItem(item);
                    }
                    throw new NotFoundException();
                }) || [],
        copyright: component.copyright || '',
    };
};
