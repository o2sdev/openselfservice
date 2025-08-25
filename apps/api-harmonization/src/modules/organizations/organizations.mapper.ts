import { CMS, Organizations } from '@o2s/configs.integrations';

import { Models, Organizations as OrganizationModule } from '@o2s/framework/modules';

import { CustomerList } from './organizations.model';

export const mapCustomerList = (
    organizations: Organizations.Model.Organizations | undefined,
    cms: CMS.Model.OrganizationList.OrganizationList,
    _locale: string,
): CustomerList => {
    return {
        id: cms.id,
        title: cms.title,
        description: cms.description,
        items: mapCustomers(organizations?.data || []),
        labels: cms.labels,
    };
};

const mapCustomers = (organizations: Organizations.Model.Organization[]): Models.Customer.Customer[] => {
    const organizationList = organizations.reduce((acc, organization) => {
        if (organization.children.length > 0) {
            acc.push(...organization.children, organization);
        }
        return acc;
    }, [] as OrganizationModule.Model.Organization[]);

    return organizationList
        .map((organization) => organization.customers)
        .reduce((acc, curr) => [...acc, ...curr], [])
        .sort((a, b) => a.name.localeCompare(b.name));
};
