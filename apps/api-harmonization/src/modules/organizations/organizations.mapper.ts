import { CMS, Organizations } from '@o2s/configs.integrations';

import { Models } from '@o2s/framework/modules';

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
    return flattenOrganizations(organizations)
        .map((organization) => organization.customers)
        .reduce((acc, curr) => [...acc, ...curr], [])
        .sort((a, b) => a.name.localeCompare(b.name));
};

const flattenOrganizations = (
    orgs: Organizations.Model.Organization[],
    seen: Set<string> = new Set<string>(),
): Organizations.Model.Organization[] => {
    return orgs.reduce<Organizations.Model.Organization[]>((acc, org) => {
        if (seen.has(org.id)) {
            return acc;
        }

        seen.add(org.id);
        acc.push(org);

        if (org.children && org.children.length > 0) {
            acc.push(...flattenOrganizations(org.children, seen));
        }

        return acc;
    }, []);
};
