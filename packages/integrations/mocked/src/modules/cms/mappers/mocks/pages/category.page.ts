import { CMS } from '@o2s/framework/modules';

export const warrantyAndRepairPage = CMS.Pages.definePage({
    id: 'warranty-and-repair',
    locales: {
        en: {
            slug: '/help-and-support/warranty-and-repair',
            seo: { title: 'Warranty & Repair', description: 'Warranty & Repair' },
        },
        pl: {
            slug: '/pomoc-i-wsparcie/gwarancja-i-naprawa',
            seo: { title: 'Gwarancja i Naprawa', description: 'Gwarancja i Naprawa' },
        },
        de: {
            slug: '/hilfe-und-support/garantie-und-reparaturt',
            seo: { title: 'Garantie & Reparatur', description: 'Garantie & Reparatur' },
        },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'CategoryBlock', id: 'category-1' }] } },
});

export const maintenancePage = CMS.Pages.definePage({
    id: 'maintenance',
    locales: {
        en: { slug: '/help-and-support/maintenance', seo: { title: 'Maintenance', description: 'Maintenance' } },
        pl: { slug: '/pomoc-i-wsparcie/konserwacja', seo: { title: 'Konserwacja', description: 'Konserwacja' } },
        de: { slug: '/hilfe-und-support/wartung', seo: { title: 'Wartung', description: 'Wartung' } },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'CategoryBlock', id: 'category-2' }] } },
});

export const safetyPage = CMS.Pages.definePage({
    id: 'safety',
    locales: {
        en: { slug: '/help-and-support/safety', seo: { title: 'Safety', description: 'Safety' } },
        pl: {
            slug: '/pomoc-i-wsparcie/bezpieczenstwo',
            seo: { title: 'Bezpieczeństwo', description: 'Bezpieczeństwo' },
        },
        de: { slug: '/hilfe-und-support/sicherheit', seo: { title: 'Sicherheit', description: 'Sicherheit' } },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'CategoryBlock', id: 'category-3' }] } },
});

export const accessoriesPage = CMS.Pages.definePage({
    id: 'accessories',
    locales: {
        en: { slug: '/help-and-support/accessories', seo: { title: 'Accessories', description: 'Accessories' } },
        pl: { slug: '/pomoc-i-wsparcie/akcesoria', seo: { title: 'Akcesoria', description: 'Akcesoria' } },
        de: { slug: '/hilfe-und-support/zubehoer', seo: { title: 'Zubehör', description: 'Zubehör' } },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'CategoryBlock', id: 'category-4' }] } },
});

export const troubleshootingPage = CMS.Pages.definePage({
    id: 'troubleshooting',
    locales: {
        en: {
            slug: '/help-and-support/troubleshooting',
            seo: { title: 'Troubleshooting', description: 'Troubleshooting' },
        },
        pl: {
            slug: '/pomoc-i-wsparcie/rozwiązywanie-problemów',
            seo: { title: 'Rozwiązywanie problemów', description: 'Rozwiązywanie problemów' },
        },
        de: {
            slug: '/hilfe-und-support/fehlerbehebung',
            seo: { title: 'Fehlerbehebung', description: 'Fehlerbehebung' },
        },
    },
    template: { __typename: 'OneColumnTemplate', slots: { main: [{ __typename: 'CategoryBlock', id: 'category-5' }] } },
});

export const zendeskWarrantyAndRepairPage = CMS.Pages.definePage({
    id: '33553543097245',
    locales: {
        en: {
            slug: '/help-and-support/33553543097245-Warranty-and-Repair',
            seo: { title: 'Warranty & Repair', description: 'Warranty & Repair' },
        },
        pl: {
            slug: '/pomoc-i-wsparcie/33553543097245-Gwarancja-i-Naprawa',
            seo: { title: 'Gwarancja i Naprawa', description: 'Gwarancja i Naprawa' },
        },
        de: {
            slug: '/hilfe-und-support/33553543097245-Garantie-und-Reparatur',
            seo: { title: 'Garantie & Reparatur', description: 'Garantie & Reparatur' },
        },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'CategoryBlock', id: '33553543097245' }] },
    },
});

export const zendeskMaintenancePage = CMS.Pages.definePage({
    id: '31170054759453',
    locales: {
        en: {
            slug: '/help-and-support/31170054759453-Maintenance',
            seo: { title: 'Maintenance', description: 'Maintenance' },
        },
        pl: {
            slug: '/pomoc-i-wsparcie/31170054759453-Konserwacja',
            seo: { title: 'Konserwacja', description: 'Konserwacja' },
        },
        de: { slug: '/hilfe-und-support/31170054759453-Wartung', seo: { title: 'Wartung', description: 'Wartung' } },
    },
    template: {
        __typename: 'OneColumnTemplate',
        slots: { main: [{ __typename: 'CategoryBlock', id: '31170054759453' }] },
    },
});
