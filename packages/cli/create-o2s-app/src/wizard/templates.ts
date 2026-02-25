import { BlockInfo, IntegrationInfo, TemplateType } from '../types';

export interface TemplateDefinition {
    name: string;
    description: string;
    category: 'ssp' | 'dxp' | null;
}

export const TEMPLATES: Record<TemplateType, TemplateDefinition> = {
    ssp: {
        name: 'Self Service Portal',
        description:
            'Demo — best way to see the full Self Service Portal flow. Customer support: tickets, orders, invoices, notifications',
        category: 'ssp',
    },
    dxp: {
        name: 'Digital Experience Platform (DXP)',
        description:
            'Demo — best way to see the full Digital Experience Platform flow. Marketing and content: hero sections, features, pricing',
        category: 'dxp',
    },
    custom: {
        name: 'Custom',
        description: 'Select individual blocks and integrations',
        category: null,
    },
};

// Returns all known template category identifiers (excludes null for custom)
export const getAllTemplateCategories = (): string[] =>
    Object.values(TEMPLATES).flatMap((t) => (t.category !== null ? [t.category] : []));

// Filter discovered blocks by template category
export const filterBlocksByTemplate = (template: TemplateType, allBlocks: BlockInfo[]): string[] => {
    const templateDef = TEMPLATES[template];

    const { category } = templateDef;

    if (!category) {
        return []; // Custom template - user selects manually
    }

    // Include blocks that declare support for this template category
    return allBlocks.filter((block) => block.category.includes(category)).map((block) => block.name);
};

// Filter discovered integrations by template category
export const filterIntegrationsByTemplate = (template: TemplateType, allIntegrations: IntegrationInfo[]): string[] => {
    const templateDef = TEMPLATES[template];

    const { category } = templateDef;

    if (!category) {
        return []; // Custom template - user selects manually
    }

    return allIntegrations
        .filter((integration) => integration.category.includes(category))
        .map((integration) => integration.name);
};
