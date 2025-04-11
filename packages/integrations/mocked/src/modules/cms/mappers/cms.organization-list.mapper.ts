import { CMS } from '@o2s/framework/modules';

const MOCK_ORGANIZATION_LIST_EN: CMS.Model.OrganizationList.OrganizationList = {
    id: 'organization-list-1',
    title: 'Organizations',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    noResults: {
        title: "So far, there's nothing here",
        description: '',
    },
};

const MOCK_ORGANIZATION_LIST_DE: CMS.Model.OrganizationList.OrganizationList = {
    id: 'organization-list-1',
    title: 'Organizations',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    noResults: {
        title: 'Bisher gibt es hier nichts',
        description: '',
    },
};

const MOCK_ORGANIZATION_LIST_PL: CMS.Model.OrganizationList.OrganizationList = {
    id: 'organization-list-1',
    title: 'Organizations',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    noResults: {
        title: 'Jak dotąd nie ma tu nic',
        description: '',
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
