import { CMS } from '@o2s/framework/modules';

const MOCK_ORGANIZATION_LIST_BLOCK_EN: CMS.Model.OrganizationListBlock.OrganizationListBlock = {
    id: 'organization-list-1',
    title: 'Organizations',
    subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    pagination: {
        limit: 5,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    noResults: {
        title: "So far, there's nothing here",
        description: '',
    },
    labels: {
        apply: 'Apply',
    },
};

const MOCK_ORGANIZATION_LIST_BLOCK_DE: CMS.Model.OrganizationListBlock.OrganizationListBlock = {
    id: 'organization-list-1',
    title: 'Fallübersicht',
    subtitle: 'Ihre neuesten Fälle',
    pagination: {
        limit: 5,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    noResults: {
        title: 'Bisher gibt es hier nichts',
        description: '',
    },
    labels: {
        apply: 'Anwenden',
    },
};

const MOCK_ORGANIZATION_LIST_BLOCK_PL: CMS.Model.OrganizationListBlock.OrganizationListBlock = {
    id: 'organization-list-1',
    title: 'Przegląd zgłoszeń',
    subtitle: 'Twoje ostatnie zgłoszenia',
    pagination: {
        limit: 5,
        legend: 'of {totalPages} pages',
        prev: 'Previous',
        next: 'Next',
        selectPage: 'Select page',
    },
    noResults: {
        title: 'Jak dotąd nie ma tu nic',
        description: '',
    },
    labels: {
        apply: 'Anwenden',
    },
};

export const mapOrganizationListBlock = (locale: string): CMS.Model.OrganizationListBlock.OrganizationListBlock => {
    switch (locale) {
        case 'de':
            return MOCK_ORGANIZATION_LIST_BLOCK_DE;
        case 'pl':
            return MOCK_ORGANIZATION_LIST_BLOCK_PL;
        default:
            return MOCK_ORGANIZATION_LIST_BLOCK_EN;
    }
};
