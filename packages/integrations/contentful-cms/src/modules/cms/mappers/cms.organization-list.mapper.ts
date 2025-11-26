import { CMS } from '@o2s/framework/modules';

const MOCK_ORGANIZATION_LIST_EN: CMS.Model.OrganizationList.OrganizationList = {
    id: 'organization-list-1',
    title: 'Organizations',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    labels: {
        apply: 'Apply',
    },
};

const MOCK_ORGANIZATION_LIST_DE: CMS.Model.OrganizationList.OrganizationList = {
    id: 'organization-list-1',
    title: 'Organizations',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    labels: {
        apply: 'Anwenden',
    },
};

const MOCK_ORGANIZATION_LIST_PL: CMS.Model.OrganizationList.OrganizationList = {
    id: 'organization-list-1',
    title: 'Organizations',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    labels: {
        apply: 'Zastosuj',
    },
};

export const mapOrganizationList = (locale: string): CMS.Model.OrganizationList.OrganizationList => {
    switch (locale) {
        case 'de':
            return MOCK_ORGANIZATION_LIST_DE;
        case 'pl':
            return MOCK_ORGANIZATION_LIST_PL;
        default:
            return MOCK_ORGANIZATION_LIST_EN;
    }
};
