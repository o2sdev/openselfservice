import { Organizations as OrganizationModule } from '@o2s/framework/modules';

import { CMS, Organizations } from '../../models';

import { OrganizationList } from './organizations.model';

export const mapOrganizationList = (
    organizations: Organizations.Model.Organizations | undefined,
    cms: CMS.Model.OrganizationList.OrganizationList,
    _locale: string,
): OrganizationList => {
    return {
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        noResults: cms.noResults,
        items: mapOrganizations(organizations?.data || []),
    };
};

const mapOrganizations = (
    organizations: Organizations.Model.Organization[],
): OrganizationModule.Model.Organization[] => {
    return organizations.reduce((acc, organization) => {
        if (organization.children.length > 0) {
            acc.push(...organization.children, organization);
        }
        return acc;
    }, [] as OrganizationModule.Model.Organization[]);
};
