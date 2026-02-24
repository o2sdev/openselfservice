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

export interface EnvVar {
    key: string;
    description: string;
    required: boolean;
}

export interface ConflictResolution {
    module: string;
    winner: string;
}

export interface WizardAnswers {
    projectName: string;
    template: TemplateType;
    selectedBlocks: string[];
    selectedIntegrations: string[];
    conflictResolutions: ConflictResolution[];
    envVars: Record<string, string>;
}
