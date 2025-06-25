import { Models } from '@o2s/framework/modules';

const findNavigationItem = (
    items: (Models.Navigation.NavigationGroup | Models.Navigation.NavigationItem)[],
    targetUrl: string,
) => {
    for (const item of items) {
        if (item.__typename !== 'NavigationGroup') {
            continue;
        }

        const navItem = item.items.find(
            (navItem, index): navItem is Models.Navigation.NavigationItem =>
                navItem.__typename === 'NavigationItem' && navItem.url === targetUrl && index === 0,
        );

        if (navItem) {
            return {
                slug: navItem.url,
                label: item.title,
            };
        }
    }

    return null;
};

export const getRootBreadcrumb = (
    items: (Models.Navigation.NavigationGroup | Models.Navigation.NavigationItem)[],
    slug: Array<string> | undefined,
) => {
    const rootSlug = slug ? `/${slug[0]}` : '/';

    const rootBreadcrumb = findNavigationItem(items, rootSlug);
    if (rootBreadcrumb) {
        return rootBreadcrumb;
    }

    return findNavigationItem(items, '/');
};
