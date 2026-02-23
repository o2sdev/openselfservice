export type TemplateType = 'ssp' | 'dxp' | 'custom';

export interface BlockInfo {
    name: string;
    packageName: string;
    description: string;
    category: string[];
}

export interface IntegrationInfo {
    name: string;
    packageName: string;
    description: string;
    category: string[];
}

export interface WizardAnswers {
    projectName: string;
    template: TemplateType;
    selectedBlocks: string[];
    selectedIntegrations: string[];
}
