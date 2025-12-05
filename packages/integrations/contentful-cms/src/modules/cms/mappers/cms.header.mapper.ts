import { NotFoundException } from '@nestjs/common';

import { CMS } from '@o2s/framework/modules';

import { GetHeaderQuery } from '@/generated/contentful';

import { mapMedia } from './cms.media.mapper';
import { mapNavigationGroup } from './cms.navigation-group.mapper';
import { mapNavigationItem } from './cms.navigation-item.mapper';

export const mapHeader = (data: GetHeaderQuery, baseURL?: string): CMS.Model.Header.Header => {
    const component = data.headerCollection?.items?.[0];
    const configurableTexts = data.configurableTexts?.items?.[0];

    if (!component) {
        throw new NotFoundException();
    }

    return {
        id: component.sys.id,
        title: component.title,
        logo: mapMedia(component.logo, baseURL),
        userInfo:
            component.userInfo?.slug && component.userInfo?.seo?.title
                ? {
                      url: component.userInfo.slug,
                      label: component.userInfo.seo.title,
                  }
                : undefined,
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
        notification:
            component.notification?.slug && component.notification?.seo?.title
                ? {
                      url: component.notification.slug,
                      label: component.notification.seo.title,
                  }
                : undefined,
        languageSwitcherLabel: component.languageSwitcherLabel || '',
        signInLabel: undefined, // TODO: add signInLabel field in CMS
        mobileMenuLabel: {
            open: component.openMobileMenuLabel || '',
            close: component.closeMobileMenuLabel || '',
        },
        contextSwitcher: {
            showContextSwitcher: component.showContextSwitcher || false,
            closeLabel: configurableTexts?.actions?.close || '',
        },
    };
};
