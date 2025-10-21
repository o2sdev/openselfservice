import { CMS } from '@o2s/framework/modules';

import { GetOrganizationListQuery } from '@/generated/strapi';

export const mapOrganizationList = (data: GetOrganizationListQuery): CMS.Model.OrganizationList.OrganizationList => {
    const organizationList = data.organizationList!;
    const labels = data.configurableTexts!;

    return {
        id: organizationList.documentId,
        title: organizationList.title,
        description: organizationList.description,
        labels: {
            apply: labels.actions.apply,
        },
    };
};
