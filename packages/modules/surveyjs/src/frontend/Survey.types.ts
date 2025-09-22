import type { Model } from 'survey-core';

export interface SurveyProps {
    code: string;
    locale: string;
    accessToken?: string;
    labels: Labels;
}

export type SurveyState = {
    isLoading: boolean;
    error: string | null;
    model: Model | null;
};

export type SurveyAction =
    | { type: 'LOAD' }
    | { type: 'ERROR'; payload: string }
    | { type: 'SET_MODEL'; payload: Model };

export interface ErrorLabels {
    title: string;
    content?: string;
}

export interface Labels {
    errors: {
        requestError: ErrorLabels;
    };
}
