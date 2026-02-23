import { BlockInfo, TemplateType } from '../types';

export interface TemplateDefinition {
    name: string;
    description: string;
    category: 'ssp' | 'dxp' | null;
    includeMocked: boolean;
}

export const TEMPLATES: Record<TemplateType, TemplateDefinition> = {
    ssp: {
        name: 'Self Service Portal',
        description: 'Customer support focused — tickets, orders, invoices, notifications',
        category: 'ssp',
        includeMocked: true,
    },
    dxp: {
        name: 'Digital Experience Platform (DXP)',
        description: 'Marketing and content focused — hero sections, features, pricing',
        category: 'dxp',
        includeMocked: true,
    },
    custom: {
        name: 'Custom',
        description: 'Select individual blocks and integrations',
        category: null,
        includeMocked: false,
    },
};

// Filter discovered blocks by template category
export const getTemplateBlocks = (template: TemplateType, allBlocks: BlockInfo[]): string[] => {
    const templateDef = TEMPLATES[template];

    const { category } = templateDef;

    if (!category) {
        return []; // Custom template - user selects manually
    }

    // Include blocks that declare support for this template category
    return allBlocks.filter((block) => block.category.includes(category)).map((block) => block.name);
};
