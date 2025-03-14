import { NotFoundException } from '@nestjs/common';

import { CMS, Models } from '@o2s/framework/modules';

import { GetHeaderQuery, NavigationGroupFragment, NavigationItemFragment } from '@/generated/strapi';

export const mapHeader = (data: GetHeaderQuery, baseURL?: string): CMS.Model.Header.Header => {
    const component = data.header!;
    const configurableTexts = data.configurableTexts!;

    if (!component) {
        throw new NotFoundException();
    }

    return {
        id: component.documentId,
        title: component.title,
        logo: {
            url: `${baseURL}${component.logo.url}`,
            alternativeText: component.logo.alternativeText,
            width: component.logo.width,
            height: component.logo.height,
            name: component.logo.name,
        },
        userInfo:
            component.userInfo?.slug && component.userInfo?.SEO?.title
                ? {
                      url: component.userInfo.slug,
                      label: component.userInfo.SEO.title,
                  }
                : undefined,
        items: component.items
            .filter((item) => Object.keys(item).length !== 0)
            .map((item) => mapNaviagation(item as NavigationGroupFragment | NavigationItemFragment)),
        notification:
            component.notification?.slug && component.notification?.SEO?.title
                ? {
                      url: component.notification.slug,
                      label: component.notification.SEO.title,
                  }
                : undefined,
        languageSwitcherLabel: component.languageSwitcherLabel,
        // TODO: get labels from CMS
        mobileMenuLabel: {
            open: 'Open menu',
            close: 'Close Menu',
        },
        contextSwitcher: component.contextLabel
            ? {
                  label: component.contextLabel,
                  clear: configurableTexts.actions.clear,
                  apply: configurableTexts.actions.apply,
                  // TODO: fetch label from cms
                  close: 'configurableTexts.actions.close',
              }
            : undefined,
    };
};

const mapNaviagation = (
    item: NavigationGroupFragment | NavigationItemFragment,
): Models.Navigation.NavigationGroup | Models.Navigation.NavigationItem => {
    switch (item.__typename) {
        case 'ComponentContentNavigationGroup':
            return {
                __typename: 'NavigationGroup',
                title: item.title,
                items: item.items?.map((item) => mapHeaderItem(item)),
            };
        case 'ComponentContentNavigationItem':
            return mapHeaderItem(item);
        default:
            throw new NotFoundException();
    }
};

const mapHeaderItem = (item: NavigationItemFragment): Models.Navigation.NavigationItem => {
    return {
        __typename: 'NavigationItem',
        label: item.label,
        url: item.url || item.page?.slug || '/',
        description: item.description,
    };
};
