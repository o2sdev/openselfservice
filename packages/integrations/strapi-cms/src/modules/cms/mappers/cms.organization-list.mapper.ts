import { CMS } from '@o2s/framework/modules';

import { GetOrganizationListQuery } from '@/generated/strapi';

export const mapOrganizationList = (data: GetOrganizationListQuery): CMS.Model.OrganizationList.OrganizationList => {
    const organizationList = data.organizationList!;

    return {
        id: organizationList.documentId,
        subtitle: organizationList.subtitle,
        title: organizationList.title,
        noResults: {
            title: organizationList.noResults.title,
            description: organizationList.noResults.description,
        },
    };
};
